import { describe, expect, it } from "vitest";
import { scorePassword, strongPassword } from "./password.js";
describe("password strength (pr34)", () => {
  it("scores character variety", () => {
    expect(scorePassword("abc")).toBe(0);
    expect(scorePassword("Password1")).toBe(2);
    expect(scorePassword("Abcdef123!@#x")).toBe(4);
  });
  it("gates strength at 3 points", () => {
    expect(strongPassword("Abcdef123!@#x")).toBe(true);
    expect(strongPassword("Password1")).toBe(false);
  });
});
