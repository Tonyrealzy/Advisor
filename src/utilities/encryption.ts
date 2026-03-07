import { EnvConfig } from "@/config/env";
import * as aesjs from "aes-js";
import { consoleLog } from "./console-logger";

// Convert hexadecimal string to Base64
function hexToBase64(hexstring: string): string {
  return btoa(
    hexstring
      .match(/\w{2}/g)!
      .map((a: string) => String.fromCharCode(parseInt(a, 16)))
      .join(""),
  );
}

// Convert Base64 back to hexadecimal
export function base64ToHex(str: string): string {
  const hex: string[] = [];
  const bin = atob(str.replace(/[ \r\n]+$/, ""));
  for (let i = 0; i < bin.length; i++) {
    let tmp = bin.charCodeAt(i).toString(16);
    if (tmp.length === 1) tmp = "0" + tmp;
    hex.push(tmp);
  }
  return hex.join("");
}

// Encrypt data
export const encryptData = (data: string): string => {
  const publicKey = EnvConfig.publicKey;

  if (!publicKey) {
    consoleLog("Encryption key is missing.");
    return "";
  }

  try {
    const iv = new Array(16).fill(0); // Initialization vector
    const key = aesjs.utils.utf8.toBytes(publicKey);
    const textBytes = aesjs.utils.utf8.toBytes(data);

    const aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
    const encryptedBytes = aesCbc.encrypt(aesjs.padding.pkcs7.pad(textBytes));
    const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    const encryptedBase64 = hexToBase64(encryptedHex);

    return encryptedBase64;
  } catch (error: unknown) {
    consoleLog(error);
    return "";
  }
};

// Decrypt data
export const decryptData = (data: string): string => {
  const publicKey = EnvConfig.publicKey;

  if (!publicKey) {
    consoleLog("Decryption key is missing.");
    return "";
  }

  try {
    const iv = new Array(16).fill(0);
    const key = aesjs.utils.utf8.toBytes(publicKey);
    const encryptedBytes = aesjs.utils.hex.toBytes(base64ToHex(data));

    const aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
    const decryptedBytes = aesjs.padding.pkcs7.strip(
      aesCbc.decrypt(encryptedBytes),
    );
    const decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);

    return decryptedText;
  } catch (error: unknown) {
    consoleLog(error);
    return "";
  }
};
