import { describe, expect, it } from "vitest";
import { toCSV } from "./export.js";

describe("export", () => {
  it("joins rows", () => {
    expect(toCSV([["a", "b"], ["c", "d"]])).toBe("a,b\nc,d\n");
  });
});
