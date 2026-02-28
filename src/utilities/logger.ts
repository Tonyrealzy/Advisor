import { createLogger, format, transports } from "winston";
import path from "path";
import fs from "fs";
import { EnvConfig } from "@/config/env";

const logDir = path.join(process.cwd(), "logs");

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const isDevelopment = EnvConfig.nodeEnv === "development";
const logLevel = isDevelopment ? "debug" : "info";

const logger = createLogger({
  level: logLevel, // using 'debug' in development
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf(
      (info: any) =>
        `[${info.timestamp}] [${info.level.toUpperCase()}] - [${EnvConfig.nodeEnv}]: ${info.message}`,
    ),
  ),
  transports: [
    // Write all logs to file
    new transports.File({ filename: path.join(logDir, "app.log") }),

    // Show logs in console (only in non-production)
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(
          (info: any) =>
            `[${info.timestamp}] [${info.level}(${EnvConfig.nodeEnv})]: ${info.message}`,
        ),
      ),
    }),
  ],
});

export default logger;
