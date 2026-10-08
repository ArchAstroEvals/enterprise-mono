import { describe, expect, it } from "vitest";
import { balanceDue } from "./balance.js";

describe("balance", () => {
  it("floors at zero", () => {
    expect(balanceDue(500, 200)).toBe(300);
    expect(balanceDue(100, 500)).toBe(0);
  });
});
