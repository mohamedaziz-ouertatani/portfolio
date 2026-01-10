import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should display hero section', async ({ page }) => {
    await page.goto('/')
    
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('nav')).toBeVisible()
  })

  test('should navigate to projects page', async ({ page }) => {
    await page.goto('/')
    
    await page.click('text=Projects')
    await expect(page).toHaveURL(/.*projects/)
  })

  test('should have working dark mode toggle', async ({ page }) => {
    await page.goto('/')
    
    const themeToggle = page.locator('[aria-label*="theme" i], [aria-label*="dark" i]')
    await themeToggle.click()
    
    // Wait for theme change
    await page.waitForTimeout(500)
  })
})
