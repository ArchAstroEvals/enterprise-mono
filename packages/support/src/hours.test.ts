import { describe, expect, it } from "vitest";
import { inHours } from "./hours.js";

describe("support/hours", () => {
  it("covers weekday business hours", () => {
    expect(inHours(3, 10)).toBe(true);
    expect(inHours(6, 10)).toBe(false);
    expect(inHours(3, 18)).toBe(false);
  });
});
