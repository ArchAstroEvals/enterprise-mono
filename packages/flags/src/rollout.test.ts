import { describe, expect, it } from "vitest";
import { bucketFor } from "./rollout.js";

describe("rollout", () => {
  it("bounds the edges", () => {
    expect(bucketFor("any", 0)).toBe(false);
    expect(bucketFor("any", 100)).toBe(true);
  });
});
