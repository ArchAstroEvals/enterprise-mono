import { describe, expect, it } from "vitest";
import { inviteExpired } from "./policy.js";

describe("policy", () => {
  it("holds to the exact hour", () => {
    expect(inviteExpired(0, 72 * 3600 * 1000)).toBe(false);
  });
});
