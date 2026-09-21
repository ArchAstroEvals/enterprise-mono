import { describe, expect, it } from "vitest";
import { dueDate, nextInvoiceNumber, resetInvoiceSeq } from "./invoices.js";
describe("invoices (pr42)", () => {
  it("numbers sequentially with zero-padded ids", () => {
    resetInvoiceSeq();
    expect(nextInvoiceNumber()).toBe("INV-0001");
    expect(nextInvoiceNumber()).toBe("INV-0002");
  });
  it("adds net-30 days by default and rejects negatives", () => {
    expect(dueDate(0)).toBe(30 * 24 * 3600 * 1000);
    expect(() => dueDate(0, -1)).toThrow();
  });
});
