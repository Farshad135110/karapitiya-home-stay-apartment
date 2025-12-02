'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Star, Sparkles, TrendingUp } from 'lucide-react'

export default function AirbnbCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="airbnb"
      className="hidden"
    >
    </section>
  )
}
