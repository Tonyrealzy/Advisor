import * as yup from "yup";

export const recommendationsRequestSchema = yup.object({
  age: yup
    .number()
    .typeError("Age must be a number")
    .integer("Age must be a whole number")
    .min(18, "You must be at least 18 years old")
    .max(100, "Age must be less than or equal to 100")
    .required("Age is required"),

  location: yup
    .string()
    .required("Location is required")
    .min(2, "Location must be at least 2 characters")
    .max(100, "Location is too long"),

  investmentKnowledge: yup
    .string()
    .oneOf(
      ["beginner", "intermediate", "advanced"],
      "Investment knowledge must be beginner, intermediate, or advanced",
    )
    .required("Investment knowledge is required"),

  investmentPurpose: yup
    .string()
    .required("Investment purpose is required")
    .min(3, "Investment purpose must be at least 3 characters")
    .max(200, "Investment purpose is too long"),

  investmentHorizon: yup
    .number()
    .typeError("Investment horizon must be a number")
    .integer("Investment horizon must be a whole number")
    .min(1, "Investment horizon must be at least 1 year")
    .max(50, "Investment horizon is too large")
    .required("Investment horizon is required"),

  riskTolerance: yup
    .string()
    .oneOf(
      ["low", "medium", "high"],
      "Risk tolerance must be low, medium, or high",
    )
    .required("Risk tolerance is required"),

  amount: yup
    .number()
    .typeError("Amount must be a number")
    .positive("Amount must be greater than 0")
    .required("Amount is required"),

  currency: yup
    .string()
    .required("Currency is required")
    .length(3, "Currency must be a valid 3-letter ISO code")
    .transform((value) => value?.toUpperCase()),
});
