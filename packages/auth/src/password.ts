export function scorePassword(pw: string): number {
  if (pw.length > 256) return 0;
  let score = 0;
  if (pw.length >= 12) score += 1;
  if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) score += 1;
  if (/[0-9]/.test(pw)) score += 1;
  if (/[^a-zA-Z0-9]/.test(pw)) score += 1;
  return score;
}

export function strongPassword(pw: string): boolean {
  return scorePassword(pw) >= 3;
}
