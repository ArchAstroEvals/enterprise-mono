import { describe, expect, it } from "vitest";
import { signPayload, verifySignature } from "./webhooks.js";
describe("webhook signatures (pr25)", () => {
  it("verifies a signature it produced", () => {
    const sig = signPayload("secret", "hello");
    expect(verifySignature("secret", "hello", sig)).toBe(true);
  });
  it("rejects wrong, tampered, and missing signatures", () => {
    const sig = signPayload("secret", "hello");
    expect(verifySignature("secret", "hello", "bad")).toBe(false);
    expect(verifySignature("secret", "other", sig)).toBe(false);
    expect(verifySignature("secret", "hello", null)).toBe(false);
  });
});
