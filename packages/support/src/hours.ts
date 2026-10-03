export function inHours(day: number, hour: number): boolean {
  if (day < 1 || day > 5) return false;
  return hour >= 9 && hour < 17;
}
