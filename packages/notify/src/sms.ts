export function smsParts(text: string): number {
  if (text.length === 0) return 0;
  return Math.ceil(text.length / 160);
}

export function smsPreview(text: string): string {
  return text.slice(0, 160);
}
