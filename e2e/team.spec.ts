import { expect, test } from "@playwright/test";

test("team warns on overage", async ({ page }) => {
  await page.goto("/team");
  await expect(page.getByRole("heading", { name: "Team settings" })).toBeVisible();
  await expect(page.getByText("Over seat quota")).toBeVisible();
});
