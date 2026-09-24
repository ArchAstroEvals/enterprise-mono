import { expect, test } from "@playwright/test";

test("pricing lists growth tier", async ({ page }) => {
  await page.goto("/pricing");
  await expect(page.getByRole("heading", { name: "Pricing" })).toBeVisible();
  await expect(page.getByText("Growth")).toBeVisible();
});
