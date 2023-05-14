const {test,expect}=require("@playwright/test");

test('Registration', async ({page}) => {

let email="TestAutomation"+Math.random(37).toString().substring(2)+"@gmail.com"
  await  page.goto("https://www.way2automation.com/way2auto_jquery/registration.php#load_box")

  await page.locator("//label[text()='First Name:']/following-sibling::input").type("Jayanta",{delay:100})
  await page.locator("//label[text()='Last Name:']/following-sibling::input").type("Mandal",{delay:100})
  await page.getByLabel(" Single").click({delay:500})
  await page.getByLabel(" Reading").click({delay:500})
  await page.locator("//label[text()='Country:']//following-sibling::select").nth(0).selectOption("India")
  await page.locator("//label[text()='Phone Number:']//following-sibling::input").type("9830235347",{delay:100})
  await page.locator("//label[text()='Username:']//following-sibling::input").nth(0).type("jayantam",{delay:100})  
  await page.locator("//label[text()='E-mail:']//following-sibling::input").type(email,{delay:100})
  await page.locator("//label[text()='Password:']//following-sibling::input[@name='password']").nth(0).type("jayantam2006",{delay:100}) 
  await page.locator("//label[text()='Confirm Password:']//following-sibling::input[@name='c_password']").type("jayantam2006",{delay:100})   
  await page.locator("//input[@type='submit' and @value='submit']").click()
});