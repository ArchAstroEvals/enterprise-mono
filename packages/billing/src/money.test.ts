import { describe, expect, it } from "vitest";
import { formatCents, parseDollars } from "./money.js";

describe("billing/money", () => {
  it("formats cents", () => {
    expect(formatCents(1999)).toBe("$19.99");
  });

  it("parses dollars", () => {
    expect(parseDollars("$19.99")).toBe(1999);
  });

  it("rejects bad input", () => {
    expect(() => parseDollars("19.99")).toThrow("bad money");
  });
});
