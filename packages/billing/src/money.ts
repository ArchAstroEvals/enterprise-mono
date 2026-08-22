export function formatCents(cents: number): string {
  return "$" + (cents / 100).toFixed(2);
}

export function parseDollars(input: string): number {
  const m = /^\$(\d+)\.(\d{2})$/.exec(input.trim());
  if (!m) throw new Error("bad money " + input);
  return parseInt(m[1], 10) * 100 + parseInt(m[2], 10);
}
