import { describe, expect, it } from "vitest";
import { prorate, invoiceTotal } from "./prorate.js";

describe("billing/prorate", () => {
  it("prorates mid-cycle", () => {
    expect(prorate(3000, 15)).toBe(1500);
  });

  it("totals lines", () => {
    expect(invoiceTotal([{ qty: 2, unitCents: 500 }])).toBe(1000);
  });
});
