import React from 'react';
import { siteData } from '../data/siteData';
import { Sparkles } from 'lucide-react';

export default function CollaborationsPage({ onOpenBooking }) {
  const exhibitionsList = siteData.exhibitionsList || [];

  return (
    <div className="bg-[#FAF7F2] text-[#1C1917] min-h-screen">
      
      {/* Header */}
      <section className="pt-14 sm:pt-20 pb-12 sm:pb-16 border-b border-[#EADDCB] bg-[#F4EFE6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#9E672B] font-sans mb-1">
            EXPERIENCES &amp; PARTNERSHIPS
          </p>
          <span className="font-calligraphy text-5xl sm:text-7xl text-[#9E672B] block mb-2">
            Collaborations &amp; Events
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-light">
            Creative Collaborations. Memorable Experiences.
          </h1>
          <div className="w-12 h-[1px] bg-[#C79F5E] mx-auto my-5" />
          <p className="text-[#57534E] font-light text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            We are proud to have collaborated with prestigious brands, organizations, and events, showcasing the beauty of live calligraphy and personalized artistic experiences.
          </p>
        </div>
      </section>

      {/* Selected Brand Collaborations */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#9E672B] font-sans mb-1">
            SELECTED COLLABORATIONS
          </p>
          <h2 className="font-serif text-3xl text-[#1C1917] font-light">
            Prestigious Brand Activations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.collaborations.map((collab, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#EADDCB] p-6 flex flex-col justify-between rounded-xl hover:border-[#C79F5E]/60 transition-all hover:shadow-xl shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E672B] font-semibold">
                    {collab.badge}
                  </span>
                  <span className="text-xs text-stone-400 font-serif">0{idx + 1}</span>
                </div>
                <h3 className="font-serif text-2xl text-[#1C1917] mb-2">
                  {collab.brand}
                </h3>
                <p className="text-xs text-[#57534E] font-light leading-relaxed mb-4">
                  {collab.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EADDCB] flex items-center justify-between">
                <span className="text-[11px] text-[#9E672B] uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#C79F5E]" />
                  <span>Verified Activation</span>
                </span>
                <button
                  onClick={() => onOpenBooking(`Brand Activation like ${collab.brand}`)}
                  className="text-xs text-stone-600 hover:text-[#9E672B] uppercase tracking-wider transition-colors font-medium"
                >
                  Inquire &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exhibitions & Cultural Programs */}
      <section className="py-16 sm:py-20 bg-[#F4EFE6] border-t border-b border-[#EADDCB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#9E672B] font-sans mb-1">
              EXHIBITIONS &amp; CULTURAL EVENTS
            </p>
            <h2 className="font-serif text-3xl text-[#1C1917] font-light">
              Cultural &amp; Community Programs
            </h2>
            <div className="w-12 h-[1px] bg-[#C79F5E] mx-auto my-4" />
          </div>

          <div className="space-y-4">
            {exhibitionsList.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#EADDCB] p-5 flex items-start gap-4 rounded-xl hover:border-[#C79F5E]/60 transition-colors shadow-xs"
              >
                <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#C79F5E]/40 flex items-center justify-center text-[#9E672B] shrink-0 font-serif text-sm">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#1C1917] font-medium">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#57534E] font-light leading-relaxed mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 text-center max-w-2xl mx-auto px-4">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1917] mb-3">Host a Live Artistic Activation</h3>
        <p className="text-xs sm:text-sm text-[#57534E] font-light mb-6">
          Bring the elegance of live Arabic and English calligraphy to your boutique, gala, or VIP private gathering.
        </p>
        <button
          onClick={() => onOpenBooking("Brand Collaboration / Live Event")}
          className="px-8 py-3.5 bg-[#C79F5E] hover:bg-[#9E672B] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors rounded-sm shadow-sm"
        >
          Book Live Activation
        </button>
      </section>

    </div>
  );
}
