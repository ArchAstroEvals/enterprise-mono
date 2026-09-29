export function refundOf(paidCents: number, usedCents: number): number {
  if (paidCents < 0 || usedCents < 0) throw new Error("amounts must be >= 0");
  return Math.max(0, paidCents - usedCents);
}
