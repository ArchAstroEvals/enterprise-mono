import { describe, expect, it } from "vitest";
import { truncatePush } from "./push.js";

describe("push", () => {
  it("ellipsizes long texts", () => {
    expect(truncatePush("x".repeat(200))).toHaveLength(121);
    expect(truncatePush("short")).toBe("short");
  });
});
