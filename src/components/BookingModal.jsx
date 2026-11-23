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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#FAF7F2] text-[#1C1917] rounded-2xl p-6 sm:p-8 border border-[#EADDCB] shadow-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white text-stone-600 flex items-center justify-center border border-[#EADDCB] hover:bg-[#F4EFE6] transition-colors shadow-xs"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#9E672B] font-semibold font-sans mb-1">
            RUWAA ARTISTRY ATELIER
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-[#1C1917]">
            Book an Artistic Experience
          </h3>
          <p className="text-xs text-stone-500 font-light mt-1">
            Farisha Arif &bull; Qatar &amp; Saudi Arabia
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSendWhatsApp} className="space-y-4">
          <div>
            <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-600 mb-1 font-medium">
              Your Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Noura Al-Kuwari"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white border border-[#EADDCB] rounded-lg px-3.5 py-2.5 text-xs text-[#1C1917] placeholder-stone-400 focus:outline-none focus:border-[#C79F5E] transition-colors shadow-xs"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-600 mb-1 font-medium">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="+974 ..."
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full bg-white border border-[#EADDCB] rounded-lg px-3.5 py-2.5 text-xs text-[#1C1917] placeholder-stone-400 focus:outline-none focus:border-[#C79F5E] transition-colors shadow-xs"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-600 mb-1 font-medium">
                Target Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-white border border-[#EADDCB] rounded-lg px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#C79F5E] transition-colors shadow-xs"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-600 mb-1 font-medium">
              Service Requested
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-white border border-[#EADDCB] rounded-lg px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#C79F5E] transition-colors shadow-xs"
            >
              {siteData.services.map((s) => (
                <option key={s.id} value={s.title} className="bg-white text-[#1C1917]">
                  {s.id}. {s.title}
                </option>
              ))}
              <option value="Custom Bespoke Artwork Commission" className="bg-white text-[#1C1917]">
                Custom Bespoke Artwork Commission
              </option>
              <option value="General Studio Consultation" className="bg-white text-[#1C1917]">
                General Studio Consultation
              </option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-600 mb-1 font-medium">
                Event Category
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full bg-white border border-[#EADDCB] rounded-lg px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#C79F5E] transition-colors shadow-xs"
              >
                <option value="Private Celebration / Wedding" className="bg-white text-[#1C1917]">Wedding / Celebration</option>
                <option value="Corporate / Luxury Brand Gala" className="bg-white text-[#1C1917]">Brand Gala / VIP Activation</option>
                <option value="Henna Night / Heritage Event" className="bg-white text-[#1C1917]">Henna Night / Heritage</option>
                <option value="Personalized Keepsake Gift Order" className="bg-white text-[#1C1917]">Personalized Keepsake Gift</option>
                <option value="Architectural Villa Artwork" className="bg-white text-[#1C1917]">Villa / Interior Artwork</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-600 mb-1 font-medium">
                Location
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-white border border-[#EADDCB] rounded-lg px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#C79F5E] transition-colors shadow-xs"
              >
                <option value="Qatar (Doha & surrounding)" className="bg-white text-[#1C1917]">Qatar (Doha &amp; surrounding)</option>
                <option value="Saudi Arabia (Riyadh)" className="bg-white text-[#1C1917]">Saudi Arabia (Riyadh)</option>
                <option value="Saudi Arabia (Jeddah / Eastern Province)" className="bg-white text-[#1C1917]">Saudi Arabia (Other)</option>
                <option value="International / Destination Booking" className="bg-white text-[#1C1917]">International / GCC</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-600 mb-1 font-medium">
              Notes / Special Inscriptions
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Estimated guest count, personalized names, perfume brands, or specific verse..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-white border border-[#EADDCB] rounded-lg px-3.5 py-2.5 text-xs text-[#1C1917] placeholder-stone-400 focus:outline-none focus:border-[#C79F5E] transition-colors resize-none shadow-xs"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#C79F5E] hover:bg-[#9E672B] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send WhatsApp Inquiry</span>
          </button>
        </form>

        <p className="text-[10px] text-center text-stone-500 font-light mt-4">
          Connects directly with Farisha Arif Atelier via WhatsApp (+974 55196080)
        </p>
      </div>
    </div>
  );
}
