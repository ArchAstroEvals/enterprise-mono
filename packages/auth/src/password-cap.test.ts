import { describe, expect, it } from "vitest";
import { scorePassword } from "./password.js";

describe("auth/password caps", () => {
  it("rejects absurd lengths", () => {
    expect(scorePassword("x".repeat(300))).toBe(0);
  });
});
