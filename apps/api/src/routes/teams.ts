import { validInvite } from "@mono/teams";
import { sessionFor, bearer } from "../authn.js";
import { created, fail } from "../envelope.js";
import type { IncomingMessage } from "node:http";

export async function createInvite(req: IncomingMessage, params: Record<string, string>, body: unknown) {
  const s = sessionFor(bearer(req.headers.authorization));
  if (!s) return fail(401, "unauthorized");
  const b = (body || {}) as { email?: string; role?: string };
  const problem = validInvite(b.email || "", b.role || "");
  if (problem) return fail(422, problem);
  return created({ teamId: params["id"], email: b.email, role: b.role });
}
