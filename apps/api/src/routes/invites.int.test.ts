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
  it("checks auth before validation", async () => {
    const res = await fetch(base + "/v1/teams/t1/invites", {
      method: "POST",
      body: JSON.stringify({ email: "nope", role: "x" }),
    });
    expect(res.status).toBe(401);
  });
});
