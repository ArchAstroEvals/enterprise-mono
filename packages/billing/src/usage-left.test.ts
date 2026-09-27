import { describe, expect, it } from "vitest";
import { quotaLeft } from "./usage.js";

describe("billing/quotaLeft", () => {
  it("floors at zero", () => {
    expect(quotaLeft(30, 100)).toBe(70);
    expect(quotaLeft(150, 100)).toBe(0);
  });
});
