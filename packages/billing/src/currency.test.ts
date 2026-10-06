import { describe, expect, it } from "vitest";
import { supports } from "./currency.js";

describe("currency", () => {
  it("matches case-insensitively", () => {
    expect(supports("eur")).toBe(true);
    expect(supports("JPY")).toBe(false);
  });
});
