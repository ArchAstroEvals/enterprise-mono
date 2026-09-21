import { describe, expect, it } from "vitest";
import { createSession, isSessionValid } from "./session.js";
describe("session lifecycle (pr24)", () => {
  it("expires 24h after creation", () => {
    const s = createSession("u1", "admin", 0);
    expect(s.expiresAt).toBe(24 * 3600 * 1000);
  });
  it("is valid before expiry and invalid at/after expiry", () => {
    const s = createSession("u1", "member", 0);
    expect(isSessionValid(s, 1000)).toBe(true);
    expect(isSessionValid(s, 24 * 3600 * 1000)).toBe(false);
    expect(isSessionValid(null, 1000)).toBe(false);
  });
});
