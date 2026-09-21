import { describe, expect, it } from "vitest";
import { effectiveMonthly, monthlyToAnnual } from "./annual.js";
describe("annual billing (pr27)", () => {
  it("applies the 20% yearly discount", () => {
    expect(monthlyToAnnual(1000)).toBe(9600);
  });
  it("recovers the monthly rate from yearly", () => {
    expect(effectiveMonthly(9600)).toBe(800);
  });
});
