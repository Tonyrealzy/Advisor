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
  updateUserStatus,
} from "@/repository/user";
import { comparePassword, hashPassword } from "@/utilities/hash";
import { generateAccessToken } from "@/utilities/jwtUtils";
import { SignUp } from "@/models/request";
import { MailService } from "./mail.service";
import { createPasswordReset, getPasswordResetByToken } from "@/repository/password";
import { EnvConfig } from "@/config/env";

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

    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const userSession = await getUserSessionByUserId(existingUser.id);
    if (!userSession) {
      const id = crypto.randomUUID();

      await createUserSession({
        id,
        userId: existingUser.id,
        token,
        expiresAt: String(expiresAt),
      });

      return { token };
    }

    await updateUserSessionToken(userSession?.id, token, expiresAt);

    return { token };
  },

  logout: async (email: string) => {
    const response = await getUserByEmail(email);

    await deleteUserSession(response.id);
    return;
  },

  signUp: async (data: SignUp) => {
    const existingUser = await getUserByEmail(data.email);
    if (existingUser && existingUser.isActive) {
      throw new Error("User with this email already exists");
    }

    const hashedPassword = await hashPassword(data.password);
    if (existingUser && !existingUser.isActive) {
      await deleteUserSession(existingUser.id);
      await deleteUser(existingUser.id);
    }

    const id = crypto.randomUUID();
    const newUser = await createUser({
        ...data,
        id,
        name: data.userName,
        password: hashedPassword,
    });
    
    const passwordResetId = crypto.randomUUID();
    const token = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    await createPasswordReset({
      ...data,
      userId: newUser.id,
      id: passwordResetId,
      expiresAt: String(expiresAt),
      token
    })

    await MailService.sendConfirmSignupMail({
      name: data.userName,
      email: data.email,
      resetLink: `${EnvConfig.frontendHost}?email=${data.email}&token=${token}`,
    });

    return newUser;
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
};
