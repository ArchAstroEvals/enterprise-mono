import { describe, expect, it } from "vitest";
import { needsOwner } from "./owners.js";

describe("owners", () => {
  it("flags ownerless teams", () => {
    expect(needsOwner([{ id: "a", role: "member" }])).toBe(true);
    expect(needsOwner([{ id: "a", role: "owner" }])).toBe(false);
  });
});
