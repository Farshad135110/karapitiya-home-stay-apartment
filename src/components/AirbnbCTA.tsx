'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Star, Sparkles, TrendingUp } from 'lucide-react'

export default function AirbnbCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="airbnb"
      className="py-16 lg:py-20 bg-gradient-to-br from-accent-600 via-accent-500 to-primary-600 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Content */}
          <div
            className={`text-center transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-8">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Featured on Airbnb</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Book Your Stay on{' '}
              <span className="relative inline-block">
                Airbnb
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>

            <p className="text-xl lg:text-2xl text-white/95 mb-8 max-w-3xl mx-auto font-medium">
              Secure your accommodation today and get instant booking confirmation
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <Star className="w-10 h-10 text-yellow-300 fill-yellow-300 mx-auto mb-3" />
                <h3 className="text-white font-bold text-xl mb-2">5.0 Rating</h3>
                <p className="text-white/90">Perfect score on Airbnb</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <img 
                    src="https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764518017/CITYPNG.COM_HD_Airbnb_Superhost_Badge_Logo_PNG_Image_-_1500x1500_xmf6xc.png" 
                    alt="Superhost" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Superhost</h3>
                <p className="text-white/90">Airbnb Superhost Badge</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <Sparkles className="w-10 h-10 text-white mx-auto mb-3" />
                <h3 className="text-white font-bold text-xl mb-2">Instant Book</h3>
                <p className="text-white/90">Quick confirmation</p>
              </div>
            </div>

            {/* Large Superhost Badge Showcase */}
            <div className="bg-white/5 backdrop-blur-sm border-2 border-white/30 rounded-3xl p-8 mb-10 flex flex-col md:flex-row items-center justify-center gap-6">
              <img 
                src="https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764518017/CITYPNG.COM_HD_Airbnb_Superhost_Badge_Logo_PNG_Image_-_1500x1500_xmf6xc.png" 
                alt="Airbnb Superhost Badge" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
              />
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Airbnb Superhost</h3>
                <p className="text-xl text-white/90 mb-3">Recognized for Outstanding Hospitality</p>
                <p className="text-white/80 max-w-lg">We maintain the highest standards of service, cleanliness, and guest satisfaction to earn this prestigious badge.</p>
              </div>
            </div>

            {/* Primary CTA Button */}
            <a
              href="https://www.airbnb.com/h/rnrfamily"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-primary-600 bg-white rounded-full shadow-2xl hover:shadow-white/30 transform hover:scale-105 transition-all mb-6"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" 
                alt="Airbnb" 
                className="w-24 h-6 mr-3"
              />
              View on Airbnb
              <ExternalLink className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Verified Listing</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Secure Booking</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span>Flexible Cancellation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
