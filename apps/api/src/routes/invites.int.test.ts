import { describe, expect, it, beforeAll, afterAll } from "vitest";
import { createApp, listen } from "../server.js";
import { createInvite } from "./teams.js";

let base = "";
let close = () => {};
beforeAll(async () => {
  const s = await listen(createApp([{ method: "POST", parts: ["v1", "teams", ":id", "invites"], handler: createInvite }]));
  base = "http://localhost:" + s.port;
  close = s.close;
});
afterAll(() => close());

describe("int/invites", () => {
  it("creates invites", async () => {
    const res = await fetch(base + "/v1/teams/t1/invites", {
      method: "POST",
      body: JSON.stringify({ email: "a@b.co", role: "member" }),
    });
    expect(res.status).toBe(201);
  });

  it("rejects bad email and role", async () => {
    const badEmail = await fetch(base + "/v1/teams/t1/invites", {
      method: "POST",
      body: JSON.stringify({ email: "nope", role: "member" }),
    });
    expect(badEmail.status).toBe(422);
    const badRole = await fetch(base + "/v1/teams/t1/invites", {
      method: "POST",
      body: JSON.stringify({ email: "a@b.co", role: "root" }),
    });
    expect(badRole.status).toBe(422);
  });
});
