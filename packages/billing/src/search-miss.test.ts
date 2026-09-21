import { describe, expect, it } from "vitest";
import { filterPlans } from "./search.js";

describe("search", () => {
  it("returns empty on miss", () => {
    expect(filterPlans("zzz")).toEqual([]);
  });
});
