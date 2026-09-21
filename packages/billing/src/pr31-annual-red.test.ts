import { describe, expect, it } from "vitest";
import { monthlyToAnnual } from "./annual.js";
describe("annual billing (pr31, intentionally wrong)", () => {
  it("prices yearly at 12x monthly", () => {
    expect(monthlyToAnnual(1000)).toBe(12000);
  });
});
