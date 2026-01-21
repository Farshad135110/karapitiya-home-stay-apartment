'use client'

import { useEffect, useState } from 'react'
import { AlertCircle, RefreshCw } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    console.error('Global error:', error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4">
          <div className="max-w-2xl w-full text-center">
            {/* Critical Error Icon */}
            <div className={`mb-8 transform transition-all duration-1000 ${mounted ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
              <div className="inline-block p-8 bg-red-900/30 rounded-full shadow-2xl border-4 border-red-500">
                <AlertCircle className="w-32 h-32 text-red-500 animate-pulse" />
              </div>
            </div>

            {/* Error Message */}
            <div className={`mb-8 transform transition-all duration-1000 delay-200 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Critical Error
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                A critical error has occurred. We apologize for the inconvenience.
              </p>

              {process.env.NODE_ENV === 'development' && error.message && (
                <div className="mt-6 p-4 bg-red-950/50 border border-red-800 rounded-lg text-left">
                  <p className="text-sm font-mono text-red-300 break-all">
                    <strong>Error:</strong> {error.message}
                  </p>
                  {error.digest && (
                    <p className="text-xs font-mono text-red-400 mt-2">
                      <strong>Digest:</strong> {error.digest}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transform transition-all duration-1000 delay-400 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button
                onClick={reset}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                Reload Application
              </button>

              <a
                href="/"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20 hover:border-white/40 backdrop-blur-sm"
              >
                Return to Homepage
              </a>
            </div>

            {/* Support Info */}
            <div className={`mt-8 pt-8 border-t border-gray-700 transform transition-all duration-1000 delay-600 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-gray-400 mb-4">If this problem persists, please contact us:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/94759597703"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors shadow-md"
                >
                  WhatsApp: +94 75 959 7703
                </a>
                <a
                  href="mailto:rnr.residance@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-md"
                >
                  rnr.residance@gmail.com
                </a>
              </div>
            </div>

            <div className={`mt-8 text-xs text-gray-500 transform transition-all duration-1000 delay-800 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
              <p>Critical System Error</p>
              <p className="mt-1">RnR Residence - Karapitiya Homestay</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
