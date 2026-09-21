import { describe, expect, it } from "vitest";
import { YEARLY_DISCOUNT, monthlyToAnnual } from "./annual.js";
describe("yearly discount (pr44)", () => {
  it("pins the discount at 20%", () => {
    expect(YEARLY_DISCOUNT).toBe(0.2);
    expect(monthlyToAnnual(500)).toBe(4800);
  });
});
