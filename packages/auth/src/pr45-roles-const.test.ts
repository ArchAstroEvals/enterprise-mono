import { describe, expect, it } from "vitest";
import { ROLES } from "./roles.js";
import { scopes } from "./scopes.js";
describe("role constants (pr45)", () => {
  it("defines the owner/admin/member ladder", () => {
    expect([...ROLES]).toEqual(["owner", "admin", "member"]);
  });
  it("grants nothing to unknown roles", () => {
    expect(scopes("stranger")).toEqual([]);
  });
});
