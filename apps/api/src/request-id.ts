import { randomUUID } from "node:crypto";

export function requestId(headers: Record<string, string | undefined>): string {
  return headers["x-request-id"] || randomUUID();
}
