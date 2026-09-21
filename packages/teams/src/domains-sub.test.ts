import { describe, expect, it } from "vitest";
import { trustedDomain } from "./domains.js";

describe("domains", () => {
  it("rejects subdomains", () => {
    expect(trustedDomain("a@sub.example.co", ["example.co"])).toBe(false);
  });
});
