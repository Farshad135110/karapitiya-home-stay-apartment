'use client'

import { useState } from 'react'
import { ChevronDown, MapPin, Star, Sparkles } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true)
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 py-16 sm:py-20 md:py-28 lg:py-32 xl:py-36 relative z-10">
        <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto text-center">
          {/* Logo Badge */}
          <div
            className={`inline-flex items-center justify-center mb-8 transform transition-all duration-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <img 
              src="https://res.cloudinary.com/dokpye7fu/image/upload/v1767530935/a-professional-logo-design-featuring-the_5gZ7iDYxS-erpmt7dPQlNg_9INFVxWqS-S3eZYvESkJMQ_v91rs2.jpg" 
              alt="RnR Private Residence Logo"
              fetchpriority="high"
              width="128"
              height="128"
              className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-2xl"
            />
          </div>

          {/* Main Heading */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight transform transition-all duration-300 delay-50 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            RnR Private Residence
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto transform transition-all duration-300 delay-75 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {t.hero.title}
          </p>

          {/* Description - LCP Element */}
          <p
            className={`text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto transform transition-all duration-300 delay-100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {t.hero.subtitle}
          </p>

          {/* Location Badge */}
          <div
            className={`inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 sm:px-6 py-3 rounded-full mb-6 sm:mb-10 transform transition-all duration-300 delay-150 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <MapPin className="w-5 h-5 text-accent-400" />
            <span>5 minutes from Karapitiya National Hospital</span>
            <span className="text-white/60 mx-2">|</span>
            <img 
              src="https://res.cloudinary.com/dokpye7fu/image/upload/v1767529850/CITYPNG.COM_HD_Airbnb_Superhost_Badge_Logo_PNG_Image_-_1500x1500_1_jrrqhp.png" 
              alt="Superhost" 
              className="w-6 h-6 object-contain"
            />
            <span className="font-semibold">Superhost</span>
            <div className="flex items-center ml-4">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="ml-1 font-semibold">5.0</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 transform transition-all duration-300 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <a
              href="https://www.airbnb.com/h/rnrfamily"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-accent-500 to-accent-600 rounded-full overflow-hidden shadow-2xl hover:shadow-accent-500/50 transform hover:scale-105 transition-all"
            >
              <span className="relative z-10 flex items-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" 
                  alt="Airbnb" 
                  className="w-20 h-5 mr-2 brightness-0 invert"
                />
                {t.hero.cta}
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-primary-800 transition-all"
            >
              {t.hero.availability}
            </a>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down to about section"
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </a>
    </section>
  )
}
