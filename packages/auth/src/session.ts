import { validRole } from "./roles.js";

export const SESSION_TTL_HOURS = 24;

export interface Session {
  userId: string;
  role: string;
  createdAt: number;
  expiresAt: number;
}

export function createSession(userId: string, role = "member", now: number = Date.now()): Session {
  if (!userId) throw new Error("userId required");
  if (!validRole(role)) throw new Error("unknown role " + role);
  return { userId, role, createdAt: now, expiresAt: now + SESSION_TTL_HOURS * 3600 * 1000 };
}

export function isSessionValid(s: Session | null, now: number = Date.now()): boolean {
  return !!s && !!s.userId && now < s.expiresAt;
}
