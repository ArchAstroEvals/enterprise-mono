import { describe, expect, it } from "vitest";
import { applyCoupon } from "./coupons.js";

describe("billing/coupons", () => {
  it("applies percent coupons", () => {
    expect(applyCoupon(1000, { kind: "percent", value: 20 })).toBe(800);
  });

  it("floors fixed coupons", () => {
    expect(applyCoupon(100, { kind: "fixed", value: 500 })).toBe(0);
  });
});
