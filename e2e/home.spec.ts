import { test, expect, type Page } from '@playwright/test';

/**
 * Navigation collapses into a drawer below the md breakpoint, so the mobile
 * projects have to open it before the links exist on screen.
 */
async function openNavigation(page: Page) {
  const menuButton = page.getByRole('button', { name: /open menu/i });
  if (await menuButton.isVisible()) {
    await menuButton.click();
  }
  return page.getByRole('navigation', { name: 'Primary' });
}

test('homepage has title and primary navigation', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Mohamed Aziz Ouertatani/);

  const nav = await openNavigation(page);
  await expect(nav.getByRole('link', { name: /^work$/i })).toBeVisible();
});

test('site renders on the plaster ground with the cobalt hero wall', async ({
  page,
}) => {
  await page.goto('/');

  const ground = await page
    .locator('body')
    .evaluate((el) => getComputedStyle(el).backgroundColor);
  expect(ground).toBe('rgb(239, 241, 234)');

  const hero = await page
    .locator('#identity')
    .evaluate((el) => getComputedStyle(el).backgroundColor);
  expect(hero).toBe('rgb(22, 62, 147)');
});

test('hero content is present without any interaction', async ({ page }) => {
  await page.goto('/');

  // The headline and the primary route out must not depend on WebGL, on
  // JavaScript-driven reveals, or on the reader interacting with the page.
  await expect(
    page.getByRole('heading', { level: 1, name: /Mohamed Aziz/i })
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: /explore my work/i })
  ).toBeVisible();
});

test('navigation works correctly', async ({ page }) => {
  await page.goto('/');

  let nav = await openNavigation(page);
  await nav.getByRole('link', { name: /^work$/i }).click();
  await expect(page).toHaveURL(/.*projects/);

  nav = await openNavigation(page);
  await nav.getByRole('link', { name: /^about$/i }).click();
  await expect(page).toHaveURL(/.*about/);

  nav = await openNavigation(page);
  await nav.getByRole('link', { name: /^contact$/i }).click();
  await expect(page).toHaveURL(/.*contact/);
});

test('project case studies resolve by slug and by legacy id', async ({
  page,
}) => {
  await page.goto('/projects/researchbridge');
  await expect(
    page.getByRole('heading', { level: 1, name: /ResearchBridge/i })
  ).toBeVisible();

  // URLs shared before the slug migration must keep working.
  await page.goto('/projects/12');
  await expect(
    page.getByRole('heading', { level: 1, name: /ResearchBridge/i })
  ).toBeVisible();
});
