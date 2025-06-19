import { test, expect } from '@playwright/test';

test('Node.js homepage has correct title', async ({ page }) => {
  await page.goto('https://nodejs.org/en/');
  await expect(page).toHaveTitle(/Node\.js/);
});

test('Node.js homepage has Download button', async ({ page }) => {
  await page.goto('https://nodejs.org/en/');
  // The main download button is usually prominent and contains text like "Download" and the version number
  await expect(page.getByRole('link', { name: /Download/i })).toBeVisible();
});

test('Node.js homepage navigation links are visible', async ({ page }) => {
  await page.goto('https://nodejs.org/en/');
  await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Download' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Security' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Certification' })).toBeVisible();
});

test('Node.js homepage has LTS and Current download sections', async ({ page }) => {
  await page.goto('https://nodejs.org/en/');
  await expect(page.getByText(/LTS/i)).toBeVisible();
  await expect(page.getByText(/Current/i)).toBeVisible();
});
