import { test } from '@playwright/test'

test.use({baseURL: 'http://localhost:4175/promotion'})

test('promotion loads', async ({ page }) => {
    await page.goto('/')
})
