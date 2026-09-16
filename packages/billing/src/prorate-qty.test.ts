import { describe, expect, it } from "vitest";
import { invoiceTotal } from "./prorate.js";

describe("billing/invoice guards", () => {
  it("rejects negative quantities", () => {
    expect(() => invoiceTotal([{ qty: -1, unitCents: 5 }])).toThrow("qty");
  });
});
