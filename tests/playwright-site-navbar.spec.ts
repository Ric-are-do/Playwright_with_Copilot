import { test, expect } from '@playwright/test';

// Store all navbar link texts for reuse
export const NAV_LINKS = [
  'Docs',
  'API',
  'Releases',
  'Community',
  'Blog',
];

const BASE_URL = 'https://playwright.dev/docs/intro';

test.describe('Playwright Docs Navbar Links (Dynamic URL Resolution)', () => {
  for (const linkName of NAV_LINKS) {
    test(`Navbar link: ${linkName} resolves to its destination`, async ({ page }) => {
      await page.goto(BASE_URL);
      const navLink = await page.getByRole('link', { name: linkName });
      await navLink.waitFor({ timeout: 15000 });
      // Get the href attribute before clicking
      const expectedUrl = await navLink.getAttribute('href');
      await navLink.click();
      await page.waitForTimeout(11000); // Wait more than 10 seconds
      // If the href is a relative URL, resolve it against the base
      const resolvedUrl = expectedUrl?.startsWith('http') ? expectedUrl : new URL(expectedUrl || '', BASE_URL).toString();
      await expect(page).toHaveURL(resolvedUrl);
    });
  }
});
