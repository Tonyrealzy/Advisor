import { User } from "./profile";

export interface LoginResponse {
  user: User;
  token: string;
  message: string;
}

export interface LogoutResponse {
  message: string;
}

export interface SignupResponse {
  userData: User;
  resetLink?: string;
  message: string;
}

export interface ConfirmSignupResponse {
  message: string;
}

export interface ResendSignupLinkResponse {
  message: string;
}

export interface ResetPasswordResponse {
  message: string;
  resetLink?: string;
}
