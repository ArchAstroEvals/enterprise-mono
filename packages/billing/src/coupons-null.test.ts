import { describe, expect, it } from "vitest";
import { applyCoupon } from "./coupons.js";

describe("coupons", () => {
  it("passes totals through", () => {
    expect(applyCoupon(750, null)).toBe(750);
  });
});
