/**
 * Secure Link Utilities
 * Helper functions for creating secure external links
 */

/**
 * Get secure rel attributes for external links
 */
export function getSecureRelAttributes(): string {
  return 'noopener noreferrer'
}

/**
 * Get secure target and rel attributes for external links
 */
export function getSecureLinkProps() {
  return {
    target: '_blank',
    rel: 'noopener noreferrer',
  }
}

/**
 * Validate and sanitize URL - Comprehensive injection protection
 */
export function sanitizeURL(url: string): string | null {
  if (!url) return null

  // Remove whitespace and control characters
  const cleaned = url.trim().replace(/[\x00-\x1F\x7F]/g, '')
  
  // Check for dangerous protocols (comprehensive list)
  const dangerousProtocols = [
    'javascript:',
    'data:',
    'vbscript:',
    'file:',
    'about:',
    'blob:',
    'filesystem:',
  ]
  
  const lowerURL = cleaned.toLowerCase()
  for (const protocol of dangerousProtocols) {
    if (lowerURL.includes(protocol)) {
      return null
    }
  }
  
  // Check for encoded versions of dangerous protocols
  if (/javascript\s*:|data\s*:|vbscript\s*:/i.test(cleaned)) {
    return null
  }
  
  // Check for HTML entities encoding
  if (/&#|&\w+;/.test(cleaned)) {
    return null
  }

  try {
    const parsed = new URL(cleaned)
    
    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return null
    }
    
    // Validate hostname (no localhost or private IPs in production)
    const hostname = parsed.hostname.toLowerCase()
    
    // Block localhost and private IP ranges (SSRF protection)
    if (
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname.startsWith('192.168.') ||
      hostname.startsWith('10.') ||
      hostname.startsWith('172.16.') ||
      hostname.startsWith('172.17.') ||
      hostname.startsWith('172.18.') ||
      hostname.startsWith('172.19.') ||
      hostname.startsWith('172.20.') ||
      hostname.startsWith('172.21.') ||
      hostname.startsWith('172.22.') ||
      hostname.startsWith('172.23.') ||
      hostname.startsWith('172.24.') ||
      hostname.startsWith('172.25.') ||
      hostname.startsWith('172.26.') ||
      hostname.startsWith('172.27.') ||
      hostname.startsWith('172.28.') ||
      hostname.startsWith('172.29.') ||
      hostname.startsWith('172.30.') ||
      hostname.startsWith('172.31.')
    ) {
      // Allow in development only
      if (process.env.NODE_ENV === 'production') {
        return null
      }
    }

    return parsed.toString()
  } catch {
    // Invalid URL
    return null
  }
}

/**
 * Validate URL parameters for injection attacks
 */
export function sanitizeURLParams(params: Record<string, string>): Record<string, string> {
  const sanitized: Record<string, string> = {}
  
  for (const [key, value] of Object.entries(params)) {
    // Sanitize key
    const cleanKey = key
      .replace(/[^a-zA-Z0-9_-]/g, '')
      .slice(0, 100)
    
    // Sanitize value
    const cleanValue = value
      .replace(/[<>"'`]/g, '') // Remove dangerous characters
      .replace(/javascript:/gi, '')
      .replace(/data:/gi, '')
      .trim()
      .slice(0, 2000)
    
    if (cleanKey && cleanValue) {
      sanitized[cleanKey] = cleanValue
    }
  }
  
  return sanitized
}

/**
 * Check if URL is external
 */
export function isExternalURL(url: string, currentDomain?: string): boolean {
  try {
    const parsed = new URL(url, window.location.origin)
    const current = currentDomain || window.location.hostname
    
    return parsed.hostname !== current
  } catch {
    return false
  }
}

/**
 * Open URL safely in new window
 */
export function openURLSafely(url: string): void {
  const sanitized = sanitizeURL(url)
  
  if (!sanitized) {
    console.error('Invalid URL:', url)
    return
  }

  const newWindow = window.open(sanitized, '_blank', 'noopener,noreferrer')
  
  // Prevent window.opener access
  if (newWindow) {
    newWindow.opener = null
  }
}

/**
 * Create secure WhatsApp link
 */
export function createWhatsAppLink(
  phone: string,
  message: string
): string | null {
  // Validate phone number
  const cleanPhone = phone.replace(/[^0-9+]/g, '')
  
  if (!cleanPhone || cleanPhone.length < 7) {
    return null
  }

  // Sanitize message
  const sanitizedMessage = message
    .replace(/[<>]/g, '') // Remove HTML tags
    .trim()
    .slice(0, 2000) // Limit message length

  const encodedMessage = encodeURIComponent(sanitizedMessage)
  
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`
}

/**
 * Create secure email link
 */
export function createEmailLink(
  email: string,
  subject?: string,
  body?: string
): string | null {
  // Basic email validation
  if (!email || !email.includes('@')) {
    return null
  }

  const params = new URLSearchParams()
  
  if (subject) {
    params.append('subject', subject.slice(0, 200))
  }
  
  if (body) {
    params.append('body', body.slice(0, 2000))
  }

  const queryString = params.toString()
  
  return `mailto:${email}${queryString ? '?' + queryString : ''}`
}

/**
 * Validate image URL from allowed domains
 */
export function isAllowedImageDomain(url: string): boolean {
  const allowedDomains = [
    'res.cloudinary.com',
    'upload.wikimedia.org',
    'placehold.co',
    'images.unsplash.com',
  ]

  try {
    const parsed = new URL(url)
    return allowedDomains.some(domain => parsed.hostname === domain)
  } catch {
    return false
  }
}

/**
 * Create secure download link with proper headers
 */
export function createSecureDownloadLink(filename: string): {
  download: string
  rel: string
} {
  return {
    download: filename.replace(/[^a-zA-Z0-9.-]/g, '_'), // Sanitize filename
    rel: 'noopener noreferrer',
  }
}

export default {
  getSecureRelAttributes,
  getSecureLinkProps,
  sanitizeURL,
  isExternalURL,
  openURLSafely,
  createWhatsAppLink,
  createEmailLink,
  isAllowedImageDomain,
  createSecureDownloadLink,
}
