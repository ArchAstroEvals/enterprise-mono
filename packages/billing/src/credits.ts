export function applyCredit(totalCents: number, creditCents: number): number {
  if (creditCents < 0) throw new Error("credit must be >= 0");
  return Math.max(0, totalCents - creditCents);
}
