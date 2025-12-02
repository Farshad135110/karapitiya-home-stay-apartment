export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['LodgingBusiness', 'Hotel', 'Accommodation', 'Hostel', 'GuestHouse'],
  '@id': 'https://www.karapitiyahomestayapartment.com/#organization',
  name: 'RnR Residence – Karapitiya Medical Elective Homestay & Long-Stay Apartments (Galle)',
  alternateName: [
    'RnR Family Residence',
    'RnR Private Residence Galle',
    'Karapitiya Medical Elective Accommodation',
    'Karapitiya Homestay',
    'Long-Stay Apartments Galle',
  ],
  url: 'https://www.karapitiyahomestayapartment.com',
  logo: 'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368260/Untitled_design_15_hwkj0c.png',
  description:
    'RnR Residence is a fully furnished long-stay homestay and apartment residence located in the heart of Galle, just 5 minutes from Karapitiya Teaching Hospital. We specialize in hosting overseas medical elective students, visiting faculty, researchers, and long-stay travelers seeking a quiet, safe, and private place to stay.',
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
    longitude: 80.221,
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
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'High-Speed WiFi Internet', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Fully Equipped Kitchen', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Washing Machine', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free Parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Hot Water 24/7', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Study Desk', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Work-Friendly Rooms', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Self Check-in Available', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Long-Term Stays Allowed', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Walking Distance to Hospital', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'High Privacy', value: true },
  ],
  petsAllowed: false,
  smokingAllowed: false,
  checkinTime: '14:00',
  checkoutTime: '11:00',
  numberOfRooms: 3,
  maximumAttendeeCapacity: 6,
  sameAs: [
    'https://www.airbnb.com/h/rnrfamily',
    'https://www.airbnb.com/users/profile/1463849258647435969',
    'https://www.google.com/maps/place/RnR+Private+Residence/@6.045787,80.220608,17z',
  ],
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
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
  ],
};

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
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
      name: 'Accommodation',
      item: 'https://www.karapitiyahomestayapartment.com#properties',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Medical Elective Housing',
      item: 'https://www.karapitiyahomestayapartment.com#about',
    },
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.karapitiyahomestayapartment.com/#localbusiness',
  name: 'RnR Residence Karapitiya',
  image: [
    'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368195/IMG-20251129-WA0201_ivfazj.jpg',
    'https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368180/IMG-20251129-WA0208_vxfnk8.jpg',
  ],
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
    longitude: 80.221,
  },
  url: 'https://www.karapitiyahomestayapartment.com',
  telephone: '+94759597703',
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
};
