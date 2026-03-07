import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import {
  ConfirmSignupRequestModel,
  SignUpRequestModel,
} from "@/types/request/auth";
import { signUpRequestSchema } from "@/types/validations/auth";
import { AuthApi } from "@/lib/api/auth";
import { ConfirmSignupResponse, SignupResponse } from "@/types/response/auth";
import { consoleLog } from "@/utilities/console-logger";
import { useNavigateInApp } from "../useNavigateInApp";
import { storage } from "@/lib/session";

type Props = {
  setIsSubmitted: (value: boolean) => void;
};
export const useSignup = ({ setIsSubmitted }: Props) => {
  const [visible, setVisible] = React.useState(false);
  const [confirmVisible, setConfirmVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpRequestModel>({
    resolver: yupResolver(signUpRequestSchema),
  });

  const signupMutation = useMutation({
    mutationFn: async (data: SignUpRequestModel) => {
      setLoading(true);
      const response = await AuthApi.signup(
        data.email,
        data.password,
        data.firstName,
        data.lastName,
        data.userName,
      );
      if (response?.success === true) {
        storage.setEmail(data.email);
        return response?.response as SignupResponse;
      } else {
        throw new Error(response?.error || "Signup failed");
      }
    },
    onSuccess: () => {
      setIsSubmitted(true);
      setLoading(false);
    },
    onError: (error: any) => {
      toast.error(error.message || "Signup failed");
      consoleLog(error);
      setLoading(false);
    },
  });

  const onSubmit = (formData: SignUpRequestModel) => {
    signupMutation.mutate(formData);
  };

  return {
    visible,
    setVisible,
    confirmVisible,
    setConfirmVisible,
    register,
    errors,
    handleSubmit: handleSubmit(onSubmit),
    isLoading: signupMutation.isPending || isSubmitting || loading,
  };
};

export const useConfirmSignup = () => {
  const { navigateToLogin } = useNavigateInApp();

  const confirmSignupMutation = useMutation({
    mutationFn: async (data: ConfirmSignupRequestModel) => {
      const response = await AuthApi.confirmSignup(data.email, data.token);
      if (response?.success === true) {
        return response?.response as ConfirmSignupResponse;
      } else {
        throw new Error(response?.error || "Confirm signup failed");
      }
    },
    onSuccess: (data: ConfirmSignupResponse) => {
      toast.success(data?.message || "Confirm signup successful");
      navigateToLogin();
    },
    onError: (error: any) => {
      toast.error(error.message || "Confirm signup failed");
      consoleLog(error);
    },
  });

  const onSubmit = (formData: ConfirmSignupRequestModel) => {
    confirmSignupMutation.mutate(formData);
  };

  return {
    handleSubmit: onSubmit,
    isLoading: confirmSignupMutation.isPending,
  };
};
