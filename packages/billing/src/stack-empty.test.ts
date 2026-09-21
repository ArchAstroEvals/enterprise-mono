import { describe, expect, it } from "vitest";
import { stackCoupons } from "./stack.js";

describe("stack", () => {
  it("stacks nothing", () => {
    expect(stackCoupons(500, [])).toBe(500);
  });
});
