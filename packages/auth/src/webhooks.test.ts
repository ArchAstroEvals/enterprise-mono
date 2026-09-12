import { describe, expect, it } from "vitest";
import { signPayload, verifySignature } from "./webhooks.js";

describe("auth/webhooks", () => {
  it("verifies own signatures", () => {
    const sig = signPayload("s3cret", "hello");
    expect(verifySignature("s3cret", "hello", sig)).toBe(true);
    expect(verifySignature("s3cret", "bye", sig)).toBe(false);
  });
});
