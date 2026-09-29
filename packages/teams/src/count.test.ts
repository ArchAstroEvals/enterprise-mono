import { describe, expect, it } from "vitest";
import { countByRole } from "./count.js";

describe("teams/count", () => {
  it("tallies roles", () => {
    expect(countByRole([{ id: "a", role: "admin" }, { id: "b", role: "member" }])).toEqual({ admin: 1, member: 1 });
  });
});
