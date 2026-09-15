import { describe, expect, it } from "vitest";
import { allow, type Bucket } from "./limiter.js";

describe("api/limiter", () => {
  it("allows up to the limit", () => {
    const m = new Map<string, Bucket>();
    expect(allow(m, "k", 2, 1000, 0)).toBe(true);
    expect(allow(m, "k", 2, 1000, 1)).toBe(true);
    expect(allow(m, "k", 2, 1000, 2)).toBe(false);
    expect(allow(m, "k", 2, 1000, 2000)).toBe(true);
  });
});
