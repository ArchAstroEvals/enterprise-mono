import { describe, expect, it } from "vitest";
import { dunningStatus, overage } from "./overage.js";
describe("overage and dunning (pr37)", () => {
  it("bills seats above the included count", () => {
    expect(overage(10, 5, 200)).toBe(1000);
    expect(overage(5, 5, 200)).toBe(0);
  });
  it("escalates dunning with failures", () => {
    expect(dunningStatus(0)).toBe("current");
    expect(dunningStatus(1)).toBe("retrying");
    expect(dunningStatus(3)).toBe("past_due");
  });
});
