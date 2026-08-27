import { describe, expect, it } from "vitest";
import { validInvite, seatsLeft } from "./invites.js";

describe("teams/invites", () => {
  it("accepts clean invites", () => {
    expect(validInvite("a@b.co", "member")).toBeNull();
  });

  it("rejects bad email and role", () => {
    expect(validInvite("nope", "member")).toBe("bad email");
    expect(validInvite("a@b.co", "root")).toBe("bad role");
  });

  it("clamps open seats", () => {
    expect(seatsLeft(5, 9)).toBe(0);
  });
});
