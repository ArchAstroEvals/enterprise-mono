export interface Member {
  id: string;
  role: string;
}

export function addMember(members: Member[], id: string, role: string): Member[] {
  if (members.some((m) => m.id === id)) throw new Error("duplicate member " + id);
  return [...members, { id, role }];
}

export function removeMember(members: Member[], id: string): Member[] {
  return members.filter((m) => m.id !== id);
}
