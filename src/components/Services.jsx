import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

export default function Services({ onSelectServiceForBooking }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-24 bg-[#FCFAF7] relative border-t border-[#EAE2D5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-stone-500 font-sans mb-2">
            OUR SERVICES
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-ink-900 font-normal tracking-wide">
            Bespoke Artistry &amp; Creative Experiences
          </h2>
          <p className="text-ink-600 text-sm md:text-base font-light mt-4 leading-relaxed">
            We offer a range of personalized calligraphy services designed to bring elegance, creativity, and individuality to every occasion.
          </p>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.services.map((service, index) => {
            const isFeatured = index === 0 || index === 2;
            return (
              <div
                key={service.id}
                className={`group bg-white rounded-2xl p-7 border border-[#E9E1D5] luxury-card-shadow luxury-card-hover flex flex-col justify-between relative overflow-hidden ${
                  index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Background watermarked service number */}
                <div 
                  aria-hidden="true"
                  className="pointer-events-none select-none absolute -right-4 -bottom-6 font-serif text-8xl text-stone-100 font-light z-0 group-hover:text-gold-100 transition-colors"
                >
                  {service.id}
                </div>

                <div className="relative z-10">
                  {/* Top bar with ID and Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl text-gold-600 font-light tracking-wider">
                      {service.id}.
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium px-3 py-1 bg-stone-100 text-stone-600 rounded-full group-hover:bg-gold-50 group-hover:text-gold-700 transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title and subtitle */}
                  <h3 className="font-serif text-2xl text-ink-900 mb-1 group-hover:text-gold-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.18em] text-stone-400 mb-4 font-sans">
                    {service.subtitle}
                  </p>

                  {/* Layout for the first featured card: 2-column on desktop */}
                  {index === 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 items-center">
                      <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xs border border-stone-100">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="space-y-4">
                        <p className="text-ink-600 text-sm font-light leading-relaxed">
                          {service.description}
                        </p>
                        <ul className="space-y-2">
                          {service.highlights.map((item, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2.5 text-xs text-stone-600">
                              <Check className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-xs border border-stone-100 my-4">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <p className="text-ink-600 text-xs md:text-sm font-light leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.highlights.slice(0, 3).map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 text-xs text-stone-600">
                            <Check className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                {/* Bottom CTA */}
                <div className="relative z-10 pt-4 border-t border-stone-100 mt-4 flex items-center justify-between">
                  <button
                    onClick={() => onSelectServiceForBooking(service.title)}
                    className="text-xs uppercase tracking-[0.2em] text-ink-900 group-hover:text-gold-700 font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <span>Request Commission</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href={siteData.brand.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-stone-400 hover:text-emerald-700 tracking-wide transition-colors"
                  >
                    WhatsApp Inquire &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Wedding / Event Occasions Pill Banner */}
        <div className="mt-14 bg-white border border-[#E9E1D5] rounded-2xl p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-600 font-semibold">Special Occasions &amp; Celebrations</span>
            <h4 className="font-serif text-2xl text-ink-900">Customized For Your Most Memorable Milestone</h4>
            <p className="text-xs text-stone-500 font-light">
              Weddings &bull; Henna Nights &bull; Bridal Showers &bull; Private Celebrations &bull; Special Events
            </p>
          </div>
          <button
            onClick={() => onSelectServiceForBooking("Weddings & Special Occasions")}
            className="px-8 py-3 bg-ink-900 hover:bg-gold-600 text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors shrink-0"
          >
            Inquire For Event
          </button>
        </div>

      </div>
    </section>
  );
}

