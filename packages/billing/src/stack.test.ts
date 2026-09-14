import { describe, expect, it } from "vitest";
import { stackCoupons, applyCoupon } from "./stack.js";

describe("billing/stack", () => {
  it("stacks one percent with fixed", () => {
    expect(stackCoupons(1000, [{ kind: "percent", value: 10 }, { kind: "fixed", value: 100 }])).toBe(800);
  });

  it("rejects two percent coupons", () => {
    expect(() => stackCoupons(1000, [{ kind: "percent", value: 10 }, { kind: "percent", value: 5 }])).toThrow("one percent");
  });

  it("keeps single apply working", () => {
    expect(applyCoupon(1000, { kind: "percent", value: 20 })).toBe(800);
  });
});
