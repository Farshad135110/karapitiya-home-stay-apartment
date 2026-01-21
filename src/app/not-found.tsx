'use client'

import Link from 'next/link'
import { Home, Search, ArrowLeft, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 */}
        <div className={`mb-8 transform transition-all duration-1000 ${mounted ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className={`mb-8 transform transition-all duration-1000 delay-200 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            The page you're looking for seems to have wandered off...
          </p>
          <p className="text-md text-gray-500">
            Maybe it's exploring Galle Fort or relaxing at Unawatuna Beach! 🏖️
          </p>
        </div>

        {/* Illustration */}
        <div className={`mb-12 transform transition-all duration-1000 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block p-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full shadow-lg">
            <MapPin className="w-24 h-24 text-blue-600 animate-bounce" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Home className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-200 hover:border-blue-300"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className={`mt-12 pt-8 border-t border-gray-200 transform transition-all duration-1000 delay-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-sm text-gray-500 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/#about"
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors text-sm"
            >
              About Us
            </Link>
            <Link
              href="/#facilities"
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors text-sm"
            >
              Facilities
            </Link>
            <Link
              href="/#gallery"
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors text-sm"
            >
              Gallery
            </Link>
            <Link
              href="/#contact"
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors text-sm"
            >
              Contact
            </Link>
            <a
              href="https://wa.me/94759597703"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors text-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className={`mt-8 text-xs text-gray-400 transform transition-all duration-1000 delay-900 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <p>Error Code: 404 | Page Not Found</p>
          <p className="mt-1">RnR Residence - Karapitiya Homestay</p>
        </div>
      </div>
    </div>
  )
}
