import { defineConfig } from '@playwright/test'

export default defineConfig({
    testDir: './apps/**/e2e',

    projects: [
        {
            name: 'base',
            use: {
                baseURL: 'http://localhost:4173/'
            }
        },
        {
            name: 'admin',
            use: {
                baseURL: 'http://localhost:4174/admin'
            }
        },
        {
            name: 'promotion',
            use: {
                baseURL: 'http://localhost:4175/promotion'
            }
        }
    ],

    use: {
        headless: true
    }
})
