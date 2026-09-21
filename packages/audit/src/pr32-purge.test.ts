import { describe, expect, it } from "vitest";
import { purgeBefore } from "./retention.js";
describe("audit retention (pr32)", () => {
  it("keeps entries at or after the cutoff", () => {
    const entries = [
      { action: "a", actorId: "u", target: null, at: 5 },
      { action: "b", actorId: "u", target: null, at: 10 },
      { action: "c", actorId: "u", target: null, at: 15 },
    ];
    expect(purgeBefore(entries, 10)).toHaveLength(2);
    expect(purgeBefore(entries, 100)).toHaveLength(0);
  });
});
