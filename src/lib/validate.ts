import { ZodSchema } from "zod";

export async function validateRequest<T>(
  schema: ZodSchema<T>,
  data: unknown
): Promise<T> {
  return schema.parseAsync(data);
}