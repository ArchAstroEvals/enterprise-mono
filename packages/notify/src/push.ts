export function truncatePush(text: string, max = 120): string {
  if (text.length <= max) return text;
  return text.slice(0, max) + "\u2026";
}
