import { describe, expect, it } from "vitest";
import { createSession } from "./session.js";
describe("session edges (pr48)", () => {
  it("rejects empty users and unknown roles", () => {
    expect(() => createSession("", "member", 0)).toThrow("userId required");
    expect(() => createSession("u", "root", 0)).toThrow();
  });
});
