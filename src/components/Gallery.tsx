'use client'

import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
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

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
      title: 'Living Room',
      description: 'Spacious and comfortable living area',
    },
    {
      url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
      title: 'Bedroom 1',
      description: 'Cozy bedroom with air conditioning',
    },
    {
      url: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80',
      title: 'Bedroom 2',
      description: 'Second bedroom with study desk',
    },
    {
      url: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80',
      title: 'Kitchen',
      description: 'Fully equipped modern kitchen',
    },
    {
      url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
      title: 'Bathroom',
      description: 'Clean bathroom with hot water',
    },
    {
      url: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80',
      title: 'Dining Area',
      description: 'Perfect space for meals',
    },
    {
      url: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80',
      title: 'Study Area',
      description: 'Quiet space for studying',
    },
    {
      url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368306/exterior_y9duym.avif',
      title: 'Building Exterior',
      description: 'Modern and secure building with easy access',
    },
    {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      title: 'Common Area',
      description: 'Comfortable shared spaces',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white"
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
              Photo <span className="text-primary-600">Gallery</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a virtual tour of your future home in Galle
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-xl mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.title}
                    </h3>
                    <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`text-center mt-12 transform transition-all duration-700 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <p className="text-gray-600 mb-6 text-lg">
              Want to see more? Book a virtual tour or visit us!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-full hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-5xl w-full">
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].title}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="text-center mt-6">
              <h3 className="text-white font-bold text-2xl mb-2">
                {images[selectedImage].title}
              </h3>
              <p className="text-gray-300 text-lg">
                {images[selectedImage].description}
              </p>
            </div>
            <div className="flex justify-center space-x-4 mt-6">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage((prev) =>
                    prev! > 0 ? prev! - 1 : images.length - 1
                  )
                }}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all"
              >
                Previous
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage((prev) =>
                    prev! < images.length - 1 ? prev! + 1 : 0
                  )
                }}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
