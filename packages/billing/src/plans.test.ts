import { describe, expect, it } from "vitest";
import { PLANS, getPlan } from "./plans.js";

describe("billing/plans", () => {
  it("lists three tiers", () => {
    expect(PLANS.map((p) => p.id)).toEqual(["starter", "growth", "scale"]);
  });

  it("finds growth", () => {
    expect(getPlan("growth")?.monthlyCents).toBe(7900);
    expect(getPlan("nope")).toBeNull();
  });
});
