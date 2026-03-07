import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { ChangePasswordRequestModel } from "@/types/request/auth";
import { AuthApi } from "@/lib/api/auth";
import { ResetPasswordResponse } from "@/types/response/auth";
import { consoleLog } from "@/utilities/console-logger";
import { changePasswordRequestSchema } from "@/types/validations/auth";
import { useNavigateInApp } from "../useNavigateInApp";
import React from "react";

type Props = {
  token: string;
};
export const useChangePassword = ({ token }: Props) => {
  const [visible, setVisible] = React.useState(false);
  const [confirmVisible, setConfirmVisible] = React.useState(false);
  const { navigateToLogin } = useNavigateInApp();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ChangePasswordRequestModel>({
    resolver: yupResolver(changePasswordRequestSchema),
  });

  const changePasswordMutation = useMutation({
    mutationFn: async (data: ChangePasswordRequestModel) => {
      const response = await AuthApi.changePassword(token, data.password);
      if (response?.success === true) {
        return response?.response as ResetPasswordResponse;
      } else {
        throw new Error(response?.error || "Password-change request failed");
      }
    },
    onSuccess: () => {
      navigateToLogin();
      toast.success(
        "Password changed successfully. Please log in with your new password.",
      );
    },
    onError: (error: any) => {
      toast.error(error.message || "Password-change request failed");
      consoleLog(error);
    },
  });

  const onSubmit = (formData: ChangePasswordRequestModel) => {
    changePasswordMutation.mutate(formData);
  };

  return {
    register,
    errors,
    handleSubmit: handleSubmit(onSubmit),
    isLoading: changePasswordMutation.isPending || isSubmitting,
    visible,
    setVisible,
    confirmVisible,
    setConfirmVisible,
  };
};
