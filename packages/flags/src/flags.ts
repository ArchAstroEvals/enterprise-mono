export const FLAGS = {
  annualToggle: true,
  seatWarnings: true,
  newCheckout: false,
} as const;

export type FlagName = keyof typeof FLAGS;

export function flagOn(name: string, overrides: Record<string, boolean> = {}): boolean {
  if (name in overrides) return !!overrides[name];
  return name in FLAGS ? !!FLAGS[name as FlagName] : false;
}
