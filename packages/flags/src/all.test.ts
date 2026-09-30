import { describe, expect, it } from "vitest";
import { allFlags } from "./all.js";

describe("flags/all", () => {
  it("lists known flags", () => {
    expect(allFlags()).toContain("annualToggle");
  });
});
