# 🎨 Design Tokens Quick Reference

Fast lookup guide for all design tokens in the QA-PaaS design system.

## Color Tokens

### Primary Palette (Electric Cyan)
```css
--primary-50:  #F0F9FE
--primary-100: #E0F2FE
--primary-200: #BAE6FD
--primary-300: #7DD3FC
--primary-400: #38BDF8
--primary-500: #0EA5E9 /* Main */
--primary-600: #0284C7
--primary-700: #0369A1
--primary-800: #075985
--primary-900: #0C3D66
--primary-950: #06254E
```

### Accent Palette (Neural Indigo)
```css
--accent-50:  #F5F3FF
--accent-100: #EDE9FE
--accent-200: #DDD6FE
--accent-300: #C4B5FD
--accent-400: #A78BFA
--accent-500: #818CF8 /* Main (AI) */
--accent-600: #6366F1
--accent-700: #4F46E5
--accent-800: #4338CA
--accent-900: #3730A3
--accent-950: #312E81
```

### Success Palette (Green)
```css
--success-50:  #F0FDF4
--success-100: #DCFCE7
--success-200: #BBFACB
--success-300: #86EFAC
--success-400: #4ADE80
--success-500: #22C55E /* Main */
--success-600: #16A34A
--success-700: #15803D
--success-800: #166534
--success-900: #145231
```

### Error Palette (Red)
```css
--error-50:  #FEF2F2
--error-100: #FEE2E2
--error-200: #FECACA
--error-300: #FCA5A5
--error-400: #F87171
--error-500: #EF4444 /* Main */
--error-600: #DC2626
--error-700: #B91C1C
--error-800: #991B1B
--error-900: #7F1D1D
```

### Warning Palette (Amber)
```css
--warning-50:  #FFFBEB
--warning-100: #FEF3C7
--warning-200: #FDE68A
--warning-300: #FCD34D
--warning-400: #FBBF24
--warning-500: #F59E0B /* Main */
--warning-600: #D97706
--warning-700: #B45309
--warning-800: #92400E
--warning-900: #78350F
```

### Info Palette (Sky)
```css
--info-50:  #F0F9FF
--info-100: #E0F2FE
--info-200: #BAE6FD
--info-300: #7DD3FC
--info-400: #38BDF8
--info-500: #0EA5E9 /* Main */
--info-600: #0284C7
--info-700: #0369A1
--info-800: #075985
--info-900: #0C3D66
```

### Neutral Palette (Slate)
```css
--neutral-50:   #F8FAFC  (Lightest)
--neutral-100:  #F1F5F9
--neutral-200:  #E2E8F0
--neutral-300:  #CBD5E1
--neutral-400:  #94A3B8
--neutral-500:  #64748B  (Medium)
--neutral-600:  #475569
--neutral-700:  #334155  (Border)
--neutral-800:  #1E293B  (Surface)
--neutral-900:  #0F172A  (Background)
--neutral-950:  #020617  (Darkest)
```

---

## Typography

### Font Families
```css
--font-sans: Inter, Plus Jakarta Sans, system-ui, sans-serif
--font-display: Plus Jakarta Sans, system-ui, sans-serif
--font-mono: JetBrains Mono, Menlo, Courier New, monospace
```

### Heading Sizes
```css
--text-h1: 3.75rem (60px) /* font-weight: 800 */
--text-h2: 3rem    (48px) /* font-weight: 700 */
--text-h3: 2.25rem (36px) /* font-weight: 700 */
--text-h4: 1.875rem (30px) /* font-weight: 600 */
--text-h5: 1.5rem  (24px) /* font-weight: 600 */
--text-h6: 1.25rem (20px) /* font-weight: 600 */
```

### Body Sizes
```css
--text-display: 2.25rem (36px) /* line-height: 1.3 */
--text-lg:      1.125rem (18px) /* line-height: 1.75 */
--text-base:    1rem     (16px) /* line-height: 1.5 */
--text-sm:      0.875rem (14px) /* line-height: 1.25 */
--text-xs:      0.75rem  (12px) /* line-height: 1 */
```

### UI Sizes
```css
--text-label:   0.875rem (14px) /* font-weight: 600 */
--text-caption: 0.75rem  (12px) /* font-weight: 500 */
--text-code:    0.875rem (14px) /* font-family: mono */
```

### Font Weights
```css
--font-thin:      100
--font-extralight: 200
--font-light:     300
--font-normal:    400 (default)
--font-medium:    500
--font-semibold:  600
--font-bold:      700 (headings)
--font-extrabold: 800
--font-black:     900
```

---

## Spacing

### Spacing Scale
```css
--spacing-xs:  0.25rem (4px)
--spacing-sm:  0.5rem  (8px)
--spacing-md:  1rem    (16px)
--spacing-lg:  1.5rem  (24px)
--spacing-xl:  2rem    (32px)
--spacing-2xl: 2.5rem  (40px)
--spacing-3xl: 3rem    (48px)
--spacing-4xl: 4rem    (64px)
--spacing-5xl: 5rem    (80px)
--spacing-6xl: 6rem    (96px)
--spacing-7xl: 7rem    (112px)
--spacing-8xl: 8rem    (128px)
```

### Gap Scale
```css
--gap-xs:  0.25rem (4px)
--gap-sm:  0.5rem  (8px)
--gap-md:  1rem    (16px)
--gap-lg:  1.5rem  (24px)
--gap-xl:  2rem    (32px)
--gap-2xl: 2.5rem  (40px)
--gap-3xl: 3rem    (48px)
```

---

## Border Radius

```css
--radius-xs:   0.25rem (4px)
--radius-sm:   0.375rem (6px)
--radius-md:   0.5rem  (8px)
--radius-lg:   0.75rem (12px)
--radius-xl:   1rem    (16px)
--radius-2xl:  1.5rem  (24px)
--radius-3xl:  2rem    (32px)
--radius-full: 9999px
```

---

## Shadows

### Standard Shadows
```css
--shadow-xs:  0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-sm:  0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)
--shadow-md:  0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
--shadow-lg:  0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
--shadow-xl:  0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
--shadow-3xl: 0 35px 60px -15px rgba(0, 0, 0, 0.3)
```

### Glow Effects
```css
--shadow-glow:       0 0 20px rgba(14, 165, 233, 0.3)
--shadow-glow-lg:    0 0 40px rgba(14, 165, 233, 0.4)
--shadow-glow-xl:    0 0 60px rgba(14, 165, 233, 0.5)
--shadow-glow-accent: 0 0 20px rgba(129, 140, 248, 0.3)
--shadow-glow-success: 0 0 20px rgba(34, 197, 94, 0.2)
--shadow-glow-error:  0 0 20px rgba(239, 68, 68, 0.2)
```

### Inset & Card Shadows
```css
--shadow-inset:     inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)
--shadow-inset-lg:  inset 0 4px 8px 0 rgba(0, 0, 0, 0.1)
--shadow-card:      0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)
--shadow-card-hover: 0 10px 25px rgba(0, 0, 0, 0.15)
```

---

## Animations

### Transition Durations
```css
--duration-75:   75ms
--duration-100:  100ms
--duration-150:  150ms
--duration-200:  200ms
--duration-300:  300ms
--duration-500:  500ms
--duration-700:  700ms
--duration-1000: 1000ms
```

### Easing Functions
```css
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
--ease-smooth: cubic-bezier(0.4, 0, 0.6, 1)
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

### Animation Keyframes
```css
/* Glow Animations */
--animation-pulse-glow:    2s ease-in-out infinite
--animation-pulse-glow-lg: 3s ease-in-out infinite

/* Fade Animations */
--animation-fade-in:       0.3s ease-in-out
--animation-fade-out:      0.3s ease-in-out
--animation-fade-in-up:    0.5s ease-out
--animation-fade-in-down:  0.5s ease-out

/* Slide Animations */
--animation-slide-in-right:  0.3s ease-out
--animation-slide-out-left:  0.3s ease-in

/* Scale Animations */
--animation-scale-in: 0.2s ease-out
--animation-bounce-in: 0.6s ease-out

/* Loading Animations */
--animation-spin-slow: 3s linear infinite
--animation-ping-slow: 2s cubic-bezier(0, 0, 0.2, 1) infinite

/* Shimmer */
--animation-shimmer: 2s infinite
```

---

## Opacity

```css
--opacity-0:   0
--opacity-5:   0.05
--opacity-10:  0.1
--opacity-20:  0.2
--opacity-30:  0.3
--opacity-40:  0.4
--opacity-50:  0.5
--opacity-60:  0.6
--opacity-70:  0.7
--opacity-80:  0.8
--opacity-90:  0.9
--opacity-95:  0.95
--opacity-100: 1
```

---

## Z-Index Scale

```css
--z-hide:      -1
--z-base:      0
--z-10:        10
--z-20:        20
--z-30:        30
--z-40:        40
--z-50:        50
--z-auto:      auto

/* Semantic Z-Index */
--z-dropdown:  1000
--z-sticky:    1010
--z-fixed:     1020
--z-modal:     1030
--z-popover:   1035
--z-tooltip:   1040
```

---

## Responsive Breakpoints

```css
--breakpoint-xs:  320px  (Mobile)
--breakpoint-sm:  640px  (Tablet)
--breakpoint-md:  768px  (Laptop)
--breakpoint-lg:  1024px (Desktop)
--breakpoint-xl:  1280px (Wide)
--breakpoint-2xl: 1536px (Ultra-wide)
```

---

## Container Sizes

```css
--container-max:    max-width: 7xl (80rem)
--container-tight:  max-width: 5xl (64rem)
--container-wide:   max-width: full
```

---

## Component Utilities

### Focus Ring
```css
.focus-ring {
  focus-visible: outline-none;
  focus-visible: ring-2;
  focus-visible: ring-primary-500;
  focus-visible: ring-offset-2;
  focus-visible: ring-offset-neutral-900;
  border-radius: 0.375rem;
}

.focus-ring-light {
  focus-visible: outline-none;
  focus-visible: ring-2;
  focus-visible: ring-primary-400;
  border-radius: 0.375rem;
}

.focus-ring-offset {
  focus-visible: outline-none;
  focus-visible: ring-2;
  focus-visible: ring-accent-500;
  focus-visible: ring-offset-4;
  focus-visible: ring-offset-neutral-900;
}
```

### Section Padding
```css
.section-padding {
  padding-top: 4rem;
  padding-bottom: 4rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
@media (min-width: 768px) {
  padding-left: 3rem;
  padding-right: 3rem;
}

.section-padding-lg {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.section-padding-sm {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
```

### Glass Morphism
```css
.glass {
  backdrop-filter: blur(12px);
  background: rgba(15, 23, 42, 0.4);
  border: 1px solid rgba(51, 65, 85, 0.5);
}

.glass-lg {
  backdrop-filter: blur(64px);
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(51, 65, 85, 0.3);
}
```

### Gradient Text
```css
.gradient-text {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    to right,
    #38BDF8,
    #A78BFA,
    #0EA5E9
  );
}

.gradient-text-reversed {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    to right,
    #818CF8,
    #38BDF8
  );
}
```

---

## Quick Copy-Paste Snippets

### Button Styles
```typescript
// Primary CTA
<Button variant="solid" size="lg" color="primary">
  Get Started
</Button>

// Outline Button
<Button variant="outline" size="md" color="primary">
  Learn More
</Button>

// Ghost Button
<Button variant="ghost" size="sm" color="info">
  Skip
</Button>
```

### Badge Status
```typescript
// Success
<Badge variant="success">Passed</Badge>

// Error
<Badge variant="error">Failed</Badge>

// Warning
<Badge variant="warning">Flaky</Badge>

// Info
<Badge variant="info">New</Badge>
```

### Card Patterns
```typescript
// Default Card
<Card>Content</Card>

// Interactive Card
<Card hover interactive>Content</Card>

// Elevated Card with Border
<Card variant="elevated" borderColor="primary">
  Content
</Card>
```

### Alert Messages
```typescript
// Success Alert
<Alert variant="success" title="Success!">
  Operation completed
</Alert>

// Error Alert
<Alert variant="error" title="Error">
  Something went wrong
</Alert>
```

### Form Inputs
```typescript
// Basic Input
<Input label="Email" type="email" required />

// With Validation
<Input
  label="Password"
  type="password"
  error="Too short"
  state="error"
/>
```

---

## Color Usage Guide

| Color | Best Used For | Contrast |
|-------|---------------|----------|
| **Primary (Cyan)** | CTAs, Links, Active states | ✅ AAA |
| **Accent (Indigo)** | AI features, Highlights | ✅ AAA |
| **Success (Green)** | Pass, Confirmed, Successful | ✅ AAA |
| **Error (Red)** | Fail, Delete, Destructive | ✅ AAA |
| **Warning (Amber)** | Caution, Flaky, Attention | ✅ AAA |
| **Info (Sky)** | Information, Help, Tip | ✅ AAA |
| **Neutral (Slate)** | Background, Borders, Text | ✅ AAA |

---

## Performance Notes

- ✅ All tokens are CSS-native (no JS)
- ✅ Tailwind v4 automatically purges unused tokens
- ✅ Zero runtime overhead
- ✅ Full tree-shaking support
- ✅ Minimal bundle impact

---

**Reference Guide Version**: 1.0.0
**Last Updated**: October 2024

