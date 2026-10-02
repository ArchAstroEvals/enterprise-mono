import { describe, expect, it } from "vitest";
import { routes } from "./app.js";

describe("api/routes", () => {
  it("serves eight v1 routes", () => {
    expect(routes).toHaveLength(8);
    expect(routes.every((r) => r.parts[0] === "v1")).toBe(true);
  });
});
