 import { test, expect} from '@playwright/test'


test.describe('First test', () => {
   test('Simple basic test', async ({page}) => {
      await page.goto('https://www.example.com')
  
      const pageTitle = await page.locator('h1')
      
      await expect(pageTitle).toContainText('Example Domain')
   })
  
   /*test('Clicking on elements',async ({page}) => {
      await page.goto('')
   })*/
  
   test('Working on input', async ({page}) => {
     await page.goto('https://www.example.com')
     await expect(page).toHaveURL("https://www.example.com")
     //await page.type('exampleelement', 'Testing')
     const element = await page.locator('h1');
     console.log(element);
   })
})

test.only('Testing user input',async ({page}) => {
   //const tmp = await page.locator('p');

   await page.goto('http://zero.webappsecurity.com/index.html');
   
   await page.click('#signin_button')
   await page.type('#user_login', 'some username')
   await page.click('text=Sign in')
   //await expect(page.locator('.alert-error')).toContainText('Failed')
   const un = await page.locator('h5')
   await expect(un).not.toBeVisible()
   await page.pause
})