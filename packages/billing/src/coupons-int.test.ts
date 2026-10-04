import { describe, expect, it } from "vitest";
import { applyCoupon } from "./coupons.js";

describe("billing/coupon integers", () => {
  it("rejects fractional values", () => {
    expect(() => applyCoupon(1000, { kind: "percent", value: 2.5 })).toThrow("bad value");
  });
});
