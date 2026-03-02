import { z } from "zod";

export const aiPostRequestSchema = z.object({
  age: z
    .number("Age must be a number")
    .int("Age must be a whole number")
    .min(18, "You must be at least 18 years old")
    .max(100, "Age must be less than or equal to 100"),

  location: z
    .string("Location is required")
    .min(2, "Location must be at least 2 characters")
    .max(100, "Location is too long"),

  investmentKnowledge: z.enum(["beginner", "intermediate", "advanced"], {
    message: "Investment knowledge must be beginner, intermediate, or advanced",
  }),

  investmentPurpose: z
    .string("Investment purpose is required")
    .min(3, "Investment purpose must be at least 3 characters")
    .max(200, "Investment purpose is too long"),

  investmentHorizon: z
    .number("Investment horizon must be a number")
    .int("Investment horizon must be a whole number")
    .min(1, "Investment horizon must be at least 1 year")
    .max(50, "Investment horizon is too large"),

  riskTolerance: z.enum(["low", "medium", "high"], {
    message: "Risk tolerance must be low, medium, or high",
  }),

  amount: z
    .number("Amount must be a number")
    .positive("Amount must be greater than 0"),

  currency: z
    .string("Currency is required")
    .length(3, "Currency must be a valid 3-letter ISO code")
    .toUpperCase(),
});

export const paginationSchema = z.object({
  page: z.preprocess(
    (val) => (val === null ? undefined : val),
    z.coerce
      .number()
      .int("Page must be a whole number")
      .min(1, "Page must be at least 1")
      .default(1),
  ),

  limit: z.preprocess(
    (val) => (val === null ? undefined : val),
    z.coerce
      .number()
      .int("Limit must be a whole number")
      .min(1, "Limit must be at least 1")
      .max(100, "Limit cannot exceed 100")
      .default(10),
  ),

  // page: z.coerce
  //   .number()
  //   .int("Page must be a whole number")
  //   .min(1, "Page must be at least 1")
  //   .default(1),

  // limit: z.coerce
  //   .number()
  //   .int("Limit must be a whole number")
  //   .min(1, "Limit must be at least 1")
  //   .max(100, "Limit cannot exceed 100")
  //   .default(10),

  from: z
    .string()
    .optional()
    .refine(
      (val) => !val || !isNaN(Date.parse(val)),
      "Invalid 'from' date format",
    )
    .transform((val) => (val ? new Date(val) : undefined)),

  to: z
    .string()
    .optional()
    .refine(
      (val) => !val || !isNaN(Date.parse(val)),
      "Invalid 'to' date format",
    )
    .transform((val) => (val ? new Date(val) : undefined)),
});
