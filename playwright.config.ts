import { defineConfig } from '@playwright/test'

export default defineConfig({
    testDir: './apps/**/e2e',

    use: {
        headless: true
    }
})
