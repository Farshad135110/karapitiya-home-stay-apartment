"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function About() {
  const [isVisible] = useState(true);
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-12 transform transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t.about.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Image Side */}
            <div
              className={`relative transform transition-all duration-700 delay-100 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
            >
              <div className="relative h-[350px] sm:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dokpye7fu/image/upload/v1767529853/IMG-20251129-WA0197_fzn0vv.jpg"
                  alt="Karapitiya Home Stay Apartment Exterior"
                  width="800"
                  height="600"
                  loading="eager"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg">
                    <p className="text-primary-800 font-semibold text-base sm:text-lg">
                      {t.about.quote}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-6 -right-6 w-32 h-32 sm:w-40 sm:h-40 bg-accent-400/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 sm:w-40 sm:h-40 bg-primary-400/20 rounded-full blur-3xl -z-10"></div>
            </div>

            {/* Content Side */}
            <div
              className={`transform transition-all duration-700 delay-200 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
            >
              <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
                <p>{t.about.description}</p>
                <p>{t.about.features}</p>
                <p>{t.about.location}</p>
                <p>{t.about.host}</p>
                <p className="text-primary-700 font-medium italic">
                  {t.about.tagline}
                </p>
              </div>

              {/* Space Details */}
              <div className="mt-8 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6">
                <p className="font-semibold text-primary-600">
                  {t.about.minimum}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
