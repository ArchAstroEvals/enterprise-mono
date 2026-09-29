import type { Member } from "./members.js";

export function countByRole(members: Member[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const m of members) out[m.role] = (out[m.role] || 0) + 1;
  return out;
}
