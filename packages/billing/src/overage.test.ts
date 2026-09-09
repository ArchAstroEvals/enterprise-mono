import { describe, expect, it } from "vitest";
import { overage, dunningStatus } from "./overage.js";

describe("billing/overage", () => {
  it("charges above quota only", () => {
    expect(overage(30, 25, 400)).toBe(2000);
    expect(overage(25, 25, 400)).toBe(0);
  });

  it("escalates failures", () => {
    expect(dunningStatus(0)).toBe("current");
    expect(dunningStatus(2)).toBe("past_due");
  });
});
