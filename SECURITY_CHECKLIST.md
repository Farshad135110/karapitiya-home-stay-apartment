# Security Checklist

## Pre-Deployment Security Checklist

### Environment & Configuration
- [ ] `.env.local` file created with production values
- [ ] `.env.example` file up to date
- [ ] All sensitive data removed from code
- [ ] Environment variables properly configured on hosting platform
- [ ] `NODE_ENV=production` set on production server
- [ ] Database credentials secured (if applicable)

### Dependencies & Updates
- [ ] Run `npm audit` - no vulnerabilities found
- [ ] All dependencies up to date (`npm outdated`)
- [ ] No unused dependencies in package.json
- [ ] Lock file committed (package-lock.json)

### Security Headers
- [ ] HTTPS enforced on production
- [ ] Security headers configured in next.config.js
- [ ] CSP headers tested (no console violations)
- [ ] HSTS preload enabled
- [ ] X-Frame-Options set to SAMEORIGIN
- [ ] X-Content-Type-Options set to nosniff

### Content Security Policy
- [ ] CSP tested in browser console
- [ ] All legitimate resources whitelisted
- [ ] No 'unsafe-inline' except where absolutely necessary
- [ ] External scripts limited to trusted domains
- [ ] form-action restricted to self and WhatsApp

### Input Validation
- [ ] All form inputs validated and sanitized
- [ ] Email validation implemented
- [ ] Phone number validation implemented
- [ ] Date validation with business rules
- [ ] Input length limits enforced
- [ ] XSS protection in place

### Rate Limiting
- [ ] Rate limiting middleware active
- [ ] Rate limits properly configured
- [ ] 429 responses tested
- [ ] Retry-After headers included
- [ ] Rate limit bypass protection

### API Security (if applicable)
- [ ] API routes protected with authentication
- [ ] CORS properly configured
- [ ] API rate limiting implemented
- [ ] Input validation on API endpoints
- [ ] Error messages don't leak sensitive info

### Authentication & Authorization (future)
- [ ] Passwords hashed (bcrypt/argon2)
- [ ] Session management secure
- [ ] JWT tokens properly secured
- [ ] OAuth implementation secure
- [ ] Password reset flow secure

### Data Protection
- [ ] No sensitive data in client-side code
- [ ] No API keys in repository
- [ ] Database queries parameterized (prevent SQL injection)
- [ ] File uploads validated and scanned
- [ ] User data encrypted at rest

### Frontend Security
- [ ] No inline event handlers
- [ ] window.open uses 'noopener,noreferrer'
- [ ] External links have rel="noopener noreferrer"
- [ ] localStorage/sessionStorage used securely
- [ ] No eval() or Function() constructors

### Image & Asset Security
- [ ] Image domains whitelisted
- [ ] SVG files properly secured
- [ ] Content-Disposition set for downloads
- [ ] CDN properly configured
- [ ] Asset caching configured

### Monitoring & Logging
- [ ] Error logging configured (e.g., Sentry)
- [ ] Security events logged
- [ ] Unusual activity monitoring
- [ ] Regular log review process
- [ ] Backup system in place

### Testing
- [ ] Security headers verified in production
- [ ] Rate limiting tested
- [ ] Form validation tested
- [ ] XSS attempts blocked
- [ ] CSRF protection tested (if forms use POST)

### Documentation
- [ ] SECURITY.md reviewed and up to date
- [ ] Incident response plan documented
- [ ] Security contacts identified
- [ ] README includes security section

### Compliance
- [ ] GDPR compliance (if EU users)
- [ ] Cookie consent implemented (if needed)
- [ ] Privacy policy linked
- [ ] Terms of service available
- [ ] Data retention policy defined

## Post-Deployment Monitoring

### Daily
- [ ] Check error logs
- [ ] Monitor rate limiting triggers
- [ ] Review unusual traffic patterns

### Weekly
- [ ] Review security headers in production
- [ ] Check for failed login attempts
- [ ] Review form submission patterns

### Monthly
- [ ] Run `npm audit`
- [ ] Update dependencies
- [ ] Review access logs
- [ ] Test security features
- [ ] Update documentation

### Quarterly
- [ ] Security audit
- [ ] Penetration testing (if budget allows)
- [ ] Review and update CSP
- [ ] Update security policies
- [ ] Team security training

## Incident Response

### If Security Issue Detected
1. [ ] Assess severity and impact
2. [ ] Isolate affected systems
3. [ ] Document timeline
4. [ ] Identify root cause
5. [ ] Apply immediate fixes
6. [ ] Test thoroughly
7. [ ] Deploy fix
8. [ ] Notify affected users
9. [ ] Post-mortem analysis
10. [ ] Update security measures

## Quick Security Tests

### Test Security Headers
```bash
curl -I https://www.karapitiyahomestayapartment.com
```

### Check SSL/TLS Configuration
Visit: https://www.ssllabs.com/ssltest/

### Test CSP
1. Open site in browser
2. Open DevTools Console
3. Look for CSP violations

### Verify Rate Limiting
Make multiple rapid requests and verify 429 response

### Test Input Validation
Try submitting forms with:
- Empty fields
- HTML tags
- JavaScript code
- Very long strings
- Special characters

## Security Resources

- OWASP Top 10: https://owasp.org/www-project-top-ten/
- Next.js Security: https://nextjs.org/docs/advanced-features/security-headers
- Mozilla Observatory: https://observatory.mozilla.org/
- SecurityHeaders.com: https://securityheaders.com/
- SSL Labs: https://www.ssllabs.com/ssltest/

## Emergency Contacts

- Development Team: [Add contact]
- Hosting Provider Support: [Add contact]
- Security Team: [Add contact]
- Legal Team: [Add contact]

---

**Last Updated**: January 18, 2026
**Next Review**: February 18, 2026
