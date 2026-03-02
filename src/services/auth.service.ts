import {
  createUserSession,
  deleteUserSession,
  getUserSessionByUserId,
  updateUserSessionToken,
} from "@/repository/session";
import crypto from "crypto";
import {
  createUser,
  deleteUser,
  getUserByEmail,
  getUserById,
  getUserDetailsByEmail,
  updateUserStatus,
} from "@/repository/user";
import { comparePassword, generateToken, hashPassword } from "@/utilities/hash";
import { generateAccessToken } from "@/utilities/jwtUtils";
import { SignUp } from "@/models/request";
import {
  createPasswordReset,
  getPasswordResetByEmail,
  getPasswordResetByToken,
  updatePasswordReset,
} from "@/repository/password";
import { EnvConfig } from "@/config/env";
import { AppError } from "@/utilities/appError";
import logger from "@/utilities/logger";
import { MailService } from "./mail.service";

export const AuthService = {
  login: async (email: string, password: string) => {
    const existingUser = await getUserByEmail(email);

    const userExists = comparePassword(password, existingUser.password);
    if (!userExists) {
      throw new Error("Invalid credentials");
    }

    if (!existingUser.isActive) {
      throw new Error(
        "Account is inactive. Kindly sign up again and complete verification by clicking on the link sent to your mail.",
      );
    }

    const token = generateAccessToken({
      id: existingUser.id,
      email: existingUser.email,
      name: existingUser.name,
    });

    const expiresAt = new Date(Date.now() + 120 * 60 * 1000);
    const userSession = await getUserSessionByUserId(existingUser.id);
    if (!userSession) {
      const id = crypto.randomUUID();

      await createUserSession({
        id,
        userId: existingUser.id,
        token,
        expiresAt: expiresAt,
      });

      return { token };
    }

    await updateUserSessionToken(userSession?.id, token, expiresAt);

    const user = {
      name: existingUser.name,
      email: existingUser.email,
      firstName: existingUser.firstName,
      lastName: existingUser.lastName,
      isActive: existingUser.isActive,
    };

    return { token, message: "Login successful", user };
  },

  logout: async (email: string) => {
    const response = await getUserByEmail(email);

    const sessionResponse = await deleteUserSession(response.id);
    if (!sessionResponse) {
      logger.error("Failed to delete session");
      throw new AppError("Failed to delete session");
    }

    return { message: "Logout successful" };
  },

  signUp: async (data: SignUp) => {
    const existingUser = await getUserDetailsByEmail(data.email);
    if (!existingUser) {
      logger.error("No existing user found with email: " + data.email);
    }
    if (existingUser && existingUser.isActive) {
      throw new Error("User with this email already exists");
    }

    const hashedPassword = await hashPassword(data.password);
    if (existingUser && !existingUser.isActive && existingUser.id) {
      await deleteUser(existingUser.id);
      const response = await getUserSessionByUserId(existingUser.id);
      if (response) {
        await deleteUserSession(existingUser.id);
      }
    }

    const id = crypto.randomUUID();
    const newUser = await createUser({
      id,
      name: data.userName,
      password: hashedPassword,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    });

    const passwordResetId = crypto.randomUUID();
    const token = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    await createPasswordReset({
      userId: newUser.id,
      id: passwordResetId,
      email: newUser.email,
      expiresAt: expiresAt,
      token,
    });

    await MailService.sendConfirmSignupMail({
      name: data.userName,
      email: data.email,
      resetLink: `${EnvConfig.frontendHost}/verify?email=${data.email}&token=${token}`,
    });
    logger.error("Token generated for email verification: " + token);

    const userData = {
      name: newUser.name,
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      isActive: newUser.isActive,
    };

    return userData;
  },

  confirmSignup: async (email: string, token: string) => {
    const response = await getUserByEmail(email);

    const passwordResetToken = await getPasswordResetByToken(token);
    const user = await getUserById(passwordResetToken.userId);

    if (response.id !== user.id) {
      throw new Error("Invalid token for the specified email");
    }

    await updateUserStatus(user.id, true);

    return { message: "Account confirmed successfully" };
  },

  resendSignupLink: async (email: string) => {
    const passwordResponse = await getPasswordResetByEmail(email);
    if (!passwordResponse) {
      throw new AppError("Password reset not found for the specified email");
    }

    const existingUser = await getUserByEmail(email);
    if (existingUser.isActive)
      throw new AppError("Account already verified. Please login.");

    const { rawToken, hashedToken } = generateToken();
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

    const resetLink = `${EnvConfig.frontendHost}/verify?email=${email}&token=${rawToken}`;
    await MailService.sendConfirmSignupMail({
      email,
      name: existingUser.name,
      resetLink,
    });

    return { message: "Verification email resent successfully" };
  },
};
