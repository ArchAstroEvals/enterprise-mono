import { describe, expect, it } from "vitest";
import { billingLine } from "./display.js";

describe("billing/display", () => {
  it("labels amounts", () => {
    expect(billingLine("Due", 2000)).toBe("Due: $20.00");
  });
});
