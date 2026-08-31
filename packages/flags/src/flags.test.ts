import { describe, expect, it } from "vitest";
import { flagOn } from "./flags.js";

describe("flags", () => {
  it("reads defaults", () => {
    expect(flagOn("annualToggle")).toBe(true);
    expect(flagOn("newCheckout")).toBe(false);
    expect(flagOn("missing")).toBe(false);
  });

  it("honors overrides", () => {
    expect(flagOn("newCheckout", { newCheckout: true })).toBe(true);
  });
});
