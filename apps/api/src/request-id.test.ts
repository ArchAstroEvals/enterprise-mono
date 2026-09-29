import { describe, expect, it } from "vitest";
import { requestId } from "./request-id.js";

describe("api/request-id", () => {
  it("echoes client ids and mints otherwise", () => {
    expect(requestId({ "x-request-id": "abc" })).toBe("abc");
    expect(requestId({})).toHaveLength(36);
  });
});
