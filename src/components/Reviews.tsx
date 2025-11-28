'use client'

import { useEffect, useRef, useState } from 'react'
import { Star, Quote } from 'lucide-react'

export default function Reviews() {
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

  const reviews = [
    {
      name: 'Anja',
      role: 'Medical Student from Germany',
      avatar: 'https://placehold.co/100x100/0ea5e9/white?text=A',
      rating: 5,
      text: 'We are two medical students from Germany who stayed here while working at Karapitiya General Hospital. The apartment was absolutely fantastic—spacious, comfortable, and very well-equipped with all the essentials for a longer stay. We especially appreciated the excellent privacy and always felt comfortable at home. The host was extremely kind, helpful, quick to respond, and always supportive. The value of this apartment is definitely higher than the price. We can fully recommend this place!',
      date: '3 weeks ago',
    },
    {
      name: 'Igor',
      role: 'International Guest',
      avatar: 'https://placehold.co/100x100/f97316/white?text=I',
      rating: 5,
      text: 'This is the place you\'d definitely want to stay in. For me, it started with meeting a host who showed me the surroundings of the town and even met me at the train station - a big thanks to him for that 🙏 The place itself is top notch: very spacious, clean and has everything one might need to feel like home. Spacious is not the word for it, for just myself it was too big and I didn\'t even use half of the premises. For 2 people it\'s more than enough too. Worth every penny, if you ask me. Just note that you pay for the internet, electricity and water on your own.',
      date: 'October 2025',
    },
    {
      name: 'Dr. Sarah Johnson',
      role: 'Medical Student from UK',
      avatar: 'https://placehold.co/100x100/8b5cf6/white?text=SJ',
      rating: 5,
      text: 'Perfect location for medical students! Just a short ride to Karapitiya Hospital. The apartment is clean, modern, and has everything we need. The host is very responsive and helpful.',
      date: 'October 2024',
    },
    {
      name: 'Kumar Patel',
      role: 'Medical Intern',
      avatar: 'https://placehold.co/100x100/10b981/white?text=KP',
      rating: 5,
      text: 'Excellent accommodation with all amenities. The WiFi is fast which is crucial for my online lectures. Close to the hospital and local restaurants. Highly recommend for medical students!',
      date: 'September 2024',
    },
    {
      name: 'Emma Williams',
      role: 'Foreign Medical Graduate',
      avatar: 'https://placehold.co/100x100/ec4899/white?text=EW',
      rating: 5,
      text: 'I stayed here for 3 months during my clinical rotation. The apartment is spacious, comfortable, and in a safe neighborhood. Perfect for medical professionals!',
      date: 'August 2024',
    },
    {
      name: 'Ahmed Hassan',
      role: 'Medical Student',
      avatar: 'https://placehold.co/100x100/f59e0b/white?text=AH',
      rating: 5,
      text: 'Best homestay in Galle! The kitchen is fully equipped, rooms are comfortable with AC, and the location is unbeatable. The host made sure we had everything we needed.',
      date: 'November 2024',
    },
  ]

  const stats = {
    averageRating: '4.9',
    totalReviews: '50+',
    responseRate: '100%',
    responseTime: '< 1 hour',
  }

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="py-12 lg:py-16 bg-gradient-to-b from-primary-50 to-white"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-10 transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Guest <span className="text-primary-600">Reviews</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what medical students and healthcare professionals say about their stay
            </p>
          </div>

          {/* Stats Bar */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-center text-white shadow-lg">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 fill-yellow-300 text-yellow-300 mr-1" />
                <span className="text-3xl font-bold">{stats.averageRating}</span>
              </div>
              <p className="text-white/90 font-medium">Average Rating</p>
            </div>
            <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl p-6 text-center text-white shadow-lg">
              <div className="text-3xl font-bold mb-2">{stats.totalReviews}</div>
              <p className="text-white/90 font-medium">Total Reviews</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-center text-white shadow-lg">
              <div className="text-3xl font-bold mb-2">{stats.responseRate}</div>
              <p className="text-white/90 font-medium">Response Rate</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-center text-white shadow-lg">
              <div className="text-3xl font-bold mb-2">{stats.responseTime}</div>
              <p className="text-white/90 font-medium">Response Time</p>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 transform ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{review.name}</h4>
                      <p className="text-sm text-gray-600">{review.role}</p>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-primary-200" />
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">{review.text}</p>

                <p className="text-sm text-gray-500 font-medium">{review.date}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`text-center transform transition-all duration-700 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <p className="text-gray-600 mb-6 text-lg">
              Join our happy guests and experience the best accommodation near Karapitiya Hospital
            </p>
            <a
              href="#airbnb"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-accent-500 to-accent-600 rounded-full hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Book Your Stay Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
