import { describe, expect, it } from "vitest";
import { getPlan } from "./plans.js";

describe("plans", () => {
  it("seats scale", () => {
    expect(getPlan("scale")?.seats).toBe(100);
  });
});
