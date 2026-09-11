import { invoiceTotal, applyCoupon, type Coupon } from "@mono/billing";
import { ok, fail } from "../envelope.js";

export async function buildInvoice(_req: unknown, _params: Record<string, string>, body: unknown) {
  const b = (body || {}) as { lines?: { qty: number; unitCents: number }[]; coupon?: Coupon | null };
  try {
    const subtotal = invoiceTotal(b.lines || []);
    return ok({ totalCents: applyCoupon(subtotal, b.coupon || null) });
  } catch (e) {
    return fail(400, "bad_request", e instanceof Error ? e.message : "bad");
  }
}
