import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import { JwtUserPayload } from "@/models/user";
import { jwtConfig } from "@/config/jwt";

export const generateAccessToken = (
  payload: JwtUserPayload,
  options: SignOptions = {
    expiresIn: jwtConfig.accessExpiresIn as jwt.SignOptions["expiresIn"],
  },
): string => {
  return jwt.sign(payload, jwtConfig.accessSecret, options);
};

export const verifyToken = (token: string, type = "access"): JwtPayload => {
  const secret = jwtConfig.accessSecret;
  return jwt.verify(token, secret) as JwtPayload;
};
