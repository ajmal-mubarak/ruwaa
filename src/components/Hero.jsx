import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 bg-[#FAF7F2]">
      
      {/* Subtle Arabic calligraphy watermark in background */}
      <div 
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-4 left-1/2 -translate-x-1/2 w-full text-center opacity-[0.03] text-ink-900 font-arabic text-[100px] sm:text-[180px] leading-none z-0 whitespace-nowrap overflow-hidden"
      >
        روعة الفن والخط
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Hero Card matching Reference Image */}
        <div className="bg-[#FCFAF7] border border-[#E9E1D5] rounded-2xl p-6 sm:p-12 lg:p-16 shadow-[0_20px_50px_-20px_rgba(26,23,21,0.05)] text-center relative overflow-hidden">
          
          {/* Eyebrows */}
          <div className="space-y-1 mb-6">
            <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-stone-500 font-sans">
              RUWAA ARTISTRY &bull; DOHA &amp; RIYADH
            </p>
            <p className="text-[10px] sm:text-[11px] font-serif italic tracking-[0.18em] uppercase text-gold-600">
              WHERE TIMELESS ARABIC &amp; ENGLISH CALLIGRAPHY MEETS LUXURY
            </p>
          </div>

          {/* Cursive handwritten accent */}
          <div className="mb-4">
            <h2 className="font-script text-2xl sm:text-4xl md:text-5xl text-ink-900 font-normal tracking-wide relative inline-block">
              We Slow Down. We Reflect. Rise with Intention —
            </h2>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ink-900 font-light tracking-[0.01em] max-w-3xl mx-auto leading-[1.2] mb-6">
            The Art of Calligraphy, Crafted with Elegance.
          </h1>

          {/* Subtitle */}
          <p className="font-serif italic text-base sm:text-lg text-gold-700 max-w-2xl mx-auto mb-5 font-normal">
            Where timeless Arabic and English calligraphy meets contemporary luxury.
          </p>

          {/* Official Content Paragraph */}
          <p className="text-ink-600 text-xs sm:text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed mb-8">
            At Ruwaa Artistry, we transform everyday objects and special moments into extraordinary artistic expressions through bespoke calligraphy, personalized creations, and live artistic experiences. From luxury engraving to handcrafted keepsakes, every creation is designed with passion, precision, and attention to detail.
          </p>

          {/* Minimalist Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/portfolio"
              className="w-full sm:w-auto px-8 sm:px-10 py-3.5 text-xs font-medium tracking-[0.22em] uppercase text-ink-900 border border-ink-900 hover:bg-ink-900 hover:text-white transition-all duration-300 bg-transparent min-w-[200px]"
            >
              Explore Our Art
            </Link>
            
            <button
              onClick={() => onOpenBooking("Hero Book Calligraphy Experience")}
              className="w-full sm:w-auto px-8 sm:px-10 py-3.5 text-xs font-medium tracking-[0.22em] uppercase text-white bg-gold-600 hover:bg-gold-700 transition-all duration-300 min-w-[200px] shadow-xs"
            >
              Book an Experience
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
