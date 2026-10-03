export function retrySchedule(failures: number): number[] {
  if (failures <= 0) return [];
  return [1, 3, 7].slice(0, Math.min(3, failures));
}
