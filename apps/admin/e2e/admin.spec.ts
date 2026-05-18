import { test, expect } from '@playwright/test'

test('admin loads', async ({ page }) => {
    await page.goto('/admin')
    await expect(page).toHaveURL(/admin/)
})
