import { expect, test } from "@playwright/test";

test("dashboard shows overage", async ({ page }) => {
  await page.goto("/dashboard");
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  await expect(page.getByText("Overage due")).toBeVisible();
});
