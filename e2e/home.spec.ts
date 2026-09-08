import { test, expect } from '@playwright/test';

test('homepage has title and primary navigation', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Mohamed Aziz Ouertatani/);

  const nav = page.getByRole('navigation', { name: 'Primary' });
  await expect(nav.getByRole('link', { name: /^work$/i })).toBeVisible();
});

test('site renders on the dark palette', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('html')).toHaveClass(/dark/);
});

test('navigation works correctly', async ({ page }) => {
  await page.goto('/');

  const nav = page.getByRole('navigation', { name: 'Primary' });

  await nav.getByRole('link', { name: /^work$/i }).click();
  await expect(page).toHaveURL(/.*projects/);

  await nav.getByRole('link', { name: /^about$/i }).click();
  await expect(page).toHaveURL(/.*about/);

  await nav.getByRole('link', { name: /^contact$/i }).click();
  await expect(page).toHaveURL(/.*contact/);
});
