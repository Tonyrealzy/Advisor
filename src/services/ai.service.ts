import { getAIResponse } from "@/config/ai";
import { AIServiceRequest } from "@/models/request";
import { createAIResponse, getAllAIResponses } from "@/repository/ai";
import { formatResponse } from "@/utilities/format";

export const AIService = {
  getFineTunedResponse: async (req: AIServiceRequest): Promise<string> => {
    const prompt = `
        I am ${req.age} years old and I live in ${req.location}.
        I consider myself a ${req.investmentKnowledge} in terms of investment and I wish to invest for the purpose of ${req.investmentPurpose} over a ${req.investmentHorizon}-year horizon, and have a ${req.riskTolerance} risk tolerance.
        I have a sum of ${req.amount} in ${req.currency} to invest.

        Please recommend at least five specific financial products (including ticker and provider) that a typical financial advisor might suggest based on my profile.

        🔸 Return the response strictly in JSON format.
        🔸 The top-level key must be "recommendations".
        🔸 Each recommendation must contain the following keys in order:
        - "financial_product": string
        - "ticker": string
        - "provider": string
        - "brief_description": string
        - "expected_return": a percentage as a string (e.g., "7%")
        - "principal": an integer amount from my total capital
        - "estimated_return_value": an integer computed as (expected_return × principal)
        - "composition": an integer percentage (adds up to 100 across all recommendations)

        🔸 Ensure the "composition" field is the last field.

        Important rules:
        - All numeric fields must be integers only.
        - Do not include units like USD.
        - Total composition must equal 100.
        - I will not consider this personalized advice.
        `;

    return getAIResponse(prompt);
  },

  getRecommendations: async (req: AIServiceRequest, userId: string) => {
    const response = await AIService.getFineTunedResponse(req);

    const formattedResponse = formatResponse(response);
    const status = "COMPLETED";

    await createAIResponse({
      userId,
      status,
      query: formattedResponse,
      data: formattedResponse,
      createdAt: new Date(),
    });

    return formattedResponse;
  },

  getStoredResponses: async (
    userId: string,
    pagination: { page: number; limit: number },
    from?: Date,
    to?: Date,
  ) => {
    const response = await getAllAIResponses(userId, pagination, from, to);
    return {
      message: "Responses retrieved successfully",
      data: response,
      pagination,
    };
  },
};
