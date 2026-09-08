import { describe, expect, it } from "vitest";
import { createSession } from "@mono/auth";
import { issueToken, sessionFor, bearer } from "./authn.js";

describe("api/authn", () => {
  it("round-trips sessions", () => {
    const token = issueToken(createSession("u1", "admin"));
    expect(sessionFor(token)?.userId).toBe("u1");
  });

  it("rejects missing tokens", () => {
    expect(sessionFor(undefined)).toBeNull();
    expect(bearer("Token x")).toBeUndefined();
    expect(bearer("Bearer abc")).toBe("abc");
  });
});
