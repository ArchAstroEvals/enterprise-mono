import { describe, expect, it } from "vitest";
import { auditEntry } from "./entry.js";
describe("audit entry edges (pr47)", () => {
  it("defaults target to null", () => {
    expect(auditEntry("login", "u1").target).toBeNull();
  });
  it("rejects missing actors", () => {
    expect(() => auditEntry("login", "")).toThrow("actor required");
  });
});
