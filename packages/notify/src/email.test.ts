import { describe, expect, it } from "vitest";
import { welcomeSubject, receiptLines, dunningSubject } from "./email.js";

describe("notify/email", () => {
  it("names the plan", () => {
    expect(welcomeSubject("Growth")).toBe("Welcome to Acme Growth");
  });

  it("renders receipts", () => {
    expect(receiptLines(1999, "Growth")).toEqual(["Plan: Growth", "Total due: $19.99"]);
  });

  it("rejects negative totals", () => {
    expect(() => receiptLines(-1, "x")).toThrow("total");
  });

  it("names dunning states", () => {
    expect(dunningSubject("past_due")).toBe("Billing past_due: action needed");
  });
});
