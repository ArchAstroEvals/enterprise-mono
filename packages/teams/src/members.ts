import { validInvite } from "./invites.js";

export const MAX_MEMBERS = 100;

export interface Member {
  id: string;
  role: string;
}

export function addMember(members: Member[], id: string, role: string): Member[] {
  if (validInvite(id + "@x.co", role) !== null && role !== "member" && role !== "admin" && role !== "owner") {
    throw new Error("bad role " + role);
  }
  if (!["owner", "admin", "member"].includes(role)) throw new Error("bad role " + role);
  if (members.some((m) => m.id === id)) throw new Error("duplicate member " + id);
  if (members.length >= MAX_MEMBERS) throw new Error("team full");
  return [...members, { id, role }];
}

export function removeMember(members: Member[], id: string): Member[] {
  return members.filter((m) => m.id !== id);
}
