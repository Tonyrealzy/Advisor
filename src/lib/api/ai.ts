import { AIServiceRequest } from "@/models/request";
import authAxiosInstance from "../auth-axios";

export const AIModelApi = {
  fetchAIResponses: async (
    page: number,
    limit: number,
    from?: string | null,
    to?: string | null,
  ) => {
    try {
      const response = await authAxiosInstance.get(
        `/ai/response?page=${page}&limit=${limit}${from ? `&from=${from}` : ""}${to ? `&to=${to}` : ""}`,
      );
      return response.data;
    } catch (error: any) {
      return error;
    }
  },

  makeAIRequest: async (data: AIServiceRequest) => {
    try {
      const response = await authAxiosInstance.post("/ai/request", data);
      return response.data;
    } catch (error: any) {
      return error;
    }
  },
};
