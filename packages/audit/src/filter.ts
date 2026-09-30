import type { AuditEntry } from "./entry.js";

export function filterByAction(entries: AuditEntry[], action: string): AuditEntry[] {
  return entries.filter((e) => e.action === action);
}
