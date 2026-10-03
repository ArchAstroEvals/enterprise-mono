import { flagOn } from "./flags.js";

export function requireAll(names: string[], overrides: Record<string, boolean> = {}): boolean {
  return names.every((n) => flagOn(n, overrides));
}
