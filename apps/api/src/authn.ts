import { isSessionValid, type Session } from "@mono/auth";

const sessions = new Map<string, Session>();

export function issueToken(s: Session): string {
  const token = "tok-" + Math.random().toString(36).slice(2);
  sessions.set(token, s);
  return token;
}

export function sessionFor(token: string | undefined, now: number = Date.now()): Session | null {
  if (!token) return null;
  const s = sessions.get(token) || null;
  return isSessionValid(s, now) ? s : null;
}

export function bearer(header: string | undefined): string | undefined {
  if (!header || !header.startsWith("Bearer ")) return undefined;
  return header.slice(7);
}
