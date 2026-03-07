import * as yup from "yup";

const passwordSchema = yup
  .string()
  .required("Password is required")
  .min(8, "Password must be at least 8 characters long")
  .max(64, "Password must be at most 64 characters long")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter (A-Z)")
  .matches(/[a-z]/, "Password must contain at least one lowercase letter (a-z)")
  .matches(/[0-9]/, "Password must contain at least one digit (0-9)")
  .matches(
    /[^A-Za-z0-9]/,
    "Password must contain at least one special character (e.g. ! @ # $ % ^ & *)",
  )
  .matches(/^\S*$/, "Password must not contain spaces");

const confirmPasswordSchema = yup
  .string()
  .oneOf([yup.ref("password")], "Passwords must match")
  .required("Please confirm your password");

export const signUpRequestSchema = yup.object({
  email: yup
    .string()
    .email("Please provide a valid email address")
    .required("Email is required"),

  password: passwordSchema,

  confirmPassword: confirmPasswordSchema,

  userName: yup
    .string()
    .trim()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters long")
    .max(30, "Username must not exceed 30 characters")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores",
    ),

  firstName: yup
    .string()
    .trim()
    .required("First name is required")
    .min(3, "First name must be at least 3 characters long")
    .max(30, "First name must not exceed 30 characters")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "First name can only contain letters, numbers, and underscores",
    ),

  lastName: yup
    .string()
    .trim()
    .required("Last name is required")
    .min(3, "Last name must be at least 3 characters long")
    .max(30, "Last name must not exceed 30 characters")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Last name can only contain letters, numbers, and underscores",
    ),
});

export const loginRequestSchema = yup.object({
  email: yup
    .string()
    .email("Please provide a valid email address")
    .required("Email is required"),

  password: passwordSchema,
});

export const emailRequestSchema = yup.object({
  email: yup
    .string()
    .email("Please provide a valid email address")
    .required("Email is required"),
});

export const confirmSignupRequestSchema = yup.object({
  email: yup
    .string()
    .email("Please provide a valid email address")
    .required("Email is required"),

  token: yup.string().optional(),
});

export const changePasswordRequestSchema = yup.object({
  // token: yup.string().optional(),

  password: passwordSchema,

  confirmPassword: confirmPasswordSchema,
});
