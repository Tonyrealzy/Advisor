import { prisma } from "@/lib/prisma";
import { UserSession } from "@/models/auth";
import { AppError } from "@/utilities/appError";
import logger from "@/utilities/logger";

export async function createUserSession(data: UserSession) {
  const response = await prisma.userSession.create({
    data,
  });
  if (!response) {
    logger.error("Failed to create session");
    throw new AppError("Failed to create session");
  }

  return response;
}

export async function getUserSessionByUserId(userId: string) {
  const response = await prisma.userSession.findUnique({
    where: { userId },
  });

  return response;
}

export async function getUserSession(userId: string, token: string) {
  const response = await prisma.userSession.findFirst({
    where: {
      userId,
      token,
      expiresAt: {
        gt: new Date(), // prevent expired sessions
      },
    },
  });
  if (!response) {
    logger.error("Session not found for user");
    throw new AppError("Session not found");
  }

  return response;
}

export async function deleteUserSession(userId: string) {
  const response = await prisma.userSession.delete({
    where: { userId },
  });
  if (!response) {
    logger.error("Failed to delete session");
    throw new AppError("Failed to delete session");
  }

  return response;
}

export async function updateUserSessionToken(
  id: string,
  token: string,
  expiresAt: Date,
) {
  const response = await prisma.userSession.update({
    where: { id },
    data: {
      token,
      expiresAt,
    },
  });
  if (!response) {
    logger.error("Failed to update session");
    throw new AppError("Failed to update session");
  }

  return response;
}
