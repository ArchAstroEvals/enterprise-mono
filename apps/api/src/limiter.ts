export interface Bucket {
  count: number;
  resetAt: number;
}

export function allow(buckets: Map<string, Bucket>, key: string, limit: number, windowMs: number, now: number = Date.now()): boolean {
  const cur = buckets.get(key);
  if (!cur || now >= cur.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (cur.count >= limit) return false;
  cur.count += 1;
  return true;
}
