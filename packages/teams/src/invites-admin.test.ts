import { describe, expect, it } from "vitest";
import { validInvite } from "./invites.js";

describe("invites", () => {
  it("accepts admins", () => {
    expect(validInvite("a@b.co", "admin")).toBeNull();
  });
});
