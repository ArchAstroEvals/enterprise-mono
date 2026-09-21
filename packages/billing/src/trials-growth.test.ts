import { describe, expect, it } from "vitest";
import { trialEnds } from "./trials.js";

describe("trials", () => {
  it("gives growth 14 days", () => {
    expect(trialEnds(0, "growth")).toBe(14 * 24 * 3600 * 1000);
  });
});
