import { describe, expect, it } from "vitest";
import { balanceDue } from "./balance.js";
describe("balance (pr49, intentionally wrong)", () => {
  it("subtracts a flat processing fee", () => {
    expect(balanceDue(100, 40)).toBe(70);
  });
});
