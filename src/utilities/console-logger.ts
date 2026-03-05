import { EnvConfig } from "@/config/env";

type LogLevel = "log" | "warn" | "error";

const Logger = (level: LogLevel, message: any, ...otherMessage: any): void => {
  if (EnvConfig.nodeEnv !== "production") {
    console[level](message, ...otherMessage);
  } else {
    console.log("Check server logs!");
  }
};

export const consoleLog = (message: any, ...otherMessage: any): void => {
  Logger("log", message, ...otherMessage);
};

