import { describe, expect, it } from "vitest";
import { createSession } from "./session.js";
import { canManageBilling, canInvite, validRole } from "./roles.js";

describe("auth/roles", () => {
  it("validates known roles", () => {
    expect(validRole("owner")).toBe(true);
    expect(validRole("root")).toBe(false);
  });

  it("limits billing to owners and admins", () => {
    expect(canManageBilling(createSession("u1", "owner"))).toBe(true);
    expect(canManageBilling(createSession("u1", "member"))).toBe(false);
  });

  it("blocks members from inviting", () => {
    expect(canInvite("admin", "owner")).toBe(false);
    expect(canInvite("member", "member")).toBe(false);
  });
});
