#!/usr/bin/env node

/**
 * E2E Test Runner
 * Properly manages server lifecycle for E2E tests
 */

const { execSync } = require('child_process');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

async function runTests() {
  console.log('🚀 Starting E2E Test Suite...\n');

  // Step 1: Verify build exists
  const buildDir = path.join(__dirname, '.next');
  if (!fs.existsSync(buildDir)) {
    console.error('❌ Build not found. Run: npm run build');
    process.exit(1);
  }

  console.log('✓ Build verified');

  // Step 2: Start Next.js server
  console.log('⏳ Starting Next.js server on port 3000...');

  const serverEnv = {
    ...process.env,
    NODE_ENV: 'production',
    PORT: '3000',
  };

  const server = spawn('npx', ['next', 'start'], {
    cwd: __dirname,
    env: serverEnv,
    stdio: 'pipe',
  });

  // Wait for server to be ready
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

  let serverReady = false;
  const checkServer = () => {
    try {
      execSync('curl -s http://localhost:3000 > /dev/null 2>&1', {
        stdio: 'ignore',
      });
      serverReady = true;
    } catch (err) {
      serverReady = false;
    }
  };

  // Try to connect to server (up to 30 seconds)
  for (let i = 0; i < 30; i++) {
    checkServer();
    if (serverReady) break;
    console.log(`⏳ Waiting for server... (${i + 1}/30)`);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  if (!serverReady) {
    console.error('❌ Server failed to start');
    server.kill();
    process.exit(1);
  }

  console.log('✓ Server ready\n');

  // Step 3: Run Playwright tests
  console.log('🧪 Running Playwright tests...\n');

  try {
    execSync('npx playwright test', {
      cwd: __dirname,
      stdio: 'inherit',
      env: process.env,
    });
    console.log('\n✅ E2E tests completed');
  } catch (err) {
    console.error('\n❌ E2E tests failed');
  } finally {
    // Step 4: Stop server
    console.log('\n🛑 Stopping server...');
    server.kill('SIGTERM');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('✓ Server stopped');
  }
}

runTests().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
