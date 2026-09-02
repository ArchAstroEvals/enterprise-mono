export interface AuditEntry {
  action: string;
  actorId: string;
  target: string | null;
  at: number;
}

export function auditEntry(action: string, actorId: string, target: string | null = null, now: number = Date.now()): AuditEntry {
  if (!action) throw new Error("action required");
  if (!actorId) throw new Error("actor required");
  return { action, actorId, target, at: now };
}

export function entryKey(e: AuditEntry): string {
  return e.at + ":" + e.action + ":" + e.actorId;
}
