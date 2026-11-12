import React from 'react';
import { siteData } from '../data/siteData';
import { ArrowDown, Heart, Share2, Sparkles, Compass, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative pt-8 pb-20 overflow-hidden bg-[#FAF7F2]">
      {/* Decorative large calligraphy watermark in background (mimicking middle panel of reference) */}
      <div 
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-12 left-1/2 -translate-x-1/2 w-full max-w-6xl text-center opacity-[0.035] text-ink-900 font-arabic text-[120px] md:text-[220px] leading-none z-0 whitespace-nowrap overflow-hidden"
      >
        روعة الفن والخط العربي
      </div>
      
      {/* Large English script watermark floating across */}
      <div 
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-1/3 -right-20 opacity-[0.04] text-ink-900 font-script text-[140px] md:text-[260px] leading-none z-0 rotate-[-8deg]"
      >
        Ruwaa Artistry
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* PANEL 1: MATCHING TOP CARD IN REFERENCE IMAGE */}
        <div className="bg-[#FCFAF7] border border-[#E9E1D5] rounded-2xl p-8 md:p-14 lg:p-16 mb-12 shadow-[0_20px_50px_-20px_rgba(26,23,21,0.06)] text-center relative overflow-hidden">
          
          {/* Subtle floral watermark corner hint */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-gold-100/40 to-transparent pointer-events-none rounded-bl-full" />
          
          {/* Eyebrow kickers */}
          <div className="space-y-1 mb-6">
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.3em] uppercase text-stone-500 font-sans">
              AN ART SHAPED BY DEVOTION
            </p>
            <p className="text-[11px] md:text-xs font-serif italic tracking-[0.2em] uppercase text-gold-600">
              WHERE TIMELESS HERITAGE MEETS MODERN LUXURY
            </p>
          </div>

          {/* Cursive handwritten accent line */}
          <div className="mb-4">
            <h2 className="font-script text-3xl md:text-5xl lg:text-6xl text-ink-900 font-normal tracking-wide relative inline-block">
              We Slow Down. We Reflect. Rise with Intention
              <span className="hidden md:inline-block ml-3 w-16 h-[1.5px] bg-ink-800 align-middle -translate-y-1"></span>
            </h2>
          </div>

          {/* Primary High-Fashion Headline */}
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-ink-900 font-light tracking-[0.02em] max-w-4xl mx-auto leading-[1.15] mb-6">
            {siteData.hero.headline}
          </h1>

          {/* Lead editorial body text */}
          <p className="text-ink-600 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed mb-8">
            {siteData.hero.description}
          </p>

          {/* Actions - Editorial outline box button matching reference */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#about"
              className="inline-block px-10 py-3.5 text-xs font-medium tracking-[0.25em] uppercase text-ink-900 border border-ink-900 hover:bg-ink-900 hover:text-white transition-all duration-300 bg-transparent min-w-[200px]"
            >
              Learn About Me
            </a>
            <a
              href="#portfolio"
              className="inline-block px-10 py-3.5 text-xs font-medium tracking-[0.25em] uppercase text-ink-700 border border-stone-300 hover:border-gold-500 hover:text-gold-700 transition-all duration-300 bg-white min-w-[200px]"
            >
              Explore Our Art
            </a>
            <button
              onClick={onOpenBooking}
              className="inline-block px-10 py-3.5 text-xs font-medium tracking-[0.25em] uppercase text-white bg-gold-600 hover:bg-gold-700 transition-all duration-300 min-w-[200px] shadow-sm"
            >
              Book Experience
            </button>
          </div>
        </div>

        {/* PANEL 2: MATCHING MIDDLE CARD IN REFERENCE IMAGE (Oversized script backdrop + Floating Card + Audio/Inquiry Links) */}
        <div className="relative bg-[#FCFAF7] border border-[#E9E1D5] rounded-2xl p-6 md:p-12 mb-12 shadow-[0_20px_50px_-20px_rgba(26,23,21,0.06)] overflow-hidden">
          
          {/* Big background bold script bleeding off edges */}
          <div 
            aria-hidden="true" 
            className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none select-none overflow-hidden"
          >
            <span className="font-script text-[110px] md:text-[190px] text-ink-900 whitespace-nowrap transform -rotate-3">
              Ruwaa Artistry Doha
            </span>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Floating Phone/Polaroid Card like reference */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[340px] bg-white rounded-2xl p-3.5 border border-stone-200/90 shadow-[0_25px_45px_-15px_rgba(26,23,21,0.12)] transform hover:rotate-0 transition-transform duration-500 -rotate-1">
                
                {/* Header of social card */}
                <div className="flex items-center justify-between px-2 pb-2.5 pt-1 border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gold-100 border border-gold-300 flex items-center justify-center text-gold-700 font-serif font-bold text-xs">
                      R
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-ink-900 tracking-wide font-sans">
                        @ruwaa_artistry
                      </p>
                      <p className="text-[9px] text-stone-400 font-sans">Doha &bull; Riyadh</p>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                </div>

                {/* Photo in card */}
                <div className="relative rounded-xl overflow-hidden mt-2.5 aspect-[4/5] bg-stone-100 group">
                  <img
                    src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop"
                    alt="Farisha Arif Hand Engraving Perfume Bottle"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold-300 font-medium">Bespoke Flacon</span>
                    <p className="font-serif text-lg leading-tight text-white/95">24K Liquid Gold &amp; Glass Engraving</p>
                  </div>
                </div>

                {/* Card Interaction Icons */}
                <div className="flex items-center justify-between px-2 pt-3 pb-1">
                  <div className="flex items-center gap-3 text-ink-700">
                    <button className="hover:text-red-500 transition-colors">
                      <Heart className="w-4 h-4 fill-stone-100 hover:fill-red-500" />
                    </button>
                    <button className="hover:text-gold-600 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold-600 font-medium">Farisha Arif Atelier</span>
                </div>

                {/* Caption in card */}
                <div className="px-2 pb-2 text-[11px] text-stone-600 font-light leading-relaxed">
                  <span className="font-medium text-ink-900">ruwaa_artistry</span> Transforming everyday objects into timeless bespoke keepsakes through authentic Arabic typography.
                </div>

                {/* Floating accessory badge (mimics the earbuds in reference) */}
                <div className="absolute -bottom-4 -right-4 bg-ink-900 text-white rounded-xl p-3 shadow-xl border border-stone-700 text-left max-w-[150px]">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-gold-300 font-medium">Live Activation</p>
                  <p className="text-[11px] font-serif font-light text-stone-200">100+ Luxury VIP Galas</p>
                </div>
              </div>
            </div>

            {/* Right Column: "TUNE IN:" / "DISCOVER:" Style List (Directly from reference) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] font-semibold text-ink-900 font-sans flex items-center gap-2 mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                  EXPERIENCE RUWAA:
                </p>
                <p className="text-xs text-stone-500 font-light max-w-md">
                  Select a tailored avenue to collaborate, explore bespoke commissions, or invite Farisha Arif to your next private event.
                </p>
              </div>

              {/* Minimalist horizontal rows with borders matching reference */}
              <div className="space-y-0 border-t border-stone-200 divide-y divide-stone-200">
                
                <a
                  href="#services"
                  className="flex items-center justify-between py-4 group hover:pl-2 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 group-hover:scale-125 transition-transform" />
                    <span className="text-xs md:text-sm font-medium tracking-[0.18em] uppercase text-ink-800 group-hover:text-gold-700">
                      LUXURY PERFUME &amp; GLASS ENGRAVING
                    </span>
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-stone-400 group-hover:text-ink-900 font-sans">
                    EXPLORE &rarr;
                  </span>
                </a>

                <a
                  href="#live-experiences"
                  className="flex items-center justify-between py-4 group hover:pl-2 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 group-hover:scale-125 transition-transform" />
                    <span className="text-xs md:text-sm font-medium tracking-[0.18em] uppercase text-ink-800 group-hover:text-gold-700">
                      LIVE BRAND ACTIVATIONS &amp; VIP GALAS
                    </span>
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-stone-400 group-hover:text-ink-900 font-sans">
                    QATAR &amp; KSA &rarr;
                  </span>
                </a>

                <a
                  href="#services"
                  className="flex items-center justify-between py-4 group hover:pl-2 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 group-hover:scale-125 transition-transform" />
                    <span className="text-xs md:text-sm font-medium tracking-[0.18em] uppercase text-ink-800 group-hover:text-gold-700">
                      CUSTOM CERAMICS &amp; ARTISANAL POTTERY
                    </span>
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-stone-400 group-hover:text-ink-900 font-sans">
                    HAND-TURNED &rarr;
                  </span>
                </a>

                <a
                  href={siteData.brand.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-4 group hover:pl-2 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 group-hover:scale-125 transition-transform" />
                    <span className="text-xs md:text-sm font-medium tracking-[0.18em] uppercase text-ink-800 group-hover:text-emerald-700">
                      INSTANT STUDIO INQUIRY ON WHATSAPP
                    </span>
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-stone-400 group-hover:text-emerald-700 font-sans">
                    +974 5519 6080 &rarr;
                  </span>
                </a>

              </div>

            </div>

          </div>
        </div>

        {/* STATS STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-6 px-4 border-y border-stone-200/80 bg-white/40 backdrop-blur-sm rounded-xl">
          {siteData.hero.stats.map((stat, i) => (
            <div key={i} className="py-2">
              <p className="font-serif text-2xl md:text-3xl font-light text-ink-900 tracking-tight">
                {stat.value}
              </p>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-stone-500 font-sans mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

