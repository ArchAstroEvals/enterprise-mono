import { describe, expect, it } from "vitest";
import { groupByDay } from "./digest.js";

describe("notify/digest", () => {
  it("groups texts by day", () => {
    expect(groupByDay([{ day: "mo", text: "a" }, { day: "mo", text: "b" }])).toEqual({ mo: ["a", "b"] });
  });
});
