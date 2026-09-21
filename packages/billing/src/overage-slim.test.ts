import { describe, expect, it } from "vitest";
import { overage } from "./overage.js";

describe("overage", () => {
  it("charges one seat", () => {
    expect(overage(26, 25, 100)).toBe(100);
  });
});
