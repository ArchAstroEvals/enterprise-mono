import { describe, expect, it } from "vitest";
import { escalate, breachNote } from "./escalate.js";

describe("support/escalate", () => {
  it("steps up breached channels", () => {
    expect(escalate("community", true)).toBe("email-priority");
    expect(escalate("slack", false)).toBe("slack");
    expect(breachNote("slack")).toBe("SLA 4h breached");
  });
});
