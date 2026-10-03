export function validInvite(email: string, role: string): string | null {
  const clean = email.trim();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(clean)) return "bad email";
  if (!["owner", "admin", "member"].includes(role)) return "bad role";
  return null;
}

export function seatsLeft(planSeats: number, members: number): number {
  return Math.max(0, planSeats - members);
}
