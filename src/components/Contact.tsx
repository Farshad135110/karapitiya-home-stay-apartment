'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Heart, MessageSquare } from 'lucide-react'

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
    // Here you would typically send the form data to an API
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you shortly.')
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
      icon: Phone,
      title: 'Phone',
      content: '+94 XX XXX XXXX',
      link: 'tel:+94xxxxxxxxx',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      content: 'Chat with us',
      link: 'https://wa.me/94xxxxxxxxx',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@karapitiyahomestay.com',
      link: 'mailto:info@karapitiyahomestay.com',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Near Karapitiya Hospital, Galle',
      link: 'https://maps.google.com',
      color: 'from-red-500 to-red-600',
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
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 transform transition-all duration-700 ${
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

          <div className="grid lg:grid-cols-5 gap-8 items-start">
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
              className={`lg:col-span-3 space-y-6 transform transition-all duration-700 delay-300 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
            >
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl overflow-hidden shadow-2xl h-[280px] flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Prime Location
                  </h3>
                  <p className="text-gray-700 mb-4">
                    5 minutes ride from Karapitiya Teaching Hospital
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>

              {/* Two column layout for info boxes */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Quick Info */}
                <div className="bg-gradient-to-br from-accent-500 to-primary-600 rounded-3xl p-6 shadow-2xl text-white">
                  <h3 className="text-xl font-bold mb-4">Important Information</h3>
                  <ul className="space-y-3">
                    {[
                      'Book early for guaranteed availability',
                      'Long-term stays (28+ days) available',
                      'Direct booking through Airbnb',
                      'Flexible check-in/check-out times',
                      'If you need to add another guest, please coordinate with us',
                      'Third party not allowed - privacy guaranteed',
                      'Airport pickup can be arranged',
                      'Entire floor with separate entrance',
                    ].map((tip, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <svg
                          className="w-5 h-5 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-white/95 text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* House Rules */}
                <div className="bg-white rounded-3xl p-6 shadow-2xl border-2 border-primary-200">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    House Rules
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm italic">
                    Treat this home with care and respect.
                  </p>
                  
                  <div className="space-y-4">
                    {/* Check-in */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-2 text-primary-600" />
                        Check-in: After 3:00 PM
                      </h4>
                    </div>

                    {/* During Stay */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">During Your Stay</h4>
                      <ul className="space-y-1.5 ml-6">
                        <li className="flex items-start text-gray-700 text-sm">
                          <span className="text-primary-600 mr-2">•</span>
                          <span>2 guests max (more with conditions)</span>
                        </li>
                        <li className="flex items-start text-gray-700 text-sm">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>No pets, parties, smoking</span>
                        </li>
                        <li className="flex items-start text-gray-700 text-sm">
                          <span className="text-red-500 mr-2">✗</span>
                          <span>No commercial photography</span>
                        </li>
                      </ul>
                    </div>

                    {/* Additional Rules */}
                    <div className="bg-amber-50 rounded-lg p-3 border-l-4 border-amber-500">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Additional Rules</h4>
                      <ul className="space-y-1.5">
                        <li className="flex items-start text-gray-700 text-xs">
                          <span className="text-amber-600 mr-2">⚠</span>
                          <span>Utility bills: Guest responsibility</span>
                        </li>
                        <li className="flex items-start text-gray-700 text-xs">
                          <span className="text-amber-600 mr-2">⚠</span>
                          <span>Liquor: Permission required</span>
                        </li>
                        <li className="flex items-start text-gray-700 text-xs">
                          <span className="text-amber-600 mr-2">⚠</span>
                          <span>Outside people: Not allowed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Private Stay Highlight */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-6 shadow-2xl text-white">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Heart className="w-6 h-6 mr-2" />
                  Private Stay for Medical Electives Near Karapitiya Hospital
                </h3>
                <p className="text-white/95 leading-relaxed text-sm">
                  Perfect for medical students on electives. Enjoy a private, peaceful environment with easy access to Karapitiya Hospital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
