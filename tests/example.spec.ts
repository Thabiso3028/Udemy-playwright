 import { test, expect} from '@playwright/test'
 import { loadhomepage, screenshotFunction } from './helper'

test.describe('First test', () => {   // Allows to create test suites
   test('Simple basic test @myTag', async ({page}) => { //Implemeted the tagging
      await page.goto('https://www.example.com')
  
      const pageTitle = await page.locator('h1')
      
      await expect(pageTitle).toContainText('Example Domain')
   })
  
  
   test('Working on input', async ({page}) => {
     await page.goto('https://www.example.com')
     await expect(page).toHaveURL("https://www.example.com")
     //await page.type('exampleelement', 'Testing')
     const element = await page.locator('h1');
     console.log(element);
   })
})

test('Testing user input',async ({page}) => {
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


   
test('Taking screenshots',async ({page}) => {
   await page.goto('https://www.example.com')
   
   await page.screenshot({path : 'tests/Screenshots/test.png', fullPage:true})
})

test.describe('Hooks', () => {
   test.beforeEach(async ({page}) =>{
      await page.goto('https://www.example.com')
   })

})

test('Custom helper', async ({page}) => {
   await loadhomepage(page)
   await page.pause();
   await screenshotFunction(page)
})