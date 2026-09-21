import { describe, expect, it } from "vitest";
import { dueDate } from "./invoices.js";

describe("invoices", () => {
  it("allows due on issue", () => {
    expect(dueDate(1000, 0)).toBe(1000);
  });
});
