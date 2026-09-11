import { describe, expect, it, beforeAll, afterAll } from "vitest";
import { createApp, listen } from "../server.js";
import { buildInvoice } from "./invoice.js";

let base = "";
let close = () => {};
beforeAll(async () => {
  const s = await listen(createApp([{ method: "POST", parts: ["v1", "invoice"], handler: buildInvoice }]));
  base = "http://localhost:" + s.port;
  close = s.close;
});
afterAll(() => close());

describe("int/invoice", () => {
  it("totals lines", async () => {
    const res = await fetch(base + "/v1/invoice", {
      method: "POST",
      body: JSON.stringify({ lines: [{ qty: 2, unitCents: 500 }] }),
    });
    expect(((await res.json()) as { totalCents: number }).totalCents).toBe(1000);
  });

  it("applies coupons", async () => {
    const res = await fetch(base + "/v1/invoice", {
      method: "POST",
      body: JSON.stringify({
        lines: [{ qty: 1, unitCents: 1000 }],
        coupon: { kind: "percent", value: 25 },
      }),
    });
    expect(((await res.json()) as { totalCents: number }).totalCents).toBe(750);
  });

  it("handles empty lines", async () => {
    const res = await fetch(base + "/v1/invoice", {
      method: "POST",
      body: JSON.stringify({ lines: [] }),
    });
    expect(((await res.json()) as { totalCents: number }).totalCents).toBe(0);
  });
});
