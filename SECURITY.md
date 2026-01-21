# Security Implementation Guide

## Overview
This document outlines the security measures implemented to protect the Karapitiya Homestay website and user data.

## Security Features Implemented

### 1. HTTP Security Headers

All HTTP responses include comprehensive security headers configured in `next.config.js`:

#### **Strict-Transport-Security (HSTS)**
- Forces HTTPS connections
- Duration: 2 years (63072000 seconds)
- Includes all subdomains
- Preload enabled for browser HSTS lists

#### **Content-Security-Policy (CSP)**
- Restricts resource loading to trusted sources only
- Prevents XSS attacks by controlling script execution
- Blocks inline scripts except from trusted domains
- Allows only HTTPS resources
- Frame ancestors restricted to same origin

#### **X-Content-Type-Options**
- Set to `nosniff` to prevent MIME type sniffing
- Protects against drive-by downloads

#### **X-Frame-Options**
- Set to `SAMEORIGIN` to prevent clickjacking
- Blocks embedding in iframes from external sites

#### **X-XSS-Protection**
- Enables browser XSS filtering
- Mode set to `block` to prevent rendering on XSS detection

#### **Referrer-Policy**
- Set to `strict-origin-when-cross-origin`
- Limits referrer information sent to other sites

#### **Permissions-Policy**
- Disables unused browser features:
  - Camera
  - Microphone
  - Geolocation
  - Payment
  - USB
  - Magnetometer
  - Gyroscope
  - Accelerometer

#### **Cross-Origin Policies**
- **Cross-Origin-Embedder-Policy**: Set to `credentialless`
- **Cross-Origin-Opener-Policy**: Set to `same-origin-allow-popups` (for WhatsApp integration)
- **Cross-Origin-Resource-Policy**: Set to `same-origin`

### 2. Rate Limiting

**Location**: `src/middleware.ts`

#### Features:
- Prevents brute force attacks and spam
- Default: 100 requests per 15 minutes per IP
- Configurable via environment variables
- Returns 429 status code when limit exceeded
- Includes retry-after headers
- Automatic cleanup of old entries

#### Configuration:
```env
RATE_LIMIT_MAX_REQUESTS=100
RATE_LIMIT_WINDOW_MS=900000
```

### 3. Input Validation & Sanitization

**Location**: `src/lib/security.ts`

#### Functions:
- `sanitizeString()`: Removes HTML tags and malicious code
- `isValidEmail()`: Email format validation with security checks
- `isValidPhone()`: Phone number format validation
- `sanitizeFormData()`: Complete form validation and sanitization
- `checkSubmissionRateLimit()`: Client-side rate limiting for forms

#### Protections:
- XSS prevention through HTML tag removal
- Input length limits to prevent buffer overflow
- Date validation with business logic (minimum stay)
- Email format validation (RFC compliant)
- Phone number format validation

### 4. Environment Variables

**Template**: `.env.example`

#### Best Practices:
- Never commit `.env.local` or `.env` files
- Use environment variables for sensitive data
- Separate configs for development and production
- Template file provided for easy setup

### 5. Image Security

**Configuration in** `next.config.js`:

- Whitelist of allowed image domains
- SVG files secured with CSP
- Content-Disposition set to `attachment`
- Long-term caching with immutable flag

### 6. HTTPS Enforcement

**Configuration in** `vercel.json`:

- Automatic redirect from HTTP to HTTPS
- Canonical URL enforcement (www subdomain)
- Permanent redirects (301) for SEO preservation

### 7. Additional Security Measures

#### Disabled Features:
- `poweredByHeader: false` - Hides Next.js version
- Console logs removed in production
- React Strict Mode enabled

#### Enabled Features:
- Compression enabled
- ETag generation for cache validation
- SWC minification
- Optimal image formats (AVIF, WebP)

## Security Checklist

### Before Deployment:

- [ ] Update `.env.local` with production values
- [ ] Verify all environment variables are set
- [ ] Review and test rate limiting thresholds
- [ ] Ensure HTTPS is configured on hosting platform
- [ ] Test all form validations
- [ ] Review CSP headers (check browser console for violations)
- [ ] Verify Google verification code in metadata
- [ ] Test WhatsApp integration with `noopener,noreferrer`

### Regular Maintenance:

- [ ] Update dependencies monthly (`npm audit`)
- [ ] Review security headers quarterly
- [ ] Monitor rate limiting logs
- [ ] Check for new security advisories
- [ ] Test form submissions regularly
- [ ] Review CSP violations in browser console
- [ ] Update Next.js and React versions

### Monitoring:

- [ ] Set up error logging (e.g., Sentry)
- [ ] Monitor 429 rate limit responses
- [ ] Track failed validation attempts
- [ ] Review security headers in production
- [ ] Monitor for unusual traffic patterns

## Common Security Tasks

### Updating Rate Limits
```env
# Increase limit for higher traffic
RATE_LIMIT_MAX_REQUESTS=200
RATE_LIMIT_WINDOW_MS=900000
```

### Testing Security Headers
```bash
# Use SecurityHeaders.com or
curl -I https://www.karapitiyahomestayapartment.com
```

### Checking for Vulnerabilities
```bash
npm audit
npm audit fix
```

### Testing CSP
1. Open browser DevTools
2. Check Console for CSP violations
3. Adjust CSP in `next.config.js` if needed

## Incident Response

### If Security Issue Detected:

1. **Immediate Actions**:
   - Take affected service offline if critical
   - Review server logs for extent of breach
   - Change all passwords and API keys
   - Enable additional rate limiting

2. **Investigation**:
   - Identify attack vector
   - Review recent code changes
   - Check for unauthorized access
   - Document timeline of events

3. **Resolution**:
   - Apply security patches
   - Update affected dependencies
   - Strengthen affected security controls
   - Test thoroughly before redeployment

4. **Post-Incident**:
   - Document lessons learned
   - Update security policies
   - Notify users if data affected
   - Implement additional monitoring

## Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/advanced-features/security-headers)
- [Mozilla Security Guidelines](https://infosec.mozilla.org/guidelines/web_security)
- [Content Security Policy Reference](https://content-security-policy.com/)

## Support

For security concerns or questions:
- Review this documentation
- Check Next.js security documentation
- Contact the development team
- DO NOT post security issues publicly

## Version History

- **v1.0.0** (2026-01-18): Initial security implementation
  - HTTP security headers
  - Rate limiting middleware
  - Input validation and sanitization
  - Environment variable management
  - Security documentation
