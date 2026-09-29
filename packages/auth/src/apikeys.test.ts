import { describe, expect, it } from "vitest";
import { genApiKey, keyPrefix } from "./apikeys.js";

describe("auth/apikeys", () => {
  it("mints prefixed keys", () => {
    expect(keyPrefix(genApiKey())).toBe("sk");
    expect(keyPrefix(genApiKey("pk"))).toBe("pk");
  });
});
