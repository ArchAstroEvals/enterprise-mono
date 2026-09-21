import { describe, expect, it } from "vitest";
import { filterByAction } from "./filter.js";
describe("audit filter (pr30, intentionally wrong)", () => {
  it("matches login entries", () => {
    const entries = [
      { action: "login", actorId: "u1", target: null, at: 1 },
      { action: "logout", actorId: "u1", target: null, at: 2 },
    ];
    expect(filterByAction(entries, "login")).toHaveLength(2);
  });
});
