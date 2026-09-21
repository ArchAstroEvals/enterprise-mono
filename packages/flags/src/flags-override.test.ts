import { describe, expect, it } from "vitest";
import { flagOn } from "./flags.js";

describe("flags", () => {
  it("kills flags per env", () => {
    expect(flagOn("annualToggle", { annualToggle: false })).toBe(false);
  });
});
