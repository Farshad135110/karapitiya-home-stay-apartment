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
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
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
                <h3 className="text-white font-bold text-xl mb-2">4.9 Rating</h3>
                <p className="text-white/90">50+ verified reviews</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <TrendingUp className="w-10 h-10 text-white mx-auto mb-3" />
                <h3 className="text-white font-bold text-xl mb-2">Superhost</h3>
                <p className="text-white/90">Top-rated accommodation</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <Sparkles className="w-10 h-10 text-white mx-auto mb-3" />
                <h3 className="text-white font-bold text-xl mb-2">Instant Book</h3>
                <p className="text-white/90">Quick confirmation</p>
              </div>
            </div>

            {/* Primary CTA Button */}
            <a
              href="https://www.airbnb.com/h/rnrfamily"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-primary-600 bg-white rounded-full shadow-2xl hover:shadow-white/30 transform hover:scale-105 transition-all mb-6"
            >
              <svg className="w-8 h-8 mr-3" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 1c-1.664 0-3.007 1.343-3.007 3.007 0 .742.27 1.422.716 1.949-.633.43-1.049 1.153-1.049 1.974 0 .82.417 1.544 1.049 1.974-.446.527-.716 1.207-.716 1.949 0 1.664 1.343 3.007 3.007 3.007s3.007-1.343 3.007-3.007c0-.742-.27-1.422-.716-1.949.633-.43 1.049-1.153 1.049-1.974 0-.82-.417-1.544-1.049-1.974.446-.527.716-1.207.716-1.949C19.007 2.343 17.664 1 16 1zm0 2c.564 0 1.007.443 1.007 1.007S16.564 5.014 16 5.014s-1.007-.443-1.007-1.007S15.436 3 16 3zm0 4c.564 0 1.007.443 1.007 1.007S16.564 9.014 16 9.014s-1.007-.443-1.007-1.007S15.436 7 16 7zm0 4c.564 0 1.007.443 1.007 1.007S16.564 13.014 16 13.014s-1.007-.443-1.007-1.007S15.436 11 16 11zM6.5 16C2.91 16 0 18.91 0 22.5S2.91 29 6.5 29s6.5-2.91 6.5-6.5S10.09 16 6.5 16zm19 0c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5zm-19 2c2.489 0 4.5 2.011 4.5 4.5S8.989 27 6.5 27 2 24.989 2 22.5 4.011 18 6.5 18zm19 0c2.489 0 4.5 2.011 4.5 4.5s-2.011 4.5-4.5 4.5-4.5-2.011-4.5-4.5 2.011-4.5 4.5-4.5z"/>
              </svg>
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

          {/* Why Book Through Airbnb */}
          <div
            className={`mt-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-10 transform transition-all duration-700 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-center">
              Why Book Through Airbnb?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Secure Payment', desc: 'Protected transactions' },
                { title: '24/7 Support', desc: 'Airbnb customer service' },
                { title: 'Easy Communication', desc: 'Direct host messaging' },
                { title: 'Flexible Dates', desc: 'Easy to reschedule' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
