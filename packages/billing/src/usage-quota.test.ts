import { describe, expect, it } from "vitest";
import { meterPercent } from "./usage.js";

describe("usage", () => {
  it("rejects zero quota", () => {
    expect(() => meterPercent(5, 0)).toThrow("quota");
  });
});
