'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Users, Home, MapPin } from 'lucide-react'

export default function Homes() {
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

  const homes = [
    {
      title: 'Apartment for Medical Electives Students - Galle',
      url: 'https://www.airbnb.com/rooms/1297705979521687357',
      image: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764521587/IMG-20251129-WA0201_waugpy.jpg',
      description: 'Perfect for medical students on electives',
      features: ['2 Guests', 'Near Hospital', 'Fully Equipped']
    },
    {
      title: 'RnR Private Residence',
      url: 'https://www.airbnb.com/rooms/830788991042580081',
      image: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764521585/IMG-20251129-WA0203_vnuukc.jpg',
      description: 'Perfect for medical students on electives',
      features: ['2 Guests', 'Near Hospital', 'Fully Equipped']
    }
  ]

  return (
    <section
      id="properties"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full mb-4">
            <Home className="w-5 h-5" />
            <span className="font-semibold">Our Properties</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Home
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select from our two beautiful properties in Galle
          </p>
        </div>

        {/* Homes Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {homes.map((home, index) => (
            <a
              key={index}
              href={home.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img
                  src={home.image}
                  alt={home.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Airbnb Logo Overlay */}
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" 
                    alt="Airbnb" 
                    className="w-16 h-4"
                  />
                </div>

                {/* Superhost Badge Overlay */}
                <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-lg">
                  <img 
                    src="https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764518017/CITYPNG.COM_HD_Airbnb_Superhost_Badge_Logo_PNG_Image_-_1500x1500_xmf6xc.png" 
                    alt="Superhost" 
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* View on Airbnb Button - Shows on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white text-primary-600 font-bold px-6 py-3 rounded-full flex items-center space-x-2 shadow-xl transform group-hover:scale-110 transition-transform">
                    <span>View on Airbnb</span>
                    <ExternalLink className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {home.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {home.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {home.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-gray-500 text-sm flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Galle, Sri Lanka
                  </span>
                  <span className="text-primary-600 font-semibold group-hover:translate-x-2 transition-transform flex items-center">
                    Book Now
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
