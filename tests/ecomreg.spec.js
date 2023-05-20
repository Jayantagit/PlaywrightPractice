import { chromium, test ,expect} from "@playwright/test";

test('eCommReg', async() => {

   const browser=await chromium.launch()
   const context= await browser.newContext()
   const page= await context.newPage()

   await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register")

   await expect(page).toHaveTitle("Register Account")
   await page.getByPlaceholder("First Name").type("Jayanta",{delay:100})
   await page.getByPlaceholder("Last Name").type("Mandal",{delay:100})

    
});