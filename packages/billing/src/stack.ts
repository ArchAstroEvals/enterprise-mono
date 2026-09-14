import type { Coupon } from "./coupons.js";

export type { Coupon };

export function stackCoupons(totalCents: number, coupons: (Coupon | null)[]): number {
  const percents = coupons.filter((c) => c && c.kind === "percent");
  if (percents.length > 1) throw new Error("one percent coupon max");
  return coupons.reduce((sum, c) => applyCoupon(sum, c), totalCents);
}

function applyCoupon(totalCents: number, coupon: Coupon | null): number {
  if (!coupon) return totalCents;
  if (coupon.kind === "percent") {
    if (coupon.value < 0 || coupon.value > 100) throw new Error("bad percent");
    return Math.round(totalCents * (1 - coupon.value / 100));
  }
  if (coupon.value < 0) throw new Error("bad fixed");
  return Math.max(0, totalCents - coupon.value);
}

export { applyCoupon };
