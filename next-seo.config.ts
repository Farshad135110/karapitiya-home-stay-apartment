// SEO Configuration for RnR Residence
// This file centralizes all SEO settings for better management

interface SEOConfig {
  title: string;
  description: string;
  canonical: string;
  openGraph: {
    type: string;
    locale: string;
    url: string;
    siteName: string;
    title: string;
    description: string;
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
      type: string;
    }>;
  };
  twitter: {
    handle: string;
    site: string;
    cardType: string;
  };
  additionalMetaTags: Array<{
    name: string;
    content: string;
  }>;
  languageAlternates: Array<{
    hrefLang: string;
    href: string;
  }>;
}

const config: SEOConfig = {
  title: 'RnR Residence | Karapitiya Medical Elective Accommodation & Long-Stay Apartments — Galle, Sri Lanka',
  description: 'Stay 5 minutes from Karapitiya Teaching Hospital. RnR Residence offers fully furnished long-stay apartments and private homestay rooms ideal for medical elective students, researchers, and foreign families in Galle. Walking distance to supermarkets, restaurants, Galle Fort, and Unawatuna Beach.',
  canonical: 'https://www.karapitiyahomestayapartment.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.karapitiyahomestayapartment.com',
    siteName: 'RnR Residence - Karapitiya Medical Elective Accommodation',
    title: 'RnR Residence — Karapitiya Medical Elective Homestay & Long-Stay Apartments (Galle)',
    description: 'Stay 5 minutes from Karapitiya Teaching Hospital. Fully furnished long-stay residence ideal for medical elective students, researchers, and foreign guests. Quiet, private, and perfectly located near supermarkets, restaurants, Galle Fort, and Unawatuna Beach.',
    images: [
      {
        url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368195/IMG-20251129-WA0201_ivfazj.jpg',
        width: 1200,
        height: 630,
        alt: 'RnR Residence - Study-friendly modern bedroom for medical elective students 5 minutes from Karapitiya Teaching Hospital Galle',
        type: 'image/jpeg',
      },
      {
        url: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368180/IMG-20251129-WA0208_vxfnk8.jpg',
        width: 1200,
        height: 630,
        alt: 'RnR Private Residence - Spacious furnished living room for long-stay medical students researchers Galle',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@RnRResidence',
    site: '@RnRResidence',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'Karapitiya medical elective accommodation, Galle homestay, Karapitiya residence, Long stay apartment Galle, Furnished apartments Galle, Medical electives Sri Lanka, Student accommodation Karapitiya, Accommodation for researchers Galle',
    },
    {
      name: 'author',
      content: 'RnR Private Residence - Karapitiya Medical Elective Homestay',
    },
    {
      name: 'geo.region',
      content: 'LK-3',
    },
    {
      name: 'geo.placename',
      content: 'Karapitiya, Galle',
    },
    {
      name: 'geo.position',
      content: '6.0535;80.2210',
    },
    {
      name: 'ICBM',
      content: '6.0535, 80.2210',
    },
    {
      name: 'city',
      content: 'Galle',
    },
    {
      name: 'state',
      content: 'Southern Province',
    },
    {
      name: 'country',
      content: 'Sri Lanka',
    },
    {
      name: 'location',
      content: 'Karapitiya, Galle, Sri Lanka',
    },
    {
      name: 'business.category',
      content: 'Lodging, Homestay, Student Housing, Medical Accommodation',
    },
    {
      name: 'business.hours',
      content: '24/7',
    },
    {
      name: 'business.phone',
      content: '+94759597703',
    },
    {
      name: 'business.email',
      content: 'rnr.residance@gmail.com',
    },
    {
      name: 'target.audience',
      content: 'Medical Students, Researchers, Foreign Students, Long-Stay Travelers',
    },
    {
      name: 'service.area',
      content: 'Karapitiya, Galle, Southern Province, Sri Lanka',
    },
    {
      name: 'nearby.landmark',
      content: 'Karapitiya Teaching Hospital',
    },
    {
      name: 'distance.hospital',
      content: '5 minutes',
    },
    {
      name: 'property.type',
      content: 'Furnished Apartment, Homestay, Student Housing',
    },
    {
      name: 'accommodation.type',
      content: 'Long-Stay, Medical Elective, Student Housing, Researcher Accommodation',
    },
  ],
  languageAlternates: [
    {
      hrefLang: 'en',
      href: 'https://www.karapitiyahomestayapartment.com/?lang=en',
    },
    {
      hrefLang: 'de',
      href: 'https://www.karapitiyahomestayapartment.com/?lang=de',
    },
    {
      hrefLang: 'fr',
      href: 'https://www.karapitiyahomestayapartment.com/?lang=fr',
    },
    {
      hrefLang: 'es',
      href: 'https://www.karapitiyahomestayapartment.com/?lang=es',
    },
    {
      hrefLang: 'it',
      href: 'https://www.karapitiyahomestayapartment.com/?lang=it',
    },
    {
      hrefLang: 'nl',
      href: 'https://www.karapitiyahomestayapartment.com/?lang=nl',
    },
    {
      hrefLang: 'x-default',
      href: 'https://www.karapitiyahomestayapartment.com/',
    },
  ],
};

export default config;
