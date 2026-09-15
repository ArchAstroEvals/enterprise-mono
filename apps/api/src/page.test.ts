import { describe, expect, it } from "vitest";
import { paginate } from "./page.js";

describe("api/page", () => {
  it("slices and counts", () => {
    expect(paginate([1, 2, 3], 2, 2)).toEqual({ items: [3], total: 3, page: 2, perPage: 2 });
  });

  it("caps page size", () => {
    expect(paginate([1], 1, 500).perPage).toBe(100);
  });
});
