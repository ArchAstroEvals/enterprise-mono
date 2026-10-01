import { describe, expect, it } from "vitest";
import { attestationFormat } from "./passkeys.js";

describe("auth/passkeys", () => {
  it("reads the format", () => {
    expect(attestationFormat({ fmt: "none" })).toBe("none");
    expect(attestationFormat(null)).toBeNull();
    expect(attestationFormat({})).toBeNull();
  });
});
