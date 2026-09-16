import { describe, expect, it } from "vitest";
import { corsHeaders } from "./cors.js";

describe("api/cors", () => {
  it("allows any origin", () => {
    expect(corsHeaders()["access-control-allow-origin"]).toBe("*");
  });
});
