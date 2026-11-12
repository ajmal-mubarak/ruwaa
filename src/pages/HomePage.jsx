import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function HomePage({ onOpenBooking }) {
  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* 1b. Introduction Section */}
      <Introduction />

      {/* Exploration Gateway Cards */}
      <section className="py-12 sm:py-16 bg-[#FAF7F2] border-t border-[#EAE2D5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-stone-500 font-sans mb-1">
              DISCOVER RUWAA ARTISTRY
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-ink-900 font-normal">
              Explore Our Creations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: About */}
            <Link
              to="/about"
              className="bg-white rounded-2xl p-6 border border-[#E9E1D5] luxury-card-shadow luxury-card-hover group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-600 font-medium">Meet Farisha</span>
                <h3 className="font-serif text-xl text-ink-900 mt-1 mb-2 group-hover:text-gold-700 transition-colors">
                  About the Artist
                </h3>
                <p className="text-xs text-stone-500 font-light leading-relaxed">
                  Where centuries-old Arabic typographic traditions meet contemporary luxury design across Qatar and Saudi Arabia.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs text-ink-900 group-hover:text-gold-600 font-medium uppercase tracking-wider">
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 2: Services */}
            <Link
              to="/services"
              className="bg-white rounded-2xl p-6 border border-[#E9E1D5] luxury-card-shadow luxury-card-hover group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-600 font-medium">Bespoke Offerings</span>
                <h3 className="font-serif text-xl text-ink-900 mt-1 mb-2 group-hover:text-gold-700 transition-colors">
                  Our Services
                </h3>
                <p className="text-xs text-stone-500 font-light leading-relaxed">
                  Glass &amp; fragrance bottle engraving, custom ceramics, live event activations, and bespoke wedding stationery.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs text-ink-900 group-hover:text-gold-600 font-medium uppercase tracking-wider">
                <span>View 5 Services</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 3: Portfolio */}
            <Link
              to="/portfolio"
              className="bg-white rounded-2xl p-6 border border-[#E9E1D5] luxury-card-shadow luxury-card-hover group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-600 font-medium">Curated Gallery</span>
                <h3 className="font-serif text-xl text-ink-900 mt-1 mb-2 group-hover:text-gold-700 transition-colors">
                  Our Portfolio
                </h3>
                <p className="text-xs text-stone-500 font-light leading-relaxed">
                  Explore selected works across 8 categories: Arabic calligraphy, leather foiling, gold engraving, and custom artwork.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs text-ink-900 group-hover:text-gold-600 font-medium uppercase tracking-wider">
                <span>Browse Gallery</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

          </div>

        </div>
      </section>

      {/* Simple Clean Contact CTA Banner */}
      <section className="py-16 bg-[#181614] text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <p className="font-script text-2xl sm:text-3xl text-gold-400 mb-2">
            Let’s create something beautiful together.
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl text-stone-100 font-light mb-4">
            Studio Inquiries &amp; Event Bookings
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed mb-6">
            Phone / WhatsApp: {siteData.brand.phoneDisplay} &bull; Location: Qatar &amp; Saudi Arabia
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={siteData.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              Contact on WhatsApp
            </a>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3 border border-stone-600 hover:border-gold-400 text-stone-200 text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
