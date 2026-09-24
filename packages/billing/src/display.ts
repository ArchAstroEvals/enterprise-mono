import { formatCents } from "./money.js";

export function billingLine(label: string, cents: number): string {
  return label + ": " + formatCents(cents);
}
