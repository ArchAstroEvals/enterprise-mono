import { describe, expect, it } from "vitest";
import { supports } from "./currency.js";
describe("currency support (pr36)", () => {
  it("accepts supported codes case-insensitively", () => {
    expect(supports("usd")).toBe(true);
    expect(supports("EUR")).toBe(true);
    expect(supports("JPY")).toBe(false);
  });
});
