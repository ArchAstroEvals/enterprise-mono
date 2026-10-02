import { filterPlans } from "@mono/billing";
import { ok } from "../envelope.js";
import type { IncomingMessage } from "node:http";

export async function searchPlans(req: IncomingMessage) {
  const url = new URL(req.url || "/", "http://x");
  return ok(filterPlans(url.searchParams.get("q") || ""));
}
