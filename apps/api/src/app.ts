import { createApp } from "./server.js";
import { health } from "./routes/health.js";
import { createSessionRoute } from "./routes/session.js";
import { listPlans, getPlanRoute } from "./routes/pricing.js";
import { searchPlans } from "./routes/search.js";
import { createInvite } from "./routes/teams.js";
import { buildInvoice } from "./routes/invoice.js";
import { version } from "./routes/version-route.js";

export const routes = [
  { method: "GET", parts: ["v1", "health"], handler: health },
  { method: "GET", parts: ["v1", "version"], handler: version },
  { method: "POST", parts: ["v1", "session"], handler: createSessionRoute },
  { method: "GET", parts: ["v1", "plans"], handler: listPlans },
  { method: "GET", parts: ["v1", "plans", "search"], handler: searchPlans },
  { method: "GET", parts: ["v1", "plans", ":id"], handler: getPlanRoute },
  { method: "POST", parts: ["v1", "teams", ":id", "invites"], handler: createInvite },
  { method: "POST", parts: ["v1", "invoice"], handler: buildInvoice },
];

export function buildApp() {
  return createApp(routes);
}
