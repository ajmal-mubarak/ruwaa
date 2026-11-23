import React from 'react';
import { siteData } from '../data/siteData';
import { Check, MessageCircle, ArrowRight } from 'lucide-react';

export default function ServicesPage({ onOpenBooking }) {
  return (
    <div className="bg-[#0E0E0D] text-white min-h-screen">
      
      {/* Header */}
      <section className="pt-14 sm:pt-20 pb-12 sm:pb-16 border-b border-stone-800 bg-[#121211]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-stone-400 font-sans mb-1">
            BESPOKE ARTISTRY
          </p>
          <span className="font-calligraphy text-5xl sm:text-7xl text-[#E2C798] block mb-2">
            Our Services
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-stone-100 font-light">
            Bespoke Artistry &amp; Creative Experiences
          </h1>
          <div className="w-12 h-[1px] bg-[#A38257] mx-auto my-5" />
          <p className="text-stone-300 font-light text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            We offer a range of personalized calligraphy services designed to bring elegance, creativity, and individuality to every occasion.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-20">
        {siteData.services.map((service, index) => {
          const isEven = index % 2 === 1;
          const serviceWhatsAppUrl = `https://wa.me/97455196080?text=Hello%20Ruwaa%20Artistry,%20I%20am%20interested%20in%20inquiring%20about%20your%20service:%20${encodeURIComponent(service.title)}`;

          return (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column */}
              <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="aspect-[16/11] bg-stone-900 overflow-hidden border border-stone-800 rounded-xl shadow-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover standard-image-hover"
                  />
                </div>
              </div>

              {/* Text Column */}
              <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex items-center gap-3">
                  <span className="font-serif text-3xl text-[#E2C798] font-light">{service.id}.</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#A38257] font-sans font-semibold">{service.badge}</span>
                </div>
                
                <h2 className="font-serif text-2xl sm:text-3xl text-white font-light">
                  {service.title}
                </h2>

                <p className="text-stone-400 font-light text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-2">
                  <p className="text-[11px] uppercase tracking-wider text-stone-300 font-semibold mb-2">Highlights:</p>
                  <ul className="space-y-1.5">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-stone-300 font-light">
                        <Check className="w-3.5 h-3.5 text-[#A38257] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="px-6 py-3 bg-[#A38257] hover:bg-[#b8976b] text-white text-xs uppercase tracking-[0.18em] transition-colors rounded-sm font-medium"
                  >
                    Request Booking
                  </button>
                  <a
                    href={serviceWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 border border-stone-700 hover:border-emerald-500 text-stone-300 hover:text-emerald-400 text-xs uppercase tracking-[0.16em] transition-colors rounded-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Special Celebrations Notice */}
      <section className="py-16 bg-[#121211] border-t border-stone-800 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#E2C798] font-semibold mb-1">
            SPECIAL OCCASIONS
          </p>
          <h3 className="font-serif text-2xl sm:text-3xl text-white mb-3">
            Weddings &bull; Henna Nights &bull; Bridal Showers &bull; Private Celebrations
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 font-light mb-6">
            Custom place cards, clay pots, paper fans, and guest book calligraphy designed for your most memorable milestones.
          </p>
          <button
            onClick={() => onOpenBooking("Weddings & Special Occasions")}
            className="px-8 py-3.5 bg-[#A38257] hover:bg-[#b8976b] text-white text-xs uppercase tracking-[0.2em] transition-colors rounded-sm font-medium"
          >
            Inquire For Event
          </button>
        </div>
      </section>

    </div>
  );
}
