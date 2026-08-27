import { test, expect } from '@playwright/test';

test('homepage has title and links', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Mohamed Aziz Ouertatani/);

  const projectsLink = page
    .getByRole('navigation')
    .getByRole('link', { name: /^projects$/i });
  await expect(projectsLink).toBeVisible();
});

test('dark mode toggle works', async ({ page }) => {
  await page.goto('/');

  const themeToggle = page.getByRole('button', {
    name: /toggle dark mode|switch to (dark|light) mode/i,
  });
  await themeToggle.click();

  // Verify theme changed
  await expect(page.locator('html')).toHaveAttribute('class', /dark/);
});

test('navigation works correctly', async ({ page }) => {
  await page.goto('/');

  const nav = page.getByRole('navigation');

  await nav.getByRole('link', { name: /^projects$/i }).click();
  await expect(page).toHaveURL(/.*projects/);

  await nav.getByRole('link', { name: /^about$/i }).click();
  await expect(page).toHaveURL(/.*about/);

  await nav.getByRole('link', { name: /^contact$/i }).click();
  await expect(page).toHaveURL(/.*contact/);
});
