export function attestationFormat(data: unknown): string | null {
  if (typeof data !== "object" || data === null) return null;
  const fmt = (data as { fmt?: unknown }).fmt;
  return typeof fmt === "string" ? fmt : null;
}
