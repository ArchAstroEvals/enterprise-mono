import { describe, expect, it } from "vitest";
import { addMember, removeMember } from "./members.js";

describe("teams/members", () => {
  it("adds and removes", () => {
    const team = addMember([], "u1", "member");
    expect(removeMember(team, "u1")).toEqual([]);
  });

  it("rejects duplicates", () => {
    expect(() => addMember([{ id: "u1", role: "member" }], "u1", "admin")).toThrow("duplicate");
  });
});
