import type { Session } from "./session.js";

export function extendExpiry(s: Session, extraHours: number): Session {
  if (extraHours <= 0) throw new Error("extraHours must be > 0");
  return { ...s, expiresAt: s.expiresAt + extraHours * 3600 * 1000 };
}
