import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimit = new Map<string, { count: number; resetTime: number }>()

const MAX_REQUESTS = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100', 10)
const WINDOW_MS = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10) // 15 minutes

export function middleware(request: NextRequest) {
  // Get client identifier (IP address)
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0] : 
             request.headers.get('x-real-ip') || 
             'unknown'

  const now = Date.now()
  const clientData = rateLimit.get(ip)

  if (!clientData || now > clientData.resetTime) {
    // New window or expired window
    rateLimit.set(ip, { count: 1, resetTime: now + WINDOW_MS })
  } else {
    // Within existing window
    clientData.count++
    
    if (clientData.count > MAX_REQUESTS) {
      return new NextResponse(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': String(Math.ceil((clientData.resetTime - now) / 1000)),
            'X-RateLimit-Limit': String(MAX_REQUESTS),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(clientData.resetTime),
          },
        }
      )
    }
  }

  // Cleanup old entries periodically (every 100 requests)
  if (rateLimit.size > 1000) {
    for (const [key, value] of rateLimit.entries()) {
      if (now > value.resetTime) {
        rateLimit.delete(key)
      }
    }
  }

  // Sanitize request URL to prevent injection attacks
  const url = request.nextUrl.clone()
  const pathname = url.pathname
  
  // Block potentially malicious paths
  const maliciousPaths = [
    '.env',
    '.git',
    'wp-admin',
    'wp-login',
    'phpmyadmin',
    'admin',
    '.sql',
    '.db',
    '.bak',
    'backup',
    'config',
  ]
  
  // Check for malicious path patterns
  if (maliciousPaths.some(path => pathname.toLowerCase().includes(path))) {
    return new NextResponse('Forbidden', { status: 403 })
  }
  
  // Block paths with suspicious patterns (path traversal attempts)
  if (pathname.includes('..') || pathname.includes('//') || pathname.includes('\\')) {
    return new NextResponse('Bad Request', { status: 400 })
  }
  
  // Add security headers to response
  const response = NextResponse.next()
  
  // Additional runtime security headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  
  // Set rate limit headers
  const remaining = Math.max(0, MAX_REQUESTS - (clientData?.count || 1))
  response.headers.set('X-RateLimit-Limit', String(MAX_REQUESTS))
  response.headers.set('X-RateLimit-Remaining', String(remaining))
  
  if (clientData) {
    response.headers.set('X-RateLimit-Reset', String(clientData.resetTime))
  }

  return response
}

// Configure which routes to apply middleware to
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|xml|txt)$).*)',
  ],
}
