import { describe, expect, it } from "vitest";
import { auditEntry } from "./entry.js";

describe("audit/entry trim", () => {
  it("trims padded actions", () => {
    expect(auditEntry("  x  ", "u1", null, 1).action).toBe("x");
  });
});
