# 📦 Component Library Reference

Complete reference guide for all reusable UI components in the QA-PaaS design system.

## Components Overview

| Component | Status | Variants | Use Case |
|-----------|--------|----------|----------|
| **Button** | ✅ | 5 | Primary interactions, actions |
| **Badge** | ✅ | 7 | Status indicators, labels |
| **Card** | ✅ | 3 | Content containers |
| **Input** | ✅ | 5 | Form fields |
| **Alert** | ✅ | 5 | Notifications, messages |
| **Divider** | ✅ | 3 | Content separation |
| **Skeleton** | ✅ | 3 | Loading states |

---

## Button Component

### Import
```typescript
import { Button } from '@/components/ui';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `ButtonVariant` | `'solid'` | Button style variant |
| `size` | `SizeVariant` | `'md'` | Button size |
| `color` | `ColorVariant` | `'primary'` | Button color |
| `icon` | `ReactNode` | - | Icon element |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Icon position |
| `fullWidth` | `boolean` | `false` | Fill container width |
| `isLoading` | `boolean` | `false` | Show loading spinner |
| `isDisabled` | `boolean` | `false` | Disable button |
| `children` | `ReactNode` | - | Button label (required) |

### Variants

#### Solid Button
```typescript
<Button variant="solid">Solid Button</Button>
<Button variant="solid" color="success">Success</Button>
<Button variant="solid" color="error">Error</Button>
```

#### Outline Button
```typescript
<Button variant="outline">Outline Button</Button>
<Button variant="outline" color="accent">Accent Outline</Button>
```

#### Soft Button
```typescript
<Button variant="soft">Soft Button</Button>
<Button variant="soft" color="warning">Warning Soft</Button>
```

#### Ghost Button
```typescript
<Button variant="ghost">Ghost Button</Button>
<Button variant="ghost" color="info">Info Ghost</Button>
```

#### Link Button
```typescript
<Button variant="link">Link Button</Button>
<Button variant="link" color="error">Error Link</Button>
```

### Sizes

```typescript
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

### With Icons

```typescript
import { ArrowRight, Plus, Trash2 } from 'lucide-react';

<Button icon={<ArrowRight />} iconPosition="right">
  Next Step
</Button>

<Button icon={<Plus />}>Add Item</Button>

<Button variant="outline" icon={<Trash2 />} color="error">
  Delete
</Button>
```

### States

```typescript
// Loading
<Button isLoading>Processing...</Button>

// Disabled
<Button isDisabled>Disabled</Button>

// Full Width
<Button fullWidth>Full Width</Button>

// Multiple States
<Button isLoading isDisabled>Cannot Click</Button>
```

### Real-world Examples

```typescript
// CTA Button
<Button size="lg" className="gap-2">
  Get Started <ArrowRight className="w-5 h-5" />
</Button>

// Form Submission
<Button
  variant="solid"
  color="primary"
  isLoading={isSubmitting}
  isDisabled={!isValid}
  fullWidth
  type="submit"
>
  {isSubmitting ? 'Submitting...' : 'Submit Form'}
</Button>

// Destructive Action
<Button
  variant="outline"
  color="error"
  icon={<Trash2 />}
  onClick={handleDelete}
>
  Delete Account
</Button>

// Ghost Navigation
<div className="flex gap-2">
  <Button variant="ghost" color="neutral">Back</Button>
  <Button variant="ghost" color="primary">Home</Button>
</div>
```

---

## Badge Component

### Import
```typescript
import { Badge } from '@/components/ui';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `BadgeVariant` | `'default'` | Badge style |
| `size` | `SizeVariant` | `'md'` | Badge size |
| `icon` | `ReactNode` | - | Badge icon |
| `children` | `ReactNode` | - | Badge label (required) |

### Variants

```typescript
<Badge variant="default">Default</Badge>
<Badge variant="success">Passed</Badge>
<Badge variant="error">Failed</Badge>
<Badge variant="warning">Flaky</Badge>
<Badge variant="info">Information</Badge>
<Badge variant="accent">AI Powered</Badge>
<Badge variant="neutral">Neutral</Badge>
```

### With Icons

```typescript
import { CheckCircle2, AlertCircle, AlertTriangle } from 'lucide-react';

<Badge variant="success" icon={<CheckCircle2 />}>
  All Tests Passed
</Badge>

<Badge variant="error" icon={<AlertCircle />}>
  5 Tests Failed
</Badge>

<Badge variant="warning" icon={<AlertTriangle />}>
  3 Flaky Tests
</Badge>
```

### Sizes

```typescript
<Badge size="xs">Extra Small</Badge>
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
<Badge size="xl">Extra Large</Badge>
```

### Real-world Examples

```typescript
// Status Badges
<div className="flex gap-2 flex-wrap">
  <Badge variant="success">ISO 27001</Badge>
  <Badge variant="success">SOC2 Type II</Badge>
  <Badge variant="info">AWS Certified</Badge>
</div>

// Test Results
<div className="flex gap-2">
  <Badge variant="success" icon={<CheckCircle2 />}>
    {passedCount} Passed
  </Badge>
  <Badge variant="error" icon={<AlertCircle />}>
    {failedCount} Failed
  </Badge>
  <Badge variant="warning" icon={<AlertTriangle />}>
    {flakyCount} Flaky
  </Badge>
</div>

// Feature Badges
<div className="space-y-2">
  <Badge variant="accent">AI-Powered</Badge>
  <Badge variant="info">Cloud Native</Badge>
  <Badge variant="success">Enterprise Ready</Badge>
</div>
```

---

## Card Component

### Import
```typescript
import { Card } from '@/components/ui';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'elevated' \| 'flat'` | `'default'` | Card style |
| `padding` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'none'` | `'md'` | Internal padding |
| `hover` | `boolean` | `false` | Enable hover effect |
| `interactive` | `boolean` | `false` | Cursor pointer |
| `borderColor` | `'default' \| 'accent' \| 'success' \| 'error' \| 'warning' \| 'info'` | `'default'` | Border color |
| `children` | `ReactNode` | - | Card content (required) |

### Variants

```typescript
// Default Card
<Card>
  <h3>Default Card</h3>
  <p>Standard card styling</p>
</Card>

// Elevated Card
<Card variant="elevated">
  <h3>Elevated Card</h3>
  <p>With shadow effect</p>
</Card>

// Flat Card
<Card variant="flat">
  <h3>Flat Card</h3>
  <p>Minimal styling</p>
</Card>
```

### With Borders

```typescript
<Card borderColor="success">
  <Badge variant="success">Success</Badge>
  <p>Green border accent</p>
</Card>

<Card borderColor="error">
  <Badge variant="error">Error</Badge>
  <p>Red border accent</p>
</Card>

<Card borderColor="accent">
  <Badge variant="accent">AI Engine</Badge>
  <p>Accent border</p>
</Card>
```

### With Hover

```typescript
<Card hover interactive onClick={handleClick}>
  <h3>Clickable Card</h3>
  <p>Hover to see effect</p>
  <div className="text-primary-400">Click to learn more →</div>
</Card>
```

### Padding Options

```typescript
<Card padding="xs">Extra small padding</Card>
<Card padding="sm">Small padding</Card>
<Card padding="md">Medium padding (default)</Card>
<Card padding="lg">Large padding</Card>
<Card padding="xl">Extra large padding</Card>
<Card padding="none">No padding</Card>
```

### Real-world Examples

```typescript
// Feature Card
<Card hover>
  <div className="flex items-start gap-3 mb-3">
    <div className="text-primary-400 text-2xl">⚡</div>
    <h3 className="text-h4">Lightning Fast</h3>
  </div>
  <p className="text-neutral-400">
    Parallel test execution with sub-second latency
  </p>
</Card>

// Marketplace Card
<Card hover interactive borderColor="primary">
  <Badge variant="info" className="mb-3">AWS Marketplace</Badge>
  <h3 className="text-h4 mb-2">AWS Fargate Integration</h3>
  <p className="text-neutral-400 mb-4">
    Deploy QA-PaaS directly via AWS Marketplace
  </p>
  <a href="#" className="text-primary-400 hover:text-primary-300">
    View Listing →
  </a>
</Card>

// Status Card
<Card borderColor="success" variant="flat">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-h5">System Status</h3>
    <Badge variant="success">All Systems Operational</Badge>
  </div>
  <div className="space-y-2 text-sm text-neutral-400">
    <p>✓ API Servers: Online</p>
    <p>✓ Database: Healthy</p>
    <p>✓ CDN: Active</p>
  </div>
</Card>
```

---

## Input Component

### Import
```typescript
import { Input } from '@/components/ui';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `InputSize` | `'md'` | Input size |
| `state` | `InputState` | `'default'` | Input state |
| `label` | `string` | - | Field label |
| `error` | `string` | - | Error message |
| `hint` | `string` | - | Help text |
| `icon` | `ReactNode` | - | Input icon |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Icon position |
| `fullWidth` | `boolean` | `false` | Fill width |
| All HTML input props | - | - | Standard input attributes |

### Basic Usage

```typescript
<Input
  type="text"
  label="Name"
  placeholder="Your name"
/>

<Input
  type="email"
  label="Email"
  placeholder="your@email.com"
  required
/>

<Input
  type="password"
  label="Password"
  placeholder="••••••••"
/>
```

### With Icons

```typescript
import { Mail, Lock, Search } from 'lucide-react';

<Input
  type="email"
  label="Email Address"
  icon={<Mail />}
  iconPosition="left"
  placeholder="your@email.com"
/>

<Input
  type="password"
  label="Password"
  icon={<Lock />}
  iconPosition="left"
  placeholder="••••••••"
/>

<Input
  type="search"
  placeholder="Search..."
  icon={<Search />}
  iconPosition="right"
/>
```

### With Validation

```typescript
<Input
  label="Email"
  error="Invalid email format"
  state="error"
  value="invalid-email"
/>

<Input
  label="Username"
  state="success"
  value="john_doe"
  hint="Username is available"
/>

<Input
  label="API Key"
  disabled
  value="•••••••••••••••"
  hint="Generate a new key"
/>
```

### Sizes

```typescript
<Input size="sm" placeholder="Small" />
<Input size="md" placeholder="Medium" />
<Input size="lg" placeholder="Large" />
```

### Real-world Examples

```typescript
// Login Form
<form className="space-y-4">
  <Input
    type="email"
    label="Email"
    icon={<Mail />}
    placeholder="you@company.com"
    required
  />
  <Input
    type="password"
    label="Password"
    icon={<Lock />}
    placeholder="••••••••"
    required
  />
  <Button fullWidth type="submit">Sign In</Button>
</form>

// Search Input
<Input
  type="search"
  placeholder="Search tests..."
  icon={<Search />}
  iconPosition="right"
  fullWidth
/>

// Configuration Input
<Input
  type="text"
  label="API Endpoint"
  value="https://api.qa-paas.com"
  error={validationError}
  hint="Must be a valid HTTPS URL"
/>
```

---

## Alert Component

### Import
```typescript
import { Alert } from '@/components/ui';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `AlertVariant` | `'info'` | Alert type |
| `title` | `string` | - | Alert title |
| `description` | `string` | - | Alert message |
| `icon` | `ReactNode` | - | Custom icon |
| `closeable` | `boolean` | `false` | Show close button |
| `onClose` | `() => void` | - | Close handler |
| `children` | `ReactNode` | - | Custom content |

### Variants

```typescript
<Alert variant="success" title="Success">
  Operation completed successfully
</Alert>

<Alert variant="error" title="Error">
  Something went wrong
</Alert>

<Alert variant="warning" title="Warning">
  Please review before proceeding
</Alert>

<Alert variant="info" title="Information">
  Here's something you should know
</Alert>

<Alert variant="neutral" title="Notice">
  General notification
</Alert>
```

### Closeable Alerts

```typescript
const [closed, setClosed] = useState(false);

{!closed && (
  <Alert
    variant="info"
    title="New Feature"
    closeable
    onClose={() => setClosed(true)}
  >
    Try our new AI-powered test triage engine!
  </Alert>
)}
```

### Custom Content

```typescript
<Alert variant="error" title="Validation Error">
  <ul className="list-disc list-inside space-y-1">
    <li>Email is required</li>
    <li>Password must be at least 8 characters</li>
    <li>Terms must be accepted</li>
  </ul>
</Alert>
```

### Real-world Examples

```typescript
// Deployment Status
<Alert variant="success" title="Deployment Complete">
  Version 2.1.0 has been deployed to production
</Alert>

// Error Notification
<Alert variant="error" title="Test Failure">
  12 tests failed in the E2E suite. Review the logs for details.
</Alert>

// Maintenance Notice
<Alert variant="warning" title="Scheduled Maintenance">
  We'll be performing maintenance tonight from 2-4 AM UTC.
  Services may be temporarily unavailable.
</Alert>

// Compliance Info
<Alert variant="info" title="Security Update">
  <p>QA-PaaS is now certified for:</p>
  <div className="mt-2 flex flex-wrap gap-2">
    <Badge variant="success">ISO 27001</Badge>
    <Badge variant="success">SOC2 Type II</Badge>
    <Badge variant="success">GDPR Compliant</Badge>
  </div>
</Alert>
```

---

## Divider Component

### Import
```typescript
import { Divider } from '@/components/ui';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Divider direction |
| `spacing` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Vertical spacing |
| `color` | `'default' \| 'subtle' \| 'strong'` | `'default'` | Divider color |
| `label` | `string` | - | Text label |
| `labelPosition` | `'left' \| 'center' \| 'right'` | `'center'` | Label position |

### Basic Usage

```typescript
<Divider />
<Divider spacing="lg" />
<Divider color="strong" />
```

### With Labels

```typescript
<Divider label="or" labelPosition="center" />
<Divider label="Continue with" labelPosition="left" />
<Divider label="More options" labelPosition="right" />
```

### Vertical Divider

```typescript
<div className="flex gap-8">
  <div>Content 1</div>
  <Divider orientation="vertical" />
  <div>Content 2</div>
</div>
```

### Real-world Examples

```typescript
// Form Separator
<form className="space-y-6">
  <div>
    <Input label="First Name" />
  </div>

  <Divider label="or" />

  <div>
    <Button>Use SSO</Button>
  </div>
</form>

// Feature Separator
<section>
  <div>Feature 1</div>
  <Divider spacing="xl" />
  <div>Feature 2</div>
</section>

// Timeline Separator
<div className="space-y-4">
  <div>Step 1: Configure</div>
  <Divider color="subtle" />
  <div>Step 2: Deploy</div>
  <Divider color="subtle" />
  <div>Step 3: Monitor</div>
</div>
```

---

## Skeleton Component

### Import
```typescript
import { Skeleton } from '@/components/ui';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'text' \| 'card' \| 'avatar'` | `'text'` | Skeleton type |
| `count` | `number` | `1` | Number of lines |
| `height` | `string` | `'h-4'` | Skeleton height |
| `width` | `string` | `'w-full'` | Skeleton width |
| `circle` | `boolean` | `false` | Circular skeleton |

### Variants

```typescript
// Text Skeleton
<Skeleton variant="text" count={3} />

// Card Skeleton
<Skeleton variant="card" />

// Avatar Skeleton
<Skeleton variant="avatar" circle />
```

### Real-world Examples

```typescript
// Loading List
<div className="space-y-3">
  <Skeleton variant="text" count={5} width="w-48" />
</div>

// Loading Cards
<div className="grid grid-cols-3 gap-6">
  {[1, 2, 3].map(() => (
    <Skeleton key={Math.random()} variant="card" />
  ))}
</div>

// Loading User Profile
<div className="flex gap-4">
  <Skeleton variant="avatar" circle />
  <div className="flex-1 space-y-2">
    <Skeleton variant="text" width="w-24" />
    <Skeleton variant="text" width="w-32" />
  </div>
</div>
```

---

## Component Composition Patterns

### Form with Validation

```typescript
function ContactForm() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    if (isValid) {
      setSubmitted(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
      {submitted && (
        <Alert variant="success" title="Message Sent!">
          We'll get back to you within 24 hours.
        </Alert>
      )}

      <Input
        label="Your Name"
        placeholder="John Doe"
        error={errors.name}
        required
      />

      <Input
        type="email"
        label="Email Address"
        placeholder="john@example.com"
        icon={<Mail />}
        error={errors.email}
        required
      />

      <Button fullWidth type="submit">
        Send Message
      </Button>
    </form>
  );
}
```

### Feature Showcase

```typescript
function FeatureShowcase({ features }) {
  return (
    <div className="space-y-12">
      {features.map((feature, idx) => (
        <Card key={feature.id} hover>
          <div className="flex gap-4">
            <div className="text-3xl">{feature.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-h4">{feature.title}</h3>
                <Badge variant="accent">{feature.category}</Badge>
              </div>
              <p className="text-neutral-400 mb-4">
                {feature.description}
              </p>
              <Button variant="ghost" size="sm">
                Learn more →
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
```

---

## Testing Components

### Example Unit Test

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui';

describe('Button Component', () => {
  it('renders button text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies variant styles', () => {
    const { container } = render(<Button variant="outline">Test</Button>);
    expect(container.querySelector('button')).toHaveClass('border-2');
  });

  it('handles loading state', () => {
    render(<Button isLoading>Loading</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('supports icons', () => {
    render(
      <Button icon={<span>🎉</span>}>With Icon</Button>
    );
    expect(screen.getByText('🎉')).toBeInTheDocument();
  });
});
```

---

## Tips & Best Practices

1. **Always use semantic variants** - Use `variant="success"` instead of styling manually
2. **Leverage composition** - Build complex UIs by composing simple components
3. **Maintain accessibility** - All components include proper ARIA attributes
4. **Test interactions** - Write tests for user interactions with components
5. **Use TypeScript** - Full type support for better DX and safety
6. **Respect spacing** - Use design system spacing scale consistently
7. **Keep it simple** - Favor simple props over complex prop combinations

---

**Last Updated**: October 2024
**Component Library Version**: 1.0.0

