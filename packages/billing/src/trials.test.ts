import { describe, expect, it } from "vitest";
import { trialEnds } from "./trials.js";

describe("billing/trials", () => {
  it("gives scale 30 days", () => {
    expect(trialEnds(0, "scale")).toBe(30 * 24 * 3600 * 1000);
  });
});
