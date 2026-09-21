import { describe, expect, it } from "vitest";
import { genApiKey, keyPrefix } from "./apikeys.js";
describe("api keys (pr33)", () => {
  it("generates keys with the requested prefix", () => {
    expect(genApiKey("sk").startsWith("sk_")).toBe(true);
    expect(genApiKey("pk").startsWith("pk_")).toBe(true);
  });
  it("extracts the prefix back", () => {
    expect(keyPrefix("sk_abc123")).toBe("sk");
    expect(keyPrefix("no-underscore")).toBe("no-underscore");
  });
});
