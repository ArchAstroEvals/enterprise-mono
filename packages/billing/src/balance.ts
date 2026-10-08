export function balanceDue(totalCents: number, paidCents: number): number {
  return Math.max(0, totalCents - paidCents);
}
