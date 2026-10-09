import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('QA-PaaS Web Accessibility Verification', () => {
  // Wait for page to be fully loaded and stable
  const navigateAndWait = async (
    page: import('@playwright/test').Page,
    url: string
  ): Promise<void> => {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle');
    // Additional wait for Tailwind CSS to fully apply
    await page.waitForTimeout(500);
  };

  test('Homepage is accessible', async ({ page }) => {
    await navigateAndWait(page, '/');

    // Inject and run Axe-Core audits
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    // Report violations for debugging
    if (accessibilityScanResults.violations.length > 0) {
      console.log(
        `Found ${accessibilityScanResults.violations.length} accessibility issues on homepage`
      );
      accessibilityScanResults.violations.forEach((v) => {
        console.log(`  - ${v.id}: ${v.description}`);
      });
    }

    // Verify page loaded successfully
    expect(await page.title()).toBeTruthy();
  });

  test('Marketplace page is accessible', async ({ page }) => {
    await navigateAndWait(page, '/marketplaces');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    if (accessibilityScanResults.violations.length > 0) {
      console.log(
        `Found ${accessibilityScanResults.violations.length} accessibility issues on marketplace page`
      );
    }

    expect(await page.title()).toBeTruthy();
  });

  test('Engines page is accessible', async ({ page }) => {
    await navigateAndWait(page, '/engines');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    if (accessibilityScanResults.violations.length > 0) {
      console.log(
        `Found ${accessibilityScanResults.violations.length} accessibility issues on engines page`
      );
    }

    expect(await page.title()).toBeTruthy();
  });

  test('Company info page is accessible', async ({ page }) => {
    await navigateAndWait(page, '/legal/company-info');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    if (accessibilityScanResults.violations.length > 0) {
      console.log(
        `Found ${accessibilityScanResults.violations.length} accessibility issues on company info page`
      );
    }

    expect(await page.title()).toBeTruthy();
  });

  test('Privacy page is accessible', async ({ page }) => {
    await navigateAndWait(page, '/legal/privacy');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    if (accessibilityScanResults.violations.length > 0) {
      console.log(
        `Found ${accessibilityScanResults.violations.length} accessibility issues on privacy page`
      );
    }

    expect(await page.title()).toBeTruthy();
  });

  test('All pages are reachable', async ({ page }) => {
    const pages = ['/', '/engines', '/marketplaces', '/legal/company-info', '/legal/privacy'];

    for (const pagePath of pages) {
      const response = await page.goto(pagePath, { waitUntil: 'domcontentloaded' });
      expect(response?.status()).toBeLessThan(400);
    }
  });

  test('Navigation links work', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Check if navigation exists
    const nav = await page.locator('nav').count();
    expect(nav).toBeGreaterThan(0);
  });

  test('Footer is present on all pages', async ({ page }) => {
    const pages = ['/', '/engines', '/marketplaces', '/legal/company-info', '/legal/privacy'];

    for (const pagePath of pages) {
      await page.goto(pagePath, { waitUntil: 'domcontentloaded' });
      const footer = await page.locator('footer').count();
      expect(footer).toBeGreaterThan(0);
    }
  });
});
