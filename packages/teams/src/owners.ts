import type { Member } from "./members.js";

export function ownerCount(members: Member[]): number {
  return members.filter((m) => m.role === "owner").length;
}

export function needsOwner(members: Member[]): boolean {
  return ownerCount(members) === 0;
}
