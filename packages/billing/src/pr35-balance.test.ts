import { describe, expect, it } from "vitest";
import { balanceDue } from "./balance.js";
import { applyCredit } from "./credits.js";
describe("balances and credits (pr35)", () => {
  it("computes amounts due with a zero floor", () => {
    expect(balanceDue(1000, 400)).toBe(600);
    expect(balanceDue(100, 400)).toBe(0);
  });
  it("applies credits and rejects negative ones", () => {
    expect(applyCredit(1000, 200)).toBe(800);
    expect(() => applyCredit(1000, -5)).toThrow();
  });
});
