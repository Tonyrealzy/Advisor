import {
  createPasswordReset,
  deletePasswordReset,
  getPasswordResetByEmail,
  getPasswordResetByToken,
  updatePasswordReset,
  updateUserPassword,
} from "@/repository/password";
import crypto from "crypto";
import { getUserByEmail, getUserById } from "@/repository/user";
import { MailService } from "./mail.service";
import { EnvConfig } from "@/config/env";
import { comparePassword, generateToken, hashPassword } from "@/utilities/hash";
import logger from "@/utilities/logger";

export const PasswordService = {
  resetPassword: async (email: string) => {
    const existingUser = await getUserByEmail(email);

    const { hashedToken } = generateToken();
    const id = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 30 * 60 * 1000);

    const resetResponse = await getPasswordResetByEmail(email);
    if (!resetResponse) {
      await createPasswordReset({
        id,
        email,
        userId: existingUser.id,
        token: hashedToken,
        expiresAt: expiresAt,
      });
      return;
    }
    await updatePasswordReset(resetResponse.id, {
      token: hashedToken,
      expiresAt,
    });

    const resetLink = `${EnvConfig.frontendHost}/password-reset?token=${hashedToken}`;
    await MailService.sendResetOTPMail({
      email,
      name: existingUser.name,
      resetLink,
    });
    logger.info(`Token sent ${hashedToken}`);

    return { message: "Password reset email sent successfully", resetLink };
  },

  changePassword: async (token: string, password: string) => {
    const passwordReset = await getPasswordResetByToken(token);

    const existingUser = await getUserById(passwordReset.userId);
    
    const userExists = await comparePassword(password, existingUser.password);
    if (userExists) {
      throw new Error(
        "Please choose a different password from any of your previously used passwords.",
      );
    }
    const hashedPassword = await hashPassword(password);

    await updateUserPassword(passwordReset.userId, hashedPassword);

    await deletePasswordReset(passwordReset.id);

    return { message: "Password updated successfully" };
  },
};
