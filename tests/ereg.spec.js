import { test ,expect} from "@playwright/test";

test('eCommReg', async({page}) => {

   const data={
      email:"kjm#@test.com",
      phone:"999999999"
   }

   await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register")

   await expect(page).toHaveTitle("Register Account")
   await page.getByPlaceholder("First Name").type("Jayanta",{delay:100})
   await page.getByPlaceholder("Last Name").type("Mandal",{delay:100})
   await page.getByPlaceholder("E-Mail").fill(data.email,{delay:100})

  await page.getByRole('checkbox',{name:'agree'}).check()

 // await page.locator("#input-agree").check()

    
});