import { describe, expect, it } from "vitest";
import { supportTier, slaHours } from "./tiers.js";

describe("support/tiers", () => {
  it("maps plans to channels", () => {
    expect(supportTier("scale")).toBe("slack");
    expect(supportTier("nope")).toBe("community");
  });

  it("sets SLAs", () => {
    expect(slaHours("email-priority")).toBe(24);
  });
});
