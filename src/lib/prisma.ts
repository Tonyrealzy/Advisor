import { EnvConfig } from "@/config/env";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../app/generated/prisma/client";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const adapter = new PrismaPg({
  connectionString: EnvConfig.databaseUrl,
});

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    // log: EnvConfig.nodeEnv !== "production" ? ["query", "error", "warn"] : ["error"],
  });

if (EnvConfig.nodeEnv !== "production") globalForPrisma.prisma = prisma;

export default prisma;
