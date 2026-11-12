import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Sparkles, Calendar, Users, MapPin, CheckCircle2, MessageCircle } from 'lucide-react';

export default function LiveExperiences({ onOpenBooking }) {
  const [selectedServices, setSelectedServices] = useState([
    "Live Arabic Calligraphy",
    "Personalized Perfume Bottle Engraving"
  ]);
  const [eventType, setEventType] = useState("Luxury Brand Activation");
  const [guestCount, setGuestCount] = useState("50 - 150 Guests");
  const [location, setLocation] = useState("Doha, Qatar");

  const toggleService = (srvName) => {
    if (selectedServices.includes(srvName)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== srvName));
      }
    } else {
      setSelectedServices([...selectedServices, srvName]);
    }
  };

  const handleCustomQuote = () => {
    const summary = `Event Type: ${eventType}%0AGuests: ${guestCount}%0ALocation: ${location}%0AServices: ${selectedServices.join(', ')}`;
    const url = `https://wa.me/97455196080?text=Hello%20Ruwaa%20Artistry,%20I%20would%20like%20to%20request%20a%20Live%20Calligraphy%20Event%20Experience%20Quote:%0A%0A${summary}`;
    window.open(url, '_blank');
  };

  return (
    <section id="live-experiences" className="py-24 bg-[#FCFAF7] relative border-t border-[#EAE2D5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-stone-500 font-sans mb-2">
            LIVE ARTISTRY &amp; EVENT EXPERIENCES
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-ink-900 font-normal tracking-wide">
            Making Every Occasion Unforgettable.
          </h2>
          <p className="font-script text-2xl md:text-3xl text-gold-600 mt-2">
            Let your guests experience the beauty of personalized artistry.
          </p>
          <p className="text-ink-600 text-sm font-light mt-3 leading-relaxed">
            We bring the beauty of calligraphy directly to your events through live artistic experiences and personalized guest interactions. From elegant weddings and private celebrations to exclusive corporate gatherings, our live calligraphy services create unique moments that guests can take home and cherish.
          </p>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-6" />
        </div>

        {/* 2-Column Showcase: Services Cards + Interactive Booking Configurator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: 6 Live Service Offerings */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-serif text-2xl text-ink-900 mb-2">
              Our Live On-Site Capabilities
            </h3>
            <p className="text-xs text-stone-500 font-light mb-6">
              Farisha Arif arrives equipped with bespoke calligraphy easels, rotary diamond engraving instruments, archival gold leaf, and high-end materials.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {siteData.eventServices.map((service, idx) => {
                const isSelected = selectedServices.includes(service.name);
                return (
                  <div
                    key={idx}
                    onClick={() => toggleService(service.name)}
                    className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-white border-gold-500 shadow-md ring-1 ring-gold-400'
                        : 'bg-white/60 border-[#E9E1D5] hover:border-stone-400'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-serif text-lg text-ink-900 font-medium">
                        {service.name}
                      </span>
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-1 transition-colors ${
                          isSelected ? 'text-gold-600' : 'text-stone-300'
                        }`}
                      />
                    </div>
                    <p className="text-xs text-stone-500 font-light mt-2 leading-relaxed">
                      {service.detail}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Atmosphere Quote Card */}
            <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-2xs mt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 shrink-0 font-serif text-lg">
                ✦
              </div>
              <p className="font-serif italic text-sm text-stone-700 leading-relaxed">
                "Farisha's live presence mesmerized our guests. Watching names written in royal gold leaf on custom paper fans became the absolute highlight of our celebration."
              </p>
            </div>
          </div>

          {/* Right: Live Event Custom Inquiry Box */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-7 border border-[#E9E1D5] luxury-card-shadow">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold-600 font-semibold">Event Concierge</p>
                <h4 className="font-serif text-xl text-ink-900">Custom Experience Planner</h4>
              </div>
              <Sparkles className="w-5 h-5 text-gold-500" />
            </div>

            <div className="space-y-4">
              {/* Event Type */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-500 mb-1.5 font-medium">
                  Event Category
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-stone-200 rounded-lg px-3.5 py-2.5 text-xs text-ink-900 focus:outline-none focus:border-gold-500"
                >
                  <option value="Luxury Brand Activation">Luxury Brand Activation</option>
                  <option value="Royal / VIP Wedding Reception">Royal / VIP Wedding Reception</option>
                  <option value="Henna Night / Traditional Celebration">Henna Night / Traditional Celebration</option>
                  <option value="Corporate Gala & Awards Ceremony">Corporate Gala &amp; Awards Ceremony</option>
                  <option value="Bridal Shower / Private Soirée">Bridal Shower / Private Soirée</option>
                  <option value="VIP Retail & Mall Pop-Up">VIP Retail &amp; Mall Pop-Up</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-500 mb-1.5 font-medium">
                  Destination
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-stone-200 rounded-lg px-3.5 py-2.5 text-xs text-ink-900 focus:outline-none focus:border-gold-500"
                >
                  <option value="Doha, Qatar">Doha, Qatar</option>
                  <option value="Riyadh, Saudi Arabia">Riyadh, Saudi Arabia</option>
                  <option value="Jeddah / Eastern Province, KSA">Jeddah / Eastern Province, KSA</option>
                  <option value="Other GCC Region">Other GCC Region</option>
                </select>
              </div>

              {/* Guest Scale */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-500 mb-1.5 font-medium">
                  Estimated Guest Attendance
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-stone-200 rounded-lg px-3.5 py-2.5 text-xs text-ink-900 focus:outline-none focus:border-gold-500"
                >
                  <option value="Intimate (Under 50 Guests)">Intimate (Under 50 Guests)</option>
                  <option value="Signature (50 - 150 Guests)">Signature (50 - 150 Guests)</option>
                  <option value="Grand Gala (150 - 400 Guests)">Grand Gala (150 - 400 Guests)</option>
                  <option value="Large-Scale Multi-Day Activation">Large-Scale Multi-Day Activation</option>
                </select>
              </div>

              {/* Selected Services Preview */}
              <div className="pt-2">
                <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-500 mb-1.5 font-medium">
                  Selected Live Services ({selectedServices.length})
                </label>
                <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                  {selectedServices.map((srv, i) => (
                    <span key={i} className="text-[10px] bg-stone-100 text-ink-800 px-2.5 py-1 rounded-md border border-stone-200">
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              {/* WhatsApp Action Button */}
              <div className="pt-4">
                <button
                  onClick={handleCustomQuote}
                  className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send WhatsApp Event Inquiry</span>
                </button>
                <p className="text-[10px] text-stone-400 text-center mt-2">
                  Instant response via direct studio WhatsApp: +974 5519 6080
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

