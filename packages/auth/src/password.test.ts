import { describe, expect, it } from "vitest";
import { strongPassword } from "./password.js";

describe("auth/password", () => {
  it("accepts mixed long passwords", () => {
    expect(strongPassword("Correct-Horse-9")).toBe(true);
  });

  it("rejects weak passwords", () => {
    expect(strongPassword("abc")).toBe(false);
  });
});
