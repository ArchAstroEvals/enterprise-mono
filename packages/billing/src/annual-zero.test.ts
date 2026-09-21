import { describe, expect, it } from "vitest";
import { monthlyToAnnual } from "./annual.js";

describe("annual", () => {
  it("zeroes out", async () => {
    const { effectiveMonthly } = await import("./annual.js");
    expect(monthlyToAnnual(0)).toBe(0);
    expect(effectiveMonthly(0)).toBe(0);
  });
});
