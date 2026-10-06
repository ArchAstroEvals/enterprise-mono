export function lateFee(paidCents: number, daysLate: number, dailyBps: number): number {
  if (paidCents < 0 || daysLate < 0 || dailyBps < 0) throw new Error("amounts must be >= 0");
  return Math.round((paidCents * dailyBps * daysLate) / 10000);
}
