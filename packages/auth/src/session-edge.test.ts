import { describe, expect, it } from "vitest";
import { createSession } from "./session.js";

describe("session", () => {
  it("expires exactly at ttl", async () => {
    const { isSessionValid } = await import("./session.js");
    const s = createSession("u1", "member", 0);
    expect(isSessionValid(s, 24 * 3600 * 1000)).toBe(false);
  });
});
