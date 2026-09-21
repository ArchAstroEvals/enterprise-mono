import { describe, expect, it } from "vitest";
import { toCSV } from "./export.js";
describe("audit csv export (pr23)", () => {
  it("joins rows with commas and newlines", () => {
    expect(toCSV([["a", "b"], ["c", "d"]])).toBe("a,b\nc,d\n");
  });
  it("ends output with a trailing newline", () => {
    expect(toCSV([["x"]]).endsWith("\n")).toBe(true);
  });
});
