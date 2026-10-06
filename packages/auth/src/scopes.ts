export function scopes(role: string): string[] {
  if (role === "owner") return ["read", "write", "admin"];
  if (role === "admin") return ["read", "write"];
  if (role === "member") return ["read"];
  return [];
}
