export function idemKey(headers: Record<string, string | undefined>): string | null {
  const v = headers["idempotency-key"] || headers["Idempotency-Key"];
  return v || null;
}
