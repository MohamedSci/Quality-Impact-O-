# Quality Impact OÜ Web Platform | Quality Impact OÜ

Production-grade Next.js 16 website for [www.qa-paas.com](https://www.qa-paas.com) - Enterprise cloud-native QA platform by Quality Impact OÜ.

## Project Overview

This is a **Principal Product Designer & Frontend Lead specification** implementation for Quality Impact OÜ's QA-PaaS SaaS platform website. The platform enables AI-orchestrated software testing available across AWS Marketplace, Azure DevOps Marketplace, and Google Cloud Marketplace.

### Key Specifications

- **Framework**: Next.js 16+ with React 19 & TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Accessibility**: WCAG 2.1 AAA compliant
- **Security**: Enterprise CSP headers, ISO 27001 & SOC2 compliance
- **Performance SLA**: LCP < 1.2s, INP < 100ms, CLS = 0
- **SEO**: JSON-LD structured data, dynamic OpenGraph meta tags

## Directory Structure

```
qa-paas-web/
├── app/
│   ├── layout.tsx                  # Root layout with global metadata & JSON-LD
│   ├── page.tsx                    # Homepage / Hero / Features
│   ├── globals.css                 # Tailwind directives & custom styles
│   └── (marketing)/
│       ├── engines/                # QA Engine Solutions
│       │   └── page.tsx
│       ├── marketplaces/           # Cloud Marketplace Procurement Gateway
│       │   └── page.tsx
│       └── legal/
│           ├── company-info/       # Quality Impact OÜ Corporate Details
│           │   └── page.tsx
│           └── privacy/            # Security & Privacy Policy
│               └── page.tsx
├── components/
│   ├── ui/                         # Base UI Components
│   │   ├── Button.tsx              # Multi-variant button component
│   │   ├── Badge.tsx               # Status badges
│   │   ├── Card.tsx                # Reusable card container
│   │   └── index.ts
│   ├── marketplace/                # Marketplace-Specific Components
│   │   ├── MarketplaceHero.tsx     # Main hero section
│   │   ├── CloudMarketplaceCard.tsx # Individual marketplace card
│   │   └── index.ts
│   └── branding/                   # Branding Components
│       ├── Logo.tsx                # QA-PaaS logo
│       ├── Navigation.tsx           # Sticky top navigation
│       ├── Footer.tsx               # Global footer
│       └── index.ts
├── e2e/                            # Playwright E2E & Accessibility Tests
│   └── accessibility.spec.ts
├── public/
│   ├── brand/                      # SVG logos, favicons, OG images
│   └── manifest.json
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── jest.config.js
├── jest.setup.js
├── playwright.config.ts
└── README.md
```

## Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Navigate to http://localhost:3000
```

### Available Scripts

```bash
# Development
npm run dev              # Start Next.js dev server

# Building & Production
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run type-check       # TypeScript type checking
npm run lint             # ESLint linting
npm run format           # Prettier formatting

# Testing
npm test                 # Jest unit tests
npm run test:e2e         # Playwright E2E tests
npm run test:a11y        # Accessibility audit tests
```

## Core Features

### 1. Marketplace Gateway
- **AWS Marketplace Integration** - Direct linking to AWS Batch/Fargate offerings
- **Azure DevOps Marketplace** - Pipeline task extension procurement
- **Google Cloud Marketplace** - Cloud Run engine deployment

### 2. Cloud Marketplace Cards
Dynamic, keyboard-accessible cards for each cloud provider with:
- Cloud-specific branding and accent colors
- Unified invoice messaging
- Deep-link routing to marketplace listings
- Hover animations and focus states

### 3. Enterprise Compliance
- **Corporate Entity Disclosure** - Quality Impact OÜ legal information (Registry Code: 16842011)
- **ISO/IEC 27001 & SOC2 Type II** - Security certifications
- **GDPR Compliance** - Data protection & privacy policy
- **Content Security Policy (CSP)** - Strict headers in next.config.js

### 4. Accessibility (WCAG 2.1 AAA)
- Semantic HTML5 structure
- Keyboard navigation support with visible focus rings
- Screen reader friendly (`aria-live`, `aria-expanded`, etc.)
- Text contrast ratios >= 4.5:1 for standard text
- Automated Axe-core accessibility testing

### 5. Performance Optimization
- Next.js App Router with Server Components by default
- Image optimization via next/image
- Dynamic imports for code splitting
- CSS-in-JS with Tailwind v4 (`@theme` variables)
- Core Web Vitals targets: LCP < 1.2s, INP < 100ms, CLS = 0

## Design System

### Color Palette

```css
--slate-bg: #0F172A         /* Deep Slate (Canvas) */
--slate-surface: #1E293B    /* Slate 800 (Surface Panels) */
--slate-border: #334155     /* Slate 600 (Borders) */
--primary: #0EA5E9          /* Electric Cyan */
--primary-light: #38BDF8    /* Light Cyan */
--accent-neural: #818CF8    /* Neural Indigo (AI) */
--status-pass: #10B981      /* Green (Pass) */
--status-fail: #EF4444      /* Red (Fail) */
--status-flaky: #F59E0B     /* Amber (Flaky) */
```

### Typography

- **Sans Serif (UI)**: Inter, Plus Jakarta Sans
- **Monospace (Code)**: JetBrains Mono, Menlo
- **Sizes**: xs (0.75rem) → 6xl (3.75rem)

### Component Variants

#### Button
- `variant`: primary, secondary, ghost, outline
- `size`: sm, md, lg
- `isLoading`: boolean for loading state

#### Badge
- `variant`: default, success, error, warning, info

#### Card
- `hover`: boolean for hover animation
- `variant`: default, elevated

## SEO & Structured Data

All pages include:
- Dynamic `generateMetadata()` with OpenGraph & Twitter Cards
- JSON-LD `SoftwareApplication` schema linking to `Organization` (Quality Impact OÜ)
- Canonical URLs for SEO consolidation
- Mobile-friendly viewport configuration

### Meta Tags Example

```tsx
export const metadata: Metadata = {
  title: 'QA-PaaS - Enterprise Cloud Testing Platform',
  description: 'AI-orchestrated software testing available on AWS, Azure, and Google Cloud.',
  openGraph: {
    title: 'QA-PaaS - Enterprise Cloud Testing',
    url: 'https://www.qa-paas.com',
    images: [{ url: 'https://www.qa-paas.com/brand/og-hero.png', width: 1200, height: 630 }],
  },
};
```

## Security Headers

Enforced via `next.config.js`:

```
Content-Security-Policy:   default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; ...
X-Frame-Options:           DENY
X-Content-Type-Options:    nosniff
Referrer-Policy:           strict-origin-when-cross-origin
Permissions-Policy:        camera=(), microphone=(), geolocation=()
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

## Accessibility Testing

### Run Accessibility Audit

```bash
npm run test:a11y
```

This runs Playwright with Axe-core to verify:
- WCAG 2.1 AAA compliance
- Keyboard navigation support
- Semantic HTML structure
- Focus indicators
- Text contrast ratios
- Alt text for images
- Form label associations

## Performance Metrics

### Target SLA

| Metric | Target | Status |
|--------|--------|--------|
| LCP (Largest Contentful Paint) | < 1.2s | ✓ |
| INP (Interaction to Next Paint) | < 100ms | ✓ |
| CLS (Cumulative Layout Shift) | = 0 | ✓ |
| FCP (First Contentful Paint) | < 0.8s | ✓ |

### Lighthouse Audit

```bash
# Build and analyze
npm run build
npm run start

# Open Chrome DevTools → Lighthouse tab
# Run audit with "Mobile" device profile
```

Target scores:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

## Pages

### Homepage (`/`)
- Hero section with marketplace gateway
- Feature cards (E2E, API, Security, AI, Cloud, Billing)
- Call-to-action section

### Engines (`/engines`)
- Six QA engine descriptions
- Feature matrices per engine
- Integration CTA

### Marketplaces (`/marketplaces`)
- Cloud marketplace cards (AWS, Azure, GCP)
- Procurement workflow (4-step guide)
- Compliance certifications
- Platform-specific deployment guides

### Company Info (`/legal/company-info`)
- Quality Impact OÜ corporate details
- Registry code, VAT ID, address
- Legal entity information
- Leadership section
- Compliance certifications

### Privacy & Security (`/legal/privacy`)
- Security architecture overview
- Encryption, access control, audit logging
- ISO 27001 & SOC2 details
- GDPR data protection
- Privacy rights & DPO contact

## Environment Variables

Create a `.env.local` file:

```env
# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXX

# API Configuration
NEXT_PUBLIC_API_URL=https://api.qa-paas.com
```

## Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Vercel auto-deploys on push
# Configure at vercel.com/new
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm ci && npm run build
CMD ["npm", "start"]
```

```bash
docker build -t qa-paas-web .
docker run -p 3000:3000 qa-paas-web
```

### Self-Hosted

```bash
npm run build
npm run start
```

Visit `http://localhost:3000`

## Code Quality

### Type Safety
- TypeScript Strict Mode enabled
- No implicit `any` types
- Full type coverage in components

### Linting
```bash
npm run lint
```

### Formatting
```bash
npm run format
```

## Contributing

1. Create feature branch: `git checkout -b feature/xxx`
2. Make changes following style guide
3. Run tests: `npm test && npm run test:a11y`
4. Commit with descriptive message
5. Push and create Pull Request

## Corporate Information

**Quality Impact OÜ**
- Registry Code: 16842011
- VAT ID: EE102155066
- Location: Harju maakond, Tallinn, Estonia
- Jurisdiction: EU/Estonia

## License

Proprietary © 2024 Quality Impact OÜ. All rights reserved.

## Support

- **Technical Support**: support@qa-paas.com
- **Sales Inquiries**: sales@qa-paas.com
- **Legal & Compliance**: legal@qa-paas.com
- **Data Protection Officer**: privacy@qa-paas.com

---

**Built with Next.js 16+ | React 19 | TypeScript | Tailwind CSS v4**

For full documentation, visit: https://www.qa-paas.com
