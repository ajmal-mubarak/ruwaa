import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import HaloCarousel from '../components/HaloCarousel';
import { siteData } from '../data/siteData';

export default function HomePage({ onOpenBooking }) {
  const marqueeServices = siteData.services.slice(0, 3);
  const marqueeBrands = ["Lexus", "TikTok", "Paris Gallery", "Rituals", "Qatar Masters", "Qatar Museums"];

  return (
    <div className="space-y-0 text-[#1C1917]">
      
      {/* 1. Hero Section (Fits 100% within initial screen viewport) */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* 2. Introduction Section (Elegance In Every Letter) */}
      <Introduction />

      {/* 3. Halo Carousel Portfolio Showcase (Generously spaced cards + screen height fit) */}
      <HaloCarousel onOpenBooking={onOpenBooking} />

      {/* 4. Services Preview */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EADDCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#9E672B] font-sans mb-1">
              OUR SERVICES
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-light">
              Bespoke Artistry &amp; Creative Experiences
            </h2>
            <p className="text-xs sm:text-sm text-[#57534E] font-light mt-3 leading-relaxed">
              We offer a range of personalized calligraphy services designed to bring elegance, creativity, and individuality to every occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marqueeServices.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-[#EADDCB] hover:border-[#C79F5E]/60 p-6 flex flex-col justify-between rounded-xl transition-all hover:shadow-xl shadow-xs"
              >
                <div>
                  <span className="font-serif text-2xl text-[#9E672B] font-light">{service.id}.</span>
                  <h3 className="font-serif text-xl text-[#1C1917] mt-2 mb-1">{service.title}</h3>
                  <p className="text-xs text-[#C79F5E] uppercase tracking-wider mb-4 font-sans font-medium">{service.subtitle}</p>
                  <div className="aspect-[16/10] overflow-hidden mb-4 bg-[#F4EFE6] rounded-lg">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover standard-image-hover" />
                  </div>
                  <p className="text-xs text-[#57534E] font-light leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#EADDCB] mt-2 flex items-center justify-between">
                  <Link
                    to="/services"
                    className="text-xs uppercase tracking-[0.16em] text-stone-600 hover:text-[#9E672B] font-medium transition-colors"
                  >
                    View Details &rarr;
                  </Link>
                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="text-[11px] text-[#9E672B] hover:text-[#1C1917] uppercase tracking-wider font-semibold"
                  >
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block px-8 py-3.5 bg-[#C79F5E] hover:bg-[#9E672B] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors rounded-sm shadow-sm"
            >
              Explore All 5 Services
            </Link>
          </div>

        </div>
      </section>

      {/* 5. Clean Brand Collaborations Bar */}
      <section className="py-14 bg-[#F4EFE6] border-b border-[#EADDCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#9E672B] font-semibold mb-6">
            TRUSTED BY PRESTIGIOUS CLIENTS &amp; BRANDS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-stone-700 font-serif text-xl sm:text-2xl">
            {marqueeBrands.map((brand, i) => (
              <span key={i} className="hover:text-[#9E672B] transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Simple, Elegant Contact CTA */}
      <section className="py-16 sm:py-20 bg-[#FAF7F2] text-[#1C1917] text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <span className="font-calligraphy text-4xl sm:text-5xl text-[#9E672B] block mb-2">
            Let’s Create Something Beautiful Together.
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1917] font-light mb-4">
            Studio Inquiries &amp; Event Bookings
          </h2>
          <p className="text-xs sm:text-sm text-[#57534E] font-light leading-relaxed mb-6">
            Phone / WhatsApp: {siteData.brand.phoneDisplay} &bull; Email: {siteData.brand.email} &bull; Qatar &amp; Saudi Arabia
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={siteData.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors rounded-sm shadow-sm"
            >
              Contact on WhatsApp
            </a>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 border border-[#EADDCB] hover:border-[#C79F5E] bg-white text-[#1C1917] hover:text-[#9E672B] text-xs uppercase tracking-[0.2em] font-medium transition-colors rounded-sm shadow-xs"
            >
              Send Studio Message
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
