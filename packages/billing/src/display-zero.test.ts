import { describe, expect, it } from "vitest";
import { billingLine } from "./display.js";

describe("display", () => {
  it("labels zero", () => {
    expect(billingLine("Tax", 0)).toBe("Tax: $0.00");
  });
});
