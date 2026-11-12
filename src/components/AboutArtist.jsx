import React from 'react';
import { siteData } from '../data/siteData';
import { Sparkles, MapPin, Feather } from 'lucide-react';

export default function AboutArtist() {
  const { about } = siteData;

  return (
    <section id="about" className="py-24 bg-[#FAF7F2] relative border-t border-[#EAE2D5]">
      {/* Background script accent */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none select-none absolute right-4 top-12 opacity-[0.03] text-ink-900 font-script text-[180px] leading-none z-0"
      >
        Farisha Arif
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-stone-500 font-sans mb-2">
            MEET THE ARTIST
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-ink-900 font-normal tracking-wide">
            Farisha Arif
          </h2>
          <p className="font-script text-2xl md:text-3xl text-gold-600 mt-2">
            {about.headlineScript}
          </p>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-4" />
        </div>

        {/* Editorial 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Artist Photo Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[380px]">
              
              {/* Main Portrait */}
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(26,23,21,0.15)] border border-[#E5DDD0] bg-white p-3">
                <div className="aspect-[3/4] rounded-xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=900&auto=format&fit=crop"
                    alt="Farisha Arif - Calligraphy Artist"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-gold-300 font-medium">Studio Atelier</p>
                    <p className="font-serif text-xl">Doha, Qatar &bull; Riyadh, KSA</p>
                  </div>
                </div>
              </div>

              {/* Overlapping Floating Polaroid */}
              <div className="absolute -bottom-8 -right-4 md:-right-8 w-44 bg-white p-2.5 rounded-xl shadow-2xl border border-stone-200 transform rotate-3">
                <div className="aspect-square rounded-lg overflow-hidden bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=400&auto=format&fit=crop"
                    alt="Farisha Arif Hand Inking"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-script text-center text-sm text-ink-800 mt-2">
                  Farisha Arif
                </p>
                <p className="text-[8px] uppercase tracking-widest text-center text-stone-400">
                  Master Calligrapher
                </p>
              </div>

              {/* Decorative Location Badge */}
              <div className="absolute -top-4 -left-4 bg-[#1E1B18] text-white px-4 py-2 rounded-full shadow-lg border border-stone-700 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Qatar &amp; Saudi Arabia</span>
              </div>
            </div>
          </div>

          {/* Bio & Philosophy Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-ink-700 font-light text-sm md:text-base leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-light first-letter:mr-3 first-letter:float-left first-letter:text-gold-600">
                {about.bio[0]}
              </p>
              <p>
                {about.bio[1]}
              </p>
              <p>
                {about.bio[2]}
              </p>
              <p>
                {about.bio[3]}
              </p>
              <p className="italic text-ink-800 font-normal">
                "{about.bio[4]}"
              </p>
            </div>

            {/* Surfaces Explored */}
            <div className="pt-4 border-t border-stone-200">
              <p className="text-xs uppercase tracking-[0.22em] font-semibold text-ink-900 mb-3 flex items-center gap-2">
                <Feather className="w-3.5 h-3.5 text-gold-600" />
                SURFACES EXPLORED:
              </p>
              <div className="flex flex-wrap gap-2">
                {about.surfaces.map((surface, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full text-xs text-ink-700 bg-white border border-[#E2D8C9] hover:border-gold-500 transition-colors shadow-2xs font-sans tracking-wide"
                  >
                    {surface}
                  </span>
                ))}
              </div>
            </div>

            {/* Artist Signature Quote Block */}
            <div className="p-5 bg-white/70 border-l-2 border-gold-500 rounded-r-xl shadow-xs">
              <p className="font-serif italic text-ink-900 text-base md:text-lg">
                "Every stroke is an intentional bridge between our rich Arabian heritage and the luxury of modern living."
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-stone-500 mt-2 font-medium">
                — Farisha Arif, Founder of Ruwaa Artistry
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
