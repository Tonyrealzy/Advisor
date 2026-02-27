export interface PasswordReset {
  userId: string;
  email: string;
  token: string;
  id?: string;
  expiresAt: string;
  createdAt?: string;
}

export interface UserSession {
  userId: string;
  token: string;
  expiresAt: string;
  id?: string;
  email?: string;
  createdAt?: string;
}