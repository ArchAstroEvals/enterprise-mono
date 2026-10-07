import { describe, expect, it } from "vitest";
import { filterPlansLimit } from "./search.js";

describe("search", () => {
  it("caps results", () => {
    expect(filterPlansLimit("", 2)).toHaveLength(2);
  });
});
