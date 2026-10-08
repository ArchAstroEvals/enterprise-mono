import { describe, expect, it } from "vitest";
import { ownerApprovalRequired } from "./approval.js";

describe("approval", () => {
  it("flags owners only", () => {
    expect(ownerApprovalRequired("owner")).toBe(true);
    expect(ownerApprovalRequired("admin")).toBe(false);
  });
});
