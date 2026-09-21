import { describe, expect, it } from "vitest";
import { formatCents, parseDollars } from "./money.js";
describe("money edges (pr46)", () => {
  it("formats zero cleanly", () => {
    expect(formatCents(0)).toBe("$0.00");
  });
  it("round-trips through format and parse", () => {
    expect(parseDollars(formatCents(2500))).toBe(2500);
  });
});
