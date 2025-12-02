'use client'

import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'

export default function Gallery() {
  const { t } = useLanguage()
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
    // Bedrooms
    {
      url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764521587/IMG-20251129-WA0201_waugpy.jpg',
      title: 'Modern Bedroom with Study Desk',
      description: 'Comfortable bedroom with modern amenities, air conditioning, and dedicated study space for medical students near Karapitiya Teaching Hospital',
      alt: 'Modern bedroom with comfortable bed, study desk, and air conditioning at Karapitiya Home Stay Apartment Galle',
    },
    {
      url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764521585/IMG-20251129-WA0199_iqrza3.jpg',
      title: 'Cozy Private Bedroom',
      description: 'Cozy sleeping space with air conditioning and comfortable bedding for medical electives',
      alt: 'Cozy private bedroom with air conditioning and comfortable bedding at RnR Private Residence Galle',
    },
    {
      url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764521575/IMG-20251129-WA0212_m2hxmb.jpg',
      title: 'Spacious Study Room',
      description: 'Spacious room perfect for study and rest with natural lighting and quiet environment',
      alt: 'Spacious study room with natural lighting perfect for medical students at Karapitiya accommodation',
    },
    {
      url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764521569/IMG-20251129-WA0217_jepbn9.jpg',
      title: 'Private Bedroom with Wardrobe',
      description: 'Private bedroom with comfortable furnishing and ample storage space',
      alt: 'Private bedroom with wardrobe and comfortable furnishing at medical student accommodation Galle',
    },
    // Hall Areas
    {
      url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764521581/IMG-20251129-WA0208_iie7ka.jpg',
      title: 'Spacious Living Hall',
      description: 'Spacious living area for relaxation and socializing with other medical students',
      alt: 'Spacious living hall with comfortable seating at Karapitiya Home Stay Apartment',
    },
    {
      url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764521585/IMG-20251129-WA0203_vnuukc.jpg',
      title: 'Comfortable Common Area',
      description: 'Comfortable shared space for study groups and relaxation',
      alt: 'Comfortable common area for medical students at RnR Private Residence Karapitiya',
    },
    // Dining Areas
    {
      url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764521584/IMG-20251129-WA0202_wirdlo.jpg',
      title: 'Modern Dining Area',
      description: 'Perfect space for meals together with dining table and chairs',
      alt: 'Modern dining area with table and chairs at Karapitiya medical student housing',
    },
    {
      url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764521579/IMG-20251129-WA0207_tfahug.jpg',
      title: 'Elegant Dining Space',
      description: 'Elegant dining space with natural lighting and comfortable seating',
      alt: 'Elegant dining space with natural lighting at Airbnb Superhost accommodation Galle',
    },
    // Kitchen and Pantry
    {
      url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764521584/IMG-20251129-WA0204_ugeyup.jpg',
      title: 'Fully Equipped Modern Kitchen',
      description: 'Fully equipped modern kitchen with refrigerator, stove, and cooking essentials',
      alt: 'Fully equipped modern kitchen with appliances at Karapitiya student accommodation',
    },
    {
      url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764521575/IMG-20251129-WA0215_wplpor.jpg',
      title: 'Well-Stocked Pantry',
      description: 'Well-stocked pantry area with storage space for groceries',
      alt: 'Well-stocked pantry with storage at RnR Private Residence near Karapitiya Hospital',
    },
    {
      url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764521573/IMG-20251129-WA0214_z8gr9i.jpg',
      title: 'In-Unit Washing Machine',
      description: 'In-unit washing machine for your convenience during long stays',
      alt: 'In-unit washing machine at medical student housing near Karapitiya Teaching Hospital',
    },
    // Bathrooms
    {
      url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764521588/IMG-20251129-WA0198_rwtw8t.jpg',
      title: 'Modern Bathroom with Hot Water',
      description: 'Clean bathroom with hot water shower and modern fixtures',
      alt: 'Modern bathroom with hot water shower at Karapitiya Home Stay Apartment Galle',
    },
    {
      url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764521570/IMG-20251129-WA0216_gbvn84.jpg',
      title: 'Clean Bathroom Facilities',
      description: 'Modern bathroom facilities with 24/7 hot water',
      alt: 'Clean bathroom facilities with 24/7 hot water at Airbnb Superhost Galle',
    },
    {
      url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764521576/IMG-20251129-WA0210_psilza.jpg',
      title: 'Spacious Bathroom with Premium Fixtures',
      description: 'Spacious bathroom with premium fixtures and storage',
      alt: 'Spacious bathroom with premium fixtures at RnR Private Residence Karapitiya',
    },
    {
      url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764521576/IMG-20251129-WA0211_gmcatx.jpg',
      title: 'Well-Maintained Washing Area',
      description: 'Well-maintained washing area with modern amenities',
      alt: 'Well-maintained washing area at medical student accommodation near Karapitiya',
    },
    // Exterior
    {
      url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764521590/exterior_obwedh.avif',
      title: 'Modern Building Exterior',
      description: 'Modern and secure building in Karapitiya, Galle with gated entrance',
      alt: 'Modern secure building exterior at Karapitiya Home Stay near Teaching Hospital Galle',
    },
    {
      url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764521591/IMG-20251129-WA0197_gyibjr.jpg',
      title: 'Peaceful Neighborhood Property',
      description: 'Peaceful neighborhood setting in Karapitiya near hospital',
      alt: 'Property in peaceful neighborhood near Karapitiya Teaching Hospital Galle Sri Lanka',
    },
    {
      url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764521585/IMG-20251129-WA0205_jcjalg.jpg',
      title: 'Welcoming Property Entrance',
      description: 'Welcoming property entrance with easy access to Karapitiya Hospital',
      alt: 'Welcoming entrance to RnR Private Residence medical student accommodation Galle',
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
              {t.gallery.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.gallery.subtitle}
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
                    alt={image.alt}
                    title={image.title}
                    loading="lazy"
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
              alt={images[selectedImage].alt}
              title={images[selectedImage].title}
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
