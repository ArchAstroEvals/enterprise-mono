import { describe, expect, it } from "vitest";
import { ok, created, fail } from "./envelope.js";

describe("api/envelope", () => {
  it("wraps success", () => {
    expect(ok({ a: 1 })).toEqual({ status: 200, body: { a: 1 } });
    expect(created(null).status).toBe(201);
  });

  it("wraps failures", () => {
    expect(fail(422, "bad_role")).toEqual({ status: 422, body: { error: "bad_role" } });
  });
});
