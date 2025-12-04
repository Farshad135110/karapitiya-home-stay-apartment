import Hero from '@/components/Hero'
import Homes from '@/components/Homes'
import SuperhostBanner from '@/components/SuperhostBanner'
import About from '@/components/About'
import Facilities from '@/components/Facilities'
import Gallery from '@/components/Gallery'
import ThingsToDo from '@/components/ThingsToDo'
import Reviews from '@/components/Reviews'
import AirbnbCTA from '@/components/AirbnbCTA'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import { organizationSchema, faqSchema, breadcrumbSchema, localBusinessSchema } from '@/lib/structuredData'

export default function Home() {
  return (
    <>
      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>
      
      {/* Enhanced SEO - No visual changes */}
      <SEO
        title="RnR Residence | Karapitiya Medical Elective Accommodation & Long-Stay Apartments — Galle"
        description="Stay 5 minutes from Karapitiya Teaching Hospital. Fully furnished long-stay apartments for medical elective students, researchers, and foreign families in Galle."
        canonical="https://www.karapitiyahomestayapartment.com"
      />
      
      {/* Additional Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <main className="min-h-screen" id="main-content">
        <Navbar />
        <Hero />
        <Homes />
        <SuperhostBanner />
        <About />
        <Gallery />
        <Reviews />
        <Facilities />
        <ThingsToDo />
        <AirbnbCTA />
        <Contact />
        <FAQ />
        <Footer />
      </main>
    </>
  )
}
