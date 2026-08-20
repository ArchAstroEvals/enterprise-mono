import type { Session } from "./session.js";

export const ROLES = ["owner", "admin", "member"] as const;
export type Role = (typeof ROLES)[number];

export function validRole(role: string): role is Role {
  return (ROLES as readonly string[]).includes(role);
}

export function canManageBilling(s: Session | null): boolean {
  return !!s && (s.role === "owner" || s.role === "admin");
}

export function canInvite(inviter: Role, target: Role): boolean {
  if (inviter === "owner") return true;
  if (inviter === "admin") return target !== "owner";
  return false;
}
