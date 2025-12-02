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
  title: 'Karapitiya Home Stay Apartment | Medical Student Accommodation Near Teaching Hospital Galle',
  description: 'Premium Airbnb Superhost homestay for medical students & foreign students at Karapitiya Teaching Hospital, Galle, Sri Lanka. 5★ rated, 10 min walk to hospital & beach. Modern facilities, WiFi, AC, kitchen. Book 14+ days stay.',
  keywords: [
    'Karapitiya accommodation',
    'medical student housing Galle',
    'Karapitiya hospital homestay',
    'student apartment near Karapitiya Teaching Hospital',
    'Galle homestay',
    'foreign student accommodation Sri Lanka',
    'Karapitiya teaching hospital accommodation',
    'homestay Galle Sri Lanka',
    'medical electives accommodation Galle',
    'Karapitiya hospital student housing',
    'Galle medical student apartment',
    'homestay near hospital Galle',
    'student accommodation Karapitiya',
    'Airbnb Karapitiya',
    'Airbnb Superhost Galle',
    'medical elective housing Sri Lanka',
    'student housing near Karapitiya',
    'Galle beach accommodation',
    'furnished apartment Galle',
    'long term student rental Galle',
    'affordable student housing Karapitiya',
    'safe accommodation medical students Galle',
    'RnR Private Residence Galle',
    'Southern Province accommodation Sri Lanka',
    'clinical rotation housing Galle',
    'medical internship accommodation',
    'Galle Dutch Fort accommodation',
    'Unawatuna beach student housing',
    'Karapitiya medical student rental',
    'teaching hospital nearby accommodation',
  ],
  authors: [{ name: 'RnR Family Residence' }],
  creator: 'RnR Family Residence',
  publisher: 'Karapitiya Home Stay Apartment',
  alternates: {
    canonical: 'https://karapitiyahomestay.com',
  },
  openGraph: {
    title: 'Karapitiya Home Stay Apartment | 5★ Airbnb Superhost - Medical Student Housing Galle',
    description: '5★ rated Airbnb Superhost accommodation for medical students at Karapitiya Teaching Hospital. 10 min walk to hospital & Galle beach. Modern facilities, WiFi, AC, fully furnished.',
    type: 'website',
    locale: 'en_US',
    url: 'https://karapitiyahomestay.com',
    siteName: 'Karapitiya Home Stay Apartment',
    images: [
      {
        url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368195/IMG-20251129-WA0201_ivfazj.jpg',
        width: 1200,
        height: 630,
        alt: 'Karapitiya Home Stay Apartment - Modern Bedroom',
      },
      {
        url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368180/IMG-20251129-WA0208_vxfnk8.jpg',
        width: 1200,
        height: 630,
        alt: 'RnR Private Residence - Spacious Living Room',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karapitiya Home Stay Apartment | 5★ Medical Student Housing Galle',
    description: 'Airbnb Superhost accommodation near Karapitiya Teaching Hospital. Perfect for medical electives.',
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
        '@type': ['LodgingBusiness', 'Hotel', 'Accommodation'],
        '@id': 'https://karapitiyahomestay.com/#organization',
        name: 'RnR Private Residence - Karapitiya Home Stay Apartment',
        alternateName: ['RnR Family Residence', 'Karapitiya Home Stay', 'RnR Private Residence Galle'],
        url: 'https://karapitiyahomestay.com',
        logo: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368260/Untitled_design_15_hwkj0c.png',
        description: '5.0★ Airbnb Superhost accommodation for medical students near Karapitiya Teaching Hospital, Galle, Sri Lanka. Premium facilities, WiFi, AC, fully furnished apartments perfect for medical electives and clinical rotations.',
        slogan: 'Your Home Away from Home Near Karapitiya Teaching Hospital',
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
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: 24,
          bestRating: '5',
          worstRating: '1',
          itemReviewed: {
            '@type': 'LodgingBusiness',
            name: 'RnR Private Residence',
          },
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
          { '@type': 'LocationFeatureSpecification', name: 'Hot Water', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Refrigerator', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Study Desk', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Balcony', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Quiet Environment', value: true },
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
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://karapitiyahomestay.com/#website',
        url: 'https://karapitiyahomestay.com',
        name: 'Karapitiya Home Stay Apartment',
        alternateName: 'RnR Private Residence',
        description: 'Premium Airbnb Superhost accommodation for medical students',
        publisher: {
          '@id': 'https://karapitiyahomestay.com/#organization',
        },
        inLanguage: 'en-US',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://karapitiyahomestay.com/?s={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://karapitiyahomestay.com/#organization-main',
        name: 'RnR Private Residence',
        url: 'https://karapitiyahomestay.com',
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
        '@id': 'https://karapitiyahomestay.com/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://karapitiyahomestay.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Properties',
            item: 'https://karapitiyahomestay.com#properties',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'About',
            item: 'https://karapitiyahomestay.com#about',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Facilities',
            item: 'https://karapitiyahomestay.com#facilities',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Contact',
            item: 'https://karapitiyahomestay.com#contact',
          },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://karapitiyahomestay.com/#webpage',
        url: 'https://karapitiyahomestay.com',
        name: 'Karapitiya Home Stay Apartment | Medical Student Accommodation Galle',
        isPartOf: {
          '@id': 'https://karapitiyahomestay.com/#website',
        },
        about: {
          '@id': 'https://karapitiyahomestay.com/#organization',
        },
        description: 'Premium Airbnb Superhost homestay for medical students at Karapitiya Teaching Hospital. 5★ rated, modern facilities, 10 min to hospital & beach.',
        inLanguage: 'en-US',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://karapitiyahomestay.com/#faq',
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
        ],
      },
      {
        '@type': 'ItemList',
        '@id': 'https://karapitiyahomestay.com/#properties-list',
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
        '@id': 'https://karapitiyahomestay.com/#place',
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
        
        {/* Multilingual hreflang Tags */}
        <link rel="alternate" hrefLang="en" href="https://karapitiyahomestay.com/?lang=en" />
        <link rel="alternate" hrefLang="de" href="https://karapitiyahomestay.com/?lang=de" />
        <link rel="alternate" hrefLang="fr" href="https://karapitiyahomestay.com/?lang=fr" />
        <link rel="alternate" hrefLang="es" href="https://karapitiyahomestay.com/?lang=es" />
        <link rel="alternate" hrefLang="it" href="https://karapitiyahomestay.com/?lang=it" />
        <link rel="alternate" hrefLang="nl" href="https://karapitiyahomestay.com/?lang=nl" />
        <link rel="alternate" hrefLang="x-default" href="https://karapitiyahomestay.com/" />
        
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
