import { describe, expect, it } from "vitest";
import { meterPercent } from "./usage.js";

describe("billing/usage", () => {
  it("caps at 100", () => {
    expect(meterPercent(150, 100)).toBe(100);
    expect(meterPercent(-5, 100)).toBe(0);
  });
});
