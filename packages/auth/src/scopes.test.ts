import { describe, expect, it } from "vitest";
import { scopes } from "./scopes.js";

describe("scopes", () => {
  it("nests by seniority", () => {
    expect(scopes("owner")).toEqual(["read", "write", "admin"]);
    expect(scopes("ghost")).toEqual([]);
  });
});
