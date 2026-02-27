import { EnvConfig } from "./env";

export const jwtConfig = {
  accessSecret: EnvConfig.jwtSecret!,
  accessExpiresIn: EnvConfig.jwtExpiration || "1h",
};
