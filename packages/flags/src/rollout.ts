export function bucketFor(key: string, pct: number): boolean {
  if (pct <= 0) return false;
  if (pct >= 100) return true;
  let h = 0;
  for (const ch of key) h = (h + ch.charCodeAt(0)) % 100;
  return h < pct;
}
