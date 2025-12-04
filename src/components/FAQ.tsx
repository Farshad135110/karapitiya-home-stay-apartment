'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'

export default function FAQ() {
  const { t } = useLanguage()
  const [isVisible] = useState(true)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = t.faq.items

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-10 transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full mb-4">
              <HelpCircle className="w-5 h-5" />
              <span className="font-semibold">{t.faq.title}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t.faq.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.faq.subtitle}
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndex === index}
                  aria-label={`Toggle FAQ: ${faq.question}`}
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-primary-600 flex-shrink-0 transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions CTA */}
          <div
            className={`mt-10 text-center transform transition-all duration-700 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <p className="text-gray-600 mb-4">{t.faq.contact}</p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all"
            >
              {t.faq.contact}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
