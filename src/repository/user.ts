import { prisma } from "@/lib/prisma";
import { User } from "@/models/user";
import { AppError } from "@/utilities/appError";

export async function createUser(data: User) {
  const response = await prisma.user.create({
    data,
  });
  if (!response) {
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
    throw new AppError("Failed to update user status");
  }

  return response;
}

export async function getUserByEmail(email: string) {
  const response = await prisma.user.findUnique({
    where: { email },
  });
  if (!response) {
    throw new AppError("Invalid credentials.");
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
    throw new AppError("Invalid credentials.");
  }

  return response;
}

export async function getUserById(id: string) {
  const response = await prisma.user.findUnique({
    where: { id },
  });
  if (!response) {
    throw new AppError("Invalid credentials.");
  }

  return response;
}

export async function deleteUser(id: string) {
  const response = await prisma.user.delete({
    where: { id },
  });
  if (!response) {
    throw new AppError("Failed to delete user");
  }

  return response;
}
