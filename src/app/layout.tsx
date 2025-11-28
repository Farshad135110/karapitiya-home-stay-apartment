import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Karapitiya Home Stay Apartment | Student Accommodation near Karapitiya Hospital Galle',
  description: 'Premium homestay apartment for medical students and foreign students at Karapitiya Teaching Hospital, Galle, Sri Lanka. Modern facilities, perfect location, comfortable stay.',
  keywords: [
    'Karapitiya accommodation',
    'medical student housing Galle',
    'Karapitiya hospital homestay',
    'student apartment near Karapitiya',
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
  ],
  authors: [{ name: 'Karapitiya Home Stay Apartment' }],
  openGraph: {
    title: 'Karapitiya Home Stay Apartment - Perfect for Medical Students',
    description: 'Modern homestay near Karapitiya Teaching Hospital, Galle. Ideal for medical and foreign students.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764368260/Untitled_design_15_hwkj0c.png" type="image/png" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
