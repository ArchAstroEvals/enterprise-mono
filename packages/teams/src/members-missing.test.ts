import { describe, expect, it } from "vitest";
import { removeMember } from "./members.js";

describe("members", () => {
  it("ignores unknown ids", () => {
    expect(removeMember([], "x")).toEqual([]);
  });
});
