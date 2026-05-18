import { test, expect } from '@playwright/test'

test('promotion loads', async ({ page }) => {
    await page.goto('/promotion')
    await expect(page).toHaveURL(/promotion/)
})
