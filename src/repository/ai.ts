import { prisma } from "@/lib/prisma";
import { CreateAIRecord, Pagination } from "@/models/ai";
import { AppError } from "@/utilities/appError";
import { transformResponse } from "@/utilities/format";
import logger from "@/utilities/logger";

export async function getAllAIResponses(
  userId: string,
  pagination: Pagination = { page: 1, limit: 10 },
  from?: Date,
  to?: Date,
) {
  const { page, limit } = pagination;
  const skip = (page - 1) * limit;

  const responses = await prisma.aIPersistedResponse.findMany({
    where: {
      userId,
      createdAt: {
        gte: from,
        lte: to,
      },
    },
    orderBy: { createdAt: "desc" },
    skip,
    take: limit,
  });

  logger.info(`Found ${responses.length} AI responses for user`);

  if (!responses || responses.length === 0) {
    logger.error("No AI responses found for user");
    throw new AppError("No AI responses found");
  }

  return responses.map(transformResponse);
}

export async function createAIResponse(data: CreateAIRecord) {
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
