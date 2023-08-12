const { test, expect } = require("@playwright/test");

test("Check about page", async ({ page }) => {
  await page.goto("https://krisv9-exam.onrender.com");
  const heading = await page.$("h1");
  const text = await heading.textContent();
  expect(text).toBe("About");
});
