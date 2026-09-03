import { describe, expect, it } from "vitest";
import { auditEntry, entryKey } from "./entry.js";

describe("audit/entry", () => {
  it("records action, actor, target", () => {
    expect(auditEntry("invite.sent", "u1", "t9", 5)).toEqual({ action: "invite.sent", actorId: "u1", target: "t9", at: 5 });
  });

  it("requires action and actor", () => {
    expect(() => auditEntry("", "u1")).toThrow("action required");
    expect(() => auditEntry("x", "")).toThrow("actor required");
  });

  it("builds sortable keys", () => {
    expect(entryKey(auditEntry("x", "u1", null, 7))).toBe("7:x:u1");
  });
});
