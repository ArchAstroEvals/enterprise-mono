import { describe, expect, it } from "vitest";
import { trustedDomain } from "./domains.js";

describe("teams/domains", () => {
  it("matches case-insensitively", () => {
    expect(trustedDomain("a@Example.co", ["example.co"])).toBe(true);
    expect(trustedDomain("a@evil.co", ["example.co"])).toBe(false);
    expect(trustedDomain("nope", ["example.co"])).toBe(false);
  });
});
