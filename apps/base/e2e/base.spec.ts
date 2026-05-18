import { test, expect } from '@playwright/test'

test('base loads', async ({ page }) => {
    await page.goto('/')
})
