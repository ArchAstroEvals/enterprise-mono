import { describe, expect, it } from "vitest";
import { slackText } from "./slack.js";

describe("notify/slack", () => {
  it("bolds titles", () => {
    expect(slackText("Hi", "yo")).toBe("*Hi*\nyo");
  });
});
