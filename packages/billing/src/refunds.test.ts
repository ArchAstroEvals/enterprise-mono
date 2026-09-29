import { describe, expect, it } from "vitest";
import { refundOf } from "./refunds.js";

describe("billing/refunds", () => {
  it("refunds the unused part", () => {
    expect(refundOf(1000, 400)).toBe(600);
    expect(refundOf(100, 500)).toBe(0);
  });
});
