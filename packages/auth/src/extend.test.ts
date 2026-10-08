import { describe, expect, it } from "vitest";
import { extendExpiry } from "./extend.js";

describe("extend", () => {
  it("pushes expiry out", async () => {
    const { createSession } = await import("./session.js");
    const s = createSession("u1", "member", 0);
    expect(extendExpiry(s, 1).expiresAt).toBe(s.expiresAt + 3600 * 1000);
  });
});
