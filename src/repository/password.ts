import { prisma } from "@/lib/prisma";
import { PasswordReset, PasswordUpdate } from "@/models/auth";
import { AppError } from "@/utilities/appError";
import logger from "@/utilities/logger";

export async function createPasswordReset(data: PasswordReset) {
  const response = await prisma.passwordReset.create({
    data,
  });
  if (!response) {
    logger.error("Failed to create password reset");
    throw new AppError("Failed to create password reset");
  }

  return response;
}

export async function updateUserPassword(id: string, hashedPassword: string) {
  const response = await prisma.user.update({
    where: { id },
    data: {
      password: hashedPassword,
    },
  });
  if (!response) {
    logger.error("Failed to update user password");
    throw new AppError("Failed to update user password");
  }

  return response;
}

export async function getPasswordResetByToken(token: string) {
  const response = await prisma.passwordReset.findFirst({
    where: {
      token,
      expiresAt: {
        gt: new Date(),
      },
    },
  });
  if (!response) {
    logger.error("Invalid or expired reset token");
    throw new AppError("Invalid or expired reset token");
  }

  return response;
}

export async function getPasswordResetByEmail(email: string) {
  const response = await prisma.passwordReset.findUnique({
    where: { email },
  });
  if (!response) {
    logger.error("Password reset not found for the specified email");
    // throw new AppError("Password reset not found for the specified email");
  }

  return response;
}

export async function getPasswordResetById(id: string) {
  const response = await prisma.passwordReset.findUnique({
    where: { id },
  });
  if (!response) {
    logger.error("Password reset not found for the specified ID");
    throw new AppError("Password reset not found for the specified ID");
  }

  return response;
}

export async function updatePasswordReset(
  id: string,
  data: PasswordUpdate,
) {
  const response = await prisma.passwordReset.update({
    where: { id },
    data,
  });
  if (!response) {
    logger.error("Failed to update password reset");
    throw new AppError("Failed to update password reset");
  }

  return response;
}

export async function deletePasswordReset(id: string) {
  const response = await prisma.passwordReset.delete({
    where: { id },
  });
  if (!response) {
    logger.error("Failed to delete password reset with ID: " + id);
    throw new AppError("Failed to delete password reset record");
  }

  return response;
}