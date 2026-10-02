import { describe, expect, it } from "vitest";
import { auditEntry } from "./entry.js";
import { purgeBefore } from "./retention.js";

describe("audit/retention", () => {
  it("drops old entries", () => {
    const all = [auditEntry("a", "u1", null, 1), auditEntry("b", "u1", null, 9)];
    expect(purgeBefore(all, 5)).toHaveLength(1);
  });
});
