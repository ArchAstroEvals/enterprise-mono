import { describe, expect, it } from "vitest";
import { auditEntry, entryKey } from "./entry.js";
describe("audit entry (pr22)", () => {
  it("trims action and stamps actor/target/time", () => {
    expect(auditEntry(" login ", "u1", "t9", 1000)).toEqual({ action: "login", actorId: "u1", target: "t9", at: 1000 });
  });
  it("rejects blank action", () => {
    expect(() => auditEntry("   ", "u1")).toThrow("action required");
  });
  it("builds a stable entry key", () => {
    expect(entryKey({ action: "login", actorId: "u1", target: null, at: 1000 })).toBe("1000:login:u1");
  });
});
