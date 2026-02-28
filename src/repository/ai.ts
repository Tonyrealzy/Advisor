import { prisma } from "@/lib/prisma";
import { AppError } from "@/utilities/appError";
import logger from "@/utilities/logger";

export async function getAllAIResponses(userId: string) {
  const response = await prisma.aIPersistedResponse.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
  if (!response) {
    logger.error("No AI responses found for user");
    throw new AppError("No AI responses found");
  }

  return response;
}

export async function createAIResponse(data: {
  userId: string;
  status: string;
  query: any;
  data?: any;
  message?: string;
  error?: string;
}) {
  const response = await prisma.aIPersistedResponse.create({
    data,
  });
  if (!response) {
    logger.error("Failed to create AI response");
    throw new AppError("Failed to create AI response");
  }

  return response;
}

export async function getResponsesByDateRange(
  userId: string,
  from: Date,
  to: Date,
  page: number = 1,
  limit: number = 10,
) {
  const response = await prisma.aIPersistedResponse.findMany({
    where: {
      userId,
      createdAt: {
        gte: from,
        lte: to,
      },
    },
    skip: (page - 1) * limit,
    take: limit,
    orderBy: { createdAt: "desc" },
  });
  if (!response) {
    logger.error("No AI responses found for the specified date range");
    throw new AppError("No AI responses found for the specified date range");
  }

  return response;
}
