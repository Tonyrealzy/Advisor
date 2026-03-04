import { AIServiceRequest } from "./request";

export interface Recommendation {
  financial_product: string;
  ticker: string;
  provider: string;
  brief_description: string;
  analysis?: string;
  currency?: string;
  expected_return: string;
  composition: number;
  principal: number;
  estimated_return_value: number;
}

export interface AIFirstResponse {
  recommendations: Recommendation[];
}

export interface TableResponse {
  id: number;
  status?: string;
  createdAt?: string;
  query: AIServiceRequest;
  data: AIFirstResponse;
}
