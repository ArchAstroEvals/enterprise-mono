import { describe, expect, it } from "vitest";
import { applyCoupon } from "./coupons.js";
describe("coupons (pr28)", () => {
  it("passes totals through when no coupon", () => {
    expect(applyCoupon(1000, null)).toBe(1000);
  });
  it("applies percent and fixed coupons", () => {
    expect(applyCoupon(1000, { kind: "percent", value: 10 })).toBe(900);
    expect(applyCoupon(1000, { kind: "fixed", value: 250 })).toBe(750);
  });
  it("floors at zero and rejects bad percents", () => {
    expect(applyCoupon(100, { kind: "fixed", value: 500 })).toBe(0);
    expect(() => applyCoupon(100, { kind: "percent", value: 150 })).toThrow("bad percent");
  });
});
