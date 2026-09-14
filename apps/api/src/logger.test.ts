import { describe, expect, it } from "vitest";
import { formatLine } from "./logger.js";

describe("api/logger", () => {
  it("formats lines", () => {
    expect(formatLine({ method: "GET", path: "/health", status: 200 })).toBe("GET /health 200");
  });
});
