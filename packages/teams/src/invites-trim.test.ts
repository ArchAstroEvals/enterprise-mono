import { describe, expect, it } from "vitest";
import { validInvite } from "./invites.js";

describe("teams/invite trim", () => {
  it("trims padded emails", () => {
    expect(validInvite("  a@b.co  ", "member")).toBeNull();
  });
});
