'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, Send, Clock, MessageCircle, Heart, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    message: '',
  })
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate phone number (digits only)
    if (formData.phone && !/^\+?[0-9\s-]+$/.test(formData.phone)) {
      alert('Please enter a valid phone number (numbers only)')
      return
    }
    
    // Validate dates
    if (formData.checkIn && formData.checkOut) {
      const checkIn = new Date(formData.checkIn)
      const checkOut = new Date(formData.checkOut)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      if (checkIn < today) {
        alert('Check-in date cannot be in the past')
        return
      }
      
      if (checkOut <= checkIn) {
        alert('Check-out date must be after check-in date')
        return
      }
      
      // Calculate minimum stay (14 days)
      const daysDiff = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
      if (daysDiff < 14) {
        alert('Minimum stay is 14 days. Please adjust your dates.')
        return
      }
    }
    
    // Create WhatsApp message with form data
    const message = `Hello! I'm interested in booking your property.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCheck-in: ${formData.checkIn}\nCheck-out: ${formData.checkOut}\n\nMessage: ${formData.message}`
    
    const whatsappUrl = `https://wa.me/94759597703?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      message: '',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      content: '+94 75 959 7703',
      link: 'https://wa.me/94759597703',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'rnr.residance@gmail.com',
      link: 'mailto:rnr.residance@gmail.com',
      color: 'from-blue-500 to-blue-600',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-10 transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get in <span className="text-primary-600">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? We're here to help. Contact us for bookings and inquiries
            </p>
          </div>

          {/* Contact Info Cards */}
          <div
            className={`grid md:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <a
                  key={index}
                  href={info.link || '#'}
                  target={info.link?.startsWith('http') ? '_blank' : undefined}
                  rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 ${
                    !info.link ? 'pointer-events-none' : ''
                  }`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl mb-4`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{info.content}</p>
                </a>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
            {/* Contact Form - Takes 2 columns */}
            <div
              className={`lg:col-span-2 transform transition-all duration-700 delay-200 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Send us a Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        pattern="[0-9+\s-]*"
                        title="Please enter numbers only"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="+94 XX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Check-out Date
                      </label>
                      <input
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your stay requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Right Side - Takes 3 columns */}
            <div
              className={`lg:col-span-3 transform transition-all duration-700 delay-300 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
            >
              {/* Important Information */}
              <div className="bg-gradient-to-br from-accent-500 to-primary-600 rounded-3xl p-8 shadow-2xl text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Important Information</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    'Minimum stay: 14 days required',
                    'Direct booking through Airbnb',
                    'Flexible check-in/check-out times',
                    'Coordinate with us for additional guests',
                    'Privacy guaranteed - no third parties',
                    'Airport pickup available on request',
                  ].map((tip, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <svg
                        className="w-6 h-6 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-white/95 text-base leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
