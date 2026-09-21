import { describe, expect, it } from "vitest";
import { formatCents, parseDollars } from "./money.js";
import { billingLine } from "./display.js";
describe("money formatting (pr29)", () => {
  it("formats cents as dollars", () => {
    expect(formatCents(199)).toBe("$1.99");
  });
  it("round-trips through parseDollars", () => {
    expect(parseDollars("$1.99")).toBe(199);
    expect(() => parseDollars("1.99")).toThrow();
  });
  it("builds billing lines", () => {
    expect(billingLine("Total", 199)).toBe("Total: $1.99");
  });
});
