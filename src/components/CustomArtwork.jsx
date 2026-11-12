import React from 'react';
import { siteData } from '../data/siteData';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function CustomArtwork({ onOpenBooking }) {
  const { exhibitions } = siteData;

  return (
    <section className="py-24 bg-[#FAF7F2] relative border-t border-[#EAE2D5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Editorial Layout */}
        <div className="bg-[#FCFAF7] border border-[#E9E1D5] rounded-2xl p-8 md:p-14 shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-stone-500 font-sans mb-2">
                  {exhibitions.kicker}
                </p>
                <h2 className="font-serif text-3xl md:text-5xl text-ink-900 font-normal tracking-wide">
                  {exhibitions.title}
                </h2>
                <p className="font-script text-2xl md:text-3xl text-gold-600 mt-2">
                  {exhibitions.subtitle}
                </p>
              </div>

              <p className="text-ink-600 text-sm md:text-base font-light leading-relaxed">
                {exhibitions.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl border border-stone-200/80">
                  <h4 className="font-serif text-lg text-ink-900 mb-1">Abstract Compositions</h4>
                  <p className="text-xs text-stone-500 font-light">
                    Geometric fluidity and negative space crafted for upscale architectural spaces and private collectors.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-stone-200/80">
                  <h4 className="font-serif text-lg text-ink-900 mb-1">Bespoke Interior Accents</h4>
                  <p className="text-xs text-stone-500 font-light">
                    Hand-carved and gilded ceramics, sculptural stone vessels, and statement canvases.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenBooking("Custom Artwork & Interior Commissions")}
                  className="px-8 py-3.5 bg-ink-900 hover:bg-gold-600 text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                >
                  Commission Gallery Piece
                </button>
                <a
                  href={siteData.brand.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 border border-stone-300 hover:border-gold-500 text-ink-800 text-xs uppercase tracking-[0.2em] font-medium bg-white transition-colors"
                >
                  Discuss Interior Project
                </a>
              </div>
            </div>

            {/* Right Visual Collage */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-md border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop"
                  alt="Abstract Arabic Calligraphy Painting"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-4">
                <div className="aspect-square rounded-xl overflow-hidden shadow-md border border-stone-200">
                  <img
                    src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop"
                    alt="Hand-turned pottery with Arabic calligraphy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 bg-ink-900 text-white rounded-xl text-center">
                  <p className="font-serif text-2xl text-gold-300">Doha &bull; Riyadh</p>
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 mt-1">Bespoke Commissions</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
