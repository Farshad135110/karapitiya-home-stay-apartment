'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'

export default function Gallery() {
  const { t } = useLanguage()
  const [isVisible] = useState(true)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    // Bedrooms
    {
      url: 'https://res.cloudinary.com/dokpye7fu/image/upload/v1767529853/IMG-20251129-WA0201_mbb9xm.jpg',
      title: 'Modern Bedroom with Study Desk',
      description: 'Comfortable bedroom with modern amenities, air conditioning, and dedicated study space for medical students near Karapitiya Teaching Hospital',
      alt: 'Modern bedroom with comfortable bed, study desk, and air conditioning at Karapitiya Home Stay Apartment Galle',
    },
    {
      url: 'https://res.cloudinary.com/dokpye7fu/image/upload/v1767529853/IMG-20251129-WA0199_pvfxxj.jpg',
      title: 'Cozy Private Bedroom',
      description: 'Cozy sleeping space with air conditioning and comfortable bedding for medical electives',
      alt: 'Cozy private bedroom with air conditioning and comfortable bedding at RnR Private Residence Galle',
    },
    {
      url: 'https://res.cloudinary.com/dokpye7fu/image/upload/v1767529852/IMG-20251129-WA0209_kfhjvz.jpg',
      title: 'Spacious Study Room',
      description: 'Spacious room perfect for study and rest with natural lighting and quiet environment',
      alt: 'Spacious study room with natural lighting perfect for medical students at Karapitiya accommodation',
    },
    {
      url: 'https://res.cloudinary.com/dokpye7fu/image/upload/v1767529851/IMG-20251129-WA0212_szyeje.jpg',
      title: 'Private Bedroom with Wardrobe',
      description: 'Private bedroom with comfortable furnishing and ample storage space',
      alt: 'Private bedroom with wardrobe and comfortable furnishing at medical student accommodation Galle',
    },
    {
      url: 'https://res.cloudinary.com/dokpye7fu/image/upload/v1767529850/IMG-20251129-WA0218_ffifpt.jpg',
      title: 'Extra Bedroom',
      description: 'Additional bedroom for guests or study partners',
      alt: 'Extra bedroom at Karapitiya Home Stay Apartment',
    },
    {
      url: 'https://res.cloudinary.com/dokpye7fu/image/upload/v1767529850/IMG-20251129-WA0217_gjqo4x.jpg',
      title: 'Bedroom with Balcony',
      description: 'Bedroom with access to balcony and fresh air',
      alt: 'Bedroom with balcony at RnR Private Residence',
    },
    // Kitchen and Pantry
    {
      url: 'https://res.cloudinary.com/dokpye7fu/image/upload/v1767530224/WhatsApp_Image_2026-01-04_at_18.05.04_khlpy9.jpg',
      title: 'Pantry Storage',
      description: 'Additional pantry storage and workspace',
      alt: 'Pantry storage and workspace at Karapitiya Home Stay Apartment',
    },
    {
      url: 'https://res.cloudinary.com/dokpye7fu/image/upload/v1767530224/WhatsApp_Image_2026-01-04_at_18.05.05_jvzz4r.jpg',
      title: 'Well-Stocked Pantry',
      description: 'Well-stocked pantry area with storage space for groceries',
      alt: 'Well-stocked pantry with storage at RnR Private Residence near Karapitiya Hospital',
    },
    {
      url: 'https://res.cloudinary.com/dokpye7fu/image/upload/v1767530224/WhatsApp_Image_2026-01-04_at_18.05.05_1_erccac.jpg',
      title: 'Fully Equipped Modern Kitchen',
      description: 'Fully equipped modern kitchen with refrigerator, stove, and cooking essentials',
      alt: 'Fully equipped modern kitchen with appliances at Karapitiya student accommodation',
    },
    {
      url: 'https://res.cloudinary.com/dokpye7fu/image/upload/v1767529851/IMG-20251129-WA0214_n1pdsf.jpg',
      title: 'In-Unit Washing Machine',
      description: 'In-unit washing machine for your convenience during long stays',
      alt: 'In-unit washing machine at medical student housing near Karapitiya Teaching Hospital',
    },
    // Bathrooms
    {
      url: 'https://res.cloudinary.com/dokpye7fu/image/upload/v1767529851/IMG-20251129-WA0216_ewv29x.jpg',
      title: 'Modern Bathroom with Hot Water',
      description: 'Clean bathroom with hot water shower and modern fixtures',
      alt: 'Modern bathroom with hot water shower at Karapitiya Home Stay Apartment Galle',
    },
    // Featured bathroom with hot water (key amenity)
    {
      url: 'https://res.cloudinary.com/dokpye7fu/image/upload/v1767529854/IMG-20251129-WA0198_fywfan.jpg',
      title: 'Modern Bathroom with Hot Water',
      description: 'Clean bathroom facilities with 24/7 hot water and modern fixtures',
      alt: 'Modern bathroom with 24/7 hot water at Karapitiya Home Stay Apartment Galle',
    },
    // Rest Areas
    {
      url: 'https://res.cloudinary.com/dokpye7fu/image/upload/v1767529852/IMG-20251129-WA0213_lbotbq.jpg',
      title: 'Rest Area with Sofa',
      description: 'Comfortable rest area with sofa for relaxation and reading',
      alt: 'Rest area with sofa at Karapitiya Home Stay Apartment',
    },
    {
      url: 'https://res.cloudinary.com/dokpye7fu/image/upload/v1767529852/IMG-20251129-WA0208_xqd1bc.jpg',
      title: 'Rest Area with Table',
      description: 'Rest area with table and chairs for group study or meals',
      alt: 'Rest area with table and chairs at Karapitiya Home Stay Apartment',
    },
    {
      url: 'https://res.cloudinary.com/dokpye7fu/image/upload/v1767529853/IMG-20251129-WA0203_tfnq2r.jpg',
      title: 'Rest Area with TV',
      description: 'Rest area with TV and comfortable seating for entertainment',
      alt: 'Rest area with TV at Karapitiya Home Stay Apartment',
    },

  ]

  return (
    <section
      id="gallery"
      className="py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.filter(image => image.url && image.url.trim() !== '').map((image, index) => (
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
            aria-label="Close gallery lightbox"
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
                aria-label="View previous image"
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
                aria-label="View next image"
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

