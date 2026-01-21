/**
 * Security Headers Configuration
 * 
 * This module exports reusable security header configurations
 * that can be imported and used across the application.
 */

export const SECURITY_HEADERS = {
  // Prevent MIME type sniffing
  X_CONTENT_TYPE_OPTIONS: {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },

  // Prevent clickjacking attacks
  X_FRAME_OPTIONS: {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },

  // Enable XSS protection
  X_XSS_PROTECTION: {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },

  // Force HTTPS connections
  STRICT_TRANSPORT_SECURITY: {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },

  // Control referrer information
  REFERRER_POLICY: {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },

  // Enable DNS prefetching
  X_DNS_PREFETCH_CONTROL: {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },

  // Disable dangerous browser features
  PERMISSIONS_POLICY: {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()',
  },

  // Content Security Policy
  CONTENT_SECURITY_POLICY: {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://www.google-analytics.com https://wa.me https://api.whatsapp.com",
      "frame-src 'self' https://www.google.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self' https://wa.me",
      "frame-ancestors 'self'",
      "upgrade-insecure-requests",
    ].join('; '),
  },

  // Cross-Origin Embedder Policy
  CROSS_ORIGIN_EMBEDDER_POLICY: {
    key: 'Cross-Origin-Embedder-Policy',
    value: 'credentialless',
  },

  // Cross-Origin Opener Policy (allow popups for WhatsApp)
  CROSS_ORIGIN_OPENER_POLICY: {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin-allow-popups',
  },

  // Cross-Origin Resource Policy
  CROSS_ORIGIN_RESOURCE_POLICY: {
    key: 'Cross-Origin-Resource-Policy',
    value: 'same-origin',
  },
}

/**
 * Get all security headers as an array
 */
export function getAllSecurityHeaders() {
  return Object.values(SECURITY_HEADERS)
}

/**
 * Get cache control headers for static assets
 */
export function getStaticAssetHeaders() {
  return [
    {
      key: 'Cache-Control',
      value: 'public, max-age=31536000, immutable',
    },
  ]
}

/**
 * Get cache control headers for dynamic content
 */
export function getDynamicContentHeaders() {
  return [
    {
      key: 'Cache-Control',
      value: 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  ]
}

/**
 * Rate limit headers
 */
export function getRateLimitHeaders(
  limit: number,
  remaining: number,
  reset: number
) {
  return [
    {
      key: 'X-RateLimit-Limit',
      value: String(limit),
    },
    {
      key: 'X-RateLimit-Remaining',
      value: String(remaining),
    },
    {
      key: 'X-RateLimit-Reset',
      value: String(reset),
    },
  ]
}

/**
 * CSP violation report endpoint configuration
 * Uncomment and configure if you want to receive CSP violation reports
 */
export function getCSPWithReporting(reportUri: string) {
  return {
    key: 'Content-Security-Policy',
    value: SECURITY_HEADERS.CONTENT_SECURITY_POLICY.value + `; report-uri ${reportUri}`,
  }
}

/**
 * Security headers for API routes
 */
export function getAPISecurityHeaders() {
  return [
    SECURITY_HEADERS.X_CONTENT_TYPE_OPTIONS,
    SECURITY_HEADERS.X_FRAME_OPTIONS,
    SECURITY_HEADERS.STRICT_TRANSPORT_SECURITY,
    {
      key: 'X-Robots-Tag',
      value: 'noindex, nofollow',
    },
  ]
}

export default SECURITY_HEADERS
