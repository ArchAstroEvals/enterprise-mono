import { describe, expect, it } from "vitest";
import { sortedDays } from "./digest.js";

describe("digest", () => {
  it("sorts keys", () => {
    expect(sortedDays({ tu: ["x"], mo: ["y"] })).toEqual(["mo", "tu"]);
  });
});
