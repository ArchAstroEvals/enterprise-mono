import { describe, expect, it } from "vitest";
import { createSession, isSessionValid } from "./session.js";
describe("session expiry (pr50, intentionally wrong)", () => {
  it("stays valid through the expiry instant", () => {
    const s = createSession("u", "member", 0);
    expect(isSessionValid(s, s.expiresAt)).toBe(true);
  });
});
