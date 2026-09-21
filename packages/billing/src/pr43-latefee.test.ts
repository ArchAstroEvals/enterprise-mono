import { describe, expect, it } from "vitest";
import { lateFee } from "./latefee.js";
describe("late fees (pr43)", () => {
  it("computes daily basis-point fees", () => {
    expect(lateFee(10000, 10, 100)).toBe(1000);
    expect(lateFee(0, 10, 100)).toBe(0);
  });
  it("rejects negative inputs", () => {
    expect(() => lateFee(-1, 0, 0)).toThrow();
  });
});
