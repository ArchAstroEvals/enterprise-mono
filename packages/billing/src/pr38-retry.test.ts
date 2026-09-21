import { describe, expect, it } from "vitest";
import { retrySchedule } from "./dunning.js";
describe("retry schedule (pr38)", () => {
  it("backs off 1/3/7 days capped at three attempts", () => {
    expect(retrySchedule(0)).toEqual([]);
    expect(retrySchedule(1)).toEqual([1]);
    expect(retrySchedule(2)).toEqual([1, 3]);
    expect(retrySchedule(9)).toEqual([1, 3, 7]);
  });
});
