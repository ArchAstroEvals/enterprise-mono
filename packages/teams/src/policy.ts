export const INVITE_TTL_HOURS = 72;

export function inviteExpired(sentAt: number, now: number = Date.now()): boolean {
  return now - sentAt > INVITE_TTL_HOURS * 3600 * 1000;
}

export function overQuota(used: number, included: number): number {
  return Math.max(0, used - included);
}
