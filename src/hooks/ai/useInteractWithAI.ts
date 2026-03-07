import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { consoleLog } from "@/utilities/console-logger";
import { RecommendationRequest } from "@/types/request/ai";
import { recommendationsRequestSchema } from "@/types/validations/ai";
import { AIModelApi } from "@/lib/api/ai";
import { InteractiveAIResponse } from "@/types/response/ai";
import { useNavigateInApp } from "../useNavigateInApp";

export const useInteractWithAI = () => {
  const queryClient = useQueryClient();
  const { navigateToTableRowView } = useNavigateInApp();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RecommendationRequest>({
    resolver: yupResolver(recommendationsRequestSchema),
  });

  const interactiveMutation = useMutation({
    mutationFn: async (data: RecommendationRequest) => {
      const response = await AIModelApi.makeAIRequest(data);
      if (response?.success === true) {
        return response.response as InteractiveAIResponse;
      } else {
        throw new Error(response.error || "Request failed");
      }
    },
    onSuccess: (data: InteractiveAIResponse) => {
      queryClient.invalidateQueries({
        queryKey: ["all-recommendations"],
        exact: false,
      });
      navigateToTableRowView(data.id);
      toast.success(data.message || "Request successful!");
    },
    onError: (error: any) => {
      toast.error(error.message);
      consoleLog(error);
    },
  });

  const onSubmit = (formData: RecommendationRequest) => {
    interactiveMutation.mutate(formData);
  };

  return {
    control,
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isLoading: interactiveMutation.isPending || isSubmitting,
  };
};
