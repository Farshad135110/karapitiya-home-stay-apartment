/**
 * Input validation and sanitization utilities for security
 */

/**
 * Sanitize string input to prevent XSS and injection attacks
 */
export function sanitizeString(input: string): string {
  if (!input) return ''
  
  return input
    .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/data:/gi, '') // Remove data: protocol
    .replace(/vbscript:/gi, '') // Remove vbscript: protocol
    .replace(/file:/gi, '') // Remove file: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers like onclick=
    .replace(/&lt;/gi, '') // Remove encoded <
    .replace(/&gt;/gi, '') // Remove encoded >
    .replace(/&#/g, '') // Remove numeric character references
    .replace(/\.\.[\/\\]/g, '') // Prevent path traversal
    .trim()
    .slice(0, 1000) // Limit length
}

/**
 * Sanitize HTML to prevent XSS (more aggressive)
 */
export function sanitizeHTML(input: string): string {
  if (!input) return ''
  
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '') // Remove iframe tags
    .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '') // Remove object tags
    .replace(/<embed[^>]*>/gi, '') // Remove embed tags
    .replace(/<link[^>]*>/gi, '') // Remove link tags
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '') // Remove style tags
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '') // Remove inline event handlers
    .replace(/on\w+\s*=\s*[^\s>]*/gi, '') // Remove unquoted event handlers
    .trim()
    .slice(0, 5000)
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false
  
  // Basic email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  
  // Additional security checks
  if (email.length > 254) return false // RFC 5321
  if (email.includes('..')) return false // No consecutive dots
  
  return emailRegex.test(email)
}

/**
 * Validate phone number
 */
export function isValidPhone(phone: string): boolean {
  if (!phone) return false
  
  // Remove spaces and hyphens for validation
  const cleaned = phone.replace(/[\s-]/g, '')
  
  // Check if it contains only digits and optional + at start
  const phoneRegex = /^\+?[0-9]{7,15}$/
  
  return phoneRegex.test(cleaned)
}

/**
 * Validate date string
 */
export function isValidDate(dateString: string): boolean {
  if (!dateString) return false
  
  const date = new Date(dateString)
  return date instanceof Date && !isNaN(date.getTime())
}

/**
 * Validate that check-out is after check-in and meets minimum stay
 */
export function validateDateRange(
  checkIn: string,
  checkOut: string,
  minDays: number = 14
): { valid: boolean; error?: string } {
  if (!isValidDate(checkIn) || !isValidDate(checkOut)) {
    return { valid: false, error: 'Invalid date format' }
  }

  const checkInDate = new Date(checkIn)
  const checkOutDate = new Date(checkOut)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  if (checkInDate < today) {
    return { valid: false, error: 'Check-in date cannot be in the past' }
  }

  if (checkOutDate <= checkInDate) {
    return { valid: false, error: 'Check-out date must be after check-in date' }
  }

  const daysDiff = Math.ceil(
    (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
  )

  if (daysDiff < minDays) {
    return {
      valid: false,
      error: `Minimum stay is ${minDays} days. You selected ${daysDiff} days.`,
    }
  }

  return { valid: true }
}

/**
 * Sanitize form data object
 */
export interface ContactFormData {
  name: string
  email: string
  phone: string
  checkIn: string
  checkOut: string
  message: string
}

export function sanitizeFormData(data: ContactFormData): {
  sanitized: ContactFormData
  errors: string[]
} {
  const errors: string[] = []

  // Sanitize all string fields
  const sanitized: ContactFormData = {
    name: sanitizeString(data.name),
    email: sanitizeString(data.email),
    phone: sanitizeString(data.phone),
    checkIn: sanitizeString(data.checkIn),
    checkOut: sanitizeString(data.checkOut),
    message: sanitizeString(data.message),
  }

  // Validate required fields
  if (!sanitized.name || sanitized.name.length < 2) {
    errors.push('Name must be at least 2 characters')
  }

  if (!isValidEmail(sanitized.email)) {
    errors.push('Invalid email address')
  }

  if (sanitized.phone && !isValidPhone(sanitized.phone)) {
    errors.push('Invalid phone number')
  }

  // Validate dates if provided
  if (sanitized.checkIn && sanitized.checkOut) {
    const dateValidation = validateDateRange(sanitized.checkIn, sanitized.checkOut)
    if (!dateValidation.valid && dateValidation.error) {
      errors.push(dateValidation.error)
    }
  }

  return { sanitized, errors }
}

/**
 * Prevent SQL injection (if you add database later)
 */
export function escapeSQL(input: string): string {
  if (!input) return ''
  
  return input
    .replace(/'/g, "''") // Escape single quotes
    .replace(/\\/g, '\\\\') // Escape backslashes
    .replace(/\0/g, '\\0') // Escape null bytes
    .replace(/;/g, '') // Remove semicolons to prevent multiple statements
    .replace(/--/g, '') // Remove SQL comments
    .replace(/\/\*/g, '') // Remove multi-line comment start
    .replace(/\*\//g, '') // Remove multi-line comment end
}

/**
 * Prevent NoSQL injection (MongoDB, etc.)
 */
export function sanitizeNoSQL(input: any): any {
  if (typeof input === 'string') {
    return input
      .replace(/\$/g, '') // Remove $ operators
      .replace(/\{/g, '') // Remove {
      .replace(/\}/g, '') // Remove }
      .replace(/\[/g, '') // Remove [
      .replace(/\]/g, '') // Remove ]
      .trim()
  }
  return input
}

/**
 * Prevent LDAP injection
 */
export function escapeLDAP(input: string): string {
  if (!input) return ''
  
  return input
    .replace(/\(/g, '\\28') // Escape (
    .replace(/\)/g, '\\29') // Escape )
    .replace(/\*/g, '\\2a') // Escape *
    .replace(/\\/g, '\\5c') // Escape \
    .replace(/\0/g, '\\00') // Escape null
}

/**
 * Prevent command injection
 */
export function sanitizeCommand(input: string): string {
  if (!input) return ''
  
  // Only allow alphanumeric, spaces, and safe punctuation
  return input
    .replace(/[;&|`$(){}\[\]<>"'\\]/g, '') // Remove shell metacharacters
    .replace(/\n/g, '') // Remove newlines
    .replace(/\r/g, '') // Remove carriage returns
    .trim()
    .slice(0, 500)
}

/**
 * Prevent path traversal attacks
 */
export function sanitizePath(input: string): string {
  if (!input) return ''
  
  return input
    .replace(/\.\.[\/\\]/g, '') // Remove ../ and ..\
    .replace(/^[\/\\]/g, '') // Remove leading slashes
    .replace(/[\/\\]$/g, '') // Remove trailing slashes
    .replace(/[<>:"|?*]/g, '') // Remove invalid filename characters
    .trim()
}

/**
 * Rate limit check for form submissions (client-side)
 */
const submissionTimes = new Map<string, number[]>()

export function checkSubmissionRateLimit(
  identifier: string,
  maxSubmissions: number = 3,
  windowMs: number = 60000 // 1 minute
): { allowed: boolean; retryAfter?: number } {
  const now = Date.now()
  const times = submissionTimes.get(identifier) || []
  
  // Remove old entries
  const recentTimes = times.filter(time => now - time < windowMs)
  
  if (recentTimes.length >= maxSubmissions) {
    const oldestTime = Math.min(...recentTimes)
    const retryAfter = Math.ceil((oldestTime + windowMs - now) / 1000)
    return { allowed: false, retryAfter }
  }
  
  recentTimes.push(now)
  submissionTimes.set(identifier, recentTimes)
  
  return { allowed: true }
}
