import { describe, expect, it, beforeAll, afterAll } from "vitest";
import { createApp, listen } from "../server.js";
import { health } from "./health.js";

let base = "";
let close = () => {};
beforeAll(async () => {
  const s = await listen(createApp([{ method: "GET", parts: ["v1", "health"], handler: health }]));
  base = "http://localhost:" + s.port;
  close = s.close;
});
afterAll(() => close());

describe("int/health", () => {
  it("reports ok with version", async () => {
    const res = await fetch(base + "/v1/health");
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true, version: "0.1.0" });
  });

  it("misses on wrong method", async () => {
    const res = await fetch(base + "/v1/health", { method: "POST" });
    expect(res.status).toBe(404);
  });

  it("shapes unknown routes", async () => {
    const res = await fetch(base + "/nope");
    expect(res.status).toBe(404);
    expect(await res.json()).toEqual({ error: "not_found" });
  });
});
