export const SUPPORTED = ["USD", "EUR", "GBP"] as const;

export function supports(code: string): boolean {
  return (SUPPORTED as readonly string[]).includes(code.toUpperCase());
}
