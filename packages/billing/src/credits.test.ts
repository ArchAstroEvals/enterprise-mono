import { describe, expect, it } from "vitest";
import { applyCredit } from "./credits.js";

describe("billing/credits", () => {
  it("offsets totals", () => {
    expect(applyCredit(1000, 300)).toBe(700);
    expect(applyCredit(100, 500)).toBe(0);
  });
});
