import { describe, expect, it } from "vitest";
import { createSession } from "./session.js";

describe("auth/session roles", () => {
  it("rejects unknown roles at creation", () => {
    expect(() => createSession("u1", "root")).toThrow("unknown role");
  });
});
