'use client'

import { useState } from 'react'
import { Building2, Users, Heart, Award } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'

export default function About() {
  const [isVisible] = useState(true)
  const { t } = useLanguage()

  const stats = [
    { icon: Building2, value: '3', label: 'Rooms Available' },
    { icon: Users, value: '50+', label: 'Medical Students' },
    { icon: Award, value: '5.0', label: 'Airbnb Rating' },
    { icon: Heart, value: '5 min', label: 'From Hospital' },
  ]

  return (
    <section
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
              {t.about.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-5 xl:grid-cols-7 gap-8 xl:gap-12 items-start mb-10">
            {/* Image Side - Takes 2 columns */}
            <div
              className={`lg:col-span-2 xl:col-span-3 relative transform transition-all duration-700 delay-100 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
            >
              <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl lg:sticky lg:top-24">
              <img 
                  src="https://res.cloudinary.com/dhfqwxyb4/image/upload/f_auto,q_80,w_800,c_limit/v1764368306/exterior_y9duym.avif"
                  alt="Karapitiya Home Stay Apartment Exterior"
                  width="800"
                  height="600"
                  loading="eager"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <p className="text-primary-800 font-semibold text-lg">{t.about.quote}</p>
                  </div>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-accent-400/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary-400/20 rounded-full blur-3xl -z-10"></div>
            </div>

            {/* Content Side - Takes 3 columns */}
            <div
              className={`lg:col-span-3 xl:col-span-4 transform transition-all duration-700 delay-200 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
            >
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>{t.about.description}</p>
                <p>{t.about.features}</p>
                <p>{t.about.host}</p>
              </div>

              {/* Space Details */}
              <div className="mt-8 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6">
                <p className="font-semibold text-primary-600">{t.about.minimum}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
