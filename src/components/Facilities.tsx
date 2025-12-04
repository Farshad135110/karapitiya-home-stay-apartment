'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Wifi,
  Wind,
  Tv,
  Coffee,
  Car,
  ShowerHead,
  Refrigerator,
  UtensilsCrossed,
  Shirt,
  Shield,
  BookOpen,
  Bed,
  Droplets,
  Fan,
  Camera,
  TreePine,
  Wrench,
  Thermometer,
  Building2,
  Timer,
  Snowflake,
} from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'

export default function Facilities() {
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

  const facilities = [
    {
      icon: Wifi,
      title: 'High-Speed WiFi',
      desc: 'Fast & reliable internet for online classes and research',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Wind,
      title: 'Air Conditioning',
      desc: 'Stay cool and comfortable in all bedrooms',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Fan,
      title: 'Ceiling & Portable Fans',
      desc: 'Multiple fans for optimal air circulation',
      color: 'from-sky-500 to-sky-600',
    },
    {
      icon: Bed,
      title: 'Comfortable Beds',
      desc: '2 spacious bedrooms with quality linens and mosquito nets',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: UtensilsCrossed,
      title: 'Fully Equipped Kitchen',
      desc: 'Gas cooker, microwave oven, air fryer & cooking essentials',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Refrigerator,
      title: 'Refrigerator',
      desc: 'Store your food and beverages',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Coffee,
      title: 'Kitchen Appliances',
      desc: 'Hot water kettle, toaster, blender, rice maker',
      color: 'from-amber-600 to-amber-700',
    },
    {
      icon: Tv,
      title: 'TV Entertainment',
      desc: 'Relax and watch your favorite shows',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: ShowerHead,
      title: 'Hot Water Shower',
      desc: 'Hot shower facilities available 24/7',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Droplets,
      title: 'Hair Dryer',
      desc: 'Hair dryer and bathroom amenities provided',
      color: 'from-blue-400 to-blue-500',
    },
    {
      icon: Shirt,
      title: 'Washing Machine',
      desc: 'Do your laundry with drying rack provided',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Wrench,
      title: 'Iron & Essentials',
      desc: 'Towels, bed sheets, and hangers included',
      color: 'from-gray-500 to-gray-600',
    },
    {
      icon: Car,
      title: 'Free Parking',
      desc: 'Secure parking space on premises',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Shield,
      title: 'Secure & Safe',
      desc: 'Exterior security cameras and private entrance',
      color: 'from-yellow-600 to-yellow-700',
    },
    {
      icon: BookOpen,
      title: 'Dedicated Workspace',
      desc: 'Quiet study area with dining table',
      color: 'from-violet-500 to-violet-600',
    },
    {
      icon: TreePine,
      title: 'Backyard & Garden',
      desc: 'Open outdoor space for relaxation',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Timer,
      title: 'Minimum Stay',
      desc: '14 days minimum stay required',
      color: 'from-rose-500 to-rose-600',
    },
  ]

  const activities = [
    'Study in peace with dedicated workspace',
    'Cook your favorite meals with complete kitchen amenities',
    'Relax and unwind after hospital shifts',
    'Do your laundry with washing machine and drying rack',
    'Enjoy secure parking for your vehicle',
    'Feel safe with security cameras and private entrance',
    'Cleaning services available during your stay',
    'Work or study with high-speed WiFi',
    'Stay cool with AC, ceiling and portable fans',
    'Explore Galle Fort and beaches on weekends',
  ]

  return (
    <section
      ref={sectionRef}
      id="facilities"
      className="py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50"
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
              {t.facilities.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.facilities.subtitle}
            </p>
          </div>

          {/* Facilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {facilities.map((facility, index) => {
              const Icon = facility.icon
              return (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 transform ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${facility.color} rounded-xl mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600">{facility.desc}</p>
                </div>
              )
            })}
          </div>

          {/* What You Can Do Section */}
          <div
            className={`bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-8 lg:p-12 shadow-2xl transform transition-all duration-700 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            <div className="text-center mb-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                What You Can Do During Your Stay
              </h3>
              <p className="text-xl text-white/90">
                Make the most of your time in Galle
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-primary-600"
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
                  <p className="text-white font-medium">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
