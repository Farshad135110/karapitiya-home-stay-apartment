'use client'

import Link from 'next/link'
import { Mail, MapPin, Heart, Star, Award, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#properties', label: t.nav.properties },
    { href: '#about', label: t.nav.about },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#reviews', label: t.nav.reviews },
  ]

  const resources = [
    { href: '#facilities', label: t.nav.facilities },
    { href: '#things-to-do', label: t.nav.thingsToDo },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-8 py-12 sm:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://res.cloudinary.com/dokpye7fu/image/upload/v1767530935/a-professional-logo-design-featuring-the_5gZ7iDYxS-erpmt7dPQlNg_9INFVxWqS-S3eZYvESkJMQ_v91rs2.jpg" 
                alt="RnR Private Residence Logo" 
                className="w-14 h-14 object-contain rounded-xl bg-white shadow-lg" 
              />
              <div>
                <h3 className="font-bold text-xl">RnR Private Residence</h3>
                <div className="flex items-center space-x-1 mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm text-gray-300">5.0 • Airbnb Superhost</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t.footer.description}
            </p>
            <a
              href="https://www.airbnb.com/h/rnrfamily"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" 
                alt="Airbnb" 
                className="w-16 h-4 brightness-0 invert"
              />
              <span>{t.footer.bookNow}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary-400 to-accent-400 rounded-full"></div>
              <span>{t.footer.quickLinks}</span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent-400 transition-colors flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-accent-400 transition-colors"></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary-400 to-accent-400 rounded-full"></div>
              <span>{t.footer.resources}</span>
            </h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent-400 transition-colors flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-accent-400 transition-colors"></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center space-x-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary-400 to-accent-400 rounded-full"></div>
              <span>{t.footer.getInTouch}</span>
            </h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">Location</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Near Karapitiya Hospital<br />Galle, Sri Lanka
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/94759597703"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                    >
                      +94 75 959 7703
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">Email</p>
                    <a
                      href="mailto:rnr.residance@gmail.com"
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm break-all"
                    >
                      rnr.residance@gmail.com
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            {t.footer.copyright.replace('{year}', currentYear.toString())}
          </p>
          <p className="flex items-center justify-center text-gray-400 text-sm">
            {t.footer.madeWith} <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500 animate-pulse" />
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <a href="https://www.airbnb.com/h/rnrfamily" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              {t.footer.airbnbProfile}
            </a>
            <span className="text-gray-600">•</span>
            <a href="https://www.google.com/maps/place/RnR+Private+Residence/@6.045787,80.220608,17z/data=!4m6!3m5!1s0x3ae173cd207ad093:0x1507a8b4dca65985!8m2!3d6.045787!4d80.2206082!16s%2Fg%2F11vhvq7nnq?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              {t.footer.googleMaps}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
