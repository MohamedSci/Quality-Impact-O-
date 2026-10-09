#!/usr/bin/env node

/**
 * Cross-platform start script
 * Handles PORT environment variable on Windows, macOS, and Linux
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const port = process.env.PORT || 3000;

// Set environment variables
process.env.NODE_ENV = 'production';
process.env.PORT = String(port);

// Verify build exists
const buildDir = path.join(__dirname, '.next');
if (!fs.existsSync(buildDir)) {
  console.error('Error: Build not found. Run: npm run build');
  process.exit(1);
}

console.log(`Starting Next.js on port ${port}...`);

// Use npx to run next start with proper environment variable handling
try {
  execSync('npx next start', {
    stdio: 'inherit',
    env: process.env,
    cwd: __dirname,
  });
} catch (err) {
  process.exit(1);
}
