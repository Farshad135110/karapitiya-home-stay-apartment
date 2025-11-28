'use client'

import { useEffect, useRef, useState } from 'react'
import { Building2, Users, Heart, Award } from 'lucide-react'

export default function About() {
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

  const stats = [
    { icon: Building2, value: '3', label: 'Rooms Available' },
    { icon: Users, value: '50+', label: 'Medical Students' },
    { icon: Award, value: '4.9', label: 'Rating' },
    { icon: Heart, value: '5 min', label: 'From Hospital' },
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-10 transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-primary-600">Karapitiya Home Stay</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your perfect accommodation solution near Karapitiya Teaching Hospital
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start mb-10">
            {/* Image Side - Takes 2 columns */}
            <div
              className={`lg:col-span-2 relative transform transition-all duration-700 delay-100 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
            >
              <div className="relative h-[350px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl sticky top-24">
                <img
                  src="https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368306/exterior_y9duym.avif"
                  alt="Karapitiya Home Stay Apartment Exterior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <p className="text-primary-800 font-semibold text-lg">
                      "The closest and most comfortable accommodation for medical students at Karapitiya Hospital"
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-accent-400/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary-400/20 rounded-full blur-3xl -z-10"></div>
            </div>

            {/* Content Side - Takes 3 columns */}
            <div
              className={`lg:col-span-3 transform transition-all duration-700 delay-200 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Private Stay for Medical Electives Near Karapitiya Hospital
              </h3>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Perfectly tailored for <span className="font-semibold text-accent-600">overseas medical students, visiting faculty, and researchers</span>. Located just a{' '}
                  <span className="font-semibold text-primary-600">5-minute ride from Karapitiya General Hospital</span>, our accommodation offers the ideal balance of convenience and tranquility.
                </p>
                <p>
                  Within walking distance, you'll find bus stands, supermarkets, Pizza Hut, ATMs, and restaurants. The historic{' '}
                  <span className="font-semibold">Dutch Fort Galle</span> and beautiful beaches are just a 5-minute tuk-tuk ride away.
                </p>
                <p>
                  This is a <span className="font-semibold text-primary-600">very peaceful place</span>, ensuring you have the privacy, quiet, and concentration needed for studying and research. We understand the demanding schedule of medical training and provide a comfortable environment where you can rest, focus, and feel at home.
                </p>
                <p className="text-gray-600 italic border-l-4 border-primary-500 pl-4">
                  Entire floor with separate entrance • Third party not allowed • Perfect for medical professionals
                </p>
              </div>

              {/* Space Details */}
              <div className="mt-8 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">What You Get</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start space-x-2">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">3 Rooms: 2 bedrooms + 1 office room</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Living room & dining room</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Pantry kitchen & balcony</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Entire floor with separate entrance</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">AC, hot water, microwave, fridge</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Gas cooker, washing machine & more</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href="#airbnb"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  <span>Book Your Stay Now</span>
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 transform transition-all duration-700 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all hover:scale-105 border border-primary-100"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h4>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
