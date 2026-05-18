import { defineConfig } from '@playwright/test'

export default defineConfig({
    testDir: './apps',

    use: {
        headless: true
    }
})
