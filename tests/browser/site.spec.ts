import { expect, test } from '@playwright/test';

const pages = ['/', '/services/', '/process/', '/work/', '/about/', '/contact/', '/privacy/'];

for (const path of pages) {
  test(`${path} renders without console errors or horizontal overflow`, async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    page.on('pageerror', (error) => errors.push(error.message));

    await page.goto(path);
    await expect(page.locator('main h1')).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible();

    const fitsViewport = await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    );
    expect(fitsViewport).toBe(true);
    expect(errors).toEqual([]);
  });
}

test('skip link appears on keyboard focus and targets main content', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  const skipLink = page.locator('.skip-link');
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeInViewport();
  await expect(skipLink).toHaveAttribute('href', '#content');
  await expect(page.locator('main#content')).toHaveCount(1);
});

test('primary navigation is keyboard reachable and marks the current page', async ({ page }) => {
  await page.goto('/services/');
  const current = page.getByRole('navigation', { name: 'Primary' }).locator('a[aria-current="page"]');
  await expect(current).toHaveText('Services');
});

test('contact page exposes a working mailto quote path', async ({ page }) => {
  await page.goto('/contact/');
  const mailto = page.locator('a[href^="mailto:"]');
  await expect(mailto).toBeVisible();
  await expect(mailto).toHaveAttribute('href', /mailto:.+@.+/);
});

test('unknown routes show the custom 404 page', async ({ page }) => {
  const response = await page.goto('/definitely-not-a-real-page/');
  expect(response?.status()).toBe(404);
  await expect(page.locator('main h1')).toHaveText('Page not found');
});

test('mobile navigation keeps every link fully inside the viewport', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile-chromium');
  await page.goto('/');
  const viewport = page.viewportSize();
  expect(viewport).not.toBeNull();
  for (const link of await page.getByRole('navigation', { name: 'Primary' }).getByRole('link').all()) {
    const box = await link.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.x).toBeGreaterThanOrEqual(0);
    expect(box!.x + box!.width).toBeLessThanOrEqual(viewport!.width);
  }
});
