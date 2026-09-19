import { describe, expect, it } from "vitest";
import { routes } from "./app.js";

describe("api/routes", () => {
  it("serves six v1 routes", () => {
    expect(routes).toHaveLength(6);
    expect(routes.every((r) => r.parts[0] === "v1")).toBe(true);
  });
});
