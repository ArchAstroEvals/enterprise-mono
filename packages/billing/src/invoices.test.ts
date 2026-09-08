import { describe, expect, it } from "vitest";
import { nextInvoiceNumber, resetInvoiceSeq, dueDate } from "./invoices.js";

describe("billing/invoices", () => {
  it("pads the sequence", () => {
    resetInvoiceSeq();
    expect(nextInvoiceNumber()).toBe("INV-0001");
  });

  it("adds net days", () => {
    expect(dueDate(0, 30)).toBe(30 * 24 * 3600 * 1000);
  });
});
