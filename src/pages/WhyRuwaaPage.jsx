import React from 'react';
import { siteData } from '../data/siteData';

export default function WhyRuwaaPage({ onOpenBooking }) {
  return (
    <div className="bg-[#0E0E0D] text-white min-h-screen">
      
      {/* Header */}
      <section className="pt-14 sm:pt-20 pb-12 sm:pb-16 border-b border-stone-800 bg-[#121211]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-stone-400 font-sans mb-1">
            WHY RUWAA ARTISTRY?
          </p>
          <span className="font-calligraphy text-5xl sm:text-7xl text-[#E2C798] block mb-2">
            The Beauty Is in Every Detail
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-stone-100 font-light">
            Our Guiding Pillars of Excellence
          </h1>
          <div className="w-12 h-[1px] bg-[#A38257] mx-auto my-5" />
        </div>
      </section>

      {/* 5 Pillars */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.whyRuwaa.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#161614] border border-stone-800 p-8 space-y-3 flex flex-col justify-between hover:border-[#A38257]/60 transition-all rounded-xl hover:shadow-2xl"
            >
              <div>
                <span className="font-serif text-3xl text-[#E2C798] font-light">0{idx + 1}.</span>
                <h3 className="font-serif text-2xl text-white mt-2 mb-2 font-medium">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800/80">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#A38257] font-semibold">
                  Ruwaa Standard
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 text-center max-w-2xl mx-auto px-4 border-t border-stone-800">
        <h3 className="font-serif text-2xl sm:text-3xl text-white mb-3">Experience the Artistry Firsthand</h3>
        <p className="text-xs sm:text-sm text-stone-400 font-light mb-6">
          Whether you need bespoke gifts, wedding stationery, or live event activations, we bring distinction to every detail.
        </p>
        <button
          onClick={() => onOpenBooking("Why Ruwaa Inquiry")}
          className="px-8 py-3.5 bg-[#A38257] hover:bg-[#b8976b] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors rounded-sm"
        >
          Book Consultation
        </button>
      </section>

    </div>
  );
}
