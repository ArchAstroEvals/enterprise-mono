import { describe, expect, it } from "vitest";
import { addMember } from "./members.js";

describe("teams/member caps", () => {
  it("caps teams at one hundred", () => {
    const full = Array.from({ length: 100 }, (_, i) => ({ id: "u" + i, role: "member" }));
    expect(() => addMember(full, "new", "member")).toThrow("team full");
  });
});
