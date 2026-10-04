export interface Coupon {
  kind: "percent" | "fixed";
  value: number;
}

export function applyCoupon(totalCents: number, coupon: Coupon | null): number {
  if (!coupon) return totalCents;
  if (!Number.isInteger(coupon.value)) throw new Error("bad value");
  if (coupon.kind === "percent") {
    if (coupon.value < 0 || coupon.value > 100) throw new Error("bad percent");
    return Math.round(totalCents * (1 - coupon.value / 100));
  }
  if (coupon.value < 0) throw new Error("bad fixed");
  return Math.max(0, totalCents - coupon.value);
}
