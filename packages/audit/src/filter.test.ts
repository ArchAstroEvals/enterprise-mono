import { describe, expect, it } from "vitest";
import { auditEntry } from "./entry.js";
import { filterByAction } from "./filter.js";

describe("audit/filter", () => {
  it("selects one action", () => {
    const all = [auditEntry("a", "u1", null, 1), auditEntry("b", "u1", null, 2)];
    expect(filterByAction(all, "a")).toHaveLength(1);
  });
});
