import { describe, expect, it, beforeAll, afterAll } from "vitest";
import { createApp, listen } from "../server.js";
import { createSessionRoute } from "./session.js";

let base = "";
let close = () => {};
beforeAll(async () => {
  const s = await listen(createApp([{ method: "POST", parts: ["v1", "session"], handler: createSessionRoute }]));
  base = "http://localhost:" + s.port;
  close = s.close;
});
afterAll(() => close());

describe("int/session", () => {
  it("issues tokens", async () => {
    const res = await fetch(base + "/v1/session", {
      method: "POST",
      body: JSON.stringify({ userId: "u1", role: "admin" }),
    });
    expect(res.status).toBe(201);
    const body = (await res.json()) as { token: string };
    expect(body.token.startsWith("tok-")).toBe(true);
  });

  it("rejects bad roles", async () => {
    const res = await fetch(base + "/v1/session", {
      method: "POST",
      body: JSON.stringify({ userId: "u1", role: "root" }),
    });
    expect(res.status).toBe(400);
  });
});
