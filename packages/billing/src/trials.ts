export const TRIAL_DAYS: Record<string, number> = {
  starter: 14,
  growth: 14,
  scale: 30,
};

export function trialEnds(startedAt: number, planId: string): number {
  const days = TRIAL_DAYS[planId];
  if (days === undefined) throw new Error("unknown plan " + planId);
  return startedAt + days * 24 * 3600 * 1000;
}
