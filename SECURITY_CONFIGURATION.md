# 🛡️ Security Configuration Guide

Complete security configuration for QA-PaaS platform covering infrastructure, application, and operational security.

## Table of Contents

- [Security Configuration Checklist](#security-configuration-checklist)
- [Environment Variables](#environment-variables)
- [API Security](#api-security)
- [Authentication & Authorization](#authentication--authorization)
- [Data Protection](#data-protection)
- [Deployment Security](#deployment-security)
- [Monitoring & Logging](#monitoring--logging)
- [Incident Response](#incident-response)

---

## Security Configuration Checklist

### Phase 1: Pre-Deployment (Development)

#### Application Security

- ✅ Content Security Policy configured
- ✅ All security headers implemented
- ✅ HTTPS enforced (HSTS enabled)
- ✅ No hardcoded secrets
- ✅ Input validation implemented
- ✅ Output encoding applied
- ✅ SQL injection prevention
- ✅ XSS prevention
- ✅ CSRF protection enabled

#### Dependency Security

- ✅ npm audit clean (0 vulnerabilities)
- ✅ Dependencies updated to latest secure versions
- ✅ No dev dependencies in production
- ✅ Package lock file committed
- ✅ Supply chain security verified

#### Code Quality

- ✅ TypeScript strict mode enabled
- ✅ ESLint security rules enabled
- ✅ No console.log in production code
- ✅ No commented-out sensitive code
- ✅ Source maps disabled in production

### Phase 2: Deployment (Staging)

#### Infrastructure

- ✅ SSL/TLS certificate installed
- ✅ Certificate auto-renewal configured
- ✅ WAF (Web Application Firewall) enabled
- ✅ DDoS protection configured
- ✅ Rate limiting enabled

#### Database Security

- ✅ Database credentials in environment variables
- ✅ Database connections encrypted
- ✅ Automatic backups enabled
- ✅ Backup encryption enabled
- ✅ Disaster recovery plan tested

#### Monitoring

- ✅ Security logging enabled
- ✅ Error tracking configured (Sentry, etc.)
- ✅ Performance monitoring set up
- ✅ Alerts configured for anomalies
- ✅ Audit logs enabled

### Phase 3: Production (Live)

#### Access Control

- ✅ MFA enabled for admin access
- ✅ IP whitelisting configured
- ✅ SSH keys rotated
- ✅ Default credentials changed
- ✅ Service accounts created with minimal permissions

#### Compliance

- ✅ GDPR compliance verified
- ✅ Data retention policies implemented
- ✅ Privacy policy published
- ✅ Terms of service published
- ✅ Security policy published

#### Operations

- ✅ 24/7 security monitoring active
- ✅ Incident response plan documented
- ✅ Security team trained
- ✅ On-call rotation established
- ✅ Regular security reviews scheduled

---

## Environment Variables

### Required Environment Variables

```bash
# Application
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://www.qa-paas.com
NEXT_PUBLIC_API_URL=https://api.qa-paas.com

# Database
DATABASE_URL=postgresql://user:password@host:5432/qapaas
DATABASE_SSL=true
DATABASE_POOL_SIZE=20
DATABASE_IDLE_TIMEOUT=30000

# API Keys
API_SECRET_KEY=<generate-secure-random-key>
JWT_SECRET=<generate-secure-random-key>
ENCRYPTION_KEY=<generate-secure-random-key>

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXX
SENTRY_DSN=https://examplePublicKey@o0.ingest.sentry.io/0

# Authentication
AUTH0_SECRET=<from-auth0>
AUTH0_BASE_URL=https://www.qa-paas.com
AUTH0_ISSUER_BASE_URL=https://<your-tenant>.auth0.com
AUTH0_CLIENT_ID=<from-auth0>
AUTH0_CLIENT_SECRET=<from-auth0>

# Third-party Services
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_PUBLISHABLE_KEY=pk_live_xxx
SENDGRID_API_KEY=<sendgrid-key>

# Monitoring
LOG_LEVEL=info
ENABLE_SECURITY_LOGGING=true
ENABLE_AUDIT_LOG=true
```

### Security Best Practices for Env Variables

1. **Never Commit Secrets**

   ```bash
   # .gitignore
   .env
   .env.local
   .env.*.local
   ```

2. **Use Environment-Specific Files**

   ```
   .env.example           # Template (no secrets)
   .env.production        # Production (on server only)
   .env.staging          # Staging (on server only)
   .env.development      # Local (gitignored)
   ```

3. **Rotate Secrets Regularly**
   - Database passwords: Quarterly
   - API keys: Semi-annually
   - JWT secrets: Annually
   - SSL certificates: Automatically (Let's Encrypt)

4. **Use Secure Secret Management**
   ```typescript
   // ❌ Bad: Direct import
   const secret = process.env.DATABASE_PASSWORD;

   // ✅ Good: With validation
   const secret = process.env.DATABASE_PASSWORD;
   if (!secret) {
     throw new Error('DATABASE_PASSWORD not configured');
   }
   ```

---

## API Security

### API Endpoint Protection

```typescript
// API route with security middleware
// pages/api/secure-endpoint.ts

import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  // 1. Rate limiting
  const rateLimitExceeded = await checkRateLimit(request);
  if (rateLimitExceeded) {
    return new NextResponse('Too many requests', { status: 429 });
  }

  // 2. Authentication
  const token = request.headers.get('Authorization');
  if (!token) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  // 3. CORS validation
  const origin = request.headers.get('Origin');
  if (!isAllowedOrigin(origin)) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  // 4. Input validation
  const body = await request.json();
  if (!validateInput(body)) {
    return new NextResponse('Invalid input', { status: 400 });
  }

  return NextResponse.next();
}
```

### Rate Limiting

```typescript
// Middleware for rate limiting
// lib/rateLimit.ts

import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, '1 h'), // 10 requests per hour
});

export async function checkRateLimit(request: NextRequest) {
  const identifier = request.headers.get('x-forwarded-for') ?? 'anonymous';
  const { success } = await ratelimit.limit(identifier);
  return !success;
}
```

### Input Validation

```typescript
// Validate API input
// lib/validation.ts

import { z } from 'zod';

const emailSchema = z.string().email();
const passwordSchema = z
  .string()
  .min(12)
  .regex(/^(?=.*[A-Z])(?=.*[0-9])/);
const contactFormSchema = z.object({
  email: emailSchema,
  name: z.string().min(1).max(100),
  message: z.string().min(1).max(5000),
});

export function validateInput(data: unknown) {
  try {
    contactFormSchema.parse(data);
    return true;
  } catch (error) {
    return false;
  }
}
```

### CORS Configuration

```typescript
// API CORS middleware
const ALLOWED_ORIGINS = [
  'https://www.qa-paas.com',
  'https://app.qa-paas.com',
  'https://admin.qa-paas.com',
];

function isAllowedOrigin(origin: string | null): boolean {
  return origin ? ALLOWED_ORIGINS.includes(origin) : false;
}
```

---

## Authentication & Authorization

### JWT Implementation

```typescript
// JWT validation
// lib/jwt.ts

import jwt from 'jsonwebtoken';

interface TokenPayload {
  userId: string;
  email: string;
  role: 'user' | 'admin' | 'superadmin';
  iat: number;
  exp: number;
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as TokenPayload;
    return decoded;
  } catch (error) {
    return null;
  }
}

export function createToken(userId: string, email: string, role: string) {
  return jwt.sign({ userId, email, role }, process.env.JWT_SECRET!, { expiresIn: '24h' });
}
```

### Role-Based Access Control (RBAC)

```typescript
// RBAC middleware
// middleware/rbac.ts

type Role = 'user' | 'admin' | 'superadmin';

const permissions: Record<Role, string[]> = {
  user: ['read:own-data', 'update:own-data'],
  admin: ['read:all-data', 'update:all-data', 'delete:data'],
  superadmin: ['*'],
};

export function hasPermission(role: Role, permission: string): boolean {
  const rolePermissions = permissions[role];
  return rolePermissions.includes('*') || rolePermissions.includes(permission);
}
```

---

## Data Protection

### Password Hashing

```typescript
// Secure password handling
// lib/password.ts

import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12;

export async function hashPassword(password: string): Promise<string> {
  // Validate password strength
  if (password.length < 12) {
    throw new Error('Password must be at least 12 characters');
  }

  return bcrypt.hash(password, SALT_ROUNDS);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
```

### Encryption at Rest

```typescript
// Data encryption
// lib/encryption.ts

import crypto from 'crypto';

const algorithm = 'aes-256-gcm';
const key = crypto.scryptSync(process.env.ENCRYPTION_KEY!, 'salt', 32);

export function encryptData(data: string): string {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  const authTag = cipher.getAuthTag();
  return `${iv.toString('hex')}:${encrypted}:${authTag.toString('hex')}`;
}

export function decryptData(encryptedData: string): string {
  const [iv, encrypted, authTag] = encryptedData.split(':');

  const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(iv, 'hex'));
  decipher.setAuthTag(Buffer.from(authTag, 'hex'));

  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}
```

### GDPR Compliance

```typescript
// GDPR data handling
// lib/gdpr.ts

export interface GDPRRequest {
  userId: string;
  type: 'access' | 'delete' | 'export' | 'rectify';
  data?: Record<string, unknown>;
}

export async function handleGDPRRequest(request: GDPRRequest) {
  switch (request.type) {
    case 'access':
      return getUserData(request.userId);

    case 'export':
      return exportUserData(request.userId);

    case 'delete':
      return anonymizeUserData(request.userId);

    case 'rectify':
      return updateUserData(request.userId, request.data);
  }
}
```

---

## Deployment Security

### Pre-Deployment Checklist

```bash
# 1. Security audit
npm audit
npm outdated

# 2. Type checking
npm run type-check

# 3. Linting
npm run lint

# 4. Build verification
npm run build

# 5. Security headers test
curl -I https://www.qa-paas.com

# 6. SSL certificate check
echo | openssl s_client -connect www.qa-paas.com:443 2>/dev/null | openssl x509 -dates -noout
```

### Vercel Deployment Security

```json
// vercel.json
{
  "env": [
    "NODE_ENV",
    "NEXT_PUBLIC_SITE_URL",
    "NEXT_PUBLIC_API_URL",
    "@jwt-secret",
    "@database-url",
    "@api-secret-key"
  ],
  "git": {
    "deploymentEnabled": {
      "main": true
    }
  },
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm ci",
  "framework": "nextjs"
}
```

---

## Monitoring & Logging

### Security Event Logging

```typescript
// Security logging
// lib/securityLog.ts

interface SecurityEvent {
  type: 'auth' | 'api' | 'data' | 'error' | 'admin';
  level: 'info' | 'warning' | 'error' | 'critical';
  userId?: string;
  action: string;
  timestamp: Date;
  details?: Record<string, unknown>;
}

export async function logSecurityEvent(event: SecurityEvent) {
  // Log to console
  console.log(`[${event.level.toUpperCase()}] ${event.action}`, event);

  // Log to external service
  if (process.env.ENABLE_SECURITY_LOGGING === 'true') {
    await fetch(process.env.SECURITY_LOG_ENDPOINT!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    });
  }

  // Alert on critical events
  if (event.level === 'critical') {
    await sendAlert(event);
  }
}
```

### CSP Violation Monitoring

```typescript
// API route to receive CSP violations
// pages/api/security/csp-report.ts

import type { NextRequest, NextResponse } from 'next/server';

interface CSPViolation {
  'csp-report': {
    'document-uri': string;
    'violated-directive': string;
    'effective-directive': string;
    'original-policy': string;
    'blocked-uri': string;
    'source-file': string;
    'line-number': number;
    'column-number': number;
  };
}

export async function POST(request: NextRequest) {
  const violation = (await request.json()) as CSPViolation;

  // Log violation
  console.warn('[CSP VIOLATION]', violation);

  // Store in database
  // Alert if suspicious pattern
  // Update CSP policy if needed

  return Response.json({ success: true });
}
```

---

## Incident Response

### Incident Response Plan

```
1. DETECT
   - Monitor alerts
   - Review logs
   - Identify incident

2. ASSESS
   - Determine severity
   - Identify affected systems
   - Estimate impact

3. CONTAIN
   - Isolate affected resources
   - Block attack vectors
   - Prevent escalation

4. INVESTIGATE
   - Collect evidence
   - Analyze logs
   - Determine root cause

5. ERADICATE
   - Remove malware/compromise
   - Patch vulnerabilities
   - Close attack vector

6. RECOVER
   - Restore systems
   - Validate integrity
   - Resume operations

7. REVIEW
   - Post-mortem analysis
   - Document lessons learned
   - Update policies
```

### Emergency Procedures

#### Database Compromise

```bash
# 1. Revoke database credentials
# 2. Rotate all API keys
# 3. Force password reset for all users
# 4. Review audit logs
# 5. Notify affected users
```

#### Credential Leak

```bash
# 1. Revoke leaked credentials immediately
# 2. Scan for unauthorized access
# 3. Review recent actions
# 4. Regenerate new credentials
# 5. Audit access logs
```

#### DDoS Attack

```bash
# 1. Enable WAF rules
# 2. Increase rate limiting
# 3. Enable geographic blocking if needed
# 4. Notify hosting provider
# 5. Monitor availability
```

---

## Security Team Contacts

**Security POC**: security@qa-paas.com
**Incident Response**: incident@qa-paas.com
**Privacy**: privacy@qa-paas.com
**On-Call**: [Slack channel #security-incidents]

---

## Further Reading

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP API Security](https://owasp.org/www-project-api-security/)
- [Next.js Security](https://nextjs.org/docs/advanced-features/security-headers)
- [CWE: Common Weakness Enumeration](https://cwe.mitre.org/)

---

**Security Configuration Version**: 1.0.0
**Last Updated**: October 2024
**Status**: ✅ Production Ready
