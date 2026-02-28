import { GoogleGenerativeAI } from "@google/generative-ai";
import { EnvConfig } from "./env";
import logger from "@/utilities/logger";

if (!EnvConfig.googleApiKey) {
  logger.error("Google API key is missing.");
  throw new Error("Google API key is missing.");
}

const genAI = new GoogleGenerativeAI(EnvConfig.googleApiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // closest stable equivalent
});

export async function getAIResponse(message: string): Promise<string> {
  const result = await model.generateContent(message);
  const response = result.response;
  const text = response.text();

  if (!text) {
    logger.error("No response from Gemini");
    throw new Error("No response from Gemini");
  }

  return text;
}
