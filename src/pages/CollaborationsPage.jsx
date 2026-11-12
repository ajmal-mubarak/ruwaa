import React from 'react';
import { siteData } from '../data/siteData';
import { Sparkles, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function CollaborationsPage({ onOpenBooking }) {
  const { exhibitions } = siteData;

  return (
    <div className="bg-white min-h-screen">
      
      {/* Header */}
      <section className="pt-14 sm:pt-20 pb-12 sm:pb-16 border-b border-stone-100 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-stone-500 font-sans mb-1">
            EXPERIENCES &amp; PARTNERSHIPS
          </p>
          <span className="font-calligraphy text-5xl sm:text-7xl text-[#A38257] block mb-2">
            Collaborations &amp; Events
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 font-light">
            Creative Collaborations. Memorable Experiences.
          </h1>
          <div className="w-12 h-[1px] bg-stone-300 mx-auto my-5" />
          <p className="text-stone-600 font-light text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            We are proud to have collaborated with prestigious brands, organizations, and events, showcasing the beauty of live calligraphy and personalized artistic experiences.
          </p>
        </div>
      </section>

      {/* Section 6: Selected Brand Collaborations */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-stone-500 font-sans mb-1">
            SELECTED COLLABORATIONS
          </p>
          <h2 className="font-serif text-3xl text-stone-900 font-light">
            Prestigious Brand Activations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.collaborations.map((collab, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200 p-6 space-y-3 flex flex-col justify-between hover:border-stone-400 transition-colors"
            >
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#A38257] font-semibold">
                  {collab.badge}
                </span>
                <h3 className="font-serif text-2xl text-stone-900 mt-1 mb-2 font-medium">
                  {collab.brand}
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {collab.description}
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500 italic">
                {collab.highlight}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Live Artistry & Event Experiences */}
      <section className="py-16 sm:py-20 bg-[#FAFAFA] border-t border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-stone-500 font-sans mb-1">
              LIVE ARTISTRY &amp; EVENT EXPERIENCES
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-light">
              Making Every Occasion Unforgettable.
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light mt-3 leading-relaxed">
              We bring the beauty of calligraphy directly to your events through live artistic experiences and personalized guest interactions. From elegant weddings and private celebrations to exclusive corporate gatherings, our live calligraphy services create unique moments that guests can take home and cherish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {siteData.eventServices.map((srv, idx) => (
              <div key={idx} className="bg-white border border-stone-200 p-5 space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#A38257] font-semibold">0{idx + 1}</span>
                <h4 className="font-serif text-lg text-stone-900 font-medium">{srv.name}</h4>
                <p className="text-xs text-stone-500 font-light">{srv.detail}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onOpenBooking("Live Event Activation")}
              className="px-8 py-3.5 bg-stone-900 hover:bg-[#A38257] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              Book Live Calligraphy Experience
            </button>
          </div>

        </div>
      </section>

      {/* Section 7: Custom Artwork & Exhibitions */}
      <section className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-stone-500 font-sans mb-1">
          {exhibitions.kicker}
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-light mb-2">
          {exhibitions.title}
        </h2>
        <p className="font-serif italic text-base text-[#A38257] mb-6">
          {exhibitions.subtitle}
        </p>
        <p className="text-xs sm:text-sm text-stone-600 font-light max-w-2xl mx-auto leading-relaxed mb-8">
          {exhibitions.description}
        </p>
        <button
          onClick={() => onOpenBooking("Custom Artwork Commission")}
          className="px-8 py-3.5 border border-stone-800 hover:bg-stone-900 hover:text-white text-stone-900 text-xs uppercase tracking-[0.2em] transition-colors"
        >
          Commission Custom Artwork
        </button>
      </section>

    </div>
  );
}
