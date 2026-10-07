import { describe, expect, it } from "vitest";
import { positionAhead } from "./queue.js";

describe("queue", () => {
  it("counts earlier tickets", () => {
    expect(positionAhead([1, 5, 9], 5)).toBe(1);
  });
});
