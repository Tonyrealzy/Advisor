import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { EnvConfig } from "@/config/env";

const JWT_SECRET = EnvConfig.jwtSecret!;

export async function requireAuth(
  req: NextRequest,
): Promise<{ success: boolean; payload: any }> {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) {
    return { success: false, payload: null };
  }

  const token = authHeader.split(" ")[1]; // Bearer <token>

  try {
    const payload: any = jwt.verify(token, JWT_SECRET);
    // attach payload to request if needed
    return { success: true, payload };
  } catch (err) {
    console.log(err);
    return { success: false, payload: null };
  }
}
