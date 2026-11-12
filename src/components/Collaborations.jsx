import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Sparkles, Building2, CheckCircle2 } from 'lucide-react';

export default function Collaborations() {
  const [selectedBrand, setSelectedBrand] = useState(siteData.collaborations[0]);

  return (
    <section id="collaborations" className="py-24 bg-[#FAF7F2] relative border-t border-[#EAE2D5]">
      
      {/* Background typography watermark */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none select-none absolute right-0 top-1/4 opacity-[0.03] text-ink-900 font-serif text-[180px] leading-none z-0"
      >
        PRESTIGE
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-stone-500 font-sans mb-2">
            BRAND COLLABORATIONS &amp; EVENTS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-ink-900 font-normal tracking-wide">
            Creative Collaborations. Memorable Experiences.
          </h2>
          <p className="font-script text-2xl md:text-3xl text-gold-600 mt-2">
            Trusted by the World's Most Esteemed Names
          </p>
          <p className="text-ink-600 text-sm font-light mt-3 leading-relaxed">
            We are proud to have collaborated with prestigious brands, organizations, and events, showcasing the beauty of live calligraphy and personalized artistic experiences.
          </p>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-6" />
        </div>

        {/* Brand Logos/Badges Grid (9 Brands) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-12">
          {siteData.collaborations.map((collab, idx) => {
            const isSelected = selectedBrand.brand === collab.brand;
            return (
              <div
                key={idx}
                onClick={() => setSelectedBrand(collab)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden ${
                  isSelected
                    ? 'bg-white border-gold-500 shadow-md ring-1 ring-gold-400'
                    : 'bg-white/80 border-[#E9E1D5] hover:border-stone-400 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold-600 font-medium">
                    {collab.badge}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                  )}
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-ink-900 mb-2">
                  {collab.brand}
                </h3>
                <p className="text-xs text-stone-500 font-light line-clamp-2 leading-relaxed">
                  {collab.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Brand Spotlight Box */}
        {selectedBrand && (
          <div className="bg-[#FCFAF7] border border-[#E0D5C3] rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-ink-900 text-gold-300 text-[10px] uppercase tracking-[0.2em] rounded-full">
                    Featured Partnership
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-stone-400">
                    {selectedBrand.badge}
                  </span>
                </div>
                
                <h4 className="font-serif text-3xl md:text-4xl text-ink-900">
                  {selectedBrand.brand}
                </h4>

                <p className="text-stone-700 text-sm md:text-base font-light leading-relaxed">
                  {selectedBrand.description}
                </p>

                <div className="p-4 bg-white rounded-xl border border-stone-200/80">
                  <p className="text-xs text-ink-800 font-medium">
                    <strong className="text-gold-700">Artistic Execution:</strong> {selectedBrand.highlight}
                  </p>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-stone-200/70 text-center">
                <div className="w-16 h-16 rounded-full bg-gold-50 flex items-center justify-center text-gold-600 mb-3 border border-gold-200 font-serif text-2xl">
                  {selectedBrand.brand.charAt(0)}
                </div>
                <p className="font-serif text-lg text-ink-900">Live Brand Activation</p>
                <p className="text-[11px] text-stone-400 uppercase tracking-widest mt-1">Qatar &bull; GCC Region</p>
                <a
                  href={`https://wa.me/97455196080?text=Hello%20Ruwaa%20Artistry,%20I%20would%20like%20to%20discuss%20a%20brand%20collaboration%20similar%20to%20your%20work%20with%20${encodeURIComponent(selectedBrand.brand)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-5 py-2.5 bg-ink-900 hover:bg-gold-600 text-white text-[11px] uppercase tracking-[0.2em] transition-colors"
                >
                  Inquire For Brand
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

