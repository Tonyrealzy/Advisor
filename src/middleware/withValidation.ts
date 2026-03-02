import { ZodSchema } from "zod";
import { NextRequest, NextResponse } from "next/server";

export function withValidation(
  schema: ZodSchema,
  handler: (req: NextRequest, data: any) => Promise<Response>
) {
  return async (req: NextRequest) => {
    try {
      const body = await req.json();
      const validated = await schema.parseAsync(body);
      return handler(req, validated);
    } catch (err: any) {
      return NextResponse.json(
        { errors: err.errors ?? "Validation failed" },
        { status: 400 }
      );
    }
  };
}