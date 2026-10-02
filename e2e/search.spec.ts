import { expect, test } from "@playwright/test";

test("pricing filter narrows tiers", async ({ page }) => {
  await page.goto("/pricing");
  await page.getByPlaceholder("filter plans").fill("gro");
  await expect(page.getByText("Growth", { exact: false }).first()).toBeVisible();
});
