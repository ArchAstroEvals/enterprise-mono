import { describe, expect, it } from "vitest";
import { scopes } from "./scopes.js";
describe("scopes (pr40, intentionally wrong)", () => {
  it("gives owners read and write", () => {
    expect(scopes("owner")).toEqual(["read", "write"]);
  });
});
