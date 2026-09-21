import { describe, expect, it } from "vitest";
import { canInvite, canManageBilling, validRole } from "./roles.js";
import { createSession } from "./session.js";
describe("roles (pr26)", () => {
  it("accepts known roles only", () => {
    expect(validRole("owner")).toBe(true);
    expect(validRole("root")).toBe(false);
  });
  it("limits billing management to owner/admin", () => {
    expect(canManageBilling(createSession("u", "member", 0))).toBe(false);
    expect(canManageBilling(createSession("u", "admin", 0))).toBe(true);
    expect(canManageBilling(null)).toBe(false);
  });
  it("enforces invite hierarchy", () => {
    expect(canInvite("owner", "owner")).toBe(true);
    expect(canInvite("admin", "owner")).toBe(false);
    expect(canInvite("admin", "member")).toBe(true);
    expect(canInvite("member", "member")).toBe(false);
  });
});
