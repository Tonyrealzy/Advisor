import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { EmailRequestModel } from "@/types/request/auth";
import { AuthApi } from "@/lib/api/auth";
import { ResendSignupLinkResponse } from "@/types/response/auth";
import { consoleLog } from "@/utilities/console-logger";

export const useResendSignupLink = () => {
  const resendSignupLinkMutation = useMutation({
    mutationFn: async (data: EmailRequestModel) => {
      const response = await AuthApi.resendLink(data.email);
      if (response?.success === true) {
        return response?.response as ResendSignupLinkResponse;
      } else {
        throw new Error(response?.error || "Signup link resend failed");
      }
    },
    onSuccess: (data: ResendSignupLinkResponse) => {
      toast.success(data?.message || "Signup link resend successful");
    },
    onError: (error: any) => {
      toast.error(error.message || "Signup link resend failed");
      consoleLog(error);
    },
  });

  const onSubmit = (formData: EmailRequestModel) => {
    resendSignupLinkMutation.mutate(formData);
  };

  return {
    handleSubmit: onSubmit,
    isLoading: resendSignupLinkMutation.isPending,
  };
};
