import { describe, expect, it } from "vitest";
import { monthlyToAnnual, effectiveMonthly } from "./annual.js";

describe("billing/annual", () => {
  it("discounts twelve months", () => {
    expect(monthlyToAnnual(10000)).toBe(96000);
  });

  it("averages the year", () => {
    expect(effectiveMonthly(96000)).toBe(8000);
  });
});
