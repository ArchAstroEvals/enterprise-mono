import { describe, expect, it } from "vitest";
import { inviteExpired, overQuota } from "./policy.js";

describe("teams/policy", () => {
  it("expires invites after 72h", () => {
    expect(inviteExpired(0, 73 * 3600 * 1000)).toBe(true);
    expect(inviteExpired(0, 1000)).toBe(false);
  });

  it("counts over-quota seats", () => {
    expect(overQuota(30, 25)).toBe(5);
    expect(overQuota(20, 25)).toBe(0);
  });
});
