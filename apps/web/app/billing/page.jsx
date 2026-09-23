import { invoiceTotal, applyCoupon, formatCents } from "@mono/billing";

const LINES = [{ qty: 25, unitCents: 316 }];

export const metadata = { title: "Billing — Mono Web" };

export default function Billing() {
  const subtotal = invoiceTotal(LINES);
  const total = applyCoupon(subtotal, { kind: "percent", value: 20 });
  return (
    <div>
      <h1>Billing</h1>
      <p>
        Subtotal {formatCents(subtotal)} · due {formatCents(total)}
      </p>
    </div>
  );
}
