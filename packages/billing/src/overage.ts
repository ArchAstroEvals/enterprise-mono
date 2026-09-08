export function overage(seatsUsed: number, seatsIncluded: number, perSeatCents: number): number {
  if (seatsUsed <= seatsIncluded) return 0;
  return (seatsUsed - seatsIncluded) * perSeatCents;
}

export type Dunning = "current" | "retrying" | "past_due";

export function dunningStatus(failedPayments: number): Dunning {
  if (failedPayments <= 0) return "current";
  if (failedPayments === 1) return "retrying";
  return "past_due";
}
