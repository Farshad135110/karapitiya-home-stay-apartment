'use client'

import { useEffect, useRef, useState } from 'react'
import { Award, Star, CheckCircle, TrendingUp } from 'lucide-react'

export default function SuperhostBanner() {
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

  const achievements = [
    { icon: Star, text: '5.0 Rating', desc: 'Perfect Score' },
    { icon: CheckCircle, text: '100% Response', desc: 'Always Available' },
    { icon: TrendingUp, text: '24+ Reviews', desc: 'Verified Guests' },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {/* Main Content - Flex Layout */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-12">
              {/* Large Superhost Badge */}
              <div className="flex-shrink-0">
                <div className="bg-white/10 backdrop-blur-sm border-4 border-white/30 rounded-3xl p-8 shadow-2xl">
                  <img 
                    src="https://res.cloudinary.com/dhfqwxyb4/image/upload/v1764518017/CITYPNG.COM_HD_Airbnb_Superhost_Badge_Logo_PNG_Image_-_1500x1500_xmf6xc.png" 
                    alt="Airbnb Superhost Badge" 
                    className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6">
                  <Award className="w-5 h-5" />
                  <span className="font-semibold">Excellence Recognized</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Proud Airbnb <br className="hidden lg:block" />
                  <span className="text-yellow-300">Superhost</span>
                </h2>
                
                <p className="text-xl text-white/90 mb-8 max-w-xl">
                  We're honored to be recognized as an Airbnb Superhost for our commitment to exceptional hospitality, 
                  outstanding service, and maintaining the highest standards for our guests.
                </p>

                {/* Achievement Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                    >
                      <achievement.icon className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                      <div className="text-white font-bold text-lg mb-1">{achievement.text}</div>
                      <div className="text-white/80 text-sm">{achievement.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center">
              <a
                href="#airbnb"
                className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-primary-600 bg-white rounded-full shadow-2xl hover:shadow-white/30 transform hover:scale-105 transition-all"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" 
                  alt="Airbnb" 
                  className="w-24 h-6 mr-3"
                />
                Book with Confidence
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
