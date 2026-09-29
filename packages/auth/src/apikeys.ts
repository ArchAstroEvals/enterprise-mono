import { randomBytes } from "node:crypto";

export function genApiKey(prefix = "sk"): string {
  return prefix + "_" + randomBytes(12).toString("hex");
}

export function keyPrefix(key: string): string {
  return key.split("_")[0] || "";
}
