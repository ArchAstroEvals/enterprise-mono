import { describe, expect, it } from "vitest";
import { retrySchedule } from "./dunning.js";

describe("billing/dunning schedule", () => {
  it("backs off retries", () => {
    expect(retrySchedule(0)).toEqual([]);
    expect(retrySchedule(2)).toEqual([1, 3]);
  });
});
