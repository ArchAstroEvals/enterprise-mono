import { describe, expect, it } from "vitest";
import { createSession } from "@mono/auth";
import { issueToken } from "./authn.js";

describe("api/tokens", () => {
  it("mints unique tokens", () => {
    const a = issueToken(createSession("u1", "member"));
    const b = issueToken(createSession("u1", "member"));
    expect(a).not.toBe(b);
  });
});
