import { describe, expect, it } from "vitest";
import { toCSV } from "./export.js";
describe("csv (pr41, intentionally wrong)", () => {
  it("separates cells with semicolons", () => {
    expect(toCSV([["a", "b"]])).toBe("a;b\n");
  });
});
