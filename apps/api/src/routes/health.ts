import { ok } from "../envelope.js";

export const API_VERSION = "0.1.0";

export async function health() {
  return ok({ ok: true, version: API_VERSION });
}
