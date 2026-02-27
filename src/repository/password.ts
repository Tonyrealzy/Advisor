import { prisma } from "@/lib/prisma";
import { PasswordReset } from "@/models/auth";
import { AppError } from "@/utilities/appError";

export async function createPasswordReset(data: PasswordReset) {
  const response = await prisma.passwordReset.create({
    data,
  });
  if (!response) {
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
    throw new AppError("Invalid or expired reset token");
  }

  return response;
}

export async function getPasswordResetByEmail(email: string) {
  const response = await prisma.passwordReset.findUnique({
    where: { email },
  });
  if (!response) {
    throw new AppError("Password reset not found for the specified email");
  }

  return response;
}

export async function getPasswordResetById(id: string) {
  const response = await prisma.passwordReset.findUnique({
    where: { id },
  });
  if (!response) {
    throw new AppError("Password reset not found for the specified ID");
  }

  return response;
}

export async function updatePasswordReset(
  id: string,
  data: {
    token?: string;
    expiresAt?: Date;
  },
) {
  const response = await prisma.passwordReset.update({
    where: { id },
    data,
  });
  if (!response) {
    throw new AppError("Failed to update password reset");
  }

  return response;
}
