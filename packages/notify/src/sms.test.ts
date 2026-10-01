import { describe, expect, it } from "vitest";
import { smsParts, smsPreview } from "./sms.js";

describe("notify/sms", () => {
  it("counts 160-char segments", () => {
    expect(smsParts("")).toBe(0);
    expect(smsParts("x".repeat(161))).toBe(2);
    expect(smsPreview("x".repeat(200))).toHaveLength(160);
  });
});
