import { prisma } from "@/lib/prisma";
import { User } from "@/models/user";
import { AppError } from "@/utilities/appError";
import logger from "@/utilities/logger";

export async function createUser(data: User) {
  const response = await prisma.user.create({
    data,
  });
  if (!response) {
    logger.error("Failed to create user");
    throw new AppError("Failed to create user");
  }

  return response;
}

export async function updateUserStatus(id: string, isActive: boolean) {
  const response = await prisma.user.update({
    where: { id },
    data: {
      isActive,
    },
  });
  if (!response) {
    logger.error("Failed to update user status");
    throw new AppError("Failed to update user status");
  }

  return response;
}

export async function getUserByEmail(email: string) {
  const response = await prisma.user.findUnique({
    where: { email },
  });
  if (!response) {
    logger.error("Invalid credentials for email: " + email);
    throw new AppError("Invalid credentials.");
  }

  return response;
}

export async function getUserDetailsByEmail(email: string) {
  const response = await prisma.user.findUnique({
    where: { email },
  });
  if (!response) {
    logger.error(response);
  }

  return response;
}

export async function getActiveUserByEmail(email: string) {
  const response = await prisma.user.findFirst({
    where: {
      email,
      isActive: true,
    },
  });
  if (!response) {
    logger.error("Invalid credentials for email: " + email);
    throw new AppError("Invalid credentials.");
  }

  return response;
}

export async function isUserActive(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
    select: { isActive: true },
  });

  return user?.isActive ?? false;
}

export async function getUserByUsername(name: string) {
  const response = await prisma.user.findFirst({
    where: { name },
  });
  if (!response) {
    logger.error("Invalid credentials for username: " + name);
    throw new AppError("Invalid credentials.");
  }

  return response;
}

export async function getUserById(id: string) {
  const response = await prisma.user.findUnique({
    where: { id },
  });
  if (!response) {
    logger.error("Invalid credentials for user ID: " + id);
    throw new AppError("Invalid credentials.");
  }

  return response;
}

export async function deleteUser(id: string) {
  const response = await prisma.user.delete({
    where: { id },
  });
  if (!response) {
    logger.error("Failed to delete user with ID: " + id);
  }

  return response;
}
