import { ok } from "../envelope.js";
import { SERVICE_VERSION } from "../version.js";

export async function version() {
  return ok({ version: SERVICE_VERSION });
}
