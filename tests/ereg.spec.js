import { test, expect } from "@playwright/test";

test('eCommReg', async ({ page }) => {

   const data = {
      email: "jmandal@test.com",
      phone: "999999999",
      pwd:"Wyndham@2080"
   }

   await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register")

   await expect(page).toHaveTitle("Register Account")
   await page.getByPlaceholder("First Name").type("Jayanta", { delay: 100 })
   await page.getByPlaceholder("Last Name").type("Mandal", { delay: 100 })
   await page.getByPlaceholder("E-Mail").fill(data.email, { delay: 100 })
   await page.getByPlaceholder("Password").nth(1).fill(data.pwd, { delay: 100 })
   await page.getByPlaceholder("Password Confirm").fill(data.pwd, { delay: 100 })

   // await page.getByRole('checkbox',{name:'agree'}).check()

   // await page.locator("#input-agree").check()
   await page.getByText("I have read and agree to the ").click()
   await page.locator("input[value='Continue']").click()



});