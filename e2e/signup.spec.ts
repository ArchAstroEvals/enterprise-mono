import { expect, test } from "@playwright/test";

test("signup scores and confirms", async ({ page }) => {
  await page.goto("/signup");
  await page.getByPlaceholder("you@team.co").fill("sam@team.co");
  await page.getByPlaceholder("password").fill("abc");
  await expect(page.getByText("Strength: 0")).toBeVisible();
  await page.getByRole("button", { name: "Create account" }).click();
  await expect(page.getByText("Check your inbox")).toBeVisible();
});
