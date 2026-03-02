import logger from "@/utilities/logger";
import nodemailer from "nodemailer";
import { EnvConfig } from "../env";

export const transporter = nodemailer.createTransport({
  host: EnvConfig.mailSmtpHost,
  port: 587,
  secure: false,
  auth: {
    user: EnvConfig.mailSmtpUsername,
    pass: EnvConfig.mailSmtpPassword,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendMail = async (
  subject: string,
  to: string,
  textContent: any
) => {
  try {
    await transporter.sendMail({
      from: EnvConfig.mailSmtpUsername,
      to: to, // list of receivers
      subject: subject, // Subject line
      html: textContent, // plain text body
    });
    logger.info("Mail sent");
  } catch (error: any) {
    logger.error("Error sending Mail: ", error);
  }
};
