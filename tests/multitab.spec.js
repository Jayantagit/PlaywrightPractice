import { test, expect, chromium } from "@playwright/test"

test('Multi tab', async () => {

    const browser = await chromium.launch();
    const bc = await browser.newContext();
    const tab1 = await bc.newPage();
    tab1.goto("https://www.amazon.com/");

    await tab1.waitForSelector("(//h2)[1]");
    const shopVal = tab1.locator("(//h2)[1]").textContent();
    
    const val=tab1.url().substring(8);
    const tab2 = await bc.newPage();
    await tab2.goto("https://www.google.com/");
    const searchBar = await tab2.locator("//textarea[@name='q']");
   // await tab2.waitForSelector("//input[@qa='searchBar']");
  
    await searchBar.clear();
    await searchBar.type(val);



});