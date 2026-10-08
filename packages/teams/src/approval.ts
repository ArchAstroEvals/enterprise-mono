export function ownerApprovalRequired(role: string): boolean {
  return role === "owner";
}
