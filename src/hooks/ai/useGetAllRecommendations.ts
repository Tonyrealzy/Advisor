import { AIModelApi } from "@/lib/api/ai";
import { RecommendationsResponse } from "@/types/response/ai";
import { consoleLog } from "@/utilities/console-logger";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useGetAllRecommendations = () => {
  const [page, setPage] = useState<number>(1);
  const pageSize = 10;
  
  const { data: recommendations, isLoading } = useQuery({
    queryKey: ["all-recommendations"],
    retry: 1,
    queryFn: async () => {
      const response = await AIModelApi.fetchAIResponses(page, pageSize);
      if (response?.success === true) {
        return response.response as RecommendationsResponse;
      }

      const error = response.error || "Failed to fetch recommendations";
      consoleLog("Recommendations error: ", error);
      throw new Error(error);
    },
  });

  const pageInfo = recommendations?.pagination;
  const hasNextPage = pageInfo ? pageInfo.page < pageInfo.totalPages : false;
  const hasPreviousPage = page > 1;

  const nextPage = () => {
    if (hasNextPage) {
      setPage((prev) => prev + 1);
    }
  };
  const previousPage = () => {
    if (hasPreviousPage) {
      setPage((prev) => Math.max(prev - 1, 1));
    }
  };
  const resetPage = () => setPage(1);

  return {
    isLoading,
    recommendations: recommendations?.data,
    nextPage,
    previousPage,
    resetPage,
    hasNextPage,
    hasPreviousPage,
  };
};
