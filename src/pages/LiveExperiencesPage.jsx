import React from 'react';
import LiveExperiences from '../components/LiveExperiences';
import { siteData } from '../data/siteData';
import { Sparkles, Calendar, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LiveExperiencesPage({ onOpenBooking }) {
  const eventFaqs = [
    {
      q: "What does Farisha Arif provide for on-site live activations?",
      a: "Farisha arrives fully equipped with a bespoke luxury calligraphy station: archival inks, liquid gold leaf, rotary diamond engraving instruments, custom blotting tools, and specialized drying surfaces."
    },
    {
      q: "How many guests can receive personalized keepsakes during an event?",
      a: "Depending on the medium (e.g. paper fans vs micro-glass engraving), Farisha can personalize 25 to 50 bespoke pieces per hour. For high-volume multi-day galas, multiple stations or prep-inscribed elements can be coordinated."
    },
    {
      q: "Do you travel across Saudi Arabia and the GCC?",
      a: "Yes. While studio-based in Doha, Qatar, Farisha regularly travels to Riyadh, Jeddah, Khobar, Dubai, and international destinations for VIP brand activations and private royal celebrations."
    },
    {
      q: "Can clients supply their own perfume bottles or luxury items?",
      a: "Absolutely. We routinely engrave brand-provided bottles (e.g., Chanel, Dior, Creed, Rituals, Byredo) as well as leather goods supplied by hosts or retail clients."
    }
  ];

  return (
    <div className="py-12 sm:py-16 bg-[#FAF7F2] min-h-screen">
      
      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-6">
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-stone-500 font-sans mb-2">
          LIVE ON-SITE EXPERIENCES
        </p>
        <h1 className="font-serif text-4xl sm:text-6xl text-ink-900 font-normal tracking-wide">
          Live Artistry &amp; Event Experiences
        </h1>
        <p className="font-script text-2xl sm:text-3xl text-gold-600 mt-2">
          Making Every Occasion Unforgettable.
        </p>
        <div className="w-16 h-[1.5px] bg-gold-400 mx-auto mt-6" />
      </div>

      {/* Main Live Experiences Component (6 services + custom planner) */}
      <LiveExperiences onOpenBooking={(srv) => onOpenBooking(srv)} />

      {/* Event FAQ & Logistics */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-stone-500 font-sans mb-1">
            EVENT CONCIERGE &amp; DETAILS
          </p>
          <h3 className="font-serif text-3xl text-ink-900">Frequently Asked Questions</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {eventFaqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-[#E9E1D5] shadow-xs">
              <h4 className="font-serif text-lg text-ink-900 mb-2 font-medium">
                {faq.q}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Booking CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => onOpenBooking("Live Event Activation")}
            className="px-10 py-3.5 bg-ink-900 hover:bg-gold-600 text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
          >
            Check Event Date Availability
          </button>
        </div>
      </div>

    </div>
  );
}

