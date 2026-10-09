# QA-PaaS Web Development Guide

Complete guide for developing, testing, and deploying the Quality Impact OÜ website.

## Environment Setup

### Prerequisites

- Node.js 18+ or higher
- npm or yarn package manager
- Git for version control
- Code editor (VS Code recommended)

### Initial Setup

```bash
# Clone or navigate to project
cd "d:\Coding-Solutions\FINAL\Quality Impact OÜ"

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Development Workflow

### Running the Dev Server

```bash
npm run dev
```

- Starts Next.js on http://localhost:3000
- Hot module reloading enabled
- TypeScript compilation on-demand

### Code Formatting

```bash
# Format all code
npm run format

# Format specific file
npx prettier --write app/page.tsx
```

All commits should be formatted. Configure your editor to format on save.

### Type Checking

```bash
npm run type-check
```

Runs TypeScript compiler without emitting files. Use before committing.

### Linting

```bash
npm run lint
```

Checks code quality against ESLint rules. Fix auto-fixable issues:

```bash
npx eslint . --fix
```

## Testing

### Unit Tests with Jest

```bash
# Run all tests
npm test

# Run tests in watch mode (for development)
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

**Test Location**: `app/__tests__/` and `components/__tests__/`

**Example Test**:

```typescript
// components/ui/__tests__/Button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('Button Component', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies primary variant styling', () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-primary');
  });
});
```

### E2E Tests with Playwright

```bash
# Run all E2E tests
npm run test:e2e

# Run E2E tests in headed mode (see browser)
npx playwright test --headed

# Run specific test file
npx playwright test e2e/accessibility.spec.ts

# Debug tests
npx playwright test --debug
```

**Test Location**: `e2e/`

### Accessibility Audits

```bash
# Run accessibility tests (Axe-core + WCAG 2.1 AAA)
npm run test:a11y

# Generate accessibility report
npx playwright test --reporter=html
```

**Audit Focus Areas**:

- Keyboard navigation
- Screen reader compatibility
- Color contrast ratios
- Form label associations
- Image alt text
- Semantic HTML structure

## Building & Deployment

### Development Build

```bash
npm run build
npm run start
```

Test the production build locally before deploying.

### Vercel Deployment (Recommended)

1. Push code to GitHub:

```bash
git add .
git commit -m "feat: initial QA-PaaS website scaffold"
git push origin main
```

2. Deploy via Vercel dashboard:
   - Visit https://vercel.com/import
   - Select GitHub repository
   - Configure environment variables
   - Deploy

### Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

```bash
# Build and run Docker image
docker build -t qa-paas-web .
docker run -p 3000:3000 qa-paas-web
```

### Environment Variables

Create `.env.local` in project root:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.qa-paas.com

# API Configuration
NEXT_PUBLIC_API_URL=https://api.qa-paas.com

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXX

# Marketplace URLs (Optional - override defaults)
NEXT_PUBLIC_AWS_MARKETPLACE_URL=https://aws.amazon.com/marketplace/pp/prodview-qapaas
NEXT_PUBLIC_AZURE_MARKETPLACE_URL=https://marketplace.visualstudio.com/items?itemName=qualityimpact.qa-paas
NEXT_PUBLIC_GCP_MARKETPLACE_URL=https://console.cloud.google.com/marketplace/product/qualityimpact/qa-paas
```

## Adding New Pages

### 1. Create Page File

```typescript
// app/(marketing)/new-section/page.tsx
import type { Metadata } from 'next';
import { Navigation, Footer } from '@/components/branding';

export const metadata: Metadata = {
  title: 'Page Title | QA-PaaS',
  description: 'Page description for SEO.',
  openGraph: {
    title: 'Page Title',
    description: 'Page description.',
    url: 'https://www.qa-paas.com/new-section',
  },
};

export default function NewSectionPage() {
  return (
    <>
      <Navigation />

      <main className="section-padding bg-slate-bg">
        <div className="container-max">
          <h1 className="text-4xl font-bold">Page Title</h1>
        </div>
      </main>

      <Footer />
    </>
  );
}
```

### 2. Update Navigation

Edit `components/branding/Navigation.tsx`:

```typescript
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/new-section', label: 'New Section' }, // Add here
  // ...
];
```

### 3. Update Footer

Edit `components/branding/Footer.tsx` to add link in appropriate section.

## Adding New Components

### 1. Create Component File

```typescript
// components/marketing/NewComponent.tsx
'use client'; // Add if using client-side features

import React from 'react';
import { Card } from '@/components/ui';

interface NewComponentProps {
  title: string;
  description: string;
}

export const NewComponent: React.FC<NewComponentProps> = ({ title, description }) => {
  return (
    <Card className="space-y-3">
      <h2 className="text-lg font-semibold text-slate-100">{title}</h2>
      <p className="text-sm text-slate-400">{description}</p>
    </Card>
  );
};

export default NewComponent;
```

### 2. Export from Index

```typescript
// components/marketing/index.ts
export { NewComponent } from './NewComponent';
```

### 3. Use in Page

```typescript
import { NewComponent } from '@/components/marketing';

export default function Page() {
  return (
    <NewComponent title="Example" description="Example description" />
  );
}
```

## Styling Guide

### Using Tailwind Classes

```typescript
// Recommended: Use Tailwind utilities
<div className="bg-slate-bg text-slate-100 p-6 rounded-lg">
  <h1 className="text-3xl font-bold">Title</h1>
  <p className="text-slate-400">Description</p>
</div>

// Create reusable component for repeated patterns
<Card className="hover">
  <h2>Card Title</h2>
</Card>
```

### Custom Styles

```typescript
// app/globals.css
@layer components {
  .custom-pattern {
    @apply bg-gradient-to-r from-primary to-accent-neural rounded-xl p-6;
  }
}

// Use in component
<div className="custom-pattern">Content</div>
```

### Design Tokens

Tailwind config colors are available:

```
bg-primary           // #0EA5E9 (Electric Cyan)
text-accent-neural   // #818CF8 (Neural Indigo)
border-slate-border  // #334155
bg-status-pass       // #10B981 (Green)
```

## Performance Optimization

### Code Splitting

```typescript
// Use dynamic imports for heavy components
const HeavyComponent = dynamic(() => import('@/components/Heavy'), {
  loading: () => <div>Loading...</div>,
});

export default function Page() {
  return <HeavyComponent />;
}
```

### Image Optimization

```typescript
import Image from 'next/image';

<Image
  src="/brand/logo.svg"
  alt="QA-PaaS Logo"
  width={200}
  height={100}
  priority // Only for above-the-fold images
/>
```

### Font Optimization

Fonts are loaded in `app/layout.tsx`:

```typescript
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

### Monitoring Performance

```bash
# Generate Lighthouse report
npm run build
npx lighthouse https://localhost:3000 --output=json
```

Check Core Web Vitals:

- LCP: < 1.2s ✓
- INP: < 100ms ✓
- CLS: = 0 ✓

## SEO Best Practices

### 1. Metadata

All pages must have:

```typescript
export const metadata: Metadata = {
  title: 'Page Title | QA-PaaS',
  description: 'Concise page description (160 chars max)',
  keywords: ['keyword1', 'keyword2'],
  openGraph: {
    title: 'Page Title',
    description: 'Description',
    url: 'https://www.qa-paas.com/page',
    images: [
      {
        url: 'https://www.qa-paas.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};
```

### 2. Structured Data

Add JSON-LD schemas:

```typescript
const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'QA-PaaS',
  // ...
};

<Script
  id="schema-id"
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>
```

### 3. Canonical URLs

Already configured in `next.config.js`. Each page should have proper canonical.

### 4. Sitemap & Robots

Add `public/sitemap.xml` and `public/robots.txt`:

```xml
<!-- public/robots.txt -->
User-agent: *
Allow: /
Sitemap: https://www.qa-paas.com/sitemap.xml
```

## Security Considerations

### CSP Headers

Enforced in `next.config.js`:

```javascript
'Content-Security-Policy': [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  // ...
].join('; ')
```

### Never Commit Secrets

Ensure `.env.local` is in `.gitignore`:

```
.env
.env.local
.env.*.local
```

### HTTPS Only

In production, always use HTTPS. Vercel enforces this by default.

## Troubleshooting

### Port 3000 Already in Use

```bash
# Kill process using port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use different port
PORT=3001 npm run dev
```

### Build Failures

```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### TypeScript Errors

```bash
# Check all TypeScript errors
npm run type-check

# Fix import paths
# Ensure all imports use correct relative paths or @/ aliases
```

### Accessibility Test Failures

```bash
# Run with detailed output
npm run test:a11y -- --reporter=verbose

# Fix common issues:
# 1. Add aria-labels to buttons without text
# 2. Ensure color contrast >= 4.5:1
# 3. Use semantic HTML (nav, footer, main, article, section)
# 4. Link form inputs with labels
```

## Git Workflow

### Branch Naming

```
feature/add-new-component
bugfix/fix-navigation-issue
docs/update-readme
refactor/optimize-performance
```

### Commit Messages

```
feat: add marketplace hero component
fix: resolve keyboard navigation in mobile menu
docs: update development guide
refactor: improve accessibility of card component
test: add accessibility tests for homepage
```

### Pull Request Template

```
## Description
Brief description of changes.

## Type of Change
- [ ] Feature
- [ ] Bug fix
- [ ] Documentation
- [ ] Performance improvement

## Testing
- [ ] Unit tests passed
- [ ] E2E tests passed
- [ ] Accessibility audit passed
- [ ] Lighthouse score maintained

## Accessibility & Security
- [ ] WCAG 2.1 AAA compliance verified
- [ ] No new security vulnerabilities
- [ ] No hardcoded secrets

## Deployment Notes
- [ ] Environment variables documented
- [ ] Breaking changes noted
- [ ] Migration guide provided (if needed)
```

## Production Checklist

Before deploying to production:

```
✓ All tests passing (npm test && npm run test:e2e && npm run test:a11y)
✓ Type checking passed (npm run type-check)
✓ Linting passed (npm run lint)
✓ Build successful (npm run build)
✓ No console errors
✓ Lighthouse scores meet targets (Perf 90+, A11y 95+, SEO 100)
✓ All links functional
✓ All forms working
✓ Marketplace links verified
✓ SEO metadata correct
✓ CORS headers configured
✓ CSP headers verified
✓ Environment variables set
✓ SSL/TLS certificate valid
✓ CDN configured (if applicable)
✓ Analytics configured
✓ Monitoring alerts set up
```

## Support & Resources

### Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### Tools

- [VS Code](https://code.visualstudio.com) - Recommended editor
- [Vercel](https://vercel.com) - Deployment platform
- [GitHub](https://github.com) - Version control

### Useful Extensions (VS Code)

- ESLint
- Prettier - Code formatter
- Tailwind CSS IntelliSense
- Thunder Client (API testing)

---

**Last Updated**: October 2024
**Next.js Version**: 16+
**React Version**: 19+
**Node Version**: 18+

Happy coding! 🚀
