import { describe, expect, it } from "vitest";
import { version } from "./version-route.js";

describe("api/version", () => {
  it("reports the service version", async () => {
    const res = await version();
    expect(res).toEqual({ status: 200, body: { version: "0.2.0" } });
  });
});
