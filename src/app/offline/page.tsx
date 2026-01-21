'use client'

import Link from 'next/link'
import { WifiOff, RefreshCw, Home } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function OfflinePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Offline Icon */}
        <div className={`mb-8 transform transition-all duration-1000 ${mounted ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <div className="inline-block p-8 bg-gradient-to-br from-slate-100 to-blue-100 rounded-full shadow-lg">
            <WifiOff className="w-32 h-32 text-slate-600 animate-pulse" />
          </div>
        </div>

        {/* Message */}
        <div className={`mb-8 transform transition-all duration-1000 delay-200 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            You're Offline
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            It looks like you've lost your internet connection.
          </p>
          <p className="text-md text-gray-500">
            Please check your connection and try again.
          </p>
        </div>

        {/* Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-400 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button
            onClick={() => window.location.reload()}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-slate-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            Retry Connection
          </button>

          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-200 hover:border-blue-300"
          >
            <Home className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Go Home
          </Link>
        </div>

        {/* Tips */}
        <div className={`mt-12 pt-8 border-t border-gray-200 transform transition-all duration-1000 delay-600 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-sm text-gray-500 mb-4">Troubleshooting tips:</p>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>✓ Check if WiFi or mobile data is enabled</li>
            <li>✓ Try turning airplane mode on and off</li>
            <li>✓ Restart your router if using WiFi</li>
            <li>✓ Contact your internet service provider</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
