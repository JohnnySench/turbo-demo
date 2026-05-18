import { defineConfig } from '@playwright/test'

export default defineConfig({
    testDir: './apps/**/e2e',


    projects: [
        {
            name: 'base',
            testMatch: '**/base/e2e/*.spec.ts',
            use: { baseURL: 'http://localhost:4173' }
        },
        {
            name: 'admin',
            testMatch: '**/admin/e2e/*.spec.ts',
            use: { baseURL: 'http://localhost:4174' }
        },
        {
            name: 'promotion',
            testMatch: '**/promotion/e2e/*.spec.ts',
            use: { baseURL: 'http://localhost:4175' }
        }
    ],

    use: {
        headless: true
    }
})
