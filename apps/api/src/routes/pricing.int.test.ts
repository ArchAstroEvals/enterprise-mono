import { describe, expect, it, beforeAll, afterAll } from "vitest";
import { createApp, listen } from "../server.js";
import { listPlans, getPlanRoute } from "./pricing.js";

let base = "";
let close = () => {};
beforeAll(async () => {
  const s = await listen(createApp([{ method: "GET", parts: ["v1", "plans"], handler: listPlans }, { method: "GET", parts: ["v1", "plans", ":id"], handler: getPlanRoute }]));
  base = "http://localhost:" + s.port;
  close = s.close;
});
afterAll(() => close());

describe("int/pricing", () => {
  it("lists plans", async () => {
    const res = await fetch(base + "/v1/plans");
    const body = (await res.json()) as { id: string }[];
    expect(body.map((p) => p.id)).toEqual(["starter", "growth", "scale"]);
  });

  it("fetches growth and misses unknown", async () => {
    const res = await fetch(base + "/v1/plans/growth");
    expect(((await res.json()) as { monthlyCents: number }).monthlyCents).toBe(7900);
    const missing = await fetch(base + "/v1/plans/nope");
    expect(missing.status).toBe(404);
  });
});
