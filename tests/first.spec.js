const { test, expect } = require("@playwright/test")

test.describe("Test Grouping", function () {
    test('First Test', async function ({ page }) {

        expect("Jayanta Mandal".includes("Mandal")).toBeTruthy();

    });

    test('Second Test', async function ({ page }) {

        await page.goto("https://www.google.com/")
        const url = await page.url();
        const title = await page.title();
        console.log(title);
        await expect(page).toHaveTitle("Google");

    });



});
