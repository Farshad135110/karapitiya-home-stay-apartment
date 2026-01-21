# 🔒 Security Quick Reference

## Instant Security Check

```bash
# Check for vulnerabilities
npm run security:audit

# Fix vulnerabilities
npm run security:audit:fix

# Check everything
npm run security:check
```

## 🚨 Emergency Commands

```bash
# If site is under attack:
# 1. Lower rate limits immediately
# Edit .env.local:
RATE_LIMIT_MAX_REQUESTS=10
RATE_LIMIT_WINDOW_MS=60000

# 2. Deploy immediately
npm run build
# Then deploy to Vercel

# 3. Check logs
# Review Vercel logs for 429 responses
```

## ✅ Security Features Active

| Feature | Status | Location |
|---------|--------|----------|
| HTTPS Enforcement | ✅ | vercel.json |
| Security Headers | ✅ | next.config.js |
| CSP | ✅ | next.config.js |
| Rate Limiting | ✅ | src/middleware.ts |
| Input Validation | ✅ | src/lib/security.ts |
| XSS Protection | ✅ | Multiple layers |

## 🔍 Quick Tests

### Test Security Headers
```bash
curl -I https://www.karapitiyahomestayapartment.com
```

### Test Rate Limiting
Make 100+ requests in 1 minute - should get 429

### Test Form Validation
Try these in contact form:
- `<script>alert('xss')</script>` in name
- `test@` as email
- `abc` as phone number
- Past date for check-in

All should be rejected ✅

## 📋 Pre-Deploy Checklist

- [ ] `npm run security:audit` → 0 vulnerabilities
- [ ] `.env.local` configured
- [ ] Test on localhost:3000
- [ ] Check browser console (no CSP errors)
- [ ] Test contact form
- [ ] Verify WhatsApp link works

## 🛡️ What's Protected

✅ **Cross-Site Scripting (XSS)**
- Input sanitization
- CSP headers
- HTML tag removal

✅ **Clickjacking**
- X-Frame-Options
- frame-ancestors CSP

✅ **Man-in-the-Middle**
- HTTPS only
- HSTS preload
- 2-year HSTS duration

✅ **Brute Force**
- Rate limiting
- IP-based throttling
- 429 responses

✅ **Bot Scraping**
- robots.txt restrictions
- Malicious bot blocking
- Rate limits per IP

✅ **Injection Attacks**
- Input validation
- SQL escaping ready
- URL sanitization

## 📞 Security Contacts

- **Issues**: Check SECURITY.md first
- **Vulnerabilities**: DO NOT post publicly
- **Questions**: Review documentation files

## 📚 Documentation Files

1. **SECURITY.md** - Full security guide
2. **SECURITY_CHECKLIST.md** - Deployment checklist
3. **SECURITY_IMPLEMENTATION_SUMMARY.md** - What was done
4. **SECURITY_QUICK_REFERENCE.md** - This file

## 🔧 Common Issues

### CSP Violations in Console?
→ Check browser DevTools
→ Update CSP in next.config.js
→ Add legitimate domains only

### Rate Limited Users Complaining?
→ Increase limits in .env.local:
```env
RATE_LIMIT_MAX_REQUESTS=200
```

### Form Not Working?
→ Check validation in browser console
→ Review src/lib/security.ts
→ Test with valid inputs first

## ⚡ Performance

All security features are optimized:
- Headers: ~1KB overhead
- Rate limiting: < 1ms
- Validation: Client-side first
- No database needed

## 🎯 Next Steps After Deploy

1. Test on production URL
2. Check SecurityHeaders.com score
3. Test SSL Labs rating
4. Monitor for 429 responses
5. Set up error logging (Sentry)

## 🌟 Security Score Goals

- SecurityHeaders.com: A+
- SSL Labs: A+
- Mozilla Observatory: A+
- npm audit: 0 vulnerabilities

---

**Last Updated**: January 18, 2026  
**Version**: 1.0.0
