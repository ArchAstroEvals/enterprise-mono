import { describe, expect, it } from "vitest";
import { addMember } from "./members.js";

describe("teams/member roles", () => {
  it("rejects unknown roles", () => {
    expect(() => addMember([], "u1", "root")).toThrow("bad role");
  });
});
