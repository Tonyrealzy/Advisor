import { z } from "zod";

export const signUpSchema = z.object({
  email: z.email("Please provide a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(64, "Password must be at most 64 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter (A-Z)")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter (a-z)")
    .regex(/[0-9]/, "Password must contain at least one digit (0-9)")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character (e.g. ! @ # $ % ^ & *)",
    )
    .regex(/^\S*$/, "Password must not contain spaces"),
  userName: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters long")
    .max(30, "Username must not exceed 30 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores",
    ),
  firstName: z
    .string()
    .trim()
    .min(3, "First name must be at least 3 characters long")
    .max(30, "First name must not exceed 30 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "First name can only contain letters, numbers, and underscores",
    ),
  lastName: z
    .string()
    .trim()
    .min(3, "Last name must be at least 3 characters long")
    .max(30, "Last name must not exceed 30 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Last name can only contain letters, numbers, and underscores",
    ),
});

export const loginSchema = z.object({
  email: z.email("Please provide a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(64, "Password must be at most 64 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter (A-Z)")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter (a-z)")
    .regex(/[0-9]/, "Password must contain at least one digit (0-9)")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character (e.g. ! @ # $ % ^ & *)",
    )
    .regex(/^\S*$/, "Password must not contain spaces"),
});

export const emailSchema = z.object({
  email: z.email("Please provide a valid email address"),
});

export const confirmSignupSchema = z.object({
  email: z.email("Please provide a valid email address"),
  token: z.string().min(1, "Token is required"),
});

export const changePasswordSchema = z.object({
  token: z.string().min(1, "Token is required"),
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(64, "Password must be at most 64 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter (A-Z)")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter (a-z)")
    .regex(/[0-9]/, "Password must contain at least one digit (0-9)")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character (e.g. ! @ # $ % ^ & *)",
    )
    .regex(/^\S*$/, "Password must not contain spaces"),
});
