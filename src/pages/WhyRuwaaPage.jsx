import React from 'react';
import { siteData } from '../data/siteData';

export default function WhyRuwaaPage({ onOpenBooking }) {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Header */}
      <section className="pt-14 sm:pt-20 pb-12 sm:pb-16 border-b border-stone-100 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-stone-500 font-sans mb-1">
            WHY RUWAA ARTISTRY?
          </p>
          <span className="font-calligraphy text-5xl sm:text-7xl text-[#A38257] block mb-2">
            The Beauty Is in Every Detail
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 font-light">
            Our Guiding Pillars of Excellence
          </h1>
          <div className="w-12 h-[1px] bg-stone-300 mx-auto my-5" />
        </div>
      </section>

      {/* 5 Pillars (Clean agency cards) */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.whyRuwaa.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200 p-8 space-y-3 flex flex-col justify-between hover:border-stone-400 transition-colors"
            >
              <div>
                <span className="font-serif text-3xl text-[#A38257] font-light">0{idx + 1}.</span>
                <h3 className="font-serif text-2xl text-stone-900 mt-2 mb-2 font-medium">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 text-[10px] uppercase tracking-widest text-stone-400">
                Farisha Arif Atelier
              </div>
            </div>
          ))}

          {/* Statement Card */}
          <div className="bg-[#1C1A18] text-white p-8 space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">Atelier Vow</span>
              <blockquote className="font-serif italic text-xl text-stone-200 font-light mt-3 leading-relaxed">
                "We transform everyday objects into extraordinary artistic expressions through bespoke craftsmanship and devotion."
              </blockquote>
            </div>
            <div className="pt-4 border-t border-stone-800 text-[10px] uppercase tracking-widest text-stone-400">
              Ruwaa Artistry &bull; Qatar &amp; Saudi Arabia
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => onOpenBooking("Why Ruwaa Inquiry")}
            className="px-10 py-3.5 bg-stone-900 hover:bg-[#A38257] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
          >
            Commission an Artwork
          </button>
        </div>
      </section>

    </div>
  );
}
