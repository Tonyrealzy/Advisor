import { sendMail } from "@/config/mail/mailer";
import {
  renderAccountConfirmationEmail,
  renderPasswordResetEmail,
} from "@/config/mail/renderTemplate";
import { SendOtpRequest } from "@/models/request";
import logger from "@/utilities/logger";

export const OTP_EXPIRY_MINUTES = 10;

export const MailService = {
  sendConfirmSignupMail: async (data: SendOtpRequest) => {
    const confirmAcctContent = renderAccountConfirmationEmail({
      username: data.name,
      resetLink: data.resetLink,
      otpExpiry: OTP_EXPIRY_MINUTES,
      appName: "Advisor",
      year: new Date().getFullYear(),
    });

    logger.info("Sending OTP mail to: " + data.email);

    return await sendMail(
      "Confirm Your Account",
      data.email,
      confirmAcctContent,
    );
  },

  sendResetOTPMail: async (data: SendOtpRequest) => {
    const confirmAcctContent = renderPasswordResetEmail({
      username: data.name,
      resetLink: data.resetLink,
      otpExpiry: OTP_EXPIRY_MINUTES,
      appName: "Advisor",
      year: new Date().getFullYear(),
    });

    logger.info("Sending Password Reset OTP mail to: " + data.email);

    return await sendMail("Password Reset OTP", data.email, confirmAcctContent);
  },
};
