import { validInvite } from "@mono/teams";
import { created, fail } from "../envelope.js";

export async function createInvite(_req: unknown, params: Record<string, string>, body: unknown) {
  const b = (body || {}) as { email?: string; role?: string };
  const problem = validInvite(b.email || "", b.role || "");
  if (problem) return fail(422, problem);
  return created({ teamId: params["id"], email: b.email, role: b.role });
}
