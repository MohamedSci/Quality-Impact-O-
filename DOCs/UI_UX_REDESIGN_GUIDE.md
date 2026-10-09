# Frontend UI/UX Redesign Guide - Quality Impact OÜ

**Status:** REDESIGN SPECIFICATION
**Target:** Production-grade frontend matching blueprint standards
**Timeline:** 2-3 weeks implementation

---

## Phase 1: Color System & Design Tokens Update

### Current vs. New Color Palette

#### Color System Overhaul

```typescript
// tailwind.config.ts - New Color Tokens
const colors = {
  // Navy Base (Header & Dark Surfaces)
  navy: {
    950: '#0F172A', // Header background
    900: '#111E2E', // Darker surfaces
    800: '#1A2A3D', // Card backgrounds
  },

  // Slate (Surfaces & Text)
  slate: {
    50: '#F8FAFC', // Lightest text
    100: '#F1F5F9', // Light surfaces
    200: '#E2E8F0', // Primary text
    300: '#CBD5E1', // Secondary text
    400: '#94A3B8', // Tertiary text
    500: '#64748B', // Disabled text
    600: '#475569', // Borders
    700: '#334155', // Dark borders
    800: '#1E293B', // Dark surface
    900: '#0F172A', // Navy base
  },

  // Electric Cyan (Primary Accent)
  cyan: {
    400: '#22D3EE', // Light cyan
    500: '#06B6D4', // Standard cyan
    600: '#0891B2', // Dark cyan
    accent: '#0EA5E9', // Primary accent (BLUEPRINT)
  },

  // Mint (Success & Status)
  emerald: {
    400: '#34D399', // Light mint
    500: '#10B981', // Standard mint
    600: '#059669', // Dark mint
  },

  // Status Colors
  status: {
    success: '#10B981', // Green
    warning: '#F59E0B', // Amber
    error: '#EF4444', // Red
    info: '#0EA5E9', // Cyan
  },

  // Cloud Provider Colors (Marketing)
  cloud: {
    aws: '#FF9900', // AWS Orange
    azure: '#0078D4', // Azure Blue
    gcp: '#4285F4', // GCP Blue
  },
};
```

### Typography Scale

```typescript
// Typography System
const typography = {
  // Headings
  h1: {
    fontSize: '4rem', // 64px
    fontWeight: '700',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
  },
  h2: {
    fontSize: '3rem', // 48px
    fontWeight: '700',
    lineHeight: '1.2',
    letterSpacing: '-0.01em',
  },
  h3: {
    fontSize: '2rem', // 32px
    fontWeight: '600',
    lineHeight: '1.3',
  },
  h4: {
    fontSize: '1.5rem', // 24px
    fontWeight: '600',
    lineHeight: '1.4',
  },

  // Body
  'body-lg': {
    fontSize: '1.125rem', // 18px
    fontWeight: '400',
    lineHeight: '1.6',
  },
  'body-md': {
    fontSize: '1rem', // 16px
    fontWeight: '400',
    lineHeight: '1.6',
  },
  'body-sm': {
    fontSize: '0.875rem', // 14px
    fontWeight: '400',
    lineHeight: '1.5',
  },

  // Mono (Terminal/Code)
  mono: {
    fontFamily: 'Fira Code, monospace',
    fontSize: '0.875rem',
    fontWeight: '400',
    lineHeight: '1.5',
  },
};
```

### Shadow System

```typescript
// Shadow Effects for Depth
const shadows = {
  // Subtle shadows
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',

  // Standard shadows
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',

  // Large shadows (cards, modals)
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',

  // Glow effects (premium feel)
  'glow-cyan': '0 0 20px rgba(14, 165, 233, 0.3)',
  'glow-cyan-lg': '0 0 40px rgba(14, 165, 233, 0.5)',

  // Inner shadows (depth)
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
};
```

---

## Phase 2: Navigation Redesign

### New Navigation Component Structure

```typescript
// components/branding/Navigation.tsx - REDESIGNED

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-navy-950/80 backdrop-blur-md border-b border-slate-700">
      <div className="container-max px-6 md:px-12 py-4">
        {/* Container Grid Layout */}
        <div className="flex items-center justify-between gap-8">

          {/* LEFT: Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo size="md" variant="full" />
          </Link>

          {/* CENTER: Navigation Links (Desktop Only) */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Links with proper styling */}
            <NavLink href="/#engines" label="Engines" />
            <NavLink href="/marketplaces" label="Marketplaces" />
            <NavLink href="/enterprise" label="Enterprise" />
            <NavLink href="https://docs.qa-paas.com" label="Docs" external />
          </nav>

          {/* RIGHT: CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Ghost Button - Marketplace Portal */}
            <Button
              variant="ghost"
              size="sm"
              className="border border-cyan-accent hover:border-cyan-400"
              onClick={() => window.open('/marketplaces', '_blank')}
            >
              Marketplace Portal
            </Button>

            {/* Primary Button - Deploy Runner */}
            <Button
              variant="primary"
              size="sm"
              className="bg-cyan-accent hover:bg-cyan-500"
              onClick={() => window.location.href = '/marketplaces#deploy'}
            >
              Deploy Runner
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" aria-label="Toggle menu">
            {/* Menu icon */}
          </button>
        </div>
      </div>
    </nav>
  );
};
```

### Navigation Link Styling

```typescript
// NavLink Component - Premium Style
const NavLink: React.FC<{ href: string; label: string; external?: boolean }> = (
  { href, label, external }
) => {
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      className={`
        text-sm font-medium
        text-slate-300 hover:text-cyan-accent
        transition-colors duration-200
        pb-1 border-b-2 border-transparent
        hover:border-cyan-accent
        focus-ring rounded-sm
      `}
    >
      {label}
    </Link>
  );
};
```

### Button Variants

```typescript
// Button Variants - New Styles

// Ghost Button (Outlined)
ghost: {
  base: 'border-2 border-current text-slate-300 hover:text-cyan-accent hover:border-cyan-accent',
  states: 'transition-all duration-200 hover:shadow-glow-cyan',
}

// Primary Button (Cyan Fill)
primary: {
  base: 'bg-cyan-accent text-white hover:bg-cyan-500 shadow-lg',
  states: 'transition-all duration-200 hover:shadow-glow-cyan-lg',
}

// Secondary Button (Navy/Slate)
secondary: {
  base: 'bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700',
  states: 'transition-all duration-200',
}
```

---

## Phase 3: Hero Section Redesign

### New Hero Component

```typescript
// components/home/Hero.tsx - REDESIGNED

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] pt-24 pb-12 md:pt-32 md:pb-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 pointer-events-none">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-accent/10 to-transparent opacity-30" />
      </div>

      {/* Content Container */}
      <div className="container-max px-6 md:px-12 relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge variant="cyan" size="lg">
              QUALITY IMPACT OÜ // QA-PAAS PLATFORM
            </Badge>

            {/* Headline */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-slate-100">
                  AI-Orchestrated
                </span>
                <br />
                <span className="text-cyan-accent">
                  Quality Engineering
                </span>
              </h1>
              <p className="mt-4 text-xl text-slate-400">
                Enterprise QA-PaaS across AWS, Azure, and Google Cloud
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Deploy AI-powered test execution with self-healing automation,
              intelligent triage, and enterprise compliance. Multi-cloud native
              by design.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigateToMarketplace()}
                className="shadow-glow-cyan-lg"
              >
                Deploy Now
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => scrollToElement('#telemetry-demo')}
                className="border-cyan-accent text-cyan-accent"
              >
                View Live Telemetry →
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <TrustBadge icon={Shield} label="ISO 27001" />
              <TrustBadge icon={Lock} label="SOC2 Type II" />
              <TrustBadge icon={Cloud} label="Multi-Cloud" />
            </div>
          </div>

          {/* Right: Interactive Terminal */}
          <div className="hidden lg:block">
            <AITriageConsole />
          </div>
        </div>

        {/* Mobile: Terminal Below */}
        <div className="lg:hidden mt-16">
          <AITriageConsole />
        </div>
      </div>
    </section>
  );
};
```

---

## Phase 4: Interactive Components

### AITriageConsole Component

```typescript
// components/telemetry/AITriageConsole.tsx - NEW

export const AITriageConsole: React.FC = () => {
  return (
    <div id="telemetry-demo" className="w-full">
      {/* Terminal Frame */}
      <div className="border border-slate-700 rounded-lg overflow-hidden shadow-xl bg-slate-900/50 backdrop-blur-sm">

        {/* Terminal Header */}
        <div className="bg-slate-800 border-b border-slate-700 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="ml-3 text-xs text-slate-400">AI Triage Console</span>
        </div>

        {/* Terminal Content */}
        <div className="p-4 font-mono text-sm space-y-2 h-64 overflow-y-auto">
          {/* Dynamic log entries */}
          <LogEntry timestamp="14:23:45" level="info" message="Starting test suite" />
          <LogEntry timestamp="14:23:46" level="info" message="Initializing self-healing locators" />
          <LogEntry timestamp="14:23:47" level="info" message="Detected DOM shift in Login button" />
          <LogEntry timestamp="14:23:48" level="success" message="Auto-healed: button.nth-child(3)" />
          <LogEntry timestamp="14:23:49" level="info" message="Retrying failed assertion" />
          <LogEntry timestamp="14:23:50" level="success" message="✓ All tests passed" />

          {/* Cursor */}
          <div className="text-cyan-accent">
            <span className="animate-pulse">▌</span>
          </div>
        </div>
      </div>

      {/* Performance Metrics Below Terminal */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        <MetricBox label="Execution Time" value="2.34s" icon={Zap} />
        <MetricBox label="Tests Passed" value="2847" icon={CheckCircle2} />
        <MetricBox label="Coverage" value="94.2%" icon={TrendingUp} />
      </div>
    </div>
  );
};

// Helper Components
const LogEntry: React.FC<{ timestamp: string; level: string; message: string }> = ({
  timestamp,
  level,
  message,
}) => {
  const colors = {
    info: 'text-cyan-accent',
    success: 'text-emerald-400',
    warning: 'text-yellow-400',
    error: 'text-red-400',
  };

  return (
    <div className={colors[level as keyof typeof colors] || 'text-slate-300'}>
      <span className="text-slate-500">[{timestamp}]</span> {message}
    </div>
  );
};
```

---

## Phase 5: Marketplace Section Redesign

### Marketplace Cards with Cloud Branding

```typescript
// components/marketplace/MarketplaceCard.tsx - REDESIGNED

export const MarketplaceCard: React.FC<{ provider: 'aws' | 'azure' | 'gcp' }> = (
  { provider }
) => {
  const config = {
    aws: {
      name: 'AWS Marketplace',
      color: '#FF9900',
      icon: Cloud,
      description: 'Deploy via AWS Fargate or Batch',
      link: 'https://aws.amazon.com/marketplace/pp/prodview-qapaas',
    },
    azure: {
      name: 'Azure DevOps',
      color: '#0078D4',
      icon: Cloud,
      description: 'Native Azure DevOps extension',
      link: 'https://marketplace.visualstudio.com/items?itemName=QualityImpact.qa-paas',
    },
    gcp: {
      name: 'Google Cloud',
      color: '#4285F4',
      icon: Cloud,
      description: 'Deploy via Cloud Run',
      link: 'https://console.cloud.google.com',
    },
  };

  const cfg = config[provider];

  return (
    <Card className="group relative border border-slate-700 hover:border-slate-600 transition-all duration-300">
      {/* Gradient Border Effect */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: `linear-gradient(135deg, ${cfg.color}20 0%, transparent 100%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-6 space-y-4">
        {/* Header with Icon */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${cfg.color}20` }}
            >
              <cfg.icon className="w-6 h-6" style={{ color: cfg.color }} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-100">{cfg.name}</h3>
              <p className="text-xs text-slate-400">{cfg.description}</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-2 text-sm text-slate-300">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" style={{ color: cfg.color }} />
            High-compute runners
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" style={{ color: cfg.color }} />
            Managed execution
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" style={{ color: cfg.color }} />
            Cost-optimized
          </li>
        </ul>

        {/* CTA Button */}
        <Button
          variant="primary"
          size="sm"
          className="w-full mt-4"
          onClick={() => window.open(cfg.link, '_blank')}
          style={{ backgroundColor: cfg.color }}
        >
          View on {cfg.name.split(' ')[0]}
        </Button>
      </div>
    </Card>
  );
};
```

---

## Phase 6: Footer Redesign

### 4-Column Footer Layout

```typescript
// components/branding/Footer.tsx - REDESIGNED

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-navy-950 border-t border-slate-700 mt-16">
      <div className="container-max px-6 md:px-12 py-16">

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: Corporate Identity */}
          <div className="space-y-4">
            <Logo size="sm" variant="full" />
            <div className="space-y-2 text-sm text-slate-400">
              <p className="font-semibold text-slate-200">Quality Impact OÜ</p>
              <p>EU Registry: 16842011</p>
              <p>VAT: EE102684201</p>
              <p>Tallinn, Estonia</p>
              <div className="pt-2 flex gap-2">
                <Badge variant="success" size="sm">ISO 27001</Badge>
                <Badge variant="info" size="sm">SOC2 Type II</Badge>
              </div>
            </div>
          </div>

          {/* Column 2: Products & Engines */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-200">Testing Engines</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <FooterLink href="#" label="E2E BDD Testing" />
              <FooterLink href="#" label="API & k6 Performance" />
              <FooterLink href="#" label="OWASP ZAP Security" />
              <FooterLink href="#" label="Visual AI Engine" />
              <FooterLink href="#" label="Self-Healing AI" />
            </ul>
          </div>

          {/* Column 3: Cloud Marketplaces */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-200">Cloud Platforms</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <FooterLink
                href="https://aws.amazon.com/marketplace/pp/prodview-qapaas"
                label="AWS Marketplace"
                external
              />
              <FooterLink
                href="https://marketplace.visualstudio.com"
                label="Azure DevOps"
                external
              />
              <FooterLink
                href="https://cloud.google.com/marketplace"
                label="Google Cloud"
                external
              />
            </ul>
          </div>

          {/* Column 4: Legal & Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-200">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <FooterLink href="/legal/privacy" label="Privacy Policy" />
              <FooterLink href="#" label="Security Whitepaper" />
              <FooterLink href="#" label="Terms of Service" />
              <FooterLink href="#" label="Status Page" />
              <FooterLink href="https://docs.qa-paas.com" label="Documentation" external />
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mt-12 pt-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
          <p>&copy; 2024 Quality Impact OÜ. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <FooterLink href="#" label="Terms" />
            <FooterLink href="#" label="Privacy" />
            <FooterLink href="#" label="Contact" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{
  href: string;
  label: string;
  external?: boolean;
}> = ({ href, label, external }) => (
  <li>
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      className="hover:text-cyan-accent transition-colors"
    >
      {label}
    </Link>
  </li>
);
```

---

## Phase 7: New Enterprise Page

### `/app/enterprise/page.tsx` Structure

```typescript
// This page should highlight:
// - Multi-tenant isolation
// - SOC 2 compliance
// - SLA guarantees
// - Enterprise support
// - Custom deployment options
// - Security certifications
// - Role-based access control
// - Audit logging
```

---

## Implementation Checklist

### Week 1: Foundation

- [ ] Update Tailwind colors in `tailwind.config.ts`
- [ ] Update Typography tokens
- [ ] Update Shadow system
- [ ] Update Button component variants
- [ ] Update Badge component styles
- [ ] Update Card component styles
- [ ] Redesign Navigation component
- [ ] Update Header styling

### Week 2: Components & Pages

- [ ] Create AITriageConsole component
- [ ] Create RunnerCalculator component
- [ ] Redesign Hero section
- [ ] Update Marketplace cards
- [ ] Redesign Footer
- [ ] Create Enterprise page
- [ ] Add animations & transitions
- [ ] Add hover effects

### Week 3: Polish & Testing

- [ ] Comprehensive QA testing
- [ ] Accessibility audit (WCAG AAA)
- [ ] Performance optimization
- [ ] Mobile responsiveness check
- [ ] Cross-browser testing
- [ ] Final design review
- [ ] Deploy to production

---

## Design Specifications Summary

### Color Tokens

- Navy Base: `#0F172A`
- Electric Cyan: `#0EA5E9`
- Slate Surface: `#1E293B`
- Mint Status: `#10B981`
- Cloud AWS: `#FF9900`
- Cloud Azure: `#0078D4`
- Cloud GCP: `#4285F4`

### Typography

- H1: 64px, 700 weight, -2% letter spacing
- H2: 48px, 700 weight, -1% letter spacing
- Body: 16px, 400 weight, 1.6 line height
- Mono: Fira Code, 14px

### Shadows

- Default: `0 4px 6px -1px rgba(0, 0, 0, 0.1)`
- Glow Cyan: `0 0 20px rgba(14, 165, 233, 0.3)`
- Large Glow: `0 0 40px rgba(14, 165, 233, 0.5)`

### Animations

- Transitions: 200-300ms ease-in-out
- Hover effects: Scale, color, shadow changes
- Loading: Pulsing, spinning states
- Focus rings: 2px cyan outline

---

## Quality Assurance Criteria

✅ **Visual**

- Matches production qa-paas.com design
- Professional, premium appearance
- Proper color contrast (4.5:1 WCAG AA)
- Consistent spacing & alignment

✅ **Functional**

- All CTAs working correctly
- Navigation responsive
- Mobile-first approach
- Cross-browser compatible

✅ **Performance**

- Core Web Vitals optimized
- Fast load times (<3s)
- Smooth animations (60fps)
- Minimal repaints

✅ **Accessibility**

- WCAG AAA compliance
- Keyboard navigation
- Screen reader compatible
- Proper ARIA labels

---

## Success Metrics

| Metric                | Target       | Status |
| --------------------- | ------------ | ------ |
| Lighthouse Score      | 95+          | TBD    |
| Accessibility (WCAG)  | AAA          | TBD    |
| Performance (CLS)     | <0.1         | TBD    |
| Mobile Responsiveness | 100%         | TBD    |
| Color Contrast        | 4.5:1        | TBD    |
| Design Match          | 100% to spec | TBD    |

---

## Conclusion

This redesign will transform the website from a generic template into a premium, enterprise-grade SaaS platform that matches industry standards and the production qa-paas.com website.

**Status: READY FOR IMPLEMENTATION** ✅
