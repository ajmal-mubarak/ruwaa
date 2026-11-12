import React from 'react';
import WhyRuwaa from '../components/WhyRuwaa';
import { siteData } from '../data/siteData';
import { Sparkles, Award, Shield, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhyRuwaaPage({ onOpenBooking }) {
  const craftStandards = [
    {
      title: "Archival 24K Liquid Gold & Mineral Inks",
      desc: "We exclusively utilize pigment-rich mineral inks and pure liquid gold leaf formulated to withstand light exposure and aging without oxidation."
    },
    {
      title: "Precision Micro-Rotary Diamond Engraving",
      desc: "Our hand-held diamond burrs allow micro-millimeter precision when cutting into curved crystal perfume flacons and thick glassware."
    },
    {
      title: "Centuries-Old Proportional Geometry",
      desc: "Farisha strictly adheres to classical Arabic calligraphy geometric balance (Al-Khatt Al-Mansub) while introducing modern haute couture aesthetics."
    },
    {
      title: "Artisanal Tactile Finish",
      desc: "From deckled cotton rag paper to hand-turned terracotta, every physical material is personally vetted for touch, weight, and longevity."
    }
  ];

  return (
    <div className="py-12 sm:py-16 bg-[#FAF7F2] min-h-screen">
      
      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-6">
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-stone-500 font-sans mb-2">
          THE ARTISANAL PROMISE
        </p>
        <h1 className="font-serif text-4xl sm:text-6xl text-ink-900 font-normal tracking-wide">
          Why Ruwaa Artistry?
        </h1>
        <p className="font-script text-2xl sm:text-3xl text-gold-600 mt-2">
          The Beauty Is in Every Detail.
        </p>
        <div className="w-16 h-[1.5px] bg-gold-400 mx-auto mt-6" />
      </div>

      {/* Main 5 Pillars Component */}
      <WhyRuwaa />

      {/* Standards of Craftsmanship */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-[#FCFAF7] border border-[#E9E1D5] rounded-3xl p-8 sm:p-14 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-600 font-semibold">Quality &amp; Heritage</span>
            <h3 className="font-serif text-3xl text-ink-900 mt-1">Our Standards of Craftsmanship</h3>
            <p className="text-xs text-stone-500 font-light mt-2">
              Every creation is subjected to stringent artistic standards before leaving the studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {craftStandards.map((std, i) => (
              <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-white border border-stone-200/80">
                <div className="w-9 h-9 rounded-lg bg-gold-100 flex items-center justify-center text-gold-700 shrink-0 font-serif text-sm font-bold">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="font-serif text-lg text-ink-900 mb-1">{std.title}</h4>
                  <p className="text-xs text-stone-600 font-light leading-relaxed">{std.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onOpenBooking("Why Ruwaa Commission")}
              className="px-10 py-3.5 bg-ink-900 hover:bg-gold-600 text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              Commission a Masterpiece
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

