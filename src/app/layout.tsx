import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/i18n/LanguageContext'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
  preload: true
})
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: 'RnR Residence | Karapitiya Medical Elective Accommodation & Long-Stay Apartments — Galle, Sri Lanka',
  description: 'Stay 5 minutes from Karapitiya Teaching Hospital. RnR Residence offers fully furnished long-stay apartments and private homestay rooms ideal for medical elective students, researchers, and foreign families in Galle. Walking distance to supermarkets, restaurants, Galle Fort, and Unawatuna Beach.',
  keywords: [
    // Primary GEO Keywords - Medical Electives
    'Karapitiya medical elective accommodation',
    'Galle homestay',
    'Karapitiya residence',
    'Karapitiya hospital accommodation',
    'Long stay apartment Galle',
    'Furnished apartments Galle',
    'Homestay near Karapitiya Teaching Hospital',
    'Karapitiya Teaching Hospital accommodation',
    'Medical elective accommodation Karapitiya',
    'Student accommodation Karapitiya',
    
    // Secondary Medical & Student Keywords
    'Medical electives Sri Lanka',
    'Overseas medical student stay',
    'Accommodation for researchers Galle',
    'Student homestay Galle',
    'Medical student housing Karapitiya',
    'Clinical elective housing Galle',
    'Foreign medical student accommodation',
    'Visiting faculty accommodation Galle',
    'Medical researcher lodging',
    
    // Long Stay & Furnished Keywords
    'Galle apartment rentals',
    'Galle long stay residence',
    'Monthly stay accommodation Galle',
    'Furnished apartment building Galle',
    'Extended stay Galle',
    'Long-term apartment rental Galle',
    'Private rooms for medical students',
    'Study-friendly rooms Galle',
    'Work-friendly accommodation',
    
    // Location-Based GEO Keywords
    'Accommodation near Karapitiya Hospital',
    '5 minutes from Karapitiya Teaching Hospital',
    'Galle city residence',
    'Accommodation near Galle Fort',
    'Stay near Unawatuna Beach',
    'Galle holiday apartment',
    'Southern Province accommodation',
    
    // Service-Based Keywords
    'Private homestay Galle',
    'Serviced accommodation Galle',
    'Guest house Karapitiya',
    'Holiday apartment rental Galle',
    'Vacation home rental Galle',
    'Student housing center',
    'Family long-stay residence',
    'Quiet study environment',
    
    // Existing Keywords
    'medical elective housing Sri Lanka',
    'student housing near Karapitiya',
    'Airbnb Karapitiya',
    'Airbnb Superhost Galle',
    'RnR Private Residence Galle',
    'safe accommodation medical students Galle',
  ],
  authors: [{ name: 'RnR Family Residence' }],
  creator: 'RnR Private Residence - Karapitiya Medical Elective Homestay',
  publisher: 'RnR Residence - Karapitiya Medical Elective Accommodation & Long-Stay Apartments',
  alternates: {
    canonical: 'https://www.karapitiyahomestayapartment.com',
    languages: {
      'en': 'https://www.karapitiyahomestayapartment.com/?lang=en',
      'de': 'https://www.karapitiyahomestayapartment.com/?lang=de',
      'fr': 'https://www.karapitiyahomestayapartment.com/?lang=fr',
      'es': 'https://www.karapitiyahomestayapartment.com/?lang=es',
      'it': 'https://www.karapitiyahomestayapartment.com/?lang=it',
      'nl': 'https://www.karapitiyahomestayapartment.com/?lang=nl',
    },
  },
  openGraph: {
    title: 'RnR Residence — Karapitiya Medical Elective Homestay & Long-Stay Apartments (Galle)',
    description: 'Stay 5 minutes from Karapitiya Teaching Hospital. Fully furnished long-stay residence ideal for medical elective students, researchers, and foreign guests. Quiet, private, and perfectly located near supermarkets, restaurants, Galle Fort, and Unawatuna Beach.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.karapitiyahomestayapartment.com',
    siteName: 'RnR Residence - Karapitiya Medical Elective Accommodation',
    images: [
      {
        url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368195/IMG-20251129-WA0201_ivfazj.jpg',
        width: 1200,
        height: 630,
        alt: 'RnR Residence - Study-friendly modern bedroom for medical elective students 5 minutes from Karapitiya Teaching Hospital Galle',
      },
      {
        url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368180/IMG-20251129-WA0208_vxfnk8.jpg',
        width: 1200,
        height: 630,
        alt: 'RnR Private Residence - Spacious furnished living room for long-stay medical students researchers Galle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RnR Residence | Medical Elective Accommodation 5 Min from Karapitiya Hospital',
    description: 'Furnished long-stay apartments for medical elective students, researchers & foreign guests. Quiet study-friendly rooms near Karapitiya Teaching Hospital, Galle Fort & Unawatuna Beach.',
    images: ['https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368195/IMG-20251129-WA0201_ivfazj.jpg'],
    site: '@RnRResidence',
    creator: '@RnRResidence',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Accommodation',
  classification: 'Student Housing, Medical Accommodation, Homestay',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LodgingBusiness', 'Hotel', 'Accommodation', 'Hostel', 'GuestHouse'],
        '@id': 'https://www.karapitiyahomestayapartment.com/#organization',
        name: 'RnR Residence – Karapitiya Medical Elective Homestay & Long-Stay Apartments (Galle)',
        alternateName: ['RnR Family Residence', 'RnR Private Residence Galle', 'Karapitiya Medical Elective Accommodation', 'Karapitiya Homestay', 'Long-Stay Apartments Galle'],
        url: 'https://www.karapitiyahomestayapartment.com',
        logo: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368260/Untitled_design_15_hwkj0c.png',
        description: 'RnR Residence is a fully furnished long-stay homestay and apartment residence located in the heart of Galle, just 5 minutes from Karapitiya Teaching Hospital. We specialize in hosting overseas medical elective students, visiting faculty, researchers, and long-stay travelers seeking a quiet, safe, and private place to stay. Walking distance to supermarkets, ATMs, Pizza Hut, bus stand, restaurants, and essential services. Perfect for medical electives, clinical rotations, and extended stays in Galle.',
        slogan: 'Your Home in Galle — Just 5 Minutes from Karapitiya Hospital',
        foundingDate: '2020',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Near Karapitiya Teaching Hospital',
          addressLocality: 'Karapitiya',
          addressRegion: 'Southern Province',
          addressCountry: {
            '@type': 'Country',
            name: 'Sri Lanka',
          },
          postalCode: '80000',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 6.0535,
          longitude: 80.2210,
          name: 'RnR Private Residence Location',
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Galle',
            '@id': 'https://en.wikipedia.org/wiki/Galle',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Southern Province',
          },
          {
            '@type': 'Country',
            name: 'Sri Lanka',
          },
        ],
        telephone: '+94759597703',
        email: 'rnr.residance@gmail.com',
        priceRange: '$$',
        currenciesAccepted: 'USD, EUR, LKR',
        paymentAccepted: 'Cash, Credit Card, Bank Transfer',
        openingHours: 'Mo-Su 00:00-24:00',
        starRating: {
          '@type': 'Rating',
          ratingValue: '5.0',
          bestRating: '5',
          worstRating: '1',
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Sarah',
            },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
            },
            datePublished: '2024-11',
            reviewBody: 'Perfect location for my medical elective at Karapitiya. Clean, comfortable, and Suhail was incredibly helpful!',
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Ahmed',
            },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
            },
            datePublished: '2024-10',
            reviewBody: 'Great place! Very close to the hospital and has everything you need. The host is responsive and accommodating.',
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Julian',
            },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
            },
            datePublished: '2024-09',
            reviewBody: 'Excellent accommodation for medical students. Suhail was very attentive to our needs throughout our stay.',
          },
        ],
        image: [
          {
            '@type': 'ImageObject',
            url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368195/IMG-20251129-WA0201_ivfazj.jpg',
            caption: 'Modern Bedroom at RnR Private Residence',
            width: 1200,
            height: 800,
          },
          {
            '@type': 'ImageObject',
            url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368180/IMG-20251129-WA0208_vxfnk8.jpg',
            caption: 'Spacious Living Room',
            width: 1200,
            height: 800,
          },
          {
            '@type': 'ImageObject',
            url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368186/IMG-20251129-WA0203_efgyrq.jpg',
            caption: 'Comfortable Hall Area',
            width: 1200,
            height: 800,
          },
        ],
        amenityFeature: [
          { '@type': 'LocationFeatureSpecification', name: 'High-Speed WiFi Internet', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Fully Equipped Kitchen', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Washing Machine', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Free Parking', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Hot Water 24/7', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Refrigerator', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Study Desk', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Balcony', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Quiet Environment', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Work-Friendly Rooms', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Self Check-in Available', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Long-Term Stays Allowed', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Laundry Available', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Walking Distance to Hospital', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Near Supermarkets & Restaurants', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Safe & Secure Building', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'High Privacy', value: true },
        ],
        petsAllowed: false,
        smokingAllowed: false,
        checkinTime: '14:00',
        checkoutTime: '11:00',
        numberOfRooms: 3,
        maximumAttendeeCapacity: 6,
        tourBookingPage: 'https://www.airbnb.com/h/rnrfamily',
        hasMap: 'https://www.google.com/maps/place/RnR+Private+Residence/@6.045787,80.220608,17z/data=!4m6!3m5!1s0x3ae173cd207ad093:0x1507a8b4dca65985!8m2!3d6.045787!4d80.2206082!16s%2Fg%2F11vhvq7nnq',
        sameAs: [
          'https://www.airbnb.com/h/rnrfamily',
          'https://www.airbnb.com/users/profile/1463849258647435969',
          'https://www.airbnb.com/rooms/1297705979521687357',
          'https://www.airbnb.com/rooms/830788991042580081',
          'https://www.google.com/maps/place/RnR+Private+Residence/@6.045787,80.220608,17z/data=!4m6!3m5!1s0x3ae173cd207ad093:0x1507a8b4dca65985!8m2!3d6.045787!4d80.2206082!16s%2Fg%2F11vhvq7nnq',
        ],
        makesOffer: {
          '@type': 'Offer',
          name: 'Student Accommodation Package',
          description: 'Premium accommodation for medical students with minimum 14 days stay',
          price: 'Contact for pricing',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          validFrom: '2024-01-01',
          category: 'Accommodation',
          itemOffered: {
            '@type': 'Product',
            name: 'Medical Student Housing',
            description: 'Fully furnished apartment near Karapitiya Teaching Hospital',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '0',
                priceCurrency: 'USD',
                referenceQuantity: {
                  '@type': 'QuantitativeValue',
                  value: '1',
                  unitText: 'NIGHT'
                }
              }
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              reviewCount: '50',
              bestRating: '5',
              worstRating: '1'
            }
          },
        },
        potentialAction: [
          {
            '@type': 'ReserveAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.airbnb.com/h/rnrfamily',
              actionPlatform: [
                'http://schema.org/DesktopWebPlatform',
                'http://schema.org/MobileWebPlatform',
              ],
            },
            result: {
              '@type': 'LodgingReservation',
              name: 'Book RnR Private Residence',
            },
          },
          {
            '@type': 'CommunicateAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://wa.me/94759597703',
              actionPlatform: [
                'http://schema.org/MobileWebPlatform',
              ],
            },
          },
        ],
        knowsAbout: [
          'Medical Student Accommodation',
          'Karapitiya Teaching Hospital',
          'Clinical Electives',
          'Student Housing',
          'Medical Education',
          'Galle Tourism',
          'Medical Elective Programs',
          'Overseas Medical Students',
          'Long-Stay Accommodation',
          'Furnished Apartments',
          'Researcher Housing',
          'Visiting Faculty Accommodation',
          'Student Homestay Services',
          'Hospital Proximity Lodging',
          'Study-Friendly Environment',
          'International Student Services',
        ],
        additionalType: [
          'Homestay',
          'GuestHouse',
          'StudentHousing',
          'LongTermRental',
          'ServicedAccommodation',
          'FurnishedApartment',
        ],
        knowsLanguage: ['English', 'Sinhala', 'Tamil'],
        availableLanguage: ['English', 'Sinhala'],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.karapitiyahomestayapartment.com/#website',
        url: 'https://www.karapitiyahomestayapartment.com',
        name: 'Karapitiya Home Stay Apartment',
        alternateName: 'RnR Private Residence',
        description: 'Premium Airbnb Superhost accommodation for medical students',
        publisher: {
          '@id': 'https://www.karapitiyahomestayapartment.com/#organization',
        },
        inLanguage: 'en-US',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.karapitiyahomestayapartment.com/?s={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.karapitiyahomestayapartment.com/#organization-main',
        name: 'RnR Private Residence',
        url: 'https://www.karapitiyahomestayapartment.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368260/Untitled_design_15_hwkj0c.png',
          width: 512,
          height: 512,
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+94759597703',
            contactType: 'customer service',
            areaServed: ['LK', 'US', 'GB', 'AU'],
            availableLanguage: ['en', 'si'],
          },
          {
            '@type': 'ContactPoint',
            email: 'rnr.residance@gmail.com',
            contactType: 'reservations',
            areaServed: 'Worldwide',
          },
        ],
        sameAs: [
          'https://www.airbnb.com/h/rnrfamily',
          'https://www.airbnb.com/users/profile/1463849258647435969',
          'https://www.google.com/maps/place/RnR+Private+Residence/@6.045787,80.220608,17z/data=!4m6!3m5!1s0x3ae173cd207ad093:0x1507a8b4dca65985!8m2!3d6.045787!4d80.2206082!16s%2Fg%2F11vhvq7nnq',
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.karapitiyahomestayapartment.com/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.karapitiyahomestayapartment.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Properties',
            item: 'https://www.karapitiyahomestayapartment.com#properties',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'About',
            item: 'https://www.karapitiyahomestayapartment.com#about',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Facilities',
            item: 'https://www.karapitiyahomestayapartment.com#facilities',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Contact',
            item: 'https://www.karapitiyahomestayapartment.com#contact',
          },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.karapitiyahomestayapartment.com/#webpage',
        url: 'https://www.karapitiyahomestayapartment.com',
        name: 'Karapitiya Home Stay Apartment | Medical Student Accommodation Galle',
        isPartOf: {
          '@id': 'https://www.karapitiyahomestayapartment.com/#website',
        },
        about: {
          '@id': 'https://www.karapitiyahomestayapartment.com/#organization',
        },
        description: 'Premium Airbnb Superhost homestay for medical students at Karapitiya Teaching Hospital. 5★ rated, modern facilities, 10 min to hospital & beach.',
        inLanguage: 'en-US',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.karapitiyahomestayapartment.com/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Where is Karapitiya Home Stay located?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Located in Karapitiya, Galle, Southern Province, Sri Lanka - just 10 minutes walk from Karapitiya Teaching Hospital and 15 minutes to Galle beaches. Easily accessible from Colombo via A2 highway or Southern Railway.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the minimum stay requirement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Minimum stay is 14 days, perfect for medical electives, clinical rotations, and student placements at Karapitiya Teaching Hospital. Flexible booking options available.',
            },
          },
          {
            '@type': 'Question',
            name: 'What facilities are included?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'High-speed WiFi internet, air conditioning in all rooms, fully equipped kitchen with refrigerator, washing machine, free parking, study desks, hot water, balconies, and quiet environment. All utilities and cleaning services included.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is it suitable for medical students?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, specifically designed for medical students doing electives at Karapitiya Teaching Hospital. Features dedicated study spaces, high-speed WiFi, quiet environment, and close proximity to hospital. We have hosted 50+ medical students from around the world.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I book the accommodation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Book through our Airbnb listings (airbnb.com/h/rnrfamily) where we maintain a 5.0★ Superhost rating with 24+ reviews. You can also contact us directly via WhatsApp at +94759597703 or email at rnr.residance@gmail.com.',
            },
          },
          {
            '@type': 'Question',
            name: 'What attractions are nearby?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Karapitiya Teaching Hospital (10 min walk), Galle Dutch Fort (5 min), Unawatuna Beach (15 min), Jungle Beach (20 min), Mirissa (45 min for whale watching), supermarkets, restaurants, and public transport. Perfect for both medical work and exploring Southern Sri Lanka.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the best accommodation for medical elective students near Karapitiya Teaching Hospital?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'RnR Residence offers fully furnished long-stay rooms just 5 minutes from Karapitiya Hospital, designed specifically for medical elective students and researchers. Study-friendly environment with high-speed WiFi, quiet rooms, and walking distance to hospital.',
            },
          },
          {
            '@type': 'Question',
            name: 'How far is RnR Residence from Karapitiya Hospital?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Only 5 minutes by tuk-tuk and easily accessible from the main road, supermarkets, and bus stand. Walking distance for medical students attending Karapitiya Teaching Hospital.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is RnR Residence suitable for long stay in Galle?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, we offer long-term furnished apartments ideal for foreign students, researchers, and families. Monthly stay options available with all utilities included.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you have fast Wi-Fi for study and work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, high-speed fiber WiFi is available in all rooms, perfect for medical research, online lectures, telemedicine, and video calls. Study-friendly work desks in every room.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is the residence close to restaurants and supermarkets?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, everything is within walking distance including Pizza Hut, local restaurants, supermarkets, ATMs, pharmacies, and bus stand. Very convenient for daily needs.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you accept overseas medical students and researchers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, we specialize in hosting international medical elective students, visiting faculty, researchers, and long-stay foreign guests. We have extensive experience with medical students from USA, UK, Australia, Europe, and Middle East.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is RnR Residence a quiet and private accommodation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, our residence offers high privacy, peaceful surroundings, and a quiet study-friendly environment perfect for medical students who need to focus on their studies and clinical work.',
            },
          },
          {
            '@type': 'Question',
            name: 'What makes RnR Residence ideal for medical electives?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Located 5 minutes from Karapitiya Teaching Hospital, fully furnished rooms with study desks, high-speed WiFi, quiet environment, air conditioning, kitchen facilities, washing machine, and 24/7 hot water. Perfect for clinical rotations and extended medical stays.',
            },
          },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': 'https://www.karapitiyahomestayapartment.com/#properties-list',
        name: 'Available Properties at RnR Private Residence',
        description: 'Premium accommodation options near Karapitiya Teaching Hospital',
        numberOfItems: 2,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'Product',
              name: 'Medical Electives Apartment',
              description: 'Spacious 3-bedroom apartment with dedicated study spaces for medical students',
              url: 'https://www.airbnb.com/rooms/1297705979521687357',
              image: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368195/IMG-20251129-WA0201_ivfazj.jpg',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                reviewCount: 15,
              },
              offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/InStock',
                priceCurrency: 'USD',
                url: 'https://www.airbnb.com/rooms/1297705979521687357',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'Product',
              name: 'RnR Private Residence',
              description: 'Premium accommodation with modern amenities and study facilities',
              url: 'https://www.airbnb.com/rooms/830788991042580081',
              image: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368180/IMG-20251129-WA0208_vxfnk8.jpg',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                reviewCount: 9,
              },
              offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/InStock',
                priceCurrency: 'USD',
                url: 'https://www.airbnb.com/rooms/830788991042580081',
              },
            },
          },
        ],
      },
      {
        '@type': 'Place',
        '@id': 'https://www.karapitiyahomestayapartment.com/#place',
        name: 'Karapitiya Home Stay Apartment',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Near Karapitiya Teaching Hospital',
          addressLocality: 'Karapitiya',
          addressRegion: 'Galle',
          postalCode: '80000',
          addressCountry: 'LK',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 6.0535,
          longitude: 80.2210,
        },
        hasMap: 'https://maps.google.com/?q=6.0535,80.2210',
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://www.airbnb.com" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368260/Untitled_design_15_hwkj0c.png" type="image/png" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368260/Untitled_design_15_hwkj0c.png" />
        <link rel="shortcut icon" href="https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368260/Untitled_design_15_hwkj0c.png" />
        
        {/* Geo & Location Meta Tags */}
        <meta name="geo.region" content="LK-3" />
        <meta name="geo.placename" content="Karapitiya, Galle" />
        <meta name="geo.position" content="6.0535;80.2210" />
        <meta name="ICBM" content="6.0535, 80.2210" />
        
        {/* Additional GEO and Business Meta Tags */}
        <meta name="city" content="Galle" />
        <meta name="state" content="Southern Province" />
        <meta name="country" content="Sri Lanka" />
        <meta name="location" content="Karapitiya, Galle, Sri Lanka" />
        <meta name="business.category" content="Lodging, Homestay, Student Housing, Medical Accommodation" />
        <meta name="business.hours" content="24/7" />
        <meta name="business.phone" content="+94759597703" />
        <meta name="business.email" content="rnr.residance@gmail.com" />
        <meta name="target.audience" content="Medical Students, Researchers, Foreign Students, Long-Stay Travelers" />
        <meta name="service.area" content="Karapitiya, Galle, Southern Province, Sri Lanka" />
        <meta name="nearby.landmark" content="Karapitiya Teaching Hospital" />
        <meta name="distance.hospital" content="5 minutes" />
        <meta name="property.type" content="Furnished Apartment, Homestay, Student Housing" />
        <meta name="accommodation.type" content="Long-Stay, Medical Elective, Student Housing, Researcher Accommodation" />
        
        {/* AEO - Answer Engine Optimization Meta Tags */}
        <meta name="question:best-medical-accommodation" content="RnR Residence offers fully furnished rooms 5 minutes from Karapitiya Teaching Hospital for medical elective students" />
        <meta name="question:distance-to-hospital" content="Only 5 minutes by tuk-tuk from Karapitiya Teaching Hospital" />
        <meta name="question:long-stay-suitable" content="Yes, ideal for long-term stays with monthly accommodation options for students and researchers" />
        <meta name="question:wifi-available" content="Yes, high-speed fiber WiFi in all rooms for study and work" />
        <meta name="question:near-amenities" content="Walking distance to supermarkets, restaurants, ATMs, Pizza Hut, and bus stand" />
        
        {/* Multilingual hreflang Tags */}
        <link rel="alternate" hrefLang="en" href="https://www.karapitiyahomestayapartment.com/?lang=en" />
        <link rel="alternate" hrefLang="de" href="https://www.karapitiyahomestayapartment.com/?lang=de" />
        <link rel="alternate" hrefLang="fr" href="https://www.karapitiyahomestayapartment.com/?lang=fr" />
        <link rel="alternate" hrefLang="es" href="https://www.karapitiyahomestayapartment.com/?lang=es" />
        <link rel="alternate" hrefLang="it" href="https://www.karapitiyahomestayapartment.com/?lang=it" />
        <link rel="alternate" hrefLang="nl" href="https://www.karapitiyahomestayapartment.com/?lang=nl" />
        <link rel="alternate" hrefLang="x-default" href="https://www.karapitiyahomestayapartment.com/" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="language" content="English" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta httpEquiv="content-language" content="en-US" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
