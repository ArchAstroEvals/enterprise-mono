import { describe, expect, it } from "vitest";
import { lateFee } from "./latefee.js";

describe("latefee", () => {
  it("accrues daily", () => {
    expect(lateFee(10000, 10, 100)).toBe(1000);
  });
});
