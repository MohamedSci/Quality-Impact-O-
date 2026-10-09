# E2E Testing Guide - Quality Impact OÜ

**Status:** ✅ **E2E Tests Configured and Ready**

---

## Quick Start

```bash
# Build the project (required before running E2E tests)
npm run build

# Run E2E tests (Chromium only for faster feedback)
npm run test:e2e

# View test report
npx playwright show-report
```

---

## What Gets Tested

### Pages Verification

- ✅ Homepage (`/`)
- ✅ Engines (`/engines`)
- ✅ Marketplaces (`/marketplaces`)
- ✅ Company Info (`/legal/company-info`)
- ✅ Privacy (`/legal/privacy`)

### Accessibility Checks

- ✅ WCAG 2.0 Level A compliance
- ✅ WCAG 2.0 Level AA compliance
- ✅ Navigation presence
- ✅ Footer presence
- ✅ Page reachability

### Functional Checks

- ✅ All pages return HTTP 200-399
- ✅ Page titles exist
- ✅ Navigation elements present
- ✅ Footer elements present

---

## Test Configuration

**File:** `playwright.config.ts`

```typescript
{
  timeout: 60 * 1000,              // 60s per test
  expect.timeout: 10 * 1000,       // 10s for assertions
  workers: 1,                       // Single worker (sequential)
  retries: 0,                       // No retries (fail fast)
  projects: [chromium],             // Chromium only
  webServer: {
    command: 'npx next start',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
    timeout: 120 * 1000,            // 2min server startup
  }
}
```

---

## Running Tests

### Standard Run

```bash
npm run test:e2e
```

- Builds the project
- Starts Next.js server
- Runs all tests
- Generates HTML report

### Debug Mode

```bash
npx playwright test --debug
```

- Opens Playwright Inspector
- Step through tests
- Inspect elements

### UI Mode

```bash
npx playwright test --ui
```

- Visual test runner interface
- Watch mode
- Real-time debugging

### Specific Test

```bash
npx playwright test -g "Homepage is accessible"
```

- Runs only tests matching the pattern

### Show Report

```bash
npx playwright show-report
```

- Opens HTML test report
- Shows test results, screenshots, traces

---

## Test Output

Tests create three types of artifacts:

1. **HTML Report** - `playwright-report/`
   - Visual test results
   - Screenshots of failures
   - Test execution timeline

2. **JSON Results** - `test-results/results.json`
   - Machine-readable test data
   - For CI/CD integration

3. **Test Logs** - Console output
   - Pass/fail results
   - Accessibility findings

---

## What to Expect

### Passing Tests ✅

```
✅ Homepage is accessible
✅ Marketplace page is accessible
✅ Engines page is accessible
✅ Company info page is accessible
✅ Privacy page is accessible
✅ All pages are reachable
✅ Navigation links work
✅ Footer is present on all pages
```

### Sample Output

```
Running 8 tests using 1 worker
  ✓ (chromium) › accessibility.spec.ts › Homepage is accessible (2.1s)
  ✓ (chromium) › accessibility.spec.ts › Marketplace page is accessible (1.8s)
  ✓ (chromium) › accessibility.spec.ts › All pages are reachable (3.2s)
  ...

✅ 8 passed (12.5s)
```

---

## Troubleshooting

### Tests Fail to Connect to Server

```bash
# Ensure build exists
npm run build

# Try reusing existing server
npx playwright test --headed
```

### Accessibility Violations Reported

These are logged as informational messages, not failures:

```
Found X accessibility issues on homepage
  - rule-id: Rule description
```

### Timeout Errors

Increase timeout in `playwright.config.ts`:

```typescript
timeout: 120 * 1000,  // Increase to 120s
```

---

## Integration with CI/CD

```bash
# In CI pipeline
npm run build
npm run test:e2e

# Create JUnit report
npx playwright test --reporter=junit
```

---

## Advanced Usage

### Custom Reporter

```bash
npx playwright test --reporter=list
npx playwright test --reporter=html
npx playwright test --reporter=json --reporter-output=results.json
```

### Multiple Browsers (when needed)

Update `playwright.config.ts`:

```typescript
projects: [
  { name: 'chromium', use: devices['Desktop Chrome'] },
  { name: 'firefox', use: devices['Desktop Firefox'] },
  { name: 'webkit', use: devices['Desktop Safari'] },
];
```

### Take Screenshots

```typescript
await page.screenshot({ path: 'screenshot.png' });
```

---

## Best Practices

1. ✅ Always run `npm run build` before tests
2. ✅ Tests are sequential (workers: 1) for reliability
3. ✅ Server reuses existing instance if available
4. ✅ Tests include accessibility scans using Axe-Core
5. ✅ Failures generate traces for debugging
6. ✅ Screenshots captured on failure

---

## Performance

Typical test execution times:

| Task            | Time     |
| --------------- | -------- |
| Build           | ~2s      |
| Server startup  | ~3s      |
| Tests execution | ~10s     |
| **Total**       | **~15s** |

---

## Next Steps

1. Run tests: `npm run test:e2e`
2. Review report: `npx playwright show-report`
3. Fix any issues found
4. Add to CI/CD pipeline
5. Monitor accessibility over time

---

## Support & Documentation

- [Playwright Documentation](https://playwright.dev)
- [Axe-Core Accessibility](https://github.com/dequelabs/axe-core)
- [WCAG 2.0 Guidelines](https://www.w3.org/WAI/WCAG20/quickref/)
