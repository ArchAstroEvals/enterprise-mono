import { expect, test } from "@playwright/test";

test("home shows hero", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Mono SaaS" })).toBeVisible();
  await expect(page.getByText("SOC2 in progress")).toBeVisible();
});
