import React from 'react';
import Collaborations from '../components/Collaborations';
import CustomArtwork from '../components/CustomArtwork';
import { siteData } from '../data/siteData';

export default function CollaborationsPage({ onOpenBooking }) {
  return (
    <div className="py-12 sm:py-16 bg-[#FAF7F2] min-h-screen">
      
      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-6">
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-stone-500 font-sans mb-2">
          PRESTIGE PARTNERSHIPS
        </p>
        <h1 className="font-serif text-4xl sm:text-6xl text-ink-900 font-normal tracking-wide">
          Brand Collaborations &amp; Exhibitions
        </h1>
        <p className="font-script text-2xl sm:text-3xl text-gold-600 mt-2">
          Creative Collaborations. Memorable Experiences.
        </p>
        <div className="w-16 h-[1.5px] bg-gold-400 mx-auto mt-6" />
      </div>

      {/* Brand Collaborations Component (all 9 brands) */}
      <Collaborations />

      {/* Custom Artwork & Exhibitions Component (Section 7) */}
      <div className="mt-12">
        <CustomArtwork onOpenBooking={(art) => onOpenBooking(art)} />
      </div>

    </div>
  );
}

