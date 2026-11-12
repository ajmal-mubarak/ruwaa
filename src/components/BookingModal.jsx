import React, { useState } from 'react';
import { X, Sparkles, MessageCircle, Calendar, Send } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function BookingModal({ isOpen, onClose, initialService }) {
  if (!isOpen) return null;

  const [service, setService] = useState(initialService || "Live Calligraphy & Event Experiences");
  const [eventType, setEventType] = useState("Private Celebration / Wedding");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("Qatar (Doha)");
  const [notes, setNotes] = useState("");

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const text = `*New Booking Request - Ruwaa Artistry*%0A%0A*Name:* ${encodeURIComponent(name || 'Client')}%0A*Contact:* ${encodeURIComponent(contact || 'Not provided')}%0A*Service:* ${encodeURIComponent(service)}%0A*Event Category:* ${encodeURIComponent(eventType)}%0A*Date / Timeframe:* ${encodeURIComponent(date || 'TBD')}%0A*Location:* ${encodeURIComponent(location)}%0A*Notes:* ${encodeURIComponent(notes || 'None')}`;
    
    window.open(`https://wa.me/97455196080?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-stone-300 shadow-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white text-ink-900 flex items-center justify-center border border-stone-200 hover:bg-stone-100 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold-600 font-semibold font-sans mb-1">
            RUWAA ARTISTRY ATELIER
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-ink-900">
            Book an Artistic Experience
          </h3>
          <p className="text-xs text-stone-500 font-light mt-1">
            Farisha Arif • Qatar &amp; Saudi Arabia
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSendWhatsApp} className="space-y-4">
          <div>
            <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-500 mb-1 font-medium">
              Your Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Noura Al-Kuwari"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white border border-stone-200 rounded-lg px-3.5 py-2.5 text-xs text-ink-900 focus:outline-none focus:border-gold-500"
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-500 mb-1 font-medium">
              Phone / WhatsApp Number *
            </label>
            <input
              type="tel"
              required
              placeholder="+974 / +966..."
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full bg-white border border-stone-200 rounded-lg px-3.5 py-2.5 text-xs text-ink-900 focus:outline-none focus:border-gold-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-500 mb-1 font-medium">
                Service
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-xs text-ink-900 focus:outline-none focus:border-gold-500"
              >
                <option value="Live Calligraphy & Event Experiences">Live Calligraphy &amp; Event</option>
                <option value="Glass & Fragrance Bottle Engraving">Perfume Bottle Engraving</option>
                <option value="Custom Ceramics & Artisanal Pottery">Custom Ceramics &amp; Pottery</option>
                <option value="Weddings & Special Occasions">Weddings &amp; Occasions</option>
                <option value="Bespoke Calligraphy Artwork">Bespoke Artwork Commission</option>
                <option value="Brand Activation / Corporate Gala">Brand Activation</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-500 mb-1 font-medium">
                Location
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-xs text-ink-900 focus:outline-none focus:border-gold-500"
              >
                <option value="Qatar (Doha)">Qatar (Doha)</option>
                <option value="Saudi Arabia (Riyadh/Jeddah)">Saudi Arabia (Riyadh/Jeddah)</option>
                <option value="United Arab Emirates">UAE (Dubai/Abu Dhabi)</option>
                <option value="Other">Other Region</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-500 mb-1 font-medium">
              Event Date or Delivery Timeframe
            </label>
            <input
              type="text"
              placeholder="e.g. 15th December 2026 or Spring 2027"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-white border border-stone-200 rounded-lg px-3.5 py-2.5 text-xs text-ink-900 focus:outline-none focus:border-gold-500"
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-500 mb-1 font-medium">
              Additional Notes / Inscription Requests
            </label>
            <textarea
              rows={3}
              placeholder="Any specific text, number of guests, perfume brand, or design inspirations..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-white border border-stone-200 rounded-lg px-3.5 py-2 text-xs text-ink-900 focus:outline-none focus:border-gold-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Confirm &amp; Send to Farisha on WhatsApp</span>
          </button>
          
          <p className="text-[10px] text-stone-400 text-center">
            Or direct studio hotline: +974 5519 6080
          </p>
        </form>
      </div>
    </div>
  );
}

