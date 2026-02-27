import { EnvConfig } from "@/config/env";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: EnvConfig.nodeEnv !== "production" ? ["query", "error", "warn"] : ["error"],
  });

if (EnvConfig.nodeEnv !== "production") globalForPrisma.prisma = prisma;

export default prisma;