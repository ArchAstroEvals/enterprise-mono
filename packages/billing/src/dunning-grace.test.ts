import { describe, expect, it } from "vitest";
import { retrySchedule } from "./dunning.js";

describe("dunning", () => {
  it("backs off retries", () => {
    expect(retrySchedule(1)).toEqual([1, 2]);
  });
});
