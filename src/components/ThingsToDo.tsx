'use client'

import { useEffect, useRef, useState } from 'react'
import {
  MapPin,
  Landmark,
  Waves,
  UtensilsCrossed,
  ShoppingBag,
  Mountain,
  Camera,
  Train,
} from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'

export default function ThingsToDo() {
  const { t } = useLanguage()
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

  const attractions = [
    {
      icon: Landmark,
      title: 'Galle Fort',
      distance: '10 min drive',
      description: 'UNESCO World Heritage Site with colonial architecture, cafes, and stunning ocean views',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: Waves,
      title: 'Unawatuna Beach',
      distance: '15 min drive',
      description: 'Beautiful beach perfect for swimming, snorkeling, and relaxing on weekends',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Camera,
      title: 'Galle Lighthouse',
      distance: '12 min drive',
      description: 'Iconic landmark offering spectacular sunset views and photo opportunities',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: UtensilsCrossed,
      title: 'Local Restaurants',
      distance: '5 min walk',
      description: 'Experience authentic Sri Lankan cuisine and international food options nearby',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: ShoppingBag,
      title: 'Shopping Centers',
      distance: '8 min drive',
      description: 'Modern malls and local markets for groceries and shopping needs',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Mountain,
      title: 'Jungle Beach',
      distance: '20 min drive',
      description: 'Hidden gem beach surrounded by jungle, perfect for nature lovers',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Train,
      title: 'Galle Railway Station',
      distance: '10 min drive',
      description: 'Easy access to scenic train routes along the southern coast',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: MapPin,
      title: 'Karapitiya Hospital',
      distance: '5 min ride',
      description: 'Teaching Hospital - quick tuk-tuk or bike ride from the apartment',
      color: 'from-primary-500 to-primary-600',
    },
  ]

  const galleHighlights = [
    'Explore the historic Galle Fort ramparts at sunset',
    'Visit the National Maritime Museum',
    'Enjoy fresh seafood at local restaurants',
    'Shop for gems and handicrafts',
    'Take a whale watching tour (seasonal)',
    'Visit the Japanese Peace Pagoda',
    'Explore Dutch colonial architecture',
    'Relax at pristine southern beaches',
  ]

  return (
    <section
      ref={sectionRef}
      id="things-to-do"
      className="py-12 lg:py-16 bg-gradient-to-b from-white to-primary-50"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-10 transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t.thingsToDo.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.thingsToDo.subtitle}
            </p>
          </div>

          {/* Karapitiya Hospital Highlight */}
          <div
            className={`bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-12 mb-16 shadow-2xl transform transition-all duration-700 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-primary-600" />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t.thingsToDo.hospitalTitle}
                </h3>
                <p className="text-white/90 mb-6">
                  {t.thingsToDo.hospitalDesc}
                </p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {t.thingsToDo.walkingDistance}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {t.thingsToDo.medicalFriendly}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {t.thingsToDo.safeNeighborhood}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Attractions Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 mb-10">
            {attractions.map((attraction, index) => {
              const Icon = attraction.icon
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 transform ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${attraction.color} rounded-xl mb-4`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {attraction.title}
                  </h3>
                  <p className="text-accent-600 font-semibold text-sm mb-3">
                    {attraction.distance}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {attraction.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Galle Highlights */}
          <div
            className={`bg-gradient-to-br from-accent-50 to-primary-50 rounded-3xl p-8 lg:p-12 transform transition-all duration-700 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t.thingsToDo.mustVisit}
            </h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {galleHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
