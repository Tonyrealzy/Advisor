import crypto from "crypto";
import bcrypt from "bcryptjs";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};

export function rawBodySaver(req: any, res: any, buf: any) {
  if (buf && buf.length) {
    req.rawBody = buf.toString("utf8");
  }
}

export function generateToken() {
  const rawToken = crypto.randomBytes(32).toString("hex")

  const hashedToken = crypto
    .createHash("sha256")
    .update(rawToken)
    .digest("hex")

  return { rawToken, hashedToken }
}