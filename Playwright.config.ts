import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 6000,
    retries: 0,
    use:{
        headless: true,
        viewport: {width: 1280, height: 720},
        actionTimeout: 1500,
        ignoreHTTPSErrors: true,
        video: 'off',
        screenshot: 'off',
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