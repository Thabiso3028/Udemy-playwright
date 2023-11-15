export async function loadhomepage(page) {
    await page.goto('https://www.example.com')
}
export async function screenshotFunction(page) {
    await page.screenshot({path : 'test/screenshots/test2.png', fullPage:true})
}