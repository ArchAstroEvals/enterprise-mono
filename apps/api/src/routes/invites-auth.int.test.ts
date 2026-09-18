import { describe, expect, it, beforeAll, afterAll } from "vitest";
import { createApp, listen } from "../server.js";
import { createSessionRoute } from "./session.js";
import { createInvite } from "./teams.js";

let base = "";
let close = () => {};
beforeAll(async () => {
  const s = await listen(createApp([{ method: "POST", parts: ["v1", "session"], handler: createSessionRoute }, { method: "POST", parts: ["v1", "teams", ":id", "invites"], handler: createInvite }]));
  base = "http://localhost:" + s.port;
  close = s.close;
});
afterAll(() => close());

describe("int/invite auth", () => {
  it("requires a token", async () => {
    const res = await fetch(base + "/v1/teams/t1/invites", {
      method: "POST",
      body: JSON.stringify({ email: "a@b.co", role: "member" }),
    });
    expect(res.status).toBe(401);
  });

  it("accepts a session token", async () => {
    const login = await fetch(base + "/v1/session", {
      method: "POST",
      body: JSON.stringify({ userId: "u1", role: "admin" }),
    });
    const { token } = (await login.json()) as { token: string };
    const res = await fetch(base + "/v1/teams/t1/invites", {
      method: "POST",
      headers: { authorization: "Bearer " + token },
      body: JSON.stringify({ email: "a@b.co", role: "member" }),
    });
    expect(res.status).toBe(201);
  });
});
