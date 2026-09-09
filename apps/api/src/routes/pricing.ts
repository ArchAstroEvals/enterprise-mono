import { PLANS, getPlan } from "@mono/billing";
import { ok, fail } from "../envelope.js";

export async function listPlans() {
  return ok(PLANS);
}

export async function getPlanRoute(_req: unknown, params: Record<string, string>) {
  const plan = getPlan(params["id"] || "");
  if (!plan) return fail(404, "not_found", "plan");
  return ok(plan);
}
