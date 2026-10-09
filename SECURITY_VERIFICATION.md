# ✅ Security Verification Checklist

Pre-deployment and ongoing security verification procedures for QA-PaaS.

## Verification Timeline

- **Before Deployment**: All items must be completed
- **Weekly**: Security scanning and monitoring
- **Monthly**: Penetration testing simulation
- **Quarterly**: Full security audit
- **Annually**: Third-party security assessment

---

## Pre-Deployment Verification

### 1. Security Headers Test

```bash
# Test security headers
curl -I https://www.qa-paas.com

# Expected headers to see:
# ✅ Content-Security-Policy
# ✅ Strict-Transport-Security
# ✅ X-Frame-Options: DENY
# ✅ X-Content-Type-Options: nosniff
# ✅ X-XSS-Protection: 1; mode=block
# ✅ Referrer-Policy: strict-origin-when-cross-origin
# ✅ Permissions-Policy
```

**Pass Criteria**: All headers present and correct values

### 2. CSP Validation

```bash
# Check CSP policy
curl -s -I https://www.qa-paas.com | grep -i "Content-Security-Policy"

# Should show:
# Content-Security-Policy: default-src 'self'; script-src 'self' ...; style-src 'self' ...;
```

**Pass Criteria**: CSP is restrictive (no `'unsafe-eval'` or `'unsafe-inline'` except where needed)

### 3. SSL/TLS Certificate

```bash
# Check certificate validity
echo | openssl s_client -connect www.qa-paas.com:443 2>/dev/null | openssl x509 -dates -noout

# Expected output:
# notBefore=Oct 1 00:00:00 2024 GMT
# notAfter=Oct 1 00:00:00 2025 GMT

# Check certificate chain
openssl s_client -connect www.qa-paas.com:443 -showcerts </dev/null 2>/dev/null | grep "Certificate"

# Should show complete chain to root CA
```

**Pass Criteria**: Certificate valid, expires > 30 days, complete chain

### 4. HSTS Preload

```bash
# Check HSTS header for preload directive
curl -s -I https://www.qa-paas.com | grep -i "Strict-Transport-Security"

# Should contain: max-age=31536000; includeSubDomains; preload
```

**Pass Criteria**: HSTS configured with preload flag

### 5. Security Headers Score

```bash
# Score: Use online tools
# https://securityheaders.com/?q=www.qa-paas.com
# https://observatory.mozilla.org/analyze/www.qa-paas.com

# Expected: A+ rating
```

**Pass Criteria**: A or A+ rating

---

## Vulnerability Scanning

### 1. npm Audit

```bash
# Check for vulnerable dependencies
npm audit

# Expected: 0 vulnerabilities found
```

**Pass Criteria**: No vulnerabilities in high or critical severity

```bash
# Fix vulnerabilities
npm audit fix
npm audit fix --force  # If needed for transitive dependencies
```

### 2. TypeScript Check

```bash
# Run type checking
npm run type-check

# Expected: 0 errors
```

**Pass Criteria**: No type errors

### 3. ESLint Security Rules

```bash
# Run ESLint with security focus
npm run lint

# Expected: 0 errors, only warnings for non-security issues
```

**Pass Criteria**: No security-related ESLint violations

### 4. Build Test

```bash
# Clean build
rm -rf .next
npm run build

# Expected: Build succeeds with no errors
```

**Pass Criteria**: Build completes without errors

### 5. OWASP ZAP Scanning

```bash
# Install OWASP ZAP
# https://www.zaproxy.org/

# Run baseline scan
zaproxy -config api.disablekey=true -config api.addrs.addr.name=.* \
  -config api.addrs.addr.regex=true -self-contained-capture \
  -baselist https://www.qa-paas.com

# Expected: No high or critical vulnerabilities
```

**Pass Criteria**: All issues are low/medium and remediatable

---

## Configuration Verification

### 1. Environment Variables

```typescript
// Verify all required env vars are set
const required = [
  'NODE_ENV',
  'NEXT_PUBLIC_SITE_URL',
  'NEXT_PUBLIC_API_URL',
  'DATABASE_URL',
  'JWT_SECRET',
  'API_SECRET_KEY',
];

required.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

console.log('✅ All environment variables configured');
```

**Pass Criteria**: All required variables present and non-empty

### 2. Secrets Management

```bash
# Verify no hardcoded secrets
grep -r "password\|secret\|key" src/ --include="*.ts" --include="*.js" \
  --exclude-dir=node_modules --exclude-dir=.next | \
  grep -v "process.env" | \
  grep -v "test"

# Expected: No matches or only in tests
```

**Pass Criteria**: No hardcoded credentials found

### 3. Next.js Configuration

```typescript
// Verify security settings in next.config.js
const nextConfig = {
  reactStrictMode: true, // ✅ Enabled
  poweredByHeader: false, // ✅ Disabled
  productionBrowserSourceMaps: false, // ✅ Disabled
  // ... other settings
};
```

**Pass Criteria**: All security settings properly configured

---

## API Security Verification

### 1. Rate Limiting Test

```bash
# Send requests exceeding rate limit
for i in {1..15}; do
  curl -s https://www.qa-paas.com/api/endpoint \
    -H "X-Forwarded-For: 192.168.1.1"
done

# Expected: 10th+ request returns 429 (Too Many Requests)
```

**Pass Criteria**: Rate limiting enforced at configured threshold

### 2. CORS Test

```bash
# Test unauthorized CORS request
curl -s https://www.qa-paas.com/api/endpoint \
  -H "Origin: https://attacker.com" \
  -H "Access-Control-Request-Method: POST"

# Expected: CORS header NOT present in response or error returned
```

**Pass Criteria**: CORS requests from unauthorized origins rejected

### 3. CSRF Protection

```bash
# Test CSRF token validation
curl -X POST https://www.qa-paas.com/api/sensitive \
  -d "data=test" \
  -b "cookies.txt"

# Expected: 403 (Forbidden) or 400 (Bad Request) without valid CSRF token
```

**Pass Criteria**: CSRF-protected endpoints require valid tokens

### 4. Input Validation

```bash
# Test SQL injection attempt
curl "https://www.qa-paas.com/api/search?q='; DROP TABLE users; --"

# Expected: Properly escaped or rejected, no SQL error
```

**Pass Criteria**: SQL injection attempts prevented

### 5. XSS Prevention

```bash
# Test XSS payload
curl "https://www.qa-paas.com/api/submit" \
  -d 'content=<script>alert("XSS")</script>'

# Expected: Script tags escaped or sanitized in response
```

**Pass Criteria**: XSS payloads properly escaped/sanitized

---

## Authentication & Authorization

### 1. JWT Token Test

```typescript
// Test JWT validation
const validToken = generateToken(userId, 'user');
const invalidToken = 'eyJhbGc...invalid';

// Valid token should pass
verify(validToken); // ✅ Success

// Invalid token should fail
verify(invalidToken); // ❌ Error: Invalid token
```

**Pass Criteria**: Valid tokens accepted, invalid tokens rejected

### 2. Role-Based Access Control

```typescript
// Test RBAC enforcement
const admin = { role: 'admin', id: 'user1' };
const user = { role: 'user', id: 'user2' };

// Admin can access sensitive endpoint
canAccess(admin, 'delete:data'); // ✅ true

// User cannot access sensitive endpoint
canAccess(user, 'delete:data'); // ❌ false
```

**Pass Criteria**: Permissions correctly enforced by role

### 3. Password Policy

```typescript
// Test password requirements
const weak = 'password';
const strong = 'SecurePass123!@#';

validatePassword(weak); // ❌ Too weak
validatePassword(strong); // ✅ Valid
```

**Pass Criteria**: Password policy enforced

---

## Data Protection

### 1. Encryption Test

```typescript
const original = 'Sensitive data';
const encrypted = encryptData(original);
const decrypted = decryptData(encrypted);

// Encrypted should not match original
expect(encrypted).not.toBe(original);

// Decrypted should match original
expect(decrypted).toBe(original);
```

**Pass Criteria**: Data properly encrypted and decrypted

### 2. Sensitive Data Logging

```bash
# Check logs don't contain sensitive data
grep -r "password\|token\|secret\|credit_card" logs/ --include="*.log"

# Expected: No matches
```

**Pass Criteria**: No sensitive data in logs

### 3. Database Security

```sql
-- Verify database connection requires SSL
SHOW ssl_settings; -- For PostgreSQL

-- Expected: ssl=require or similar
```

**Pass Criteria**: Database connections encrypted

---

## Compliance Verification

### 1. GDPR Compliance

- ✅ Privacy policy published
- ✅ Data processing agreement available
- ✅ User data export functionality works
- ✅ User data deletion functionality works
- ✅ Consent management functional

**Test**:

```bash
# Test data export
curl -X POST https://www.qa-paas.com/api/gdpr/export \
  -H "Authorization: Bearer $TOKEN" \
  -d "userId=$USER_ID"

# Expected: Returns user's data in structured format

# Test data deletion
curl -X DELETE https://www.qa-paas.com/api/gdpr/delete \
  -H "Authorization: Bearer $TOKEN" \
  -d "userId=$USER_ID"

# Expected: User data anonymized or deleted
```

### 2. ISO 27001 Compliance

- ✅ Access control policies
- ✅ Encryption standards
- ✅ Incident response procedures
- ✅ Security training documentation
- ✅ Risk assessment completed

### 3. SOC2 Type II Compliance

- ✅ Security controls documented
- ✅ Audit logs enabled
- ✅ Change management process
- ✅ Monitoring and alerting active
- ✅ Backup and recovery tested

---

## Ongoing Monitoring

### Weekly Security Checklist

```bash
# 1. Review security logs
tail -n 1000 /var/log/security.log | grep "critical\|error"

# 2. Check SSL certificate expiration
curl -s https://www.qa-paas.com:443 | openssl x509 -dates -noout

# 3. Verify security headers still present
curl -I https://www.qa-paas.com | grep -E "CSP|HSTS|X-Frame"

# 4. Run dependency check
npm outdated | grep "critical\|high"

# 5. Review error tracking (Sentry)
# Check for unusual patterns or new error types
```

### Monthly Security Audit

```bash
# 1. Full vulnerability scan
npm audit
OWASP ZAP scan
Trivy container scan (if using Docker)

# 2. Penetration testing simulation
# - Test authentication bypass
# - Test authorization bypass
# - Test data exfiltration
# - Test CSRF
# - Test XSS

# 3. Security headers score
# https://securityheaders.com/
# Target: A+

# 4. SSL Labs test
# https://www.ssllabs.com/ssltest/
# Target: A or A+

# 5. GDPR compliance check
# - Privacy policy updated
# - DPA current
# - Consent management working
```

### Quarterly Security Review

- Security audit with external firm
- Penetration testing
- Code review focused on security
- Dependency updates and patching
- Incident review and lessons learned
- Policy updates if needed

---

## Post-Verification Sign-Off

```
Security Verification Checklist
================================

Pre-Deployment: [✅ PASSED / ❌ FAILED]
- Headers test: [✅] Date: ____
- CSP validation: [✅] Date: ____
- SSL/TLS certificate: [✅] Date: ____
- HSTS preload: [✅] Date: ____
- Security score: [✅] A+ Date: ____

Vulnerability Scanning: [✅ PASSED / ❌ FAILED]
- npm audit: [✅] Date: ____
- TypeScript check: [✅] Date: ____
- ESLint security: [✅] Date: ____
- Build test: [✅] Date: ____
- OWASP ZAP: [✅] Date: ____

Configuration: [✅ PASSED / ❌ FAILED]
- Environment variables: [✅] Date: ____
- Secrets management: [✅] Date: ____
- Next.js config: [✅] Date: ____

API Security: [✅ PASSED / ❌ FAILED]
- Rate limiting: [✅] Date: ____
- CORS: [✅] Date: ____
- CSRF: [✅] Date: ____
- Input validation: [✅] Date: ____
- XSS: [✅] Date: ____

Auth & Access: [✅ PASSED / ❌ FAILED]
- JWT: [✅] Date: ____
- RBAC: [✅] Date: ____
- Passwords: [✅] Date: ____

Data Protection: [✅ PASSED / ❌ FAILED]
- Encryption: [✅] Date: ____
- Logging: [✅] Date: ____
- Database: [✅] Date: ____

Compliance: [✅ PASSED / ❌ FAILED]
- GDPR: [✅] Date: ____
- ISO 27001: [✅] Date: ____
- SOC2 Type II: [✅] Date: ____

Overall Status: ✅ APPROVED FOR DEPLOYMENT

Verified By: _________________ Date: _______
Authorized By: ______________ Date: _______
```

---

**Verification Checklist Version**: 1.0.0
**Last Updated**: October 2024
**Next Review**: [Schedule date]
