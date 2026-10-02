import type { AuditEntry } from "./entry.js";

export function purgeBefore(entries: AuditEntry[], cutoff: number): AuditEntry[] {
  return entries.filter((e) => e.at >= cutoff);
}
