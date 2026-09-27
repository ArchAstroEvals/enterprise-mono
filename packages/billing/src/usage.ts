export function meterPercent(used: number, quota: number): number {
  if (quota <= 0) throw new Error("quota must be > 0");
  if (used < 0) return 0;
  return Math.min(100, Math.round((used / quota) * 100));
}

export function quotaLeft(used: number, quota: number): number {
  return Math.max(0, quota - used);
}
