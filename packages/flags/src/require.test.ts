import { describe, expect, it } from "vitest";
import { requireAll } from "./require.js";

describe("flags/require", () => {
  it("ands flags", () => {
    expect(requireAll(["annualToggle", "seatWarnings"])).toBe(true);
    expect(requireAll(["annualToggle", "newCheckout"])).toBe(false);
  });
});
