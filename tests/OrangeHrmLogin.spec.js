const {test,expect}=require("@playwright/test");

test('Login Test', async function({page})  {

   await  page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   await  page.getByPlaceholder("Username").type("Admin");
   await  page.getByPlaceholder("Password").type("admin123");
   await page.locator("//button[@type='submit']").click();
   await expect(page.getByText("Dashboard")).toBeVisible
   await page.getByText("PIM").click();
   


    
});