import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { EmailRequestModel } from "@/types/request/auth";
import { AuthApi } from "@/lib/api/auth";
import { ResetPasswordResponse } from "@/types/response/auth";
import { consoleLog } from "@/utilities/console-logger";
import { emailRequestSchema } from "@/types/validations/auth";
import { storage } from "@/lib/session";

type Props = {
  setIsSubmitted: (value: boolean) => void;
};
export const useResetPassword = ({ setIsSubmitted }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmailRequestModel>({ resolver: yupResolver(emailRequestSchema) });

  const resetPasswordMutation = useMutation({
    mutationFn: async (data: EmailRequestModel) => {
      const response = await AuthApi.resetPassword(data.email);
      if (response?.success === true) {
        storage.setEmail(data.email);
        return response?.response as ResetPasswordResponse;
      } else {
        throw new Error(response?.error || "Reset password failed");
      }
    },
    onSuccess: () => {
      setIsSubmitted(true);
      return;
    },
    onError: (error: any) => {
      toast.error(error.message || "Reset password failed");
      consoleLog(error);
    },
  });

  const onSubmit = (formData: EmailRequestModel) => {
    resetPasswordMutation.mutate(formData);
  };

  const resendLinkMutation = useMutation({
    mutationFn: async (data: EmailRequestModel) => {
      const response = await AuthApi.resetPassword(data.email);
      if (response?.success === true) {
        return response?.response as ResetPasswordResponse;
      } else {
        throw new Error(response?.error || "Password reset link resend failed");
      }
    },
    onSuccess: (data: ResetPasswordResponse) => {
      toast.success(data?.message || "Password reset link resend successful");
    },
    onError: (error: any) => {
      toast.error(error.message || "Password reset link resend failed");
      consoleLog(error);
    },
  });

  const handleLinkResend = (formData: EmailRequestModel) => {
    resendLinkMutation.mutate(formData);
  };

  return {
    handleLinkResend,
    resendLoading: resendLinkMutation.isPending,
    errors,
    register,
    handleSubmit: handleSubmit(onSubmit),
    isLoading: resetPasswordMutation.isPending || isSubmitting,
  };
};
