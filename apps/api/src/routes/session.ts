import { createSession } from "@mono/auth";
import { issueToken } from "../authn.js";
import { created, fail } from "../envelope.js";

export async function createSessionRoute(_req: unknown, _params: Record<string, string>, body: unknown) {
  const b = (body || {}) as { userId?: string; role?: string };
  try {
    const s = createSession(b.userId || "", b.role);
    return created({ token: issueToken(s) });
  } catch (e) {
    return fail(400, "bad_request", e instanceof Error ? e.message : "bad");
  }
}
