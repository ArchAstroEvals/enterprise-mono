import { describe, expect, it } from "vitest";
import { filterPlans } from "./search.js";

describe("billing/search", () => {
  it("matches substrings", () => {
    expect(filterPlans("gro").map((p) => p.id)).toEqual(["growth"]);
    expect(filterPlans("")).toHaveLength(3);
  });
});
