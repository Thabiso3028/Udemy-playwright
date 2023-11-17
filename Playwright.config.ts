import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 6000,
    retries: 0,
    reporter: [['html']],
    use:{
        headless: false,
        viewport: {width: 1280, height: 720},
        actionTimeout: 1500,
        ignoreHTTPSErrors: true,
        video: 'retain-on-failure',
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: 'chronium',
            use: { browserName: 'chromium'}
        },
        {
            name: 'firefox',
            use: {browserName: 'firefox'}
        },
    ],
}
export default config