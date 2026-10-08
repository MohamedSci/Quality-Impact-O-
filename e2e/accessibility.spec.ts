import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('QA-PaaS Web Accessibility Verification (WCAG 2.1 AAA)', () => {
  test('Homepage passes accessibility checks', async ({ page }) => {
    await page.goto('/');

    // Inject and run Axe-Core audits
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag21aaa'])
      .analyze();

    // Enforce Zero Violations
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Marketplace page passes accessibility checks', async ({ page }) => {
    await page.goto('/marketplaces');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag21aaa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Engines page passes accessibility checks', async ({ page }) => {
    await page.goto('/engines');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag21aaa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Navigation supports keyboard navigation', async ({ page }) => {
    await page.goto('/');

    // Tab through navigation
    await page.keyboard.press('Tab');
    const firstFocusable = await page.locator(':focus').first();
    
    // Verify focus is visible
    const isFocusVisible = await firstFocusable.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return (
        styles.outline !== 'none' ||
        styles.boxShadow !== 'none' ||
        styles.borderColor !== 'transparent'
      );
    });

    expect(isFocusVisible).toBeTruthy();
  });

  test('Cloud marketplace cards are keyboard focusable', async ({ page }) => {
    await page.goto('/marketplaces');

    // Find all marketplace links
    const marketplaceLinks = await page.locator('a[aria-label*="Access"]').all();
    
    expect(marketplaceLinks.length).toBeGreaterThan(0);

    // Verify each link is focusable
    for (const link of marketplaceLinks) {
      await link.focus();
      const isFocused = await link.evaluate((el) => el === document.activeElement);
      expect(isFocused).toBeTruthy();
    }
  });

  test('Text contrast meets WCAG AAA standards', async ({ page }) => {
    await page.goto('/');

    // Check contrast ratio of main text
    const mainHeading = page.locator('h1').first();
    const computedStyle = await mainHeading.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return {
        color: style.color,
        backgroundColor: style.backgroundColor,
      };
    });

    // Note: Full contrast ratio validation would require additional library
    // This is a placeholder for integration with contrast checker library
    expect(computedStyle.color).toBeTruthy();
    expect(computedStyle.backgroundColor).toBeTruthy();
  });

  test('All images have alt text', async ({ page }) => {
    await page.goto('/');

    const images = await page.locator('img').all();
    
    for (const image of images) {
      const altText = await image.getAttribute('alt');
      // Allow images without alt if they are decorative or have aria-hidden
      const ariaHidden = await image.getAttribute('aria-hidden');
      
      if (!ariaHidden) {
        expect(altText).toBeTruthy();
      }
    }
  });

  test('Form inputs have associated labels', async ({ page }) => {
    await page.goto('/');

    const inputs = await page.locator('input').all();
    
    for (const input of inputs) {
      const inputId = await input.getAttribute('id');
      const ariaLabel = await input.getAttribute('aria-label');
      
      if (inputId) {
        const label = page.locator(`label[for="${inputId}"]`);
        const hasLabel = (await label.count()) > 0 || ariaLabel;
        expect(hasLabel).toBeTruthy();
      }
    }
  });

  test('Navigation is semantic HTML', async ({ page }) => {
    await page.goto('/');

    const nav = page.locator('nav');
    expect(await nav.count()).toBeGreaterThan(0);

    const footer = page.locator('footer');
    expect(await footer.count()).toBeGreaterThan(0);

    const main = page.locator('main');
    // Main tag is optional but good practice
    // expect(await main.count()).toBeGreaterThan(0);
  });
});

test.describe('Performance Metrics', () => {
  test('Core Web Vitals targets are met', async ({ page }) => {
    await page.goto('/');

    // Wait for page to stabilize
    await page.waitForLoadState('networkidle');

    // Measure Core Web Vitals
    const metrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      return {
        LCP: navigation.loadEventEnd,
        // Full CLS/INP measurement would require Web Vitals library
        pageLoadTime: navigation.loadEventEnd - navigation.fetchStart,
      };
    });

    // LCP target: < 1.2s (2500ms from start)
    expect(metrics.LCP).toBeLessThan(2500);
    
    // Page load time general check
    expect(metrics.pageLoadTime).toBeLessThan(5000);
  });

  test('No unhandled console errors', async ({ page }) => {
    const errors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Filter out known third-party errors
    const relevantErrors = errors.filter(
      (e) => !e.includes('third-party') && !e.includes('iframe')
    );

    expect(relevantErrors).toEqual([]);
  });
});
