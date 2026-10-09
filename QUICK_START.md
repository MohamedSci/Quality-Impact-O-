# Quick Start Guide

## Quality Impact OÜ - QA-PaaS Website

**Last Updated**: October 9, 2026
**Status**: Production Ready

---

## 1. Prerequisites

### Required Software

- **Node.js**: >= 18.0.0 (Check: `node --version`)
- **npm**: >= 9.0.0 (Check: `npm --version`)
- **Git**: For version control (Check: `git --version`)

### System Requirements

- **OS**: Windows, macOS, or Linux
- **RAM**: 4GB minimum (8GB recommended)
- **Disk**: 2GB free space for dependencies

---

## 2. Installation (5 minutes)

### Step 1: Navigate to Project Directory

```bash
cd "d:\Coding-Solutions\FINAL\Quality Impact OÜ"
```

### Step 2: Install Dependencies

```bash
npm install --legacy-peer-deps
```

**Note**: The `--legacy-peer-deps` flag is necessary because lucide-react targets React 16-18, but we're using React 19. This is safe and doesn't cause runtime issues.

**Expected Output**:

```
added 200+ packages in 2m 30s
```

### Step 3: Verify Installation

```bash
npm run type-check
```

**Expected Output**:

```
(No output = Success)
```

---

## 3. Development Environment (Local Testing)

### Start Development Server

```bash
npm run dev
```

**Expected Output**:

```
  ▲ Next.js 16.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 2.5s
```

### Access Website

Open your browser and navigate to: **http://localhost:3000**

### Pages to Test

- **Homepage**: http://localhost:3000/
- **QA Engines**: http://localhost:3000/engines
- **Marketplaces**: http://localhost:3000/marketplaces
- **Company Info**: http://localhost:3000/legal/company-info
- **Privacy & Security**: http://localhost:3000/legal/privacy

### Hot Reload

Changes to files will automatically reload the browser. Edit `app/page.tsx` and save to test.

---

## 4. Code Quality Checks

### TypeScript Type Checking

```bash
npm run type-check
```

Verifies no type errors (should complete in < 5 seconds)

### ESLint Linting

```bash
npm run lint
```

Checks code quality and style consistency

### Code Formatting

```bash
npm run format
```

Auto-formats all TypeScript, React, and Markdown files

---

## 5. Testing

### Run Unit Tests (Jest)

```bash
npm test
```

### Run E2E Tests (Playwright)

```bash
npm run test:e2e
```

### Run Accessibility Audit

```bash
npm run test:a11y
```

**Expected Output**:

```
✓ Homepage passes WCAG 2.1 AAA compliance
✓ All pages support keyboard navigation
✓ No accessibility violations found
```

---

## 6. Production Build

### Build for Production

```bash
npm run build
```

**Expected Output**:

```
 ✓ Built in 45.2s
 - Compiled 5 pages
 - Optimized 8 components
```

### Start Production Server

```bash
npm start
```

**Expected Output**:

```
> Quality Impact OÜ@1.0.0 start
> next start

Ready! Available at http://localhost:3000
```

### Test Production Build Locally

1. Run `npm run build`
2. Run `npm start`
3. Visit http://localhost:3000
4. Test all pages and functionality
5. Press Ctrl+C to stop server

---

## 7. Key Features to Test

### Marketplace Integration

1. Visit `/marketplaces`
2. Click "Access Listing" buttons for each cloud provider
3. Verify deep-links work correctly:
   - AWS: Opens AWS Marketplace
   - Azure: Opens Azure DevOps Marketplace
   - GCP: Opens Google Cloud Marketplace

### Keyboard Navigation

1. Press `Tab` to move through page elements
2. Focus rings should be visible on buttons and links
3. `Enter` should activate buttons/links

### Mobile Responsiveness

1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test at various breakpoints: 375px, 768px, 1024px, 1440px

### Security Headers

1. Open DevTools → Network tab
2. Refresh page
3. Click on any request
4. Check Response Headers section
5. Verify CSP, X-Frame-Options, HSTS headers present

### SEO & Metadata

1. View page source (Ctrl+U)
2. Look for:
   - `<title>` tags
   - `<meta name="description">`
   - `<meta property="og:image">`
   - `<script type="application/ld+json">` (JSON-LD)

---

## 8. Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel deploy --prod
```

### Deploy with Docker

```bash
# Build Docker image
docker build -t qa-paas-web .

# Run container
docker run -p 3000:3000 qa-paas-web

# Visit http://localhost:3000
```

### Deploy to Self-Hosted Server

```bash
# Build production version
npm run build

# Upload to server and run
npm start
```

---

## 9. Environment Variables

Create `.env.local` for local configuration:

```env
# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXX

# API Configuration
NEXT_PUBLIC_API_URL=https://api.qa-paas.com

# Environment
NODE_ENV=development
```

---

## 10. Troubleshooting

### Issue: Dependency Installation Fails

**Solution**: Use legacy peer deps flag

```bash
npm install --legacy-peer-deps
```

### Issue: Port 3000 Already in Use

**Solution**: Use different port

```bash
npm run dev -- -p 3001
```

### Issue: TypeScript Errors After Changes

**Solution**: Restart dev server

```bash
# Stop current server (Ctrl+C)
# Then restart
npm run dev
```

### Issue: Build Fails

**Solution**: Clean and rebuild

```bash
rm -rf .next node_modules
npm install --legacy-peer-deps
npm run build
```

### Issue: Styles Not Loading

**Solution**: Clear Next.js cache

```bash
rm -rf .next
npm run dev
```

---

## 11. Project Structure Quick Reference

```
Quality Impact OÜ/
├── app/                              # Next.js App Router
│   ├── page.tsx                     # Homepage
│   ├── layout.tsx                   # Root layout
│   ├── globals.css                  # Global styles
│   └── (marketing)/                 # Marketing routes
│       ├── engines/page.tsx         # QA Engines page
│       ├── marketplaces/page.tsx    # Marketplaces page
│       └── legal/
│           ├── company-info/        # Company info
│           └── privacy/             # Privacy & security
├── components/                       # React components
│   ├── ui/                          # Base UI components
│   ├── marketplace/                 # Marketplace components
│   └── branding/                    # Branding components
├── e2e/                             # E2E tests
├── public/                          # Static assets
├── package.json                     # Dependencies & scripts
├── tsconfig.json                    # TypeScript config
├── next.config.js                   # Next.js config
├── tailwind.config.ts               # Tailwind tokens
└── README.md                        # Main documentation
```

---

## 12. Available Commands

| Command              | Purpose                 | Duration    |
| -------------------- | ----------------------- | ----------- |
| `npm run dev`        | Start dev server        | Instant     |
| `npm run build`      | Build for production    | ~45 seconds |
| `npm start`          | Start production server | Instant     |
| `npm run type-check` | Check TypeScript        | ~5 seconds  |
| `npm run lint`       | Run ESLint              | ~10 seconds |
| `npm run format`     | Format code             | ~5 seconds  |
| `npm test`           | Run unit tests          | ~10 seconds |
| `npm run test:e2e`   | Run E2E tests           | ~30 seconds |
| `npm run test:a11y`  | Run a11y audit          | ~20 seconds |

---

## 13. Next Steps

### For Development

1. ✅ Install dependencies (`npm install --legacy-peer-deps`)
2. ✅ Start dev server (`npm run dev`)
3. ✅ Visit http://localhost:3000
4. ✅ Make code changes and see live reload
5. ✅ Run tests when ready

### For Deployment

1. ✅ Run production build (`npm run build`)
2. ✅ Test production build locally (`npm start`)
3. ✅ Run security verification (see SECURITY_VERIFICATION.md)
4. ✅ Deploy to Vercel or self-hosted
5. ✅ Configure domain and DNS
6. ✅ Monitor performance metrics

### For Customization

- **Edit Pages**: Modify files in `app/` directory
- **Update Styles**: Edit `tailwind.config.ts` for design tokens
- **Add Components**: Create in `components/` and export from index.ts
- **Update Text**: Search for hardcoded strings and replace
- **Modify Links**: Update marketplace URLs in `components/marketplace/MarketplaceHero.tsx`

---

## 14. Useful Links

### Documentation

- Main README: `README.md`
- Design System: `DESIGN_SYSTEM.md`
- Component Library: `COMPONENT_LIBRARY.md`
- Security: `SECURITY_HEADERS.md`
- Compliance: `MASTER_PROMPT_COMPLIANCE_REPORT.md`

### External Resources

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **TypeScript**: https://www.typescriptlang.org
- **Playwright**: https://playwright.dev
- **ESLint**: https://eslint.org

### Development Tools

- **Browser DevTools**: F12 or Ctrl+Shift+I
- **React DevTools**: Browser extension
- **Code Editor**: VS Code recommended
- **Git**: For version control

---

## 15. Support & Troubleshooting

### Getting Help

1. Check documentation files in project root
2. Review error messages carefully
3. Check browser console (F12)
4. Review Next.js logs in terminal
5. Check project GitHub issues (if applicable)

### Common Issues & Solutions

- **Port 3000 in use**: Use `npm run dev -- -p 3001`
- **Module not found**: Run `npm install --legacy-peer-deps`
- **Build errors**: Run `rm -rf .next` and try again
- **Slow performance**: Check DevTools Performance tab
- **CSS not loading**: Clear browser cache (Ctrl+Shift+Delete)

---

## Checklist for Getting Started

- [ ] Node.js >= 18 installed
- [ ] npm >= 9 installed
- [ ] Dependencies installed: `npm install --legacy-peer-deps`
- [ ] Type checking passes: `npm run type-check`
- [ ] Dev server runs: `npm run dev`
- [ ] Homepage loads at http://localhost:3000
- [ ] All 5 pages accessible:
  - [ ] Homepage `/`
  - [ ] Engines `/engines`
  - [ ] Marketplaces `/marketplaces`
  - [ ] Company Info `/legal/company-info`
  - [ ] Privacy `/legal/privacy`
- [ ] Accessibility audit passes: `npm run test:a11y`
- [ ] Production build succeeds: `npm run build`
- [ ] Ready for deployment! 🚀

---

**Questions?** Review the comprehensive documentation or check the README.md for more details.

**Happy coding!** 🎉
