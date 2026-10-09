import { chromium } from '@playwright/test';

/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Global setup for E2E tests
 * Handles:
 * - Killing existing processes on port 3000
 * - Pre-warming server connections
 * - Ensuring clean test environment
 */

async function globalSetup() {
  // Kill any existing process on port 3000
  if (process.platform === 'win32') {
    const { execSync } = require('child_process');
    try {
      execSync('netstat -ano | findstr :3000', { stdio: 'ignore' });
      console.log('Found existing process on port 3000, attempting to kill...');
      try {
        execSync('taskkill /F /FI "localport eq 3000" /P TCP');
        console.log('✓ Successfully killed existing process on port 3000');
      } catch (_e) {
        console.log('Could not kill existing process, will attempt connection');
      }
    } catch (_e) {
      // Port is free
    }
  } else {
    // Unix-like systems
    const { execSync } = require('child_process');
    try {
      execSync("lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9", {
        stdio: 'ignore',
      });
      console.log('✓ Successfully killed existing process on port 3000');
    } catch (_e) {
      // Port is free or lsof not available
    }
  }

  // Wait for server to be ready
  console.log('Waiting for server to be ready at http://localhost:3000...');

  let isReady = false;
  let attempts = 0;
  const maxAttempts = 30; // 30 seconds

  while (!isReady && attempts < maxAttempts) {
    try {
      const browser = await chromium.launch();
      const page = await browser.newPage();
      const response = await page.goto('http://localhost:3000', {
        waitUntil: 'domcontentloaded',
        timeout: 5000,
      });

      if (response && response.ok()) {
        console.log('✓ Server is ready');
        isReady = true;
      }

      await browser.close();
    } catch (_error) {
      attempts++;
      if (attempts < maxAttempts) {
        console.log(`Attempt ${attempts}/${maxAttempts}: Server not ready, waiting...`);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }
  }

  // Additional wait to ensure tests don't start prematurely
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!isReady) {
    throw new Error(
      'Server failed to start within 30 seconds. Check server logs and ensure port 3000 is available.'
    );
  }

  console.log('✓ Global setup complete, tests ready to run');
}

export default globalSetup;
