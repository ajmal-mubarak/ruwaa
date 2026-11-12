import React from 'react';
import { siteData } from '../data/siteData';
import { Sparkles, Feather, Award, Heart, Crown } from 'lucide-react';

export default function WhyRuwaa() {
  const iconMap = {
    Sparkles: Sparkles,
    Feather: Feather,
    Award: Award,
    Heart: Heart,
    Crown: Crown
  };

  return (
    <section id="why-ruwaa" className="py-24 bg-[#FAF7F2] relative border-t border-[#EAE2D5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-stone-500 font-sans mb-2">
            WHY RUWAA ARTISTRY?
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-ink-900 font-normal tracking-wide">
            The Beauty Is in Every Detail.
          </h2>
          <p className="font-script text-2xl md:text-3xl text-gold-600 mt-2">
            An Uncompromising Dedication to the Craft
          </p>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-6" />
        </div>

        {/* 5 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.whyRuwaa.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-[#E9E1D5] luxury-card-shadow luxury-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200/80 flex items-center justify-center text-gold-700 mb-6">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-2xl text-ink-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-stone-600 text-xs md:text-sm font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-6 border-t border-stone-100 mt-6 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400">Pillar 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                </div>
              </div>
            );
          })}

          {/* 6th Card: Quote / Atelier statement */}
          <div className="bg-[#1E1B18] text-white rounded-2xl p-8 border border-stone-800 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-medium">
                The Ruwaa Promise
              </span>
              <p className="font-serif italic text-lg md:text-xl text-[#F4EFE6] mt-4 leading-relaxed font-light">
                "We do not merely write names; we encapsulate memory, reverence, and elegance into tangible heirlooms."
              </p>
            </div>
            <div className="pt-6 border-t border-stone-800 mt-6 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400">Farisha Arif Atelier</span>
              <span className="text-gold-400 font-serif text-lg">✦</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

