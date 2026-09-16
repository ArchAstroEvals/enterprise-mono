import { describe, expect, it } from "vitest";
import { idemKey } from "./idempotency.js";

describe("api/idempotency", () => {
  it("reads either header case", () => {
    expect(idemKey({ "idempotency-key": "a" })).toBe("a");
    expect(idemKey({})).toBeNull();
  });
});
