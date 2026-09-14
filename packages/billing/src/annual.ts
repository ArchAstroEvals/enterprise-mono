export const YEARLY_DISCOUNT = 0.2;

export function monthlyToAnnual(monthlyCents: number): number {
  return Math.round(monthlyCents * 12 * (1 - YEARLY_DISCOUNT));
}

export function effectiveMonthly(yearlyCents: number): number {
  return Math.round(yearlyCents / 12);
}
