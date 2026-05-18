import { test } from '@playwright/test'

test('admin loads', async ({ page }) => {
    await page.goto('/')
})
