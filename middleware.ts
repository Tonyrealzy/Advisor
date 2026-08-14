import { NextRequest, NextResponse } from "next/server";
import { EnvConfig } from "@/config/env";

const DEFAULT_ALLOWED_ORIGINS = [
  "http://localhost:3000",
  "http://localhost:3002",
  "http://localhost:5173",
  "https://advisor-blush.vercel.app"
];

const ALLOWED_METHODS = "GET,POST,PUT,PATCH,DELETE,OPTIONS";
const ALLOWED_HEADERS = "Authorization,Content-Type,X-Requested-With";

function getAllowedOrigins(): Set<string> {
  const configuredOrigins = (EnvConfig.allowedOrigins ?? "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  return new Set([...DEFAULT_ALLOWED_ORIGINS, ...configuredOrigins]);
}

function withCorsHeaders(response: NextResponse, origin?: string): NextResponse {
  response.headers.set("Vary", "Origin");
  response.headers.set("Access-Control-Allow-Methods", ALLOWED_METHODS);
  response.headers.set("Access-Control-Allow-Headers", ALLOWED_HEADERS);

  if (origin) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }

  return response;
}

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  const origin = request.headers.get("origin") ?? undefined;
  const allowedOrigins = getAllowedOrigins();
  const isAllowedOrigin = origin ? allowedOrigins.has(origin) : false;

  if (request.method === "OPTIONS") {
    if (!origin || !isAllowedOrigin) {
      return new NextResponse(null, { status: 403 });
    }

    return withCorsHeaders(new NextResponse(null, { status: 204 }), origin);
  }

  const response = NextResponse.next();

  if (!origin) {
    return withCorsHeaders(response);
  }

  if (!isAllowedOrigin) {
    return new NextResponse(
      JSON.stringify({ success: false, error: "Origin not allowed" }),
      {
        status: 403,
        headers: { "content-type": "application/json", Vary: "Origin" },
      },
    );
  }

  return withCorsHeaders(response, origin);
}

export const config = {
  matcher: ["/api/:path*"],
};
