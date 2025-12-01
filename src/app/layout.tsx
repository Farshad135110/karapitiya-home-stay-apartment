import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

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
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karapitiya Home Stay Apartment | 5★ Medical Student Housing Galle',
    description: 'Airbnb Superhost accommodation near Karapitiya Teaching Hospital. Perfect for medical electives.',
    images: ['https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368195/IMG-20251129-WA0201_ivfazj.jpg'],
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
        '@type': 'LodgingBusiness',
        '@id': 'https://karapitiyahomestay.com/#organization',
        name: 'Karapitiya Home Stay Apartment',
        alternateName: 'RnR Family Residence',
        url: 'https://karapitiyahomestay.com',
        logo: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368260/Untitled_design_15_hwkj0c.png',
        description: 'Premium Airbnb Superhost accommodation for medical students near Karapitiya Teaching Hospital, Galle, Sri Lanka.',
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
        telephone: '+94759597703',
        email: 'rnr.residance@gmail.com',
        priceRange: '$$',
        starRating: {
          '@type': 'Rating',
          ratingValue: '5.0',
          bestRating: '5',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '24',
          bestRating: '5',
          worstRating: '1',
        },
        image: [
          'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368195/IMG-20251129-WA0201_ivfazj.jpg',
          'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368180/IMG-20251129-WA0208_vxfnk8.jpg',
          'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368186/IMG-20251129-WA0203_efgyrq.jpg',
        ],
        amenityFeature: [
          { '@type': 'LocationFeatureSpecification', name: 'WiFi', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Kitchen', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Washing Machine', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
        ],
        petsAllowed: false,
        smokingAllowed: false,
        checkinTime: '14:00',
        checkoutTime: '11:00',
        numberOfRooms: 3,
        tourBookingPage: 'https://www.airbnb.com/h/rnrfamily',
        sameAs: [
          'https://www.airbnb.com/h/rnrfamily',
          'https://www.airbnb.com/users/profile/1463849258647435969',
        ],
        potentialAction: {
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
            name: 'Book Karapitiya Home Stay',
          },
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://karapitiyahomestay.com/#website',
        url: 'https://karapitiyahomestay.com',
        name: 'Karapitiya Home Stay Apartment',
        description: 'Medical student accommodation near Karapitiya Teaching Hospital Galle',
        publisher: {
          '@id': 'https://karapitiyahomestay.com/#organization',
        },
        inLanguage: 'en-US',
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
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Where is Karapitiya Home Stay located?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Located in Karapitiya, Galle, Sri Lanka - just 10 minutes walk from Karapitiya Teaching Hospital and Galle Beach.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the minimum stay requirement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Minimum stay is 14 days, perfect for medical electives and student rotations.',
            },
          },
          {
            '@type': 'Question',
            name: 'What facilities are included?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'High-speed WiFi, air conditioning, fully equipped kitchen, washing machine, free parking, and modern furnishings.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is it suitable for medical students?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, specifically designed for medical students doing electives at Karapitiya Teaching Hospital. Close proximity to hospital and quiet study environment.',
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
        <link rel="icon" href="https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368260/Untitled_design_15_hwkj0c.png" type="image/png" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368260/Untitled_design_15_hwkj0c.png" />
        <meta name="geo.region" content="LK-3" />
        <meta name="geo.placename" content="Karapitiya, Galle" />
        <meta name="geo.position" content="6.0535;80.2210" />
        <meta name="ICBM" content="6.0535, 80.2210" />
        <meta name="language" content="English" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta httpEquiv="content-language" content="en-US" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
