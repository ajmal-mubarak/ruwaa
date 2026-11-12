import React from 'react';
import Portfolio from '../components/Portfolio';
import { siteData } from '../data/siteData';

export default function PortfolioPage({ onOpenBooking }) {
  return (
    <div className="py-12 sm:py-16 bg-[#FAF7F2] min-h-screen">
      
      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-6">
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-stone-500 font-sans mb-2">
          A COLLECTION OF ARTISTRY
        </p>
        <h1 className="font-serif text-4xl sm:text-6xl text-ink-900 font-normal tracking-wide">
          Our Portfolio
        </h1>
        <p className="font-script text-2xl sm:text-3xl text-gold-600 mt-2">
          Discover the Art. Experience the Details.
        </p>
        <div className="w-16 h-[1.5px] bg-gold-400 mx-auto mt-6" />
      </div>

      {/* Full 8 Categories Portfolio with Modal */}
      <Portfolio onOpenBooking={(item) => onOpenBooking(item)} />

    </div>
  );
}

