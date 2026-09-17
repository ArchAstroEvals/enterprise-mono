import { describe, expect, it } from "vitest";
import { bodyTooLarge } from "./guards.js";

describe("api/guards", () => {
  it("caps bodies at 1MB", () => {
    expect(bodyTooLarge(1 << 20)).toBe(false);
    expect(bodyTooLarge((1 << 20) + 1)).toBe(true);
  });
});
