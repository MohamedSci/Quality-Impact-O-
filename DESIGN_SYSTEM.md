# 🎨 QA-PaaS Design System

Professional, production-grade design system for Quality Impact OÜ's QA-PaaS platform. Built with Tailwind CSS v4 and a comprehensive React component library.

## Table of Contents

- [Design Tokens](#design-tokens)
- [Color System](#color-system)
- [Typography](#typography)
- [Spacing & Layout](#spacing--layout)
- [Components](#components)
- [Usage Examples](#usage-examples)

---

## Design Tokens

### Tailwind Configuration

All design tokens are defined in `tailwind.config.ts` with a comprehensive set of:

- **11 Color Palettes** (Primary, Accent, Success, Error, Warning, Info, Neutral + more)
- **30+ Font Sizes** with integrated line heights
- **12 Border Radius** options (from 4px to 9999px)
- **15+ Shadow Presets** (including glow effects)
- **20+ Animation keyframes** (fade, slide, scale, bounce, etc.)
- **Responsive Breakpoints** (xs to 2xl)

---

## Color System

### Primary Palette (Electric Cyan)

```
primary-50:  #F0F9FE   (Background)
primary-100: #E0F2FE
primary-200: #BAE6FD
primary-300: #7DD3FC
primary-400: #38BDF8
primary-500: #0EA5E9 (Main)
primary-600: #0284C7
primary-700: #0369A1
primary-800: #075985
primary-900: #0C3D66
primary-950: #06254E (Darkest)
```

**Usage**: Primary CTAs, links, active states, primary interactions

### Accent Palette (Neural Indigo)

```
accent-50:  #F5F3FF   (Background)
accent-100: #EDE9FE
accent-200: #DDD6FE
accent-300: #C4B5FD
accent-400: #A78BFA
accent-500: #818CF8 (Main - AI/ML features)
accent-600: #6366F1
accent-700: #4F46E5
accent-800: #4338CA
accent-900: #3730A3
accent-950: #312E81
```

**Usage**: AI features, accent highlights, secondary interactions

### Semantic Palettes

#### Success (Green)

```
success-50:  #F0FDF4   → success-950: #051E0F
Primary: success-500 (#22C55E)
```

**Usage**: Confirmations, successful states, passed tests

#### Error (Red)

```
error-50:  #FEF2F2   → error-950: #4C0519
Primary: error-500 (#EF4444)
```

**Usage**: Errors, failures, destructive actions

#### Warning (Amber)

```
warning-50:  #FFFBEB   → warning-950: #451A03
Primary: warning-500 (#F59E0B)
```

**Usage**: Warnings, flaky tests, cautions, attention needed

#### Info (Sky)

```
info-50:  #F0F9FF   → info-950: #06254E
Primary: info-500 (#0EA5E9)
```

**Usage**: Information, help text, notifications

#### Neutral (Slate)

```
neutral-50:   #F8FAFC  (Lightest)
neutral-100:  #F1F5F9
neutral-200:  #E2E8F0
neutral-300:  #CBD5E1
neutral-400:  #94A3B8
neutral-500:  #64748B (Medium)
neutral-600:  #475569
neutral-700:  #334155
neutral-800:  #1E293B (Surface)
neutral-900:  #0F172A (Background)
neutral-950:  #020617 (Darkest)
```

**Usage**: Backgrounds, borders, text, neutral elements

### Color Application

```typescript
// Primary Color
<div className="bg-primary-500 text-white">Primary</div>

// Success State
<div className="bg-success-500/15 border border-success-500/40 text-success-300">
  Success
</div>

// Error State
<div className="bg-error-500/15 border border-error-500/40 text-error-300">
  Error
</div>

// Gradient Text
<h1 className="gradient-text">AI-Powered Testing</h1>

// Glass Effect
<div className="glass">Frosted glass effect</div>
```

---

## Typography

### Font Families

```
sans:    Inter, Plus Jakarta Sans, system-ui
display: Plus Jakarta Sans (headings)
mono:    JetBrains Mono, Menlo, Courier New
```

### Heading Scale

```
h1: 3.75rem (60px) - Main page titles
h2: 3rem    (48px) - Section titles
h3: 2.25rem (36px) - Subsection titles
h4: 1.875rem (30px) - Card titles
h5: 1.5rem  (24px) - Minor headings
h6: 1.25rem (20px) - Labels/badges
```

### Body Scale

```
display: 2.25rem (36px) - Feature highlight
lg:      1.125rem (18px) - Large body text
base:    1rem     (16px) - Standard body
sm:      0.875rem (14px) - Secondary text
xs:      0.75rem  (12px) - Caption/hint
```

### UI Scale

```
label:   0.875rem (14px) - Form labels
caption: 0.75rem  (12px) - Help text
code:    0.875rem (14px) - Code blocks
```

### Font Weight Options

```
thin:      100
extralight: 200
light:     300
normal:    400
medium:    500
semibold:  600
bold:      700 (Headings)
extrabold: 800 (Strong emphasis)
black:     900
```

### Typography Usage

```typescript
// Heading
<h1 className="text-h1 font-bold">Main Title</h1>

// Body text
<p className="text-base text-neutral-300">
  Standard paragraph text
</p>

// Code
<code className="text-code font-mono bg-neutral-900 px-2 py-1 rounded">
  const example = true;
</code>

// Label
<label className="text-label">Form Label</label>
```

---

## Spacing & Layout

### Spacing Scale

```
xs:   0.25rem (4px)
sm:   0.5rem  (8px)
md:   1rem    (16px)
lg:   1.5rem  (24px)
xl:   2rem    (32px)
2xl:  2.5rem  (40px)
3xl:  3rem    (48px)
4xl:  4rem    (64px)
5xl:  5rem    (80px)
6xl:  6rem    (96px)
7xl:  7rem    (112px)
8xl:  8rem    (128px)
```

### Container Sizes

```typescript
// Max-width containers
<div className="container-max">      {/* 7xl (80rem) */}
  <div className="container-tight">  {/* 5xl (64rem) */}
    Content
  </div>
</div>

// Section padding
<section className="section-padding">      {/* py-16 px-6 md:px-12 */}
<section className="section-padding-lg">  {/* py-24 px-6 md:px-12 */}
<section className="section-padding-sm">  {/* py-8 px-6 md:px-12 */}
```

### Responsive Breakpoints

```
xs:  320px
sm:  640px  (Tablet)
md:  768px  (Laptop)
lg:  1024px (Desktop)
xl:  1280px (Wide)
2xl: 1536px (Ultra-wide)
```

---

## Components

### Button Component

```typescript
import { Button } from '@/components/ui';

// Variants: solid, outline, soft, ghost, link
// Sizes: xs, sm, md, lg, xl
// Colors: primary, secondary, accent, success, error, warning, info, neutral

<Button variant="solid" size="md" color="primary">
  Click me
</Button>

// With icon
<Button icon={<ArrowRight />} iconPosition="right">
  Next step
</Button>

// Loading state
<Button isLoading>Processing...</Button>

// Disabled state
<Button isDisabled>Disabled</Button>

// Full width
<Button fullWidth>Full Width Button</Button>
```

**Variants:**

- `solid` - Filled button (default)
- `outline` - Border with transparent background
- `soft` - Subtle background with text color
- `ghost` - Text only with hover background
- `link` - Underlined link style

### Badge Component

```typescript
import { Badge } from '@/components/ui';

// Variants: default, success, error, warning, info, accent, neutral
// Sizes: xs, sm, md, lg, xl

<Badge variant="success">Passed</Badge>
<Badge variant="error" icon={<AlertCircle />}>Test Failed</Badge>
<Badge variant="warning" size="lg">Warning</Badge>

// Semantic status badges
<Badge variant="success">ISO 27001 Compliant</Badge>
<Badge variant="info">AWS Marketplace</Badge>
```

### Card Component

```typescript
import { Card } from '@/components/ui';

// Variants: default, elevated, flat
// Padding: xs, sm, md, lg, xl, none
// Border colors: default, accent, success, error, warning, info

<Card hover interactive>
  <h3>Card Title</h3>
  <p>Card content with hover effect</p>
</Card>

<Card variant="elevated" padding="lg">
  <p>Elevated card with large padding</p>
</Card>

<Card borderColor="accent">
  <p>Card with accent border</p>
</Card>
```

### Input Component

```typescript
import { Input } from '@/components/ui';

// Sizes: sm, md, lg
// States: default, focus, error, success, disabled
// Icon positions: left, right

<Input
  size="md"
  label="Email Address"
  type="email"
  placeholder="your@email.com"
  required
/>

<Input
  error="Email is required"
  hint="Enter a valid email address"
  icon={<Mail />}
  iconPosition="left"
/>

<Input
  state="success"
  value="valid@email.com"
  disabled
/>
```

### Alert Component

```typescript
import { Alert } from '@/components/ui';

// Variants: success, error, warning, info, neutral

<Alert variant="success" title="Success!">
  Your changes have been saved.
</Alert>

<Alert variant="error" title="Error" closeable onClose={handleClose}>
  Something went wrong
</Alert>

<Alert variant="warning" icon={<AlertTriangle />}>
  This action cannot be undone
</Alert>

<Alert variant="info">
  <p>Custom content with HTML</p>
</Alert>
```

### Divider Component

```typescript
import { Divider } from '@/components/ui';

// Orientation: horizontal, vertical
// Spacing: xs, sm, md, lg, xl
// Color: default, subtle, strong
// Label positions: left, center, right

<Divider />
<Divider spacing="lg" />
<Divider label="or" labelPosition="center" />
<Divider color="strong" />

<div className="flex gap-8">
  <div>Content left</div>
  <Divider orientation="vertical" />
  <div>Content right</div>
</div>
```

### Skeleton Component

```typescript
import { Skeleton } from '@/components/ui';

// Variants: text, card, avatar

<Skeleton variant="text" count={3} />
<Skeleton variant="card" />
<Skeleton variant="avatar" circle />
```

---

## Usage Examples

### Form Example

```typescript
import { Button, Input, Alert, Divider } from '@/components/ui';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form className="max-w-md mx-auto space-y-6">
      {submitted && (
        <Alert variant="success" title="Message sent!">
          We'll get back to you soon.
        </Alert>
      )}

      <Input
        label="Full Name"
        placeholder="John Doe"
        required
      />

      <Input
        label="Email"
        type="email"
        placeholder="john@example.com"
        icon={<Mail />}
        required
      />

      <Divider label="or call us" />

      <Button fullWidth onClick={() => setSubmitted(true)}>
        Send Message
      </Button>
    </form>
  );
}
```

### Card Grid Example

```typescript
import { Card, Badge, Button } from '@/components/ui';

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature) => (
        <Card key={feature.id} hover>
          <Badge variant="accent" className="mb-3">
            {feature.category}
          </Badge>
          <h3 className="text-h4 mb-2">{feature.title}</h3>
          <p className="text-neutral-400 mb-4">{feature.description}</p>
          <Button variant="ghost" size="sm">
            Learn more →
          </Button>
        </Card>
      ))}
    </div>
  );
}
```

### Status Display Example

```typescript
import { Badge, Alert } from '@/components/ui';

export function StatusDisplay({ status, message }) {
  return (
    <div className="space-y-4">
      {status === 'success' && (
        <>
          <Badge variant="success">All Systems Operational</Badge>
          <Alert variant="success" title="Deployment successful">
            {message}
          </Alert>
        </>
      )}

      {status === 'error' && (
        <>
          <Badge variant="error">System Error</Badge>
          <Alert variant="error" title="Error occurred" closeable>
            {message}
          </Alert>
        </>
      )}

      {status === 'warning' && (
        <>
          <Badge variant="warning">Attention Required</Badge>
          <Alert variant="warning" title="Warning">
            {message}
          </Alert>
        </>
      )}
    </div>
  );
}
```

---

## Accessibility

All components follow WCAG 2.1 AAA standards:

- ✅ **Semantic HTML** - Proper element hierarchy
- ✅ **Focus Management** - Visible focus rings with `.focus-ring` utility
- ✅ **ARIA Attributes** - `aria-label`, `aria-invalid`, `aria-describedby`
- ✅ **Keyboard Navigation** - All interactive elements focusable
- ✅ **Color Contrast** - 4.5:1 ratio for text, 3:1 for graphics
- ✅ **Screen Readers** - Proper semantic structure and labels

---

## Performance Optimizations

### Image Optimization

```typescript
import Image from 'next/image';

<Image
  src="/feature.png"
  alt="Feature description"
  width={400}
  height={300}
  priority // Only for above-the-fold images
/>
```

### Code Splitting

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/Heavy'), {
  loading: () => <Skeleton variant="card" />,
});
```

### CSS Optimization

- Tailwind v4 automatically purges unused CSS
- Custom components use `@apply` directives
- Minimal JavaScript for styling

---

## Best Practices

1. **Use semantic color names**

   ```typescript
   // ✅ Good
   <Button variant="solid" color="success">Save</Button>

   // ❌ Avoid
   <Button className="bg-green-500">Save</Button>
   ```

2. **Maintain consistent spacing**

   ```typescript
   // ✅ Good
   <div className="space-y-4 p-6">
     <h1>Title</h1>
     <p>Content</p>
   </div>

   // ❌ Avoid
   <div className="p-5 mb-3">
     <h1>Title</h1>
     <p>Content</p>
   </div>
   ```

3. **Use responsive utilities**

   ```typescript
   // ✅ Good
   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

   // ❌ Avoid
   <div className="grid grid-cols-3 gap-2">
   ```

4. **Leverage component variants**
   ```typescript
   // ✅ Good
   <Badge variant="success">Passed</Badge>
   <Badge variant="error">Failed</Badge>

   // ❌ Avoid
   <Badge className="bg-green-500">Passed</Badge>
   <Badge className="bg-red-500">Failed</Badge>
   ```

---

## Extending the Design System

### Adding New Component

```typescript
// components/ui/Tooltip.tsx
import React from 'react';
import { ComponentBaseProps } from './types';

interface TooltipProps extends ComponentBaseProps {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, position = 'top', children }) => {
  // Implementation
};

// Export in components/ui/index.ts
export { Tooltip } from './Tooltip';
```

### Adding New Color Palette

```typescript
// tailwind.config.ts
colors: {
  brand: {
    50: '#F0F9FE',
    // ... rest of palette
    500: '#0EA5E9',
  },
}
```

---

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Documentation](https://react.dev)
- [Lucide Icons](https://lucide.dev)
- [Accessible Color Contrast](https://www.tpgi.com/color-contrast-checker/)

---

**Design System Version**: 1.0.0
**Last Updated**: October 2024
**Maintained by**: Quality Impact OÜ Engineering
