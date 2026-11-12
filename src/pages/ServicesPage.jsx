import React from 'react';
import Services from '../components/Services';
import InteractiveCalligraphyPreview from '../components/InteractiveCalligraphyPreview';
import { siteData } from '../data/siteData';
import { MessageCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage({ onOpenBooking }) {
  return (
    <div className="py-12 sm:py-16 bg-[#FAF7F2] min-h-screen">
      
      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-6">
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-stone-500 font-sans mb-2">
          BESPOKE ARTISTRY &amp; EXPERIENCES
        </p>
        <h1 className="font-serif text-4xl sm:text-6xl text-ink-900 font-normal tracking-wide">
          Our Services
        </h1>
        <p className="font-script text-2xl sm:text-3xl text-gold-600 mt-2">
          Crafted with Passion, Precision, and Attention to Detail
        </p>
        <div className="w-16 h-[1.5px] bg-gold-400 mx-auto mt-6" />
      </div>

      {/* Full 5 Services Grid */}
      <Services onSelectServiceForBooking={(srv) => onOpenBooking(srv)} />

      {/* Interactive Calligraphy Studio */}
      <div className="mt-12">
        <InteractiveCalligraphyPreview />
      </div>

      {/* Special Wedding / Commission Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-[#1E1B18] text-white rounded-3xl p-8 sm:p-12 text-center border border-stone-800 shadow-xl">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-medium mb-2">Special Occasion Concierge</p>
          <h3 className="font-serif text-3xl sm:text-4xl font-light mb-3">Planning a Wedding, Henna Night, or Brand Gala?</h3>
          <p className="text-xs sm:text-sm text-stone-400 font-light max-w-xl mx-auto leading-relaxed mb-8">
            Farisha Arif travels on-site across Qatar and Saudi Arabia for live personalized calligraphy activations, custom scented favors, and artisanal keepsakes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onOpenBooking("Weddings & Special Occasions")}
              className="px-8 py-3.5 bg-gold-600 hover:bg-gold-700 text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              Book Event Services
            </button>
            <Link
              to="/live-experiences"
              className="px-8 py-3.5 border border-stone-700 hover:border-gold-400 text-stone-200 text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              Explore Live Experiences &rarr;
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

