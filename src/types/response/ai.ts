import { AIFirstResponse } from "@/models/response";
import { RecommendationRequest } from "../request/ai";

export interface AllRecommendations {
  id: number;
  status?: string;
  createdAt?: string;
  query: RecommendationRequest;
  data: AIFirstResponse;
}

export interface Pagination {
  page: number;
  limit: number;
  totalPages: number;
}

export interface RecommendationsResponse {
  data: AllRecommendations[];
  pagination: Pagination;
}

export interface InteractiveAIResponse {
  recommendations: AllRecommendations[];
  message: string;
  id: number;
}
