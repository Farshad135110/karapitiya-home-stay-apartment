import Hero from '@/components/Hero'
import About from '@/components/About'
import Facilities from '@/components/Facilities'
import Gallery from '@/components/Gallery'
import ThingsToDo from '@/components/ThingsToDo'
import Reviews from '@/components/Reviews'
import AirbnbCTA from '@/components/AirbnbCTA'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Facilities />
      <Gallery />
      <ThingsToDo />
      <Reviews />
      <AirbnbCTA />
      <Contact />
      <Footer />
    </main>
  )
}
