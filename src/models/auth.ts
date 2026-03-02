export interface PasswordReset {
  userId: string;
  email: string;
  token: string;
  id?: string;
  expiresAt: Date;
  createdAt?: string;
}

export interface UserSession {
  userId: string;
  token: string;
  expiresAt: Date;
  id?: string;
  email?: string;
  createdAt?: string;
}

export interface PasswordUpdate {
  token?: string;
  expiresAt?: Date;
}
