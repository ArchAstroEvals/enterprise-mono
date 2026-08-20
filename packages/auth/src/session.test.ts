import { describe, expect, it } from "vitest";
import { createSession, isSessionValid } from "./session.js";

describe("auth/session", () => {
  it("creates a 24h session", () => {
    expect(createSession("u1", "member", 1000).expiresAt).toBe(1000 + 24 * 3600 * 1000);
  });

  it("rejects blank users", () => {
    expect(() => createSession("", "member")).toThrow("userId required");
  });

  it("expires old sessions", () => {
    const s = createSession("u1", "member", 0);
    expect(isSessionValid(s, 25 * 3600 * 1000)).toBe(false);
    expect(isSessionValid(null, 0)).toBe(false);
  });
});
