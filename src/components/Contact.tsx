'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, Send, Clock, MessageCircle, Heart, MessageSquare } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
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
              {t.contact.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.contact.subtitle}
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

          <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-7 gap-6 lg:gap-8 xl:gap-10 items-start">
            {/* Contact Form - Takes 2 columns */}
            <div
              className={`lg:col-span-2 xl:col-span-3 transform transition-all duration-700 delay-200 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {t.contact.form.send}
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.contact.form.name} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder={t.contact.form.name}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t.contact.form.email} *
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
                        {t.contact.form.phone}
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
                        {t.contact.form.checkin}
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
                        {t.contact.form.checkout}
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
                      {t.contact.form.message} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder={t.contact.form.message}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>{t.contact.form.send}</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Right Side - Takes 3 columns */}
            <div
              className={`lg:col-span-3 xl:col-span-4 transform transition-all duration-700 delay-300 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
            >
              {/* Important Information */}
              <div className="bg-gradient-to-br from-accent-500 to-primary-600 rounded-3xl p-8 shadow-2xl text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{t.contact.important.title}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    t.contact.important.minimum,
                    t.contact.important.booking,
                    t.contact.important.flexible,
                    t.contact.important.guests,
                    t.contact.important.privacy,
                    t.contact.important.pickup,
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

              {/* Google Maps and Business Profile */}
              <div className="mt-6 bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{t.contact.map.title}</h3>
                  <a
                    href="https://www.google.com/maps/place/RnR+Private+Residence/@6.045787,80.220608,17z/data=!4m6!3m5!1s0x3ae173cd207ad093:0x1507a8b4dca65985!8m2!3d6.045787!4d80.2206082!16s%2Fg%2F11vhvq7nnq?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span>{t.contact.map.button}</span>
                  </a>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg flex-1">
                  <iframe
                    src="https://maps.google.com/maps?q=RnR+Private+Residence+Karapitiya+Galle&t=&z=17&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '400px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="RnR Private Residence Location"
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-gray-600 text-sm font-medium">
                    <span className="font-bold text-primary-600">RnR Private Residence</span>
                    <br />
                    {t.contact.map.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
