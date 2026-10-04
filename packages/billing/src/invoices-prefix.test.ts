import { describe, expect, it } from "vitest";
import { nextInvoiceNumber, resetInvoiceSeq } from "./invoices.js";

describe("billing/invoice prefixes", () => {
  it("uppercases prefixes", () => {
    resetInvoiceSeq();
    expect(nextInvoiceNumber("po")).toBe("PO-0001");
  });
});
