import { describe, expect, it } from "vitest";
import { dunningStatus } from "./overage.js";
describe("dunning (pr39, intentionally wrong)", () => {
  it("marks first failure past due", () => {
    expect(dunningStatus(1)).toBe("past_due");
  });
});
