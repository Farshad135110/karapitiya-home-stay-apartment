'use client'

import { useState } from 'react'
import { ExternalLink, Star, Sparkles, TrendingUp } from 'lucide-react'

export default function AirbnbCTA() {
  const [isVisible] = useState(true)

  return (
    <section
      id="airbnb"
      className="hidden"
    >
    </section>
  )
}
