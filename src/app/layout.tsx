import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0ea5e9' },
    { media: '(prefers-color-scheme: dark)', color: '#0c4a6e' },
  ],
};

export const metadata: Metadata = {
  title:
    "RnR Residence | Premium Accommodation & Long-Stay Apartments in Galle, Sri Lanka",
  description:
    "RnR Residence offers fully furnished long-stay apartments in Galle, perfect for travelers, families, students, and professionals. Modern facilities, high-speed WiFi, convenient location near beaches, city center, and major attractions. 5★ Airbnb Superhost.",
  authors: [{ name: "RnR Family Residence" }],
  creator: "RnR Private Residence - Premium Galle Accommodation",
  publisher: "RnR Residence - Long-Stay Apartments & Homestay Galle",
  alternates: {
    canonical: "https://www.karapitiyahomestayapartment.com",
    languages: {
      en: "https://www.karapitiyahomestayapartment.com/?lang=en",
      de: "https://www.karapitiyahomestayapartment.com/?lang=de",
      fr: "https://www.karapitiyahomestayapartment.com/?lang=fr",
      es: "https://www.karapitiyahomestayapartment.com/?lang=es",
      it: "https://www.karapitiyahomestayapartment.com/?lang=it",
      nl: "https://www.karapitiyahomestayapartment.com/?lang=nl",
    },
  },
  openGraph: {
    title: "RnR Residence — Premium Long-Stay Apartments & Homestay in Galle",
    description:
      "Fully furnished long-stay apartments ideal for travelers, families, students, professionals, and vacationers. Quiet, private, and perfectly located near Galle beaches, city center, restaurants, and supermarkets. 5★ Airbnb Superhost.",
    type: "website",
    locale: "en_US",
    url: "https://www.karapitiyahomestayapartment.com",
    siteName: "RnR Residence - Premium Galle Accommodation",
    images: [
      {
        url: "https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368195/IMG-20251129-WA0201_ivfazj.jpg",
        width: 1200,
        height: 630,
        alt: "RnR Residence - Modern bedroom with workspace and air conditioning in Galle",
      },
      {
        url: "https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368180/IMG-20251129-WA0208_vxfnk8.jpg",
        width: 1200,
        height: 630,
        alt: "RnR Private Residence - Spacious furnished living room for long-stay guests in Galle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RnR Residence | Premium Long-Stay Apartments in Galle, Sri Lanka",
    description:
      "Furnished long-stay apartments for travelers, families, students & professionals. Modern facilities, high-speed WiFi, convenient location near beaches and city center. 5★ Airbnb Superhost.",
    images: [
      "https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368195/IMG-20251129-WA0201_ivfazj.jpg",
    ],
    site: "@RnRResidence",
    creator: "@RnRResidence",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Accommodation",
  classification:
    "Long-Stay Accommodation, Vacation Rentals, Homestay, Serviced Apartments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LodgingBusiness", "Hotel", "Accommodation", "Hostel"],
        "@id": "https://www.karapitiyahomestayapartment.com/#organization",
        name: "RnR Residence – Premium Long-Stay Apartments & Homestay (Galle)",
        alternateName: [
          "RnR Family Residence",
          "RnR Private Residence Galle",
          "Karapitiya Accommodation",
          "Galle Long-Stay Apartments",
          "Galle Homestay",
        ],
        url: "https://www.karapitiyahomestayapartment.com",
        logo: {
          "@type": "ImageObject",
          url: "https://res.cloudinary.com/dhfqwxyb4/image/upload/f_auto,q_auto,w_512,h_512,c_fit/v1764368260/Untitled_design_15_hwkj0c.png",
          width: 512,
          height: 512,
          caption:
            "RnR Residence Logo - Karapitiya Medical Elective Accommodation",
        },
        description:
          "RnR Residence offers fully furnished long-stay apartments and homestay accommodation in Galle, Sri Lanka. Perfect for international travelers, families, students, professionals working remotely, and vacationers seeking a comfortable, quiet, and private place to stay. Conveniently located near beaches, city center, supermarkets, restaurants, and major attractions. 5★ Airbnb Superhost with modern facilities including high-speed WiFi, air conditioning, fully equipped kitchens, and dedicated workspaces.",
        slogan: "Your Home Away from Home in Beautiful Galle",
        foundingDate: "2020",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Near Karapitiya Teaching Hospital",
          addressLocality: "Karapitiya",
          addressRegion: "Southern Province",
          addressCountry: {
            "@type": "Country",
            name: "Sri Lanka",
          },
          postalCode: "80000",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 6.0535,
          longitude: 80.221,
          name: "RnR Private Residence Location",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Galle",
            "@id": "https://en.wikipedia.org/wiki/Galle",
          },
          {
            "@type": "AdministrativeArea",
            name: "Southern Province",
          },
          {
            "@type": "Country",
            name: "Sri Lanka",
          },
        ],
        telephone: "+94759597703",
        email: "rnr.residance@gmail.com",
        priceRange: "$$",
        currenciesAccepted: "USD, EUR, LKR",
        paymentAccepted: "Cash, Credit Card, Bank Transfer",
        openingHours: "Mo-Su 00:00-24:00",
        starRating: {
          "@type": "Rating",
          ratingValue: "5.0",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Sarah",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
            },
            datePublished: "2024-11",
            reviewBody:
              "Perfect location for exploring Galle. Clean, comfortable, and Suhail was incredibly helpful throughout our stay!",
          },
          {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Ahmed",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
            },
            datePublished: "2024-10",
            reviewBody:
              "Great place! Very convenient location and has everything you need. The host is responsive and accommodating.",
          },
          {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Julian",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
            },
            datePublished: "2024-09",
            reviewBody:
              "Excellent accommodation for long-stay guests. Suhail was very attentive to our needs throughout our stay.",
          },
        ],
        image: [
          {
            "@type": "ImageObject",
            url: "https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368195/IMG-20251129-WA0201_ivfazj.jpg",
            caption: "Modern Bedroom at RnR Private Residence",
            width: 1200,
            height: 800,
          },
          {
            "@type": "ImageObject",
            url: "https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368180/IMG-20251129-WA0208_vxfnk8.jpg",
            caption: "Spacious Living Room",
            width: 1200,
            height: 800,
          },
          {
            "@type": "ImageObject",
            url: "https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368186/IMG-20251129-WA0203_efgyrq.jpg",
            caption: "Comfortable Hall Area",
            width: 1200,
            height: 800,
          },
        ],
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "High-Speed WiFi Internet",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Air Conditioning",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Fully Equipped Kitchen",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Washing Machine",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Free Parking",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Hot Water 24/7",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Refrigerator",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Study Desk",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Balcony",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Quiet Environment",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Work-Friendly Rooms",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Self Check-in Available",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Long-Term Stays Allowed",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Laundry Available",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Near Supermarkets & Restaurants",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Safe & Secure Building",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "High Privacy",
            value: true,
          },
        ],
        petsAllowed: false,
        smokingAllowed: false,
        checkinTime: "14:00",
        checkoutTime: "11:00",
        numberOfRooms: 3,
        maximumAttendeeCapacity: 6,
        tourBookingPage: "https://www.airbnb.com/h/rnrfamily",
        hasMap:
          "https://www.google.com/maps/place/RnR+Private+Residence/@6.045787,80.220608,17z/data=!4m6!3m5!1s0x3ae173cd207ad093:0x1507a8b4dca65985!8m2!3d6.045787!4d80.2206082!16s%2Fg%2F11vhvq7nnq",
        sameAs: [
          "https://www.airbnb.com/h/rnrfamily",
          "https://www.airbnb.com/users/profile/1463849258647435969",
          "https://www.airbnb.com/rooms/1297705979521687357",
          "https://www.airbnb.com/rooms/830788991042580081",
          "https://www.google.com/maps/place/RnR+Private+Residence/@6.045787,80.220608,17z/data=!4m6!3m5!1s0x3ae173cd207ad093:0x1507a8b4dca65985!8m2!3d6.045787!4d80.2206082!16s%2Fg%2F11vhvq7nnq",
        ],
        makesOffer: {
          "@type": "Offer",
          name: "Long-Stay Accommodation Package",
          description:
            "Premium furnished apartments with modern facilities, minimum 14 days stay",
          price: "Contact for pricing",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          validFrom: "2024-01-01",
          category: "Accommodation",
          itemOffered: {
            "@type": "Product",
            name: "Furnished Long-Stay Apartment",
            description:
              "Fully furnished apartment with WiFi, AC, kitchen in Galle",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "0",
                priceCurrency: "USD",
                referenceQuantity: {
                  "@type": "QuantitativeValue",
                  value: "1",
                  unitText: "NIGHT",
                },
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "50",
              bestRating: "5",
              worstRating: "1",
            },
          },
        },
        potentialAction: [
          {
            "@type": "ReserveAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://www.airbnb.com/h/rnrfamily",
              actionPlatform: [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform",
              ],
            },
            result: {
              "@type": "LodgingReservation",
              name: "Book RnR Private Residence",
            },
          },
          {
            "@type": "CommunicateAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://wa.me/94759597703",
              actionPlatform: ["http://schema.org/MobileWebPlatform"],
            },
          },
        ],
        knowsAbout: [
          "Galle Accommodation",
          "Sri Lanka Tourism",
          "Long-Stay Apartments",
          "Vacation Rentals",
          "Student Housing",
          "Remote Work Accommodation",
          "Family Travel",
          "Furnished Apartments",
          "Beach Proximity Lodging",
          "Work-Friendly Environment",
          "International Travelers",
          "Medical Accommodation",
          "Karapitiya Teaching Hospital",
          "Galle Fort Tourism",
          "Southern Sri Lanka",
          "Airbnb Superhost",
        ],
        additionalType: [
          "Homestay",
          "StudentHousing",
          "LongTermRental",
          "ServicedAccommodation",
          "FurnishedApartment",
        ],
        knowsLanguage: ["English", "Sinhala", "Tamil"],
        availableLanguage: ["English", "Sinhala"],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.karapitiyahomestayapartment.com/#website",
        url: "https://www.karapitiyahomestayapartment.com",
        name: "Karapitiya Home Stay Apartment",
        alternateName: "RnR Private Residence",
        description:
          "Premium Airbnb Superhost accommodation in Galle for travelers, families, students, and professionals",
        publisher: {
          "@id": "https://www.karapitiyahomestayapartment.com/#organization",
        },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.karapitiyahomestayapartment.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.karapitiyahomestayapartment.com/#organization-main",
        name: "RnR Private Residence",
        url: "https://www.karapitiyahomestayapartment.com",
        logo: {
          "@type": "ImageObject",
          url: "https://res.cloudinary.com/dhfqwxyb4/image/upload/f_auto,q_auto,w_512,h_512,c_fit/v1764368260/Untitled_design_15_hwkj0c.png",
          width: 512,
          height: 512,
          caption:
            "RnR Residence Logo - Karapitiya Medical Elective Accommodation",
        },
        image: {
          "@type": "ImageObject",
          url: "https://res.cloudinary.com/dhfqwxyb4/image/upload/f_auto,q_auto,w_512,h_512,c_fit/v1764368260/Untitled_design_15_hwkj0c.png",
          width: 512,
          height: 512,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+94759597703",
            contactType: "customer service",
            areaServed: ["LK", "US", "GB", "AU"],
            availableLanguage: ["en", "si"],
          },
          {
            "@type": "ContactPoint",
            email: "rnr.residance@gmail.com",
            contactType: "reservations",
            areaServed: "Worldwide",
          },
        ],
        sameAs: [
          "https://www.airbnb.com/h/rnrfamily",
          "https://www.airbnb.com/users/profile/1463849258647435969",
          "https://www.google.com/maps/place/RnR+Private+Residence/@6.045787,80.220608,17z/data=!4m6!3m5!1s0x3ae173cd207ad093:0x1507a8b4dca65985!8m2!3d6.045787!4d80.2206082!16s%2Fg%2F11vhvq7nnq",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.karapitiyahomestayapartment.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.karapitiyahomestayapartment.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Properties",
            item: "https://www.karapitiyahomestayapartment.com#properties",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "About",
            item: "https://www.karapitiyahomestayapartment.com#about",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Facilities",
            item: "https://www.karapitiyahomestayapartment.com#facilities",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Contact",
            item: "https://www.karapitiyahomestayapartment.com#contact",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://www.karapitiyahomestayapartment.com/#webpage",
        url: "https://www.karapitiyahomestayapartment.com",
        name: "Karapitiya Home Stay Apartment | Premium Accommodation in Galle",
        isPartOf: {
          "@id": "https://www.karapitiyahomestayapartment.com/#website",
        },
        about: {
          "@id": "https://www.karapitiyahomestayapartment.com/#organization",
        },
        description:
          "Premium Airbnb Superhost accommodation in Galle. 5★ rated, modern facilities, convenient location near beaches, city center, and major attractions.",
        inLanguage: "en-US",
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.karapitiyahomestayapartment.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where is Karapitiya Home Stay located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Located in Karapitiya, Galle, Southern Province, Sri Lanka - just 10 minutes walk from Karapitiya Teaching Hospital and 15 minutes to Galle beaches. Easily accessible from Colombo via A2 highway or Southern Railway.",
            },
          },
          {
            "@type": "Question",
            name: "What is the minimum stay requirement?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Minimum stay is 14 days, perfect for vacations, work-from-home, student stays, and long-term travel. Flexible booking options available for various needs.",
            },
          },
          {
            "@type": "Question",
            name: "What facilities are included?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "High-speed WiFi internet, air conditioning in all rooms, fully equipped kitchen with refrigerator, washing machine, free parking, study desks, hot water, balconies, and quiet environment. All utilities and cleaning services included.",
            },
          },
          {
            "@type": "Question",
            name: "Who is this accommodation suitable for?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Perfect for all types of travelers including families, students (including medical electives), remote workers, vacationers, and long-stay guests. Features dedicated workspaces, high-speed WiFi, quiet environment, and modern facilities. We have hosted 50+ international guests from around the world.",
            },
          },
          {
            "@type": "Question",
            name: "How do I book the accommodation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Book through our Airbnb listings (airbnb.com/h/rnrfamily) where we maintain a 5.0★ Superhost rating with 24+ reviews. You can also contact us directly via WhatsApp at +94759597703 or email at rnr.residance@gmail.com.",
            },
          },
          {
            "@type": "Question",
            name: "What attractions are nearby?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Galle Dutch Fort (10 min), Unawatuna Beach (15 min), Jungle Beach (20 min), Mirissa (45 min for whale watching), Karapitiya area (5 min), supermarkets, restaurants, and public transport. Perfect for exploring Southern Sri Lanka while enjoying comfortable accommodation.",
            },
          },
          {
            "@type": "Question",
            name: "What is the best accommodation for medical elective students near Karapitiya Teaching Hospital?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "RnR Residence offers fully furnished long-stay rooms just 5 minutes from Karapitiya Hospital, designed specifically for medical elective students and researchers. Study-friendly environment with high-speed WiFi, quiet rooms, and walking distance to hospital.",
            },
          },
          {
            "@type": "Question",
            name: "How far is RnR Residence from Karapitiya Hospital?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Only 5 minutes by tuk-tuk and easily accessible from the main road, supermarkets, and bus stand. Walking distance for medical students attending Karapitiya Teaching Hospital.",
            },
          },
          {
            "@type": "Question",
            name: "Is RnR Residence suitable for long stay in Galle?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we offer long-term furnished apartments ideal for foreign students, researchers, and families. Monthly stay options available with all utilities included.",
            },
          },
          {
            "@type": "Question",
            name: "Do you have fast Wi-Fi for study and work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, high-speed fiber WiFi is available in all rooms, perfect for medical research, online lectures, telemedicine, and video calls. Study-friendly work desks in every room.",
            },
          },
          {
            "@type": "Question",
            name: "Is the residence close to restaurants and supermarkets?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, everything is within walking distance including Pizza Hut, local restaurants, supermarkets, ATMs, pharmacies, and bus stand. Very convenient for daily needs.",
            },
          },
          {
            "@type": "Question",
            name: "Do you accept overseas medical students and researchers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we specialize in hosting international medical elective students, visiting faculty, researchers, and long-stay foreign guests. We have extensive experience with medical students from USA, UK, Australia, Europe, and Middle East.",
            },
          },
          {
            "@type": "Question",
            name: "Is RnR Residence a quiet and private accommodation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, our residence offers high privacy, peaceful surroundings, and a quiet work-friendly environment perfect for guests who need to focus on work, study, or simply relax.",
            },
          },
          {
            "@type": "Question",
            name: "What makes RnR Residence ideal for long-stay guests?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Fully furnished rooms with workspaces, high-speed WiFi, quiet environment, air conditioning, fully equipped kitchen, washing machine, and 24/7 hot water. Conveniently located near beaches, city center, supermarkets, and restaurants. Perfect for extended stays and remote work.",
            },
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": "https://www.karapitiyahomestayapartment.com/#properties-list",
        name: "Available Properties at RnR Private Residence",
        description:
          "Premium accommodation options in Galle for travelers, families, and long-stay guests",
        numberOfItems: 2,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "Product",
              name: "Modern 3-Bedroom Apartment",
              description:
                "Spacious 3-bedroom apartment with dedicated workspaces and modern facilities",
              url: "https://www.airbnb.com/rooms/1297705979521687357",
              image:
                "https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368195/IMG-20251129-WA0201_ivfazj.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: 15,
              },
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                priceCurrency: "USD",
                url: "https://www.airbnb.com/rooms/1297705979521687357",
              },
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "Product",
              name: "RnR Private Residence",
              description:
                "Premium accommodation with modern amenities and work-friendly spaces",
              url: "https://www.airbnb.com/rooms/830788991042580081",
              image:
                "https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368180/IMG-20251129-WA0208_vxfnk8.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: 9,
              },
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                priceCurrency: "USD",
                url: "https://www.airbnb.com/rooms/830788991042580081",
              },
            },
          },
        ],
      },
      {
        "@type": "Place",
        "@id": "https://www.karapitiyahomestayapartment.com/#place",
        name: "Karapitiya Home Stay Apartment",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Near Karapitiya Teaching Hospital",
          addressLocality: "Karapitiya",
          addressRegion: "Galle",
          postalCode: "80000",
          addressCountry: "LK",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 6.0535,
          longitude: 80.221,
        },
        hasMap: "https://maps.google.com/?q=6.0535,80.2210",
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Preload Critical LCP Images */}
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dhfqwxyb4/image/upload/f_auto,q_auto,w_128,c_limit/v1764368260/Untitled_design_15_hwkj0c.png"
          fetchPriority="high"
        />

        {/* Preconnect for Performance - Critical Origins */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://upload.wikimedia.org" />
        <link rel="dns-prefetch" href="https://www.airbnb.com" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
        <link rel="dns-prefetch" href="https://placehold.co" />

        {/* Canonical URL - Critical for SEO */}
        <link
          rel="canonical"
          href="https://www.karapitiyahomestayapartment.com/"
        />

        {/* Favicon and Icons - Optimized */}
        <link
          rel="icon"
          href="https://res.cloudinary.com/dokpye7fu/image/upload/v1767530935/a-professional-logo-design-featuring-the_5gZ7iDYxS-erpmt7dPQlNg_9INFVxWqS-S3eZYvESkJMQ_v91rs2.jpg"
          type="image/jpeg"
        />
        <link
          rel="apple-touch-icon"
          href="https://res.cloudinary.com/dokpye7fu/image/upload/v1767530935/a-professional-logo-design-featuring-the_5gZ7iDYxS-erpmt7dPQlNg_9INFVxWqS-S3eZYvESkJMQ_v91rs2.jpg"
        />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/dokpye7fu/image/upload/v1767530935/a-professional-logo-design-featuring-the_5gZ7iDYxS-erpmt7dPQlNg_9INFVxWqS-S3eZYvESkJMQ_v91rs2.jpg"
        />

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
        <meta
          name="business.category"
          content="Lodging, Homestay, Student Housing, Medical Accommodation"
        />
        <meta name="business.hours" content="24/7" />
        <meta name="business.phone" content="+94759597703" />
        <meta name="business.email" content="rnr.residance@gmail.com" />
        <meta
          name="target.audience"
          content="Medical Students, Researchers, Foreign Students, Long-Stay Travelers"
        />
        <meta
          name="service.area"
          content="Karapitiya, Galle, Southern Province, Sri Lanka"
        />
        <meta name="nearby.landmark" content="Karapitiya Teaching Hospital" />
        <meta name="distance.hospital" content="5 minutes" />
        <meta
          name="property.type"
          content="Furnished Apartment, Homestay, Student Housing"
        />
        <meta
          name="accommodation.type"
          content="Long-Stay, Medical Elective, Student Housing, Researcher Accommodation"
        />

        {/* AEO - Answer Engine Optimization Meta Tags */}
        <meta
          name="question:best-medical-accommodation"
          content="RnR Residence offers fully furnished rooms 5 minutes from Karapitiya Teaching Hospital for medical elective students"
        />
        <meta
          name="question:distance-to-hospital"
          content="Only 5 minutes by tuk-tuk from Karapitiya Teaching Hospital"
        />
        <meta
          name="question:long-stay-suitable"
          content="Yes, ideal for long-term stays with monthly accommodation options for students and researchers"
        />
        <meta
          name="question:wifi-available"
          content="Yes, high-speed fiber WiFi in all rooms for study and work"
        />
        <meta
          name="question:near-amenities"
          content="Walking distance to supermarkets, restaurants, ATMs, Pizza Hut, and bus stand"
        />

        {/* Multilingual hreflang Tags */}
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.karapitiyahomestayapartment.com/?lang=en"
        />
        <link
          rel="alternate"
          hrefLang="de"
          href="https://www.karapitiyahomestayapartment.com/?lang=de"
        />
        <link
          rel="alternate"
          hrefLang="fr"
          href="https://www.karapitiyahomestayapartment.com/?lang=fr"
        />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://www.karapitiyahomestayapartment.com/?lang=es"
        />
        <link
          rel="alternate"
          hrefLang="it"
          href="https://www.karapitiyahomestayapartment.com/?lang=it"
        />
        <link
          rel="alternate"
          hrefLang="nl"
          href="https://www.karapitiyahomestayapartment.com/?lang=nl"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.karapitiyahomestayapartment.com/"
        />

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
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
