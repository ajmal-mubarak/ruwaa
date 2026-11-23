import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function ContactSection({ prefilledService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: prefilledService || 'Live Calligraphy & Event Experiences',
    location: 'Qatar',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*New Inquiry via Ruwaa Artistry*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Service:* ${encodeURIComponent(formData.service)}%0A*Location:* ${encodeURIComponent(formData.location)}%0A*Details:* ${encodeURIComponent(formData.message)}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/97455196080?text=${msg}`, '_blank');
    }, 400);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 text-[#1C1917]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left: Studio Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#9E672B] font-sans mb-1">
              STUDIO INQUIRIES &amp; BOOKINGS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-light">
              Let’s Create Something Beautiful Together.
            </h2>
            <p className="font-serif italic text-base text-[#9E672B] mt-1">
              Let’s turn your vision into art.
            </p>
          </div>

          <p className="text-[#57534E] font-light text-xs sm:text-sm leading-relaxed">
            Whether you are planning a luxury brand activation, organizing a special celebration, or looking for a personalized calligraphy artwork, we would love to hear from you. Get in touch with us to discuss your ideas, explore our services, and create something truly memorable.
          </p>

          <div className="space-y-4 pt-4 border-t border-[#EADDCB]">
            
            {/* Phone / WhatsApp */}
            <a
              href={siteData.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-[#EADDCB] hover:border-emerald-600 transition-colors bg-white rounded-xl group shadow-xs"
            >
              <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 rounded-lg">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-stone-500 font-sans">Phone / WhatsApp</p>
                <p className="text-sm font-medium text-[#1C1917] group-hover:text-emerald-700 transition-colors">
                  {siteData.brand.phoneDisplay}
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${siteData.brand.email}?subject=Ruwaa%20Artistry%20Inquiry`}
              className="flex items-center gap-4 p-4 border border-[#EADDCB] hover:border-[#C79F5E] transition-colors bg-white rounded-xl group shadow-xs"
            >
              <div className="w-10 h-10 bg-[#FAF7F2] border border-[#EADDCB] flex items-center justify-center text-[#9E672B] shrink-0 rounded-lg">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-stone-500 font-sans">Email</p>
                <p className="text-sm font-medium text-[#1C1917] group-hover:text-[#9E672B] transition-colors">
                  {siteData.brand.email}
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 border border-[#EADDCB] bg-white rounded-xl shadow-xs">
              <div className="w-10 h-10 bg-[#FAF7F2] border border-[#EADDCB] flex items-center justify-center text-[#C79F5E] shrink-0 rounded-lg">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-stone-500 font-sans">Location</p>
                <p className="text-sm font-medium text-[#1C1917]">
                  Qatar &amp; Saudi Arabia
                </p>
              </div>
            </div>

            {/* Instagram */}
            <a
              href={siteData.brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-[#EADDCB] hover:border-[#9E672B] transition-colors bg-white rounded-xl group shadow-xs"
            >
              <div className="w-10 h-10 bg-[#FAF7F2] border border-[#EADDCB] flex items-center justify-center text-[#9E672B] shrink-0 rounded-lg">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-stone-500 font-sans">Instagram</p>
                <p className="text-sm font-medium text-[#1C1917] group-hover:text-[#9E672B] transition-colors">
                  {siteData.brand.instagram}
                </p>
              </div>
            </a>

          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={siteData.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white text-xs uppercase tracking-[0.18em] font-medium flex items-center justify-center gap-2 transition-colors rounded-sm shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact on WhatsApp</span>
            </a>
            <a
              href={siteData.brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 border border-[#EADDCB] hover:border-[#9E672B] bg-white text-stone-700 hover:text-[#9E672B] text-xs uppercase tracking-[0.18em] font-medium flex items-center justify-center gap-2 transition-colors rounded-sm shadow-xs"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>

        {/* Right: Clean Inquiry Form */}
        <div className="lg:col-span-7 bg-white border border-[#EADDCB] p-6 sm:p-10 rounded-2xl shadow-xl">
          
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl text-[#1C1917]">Message Received</h3>
              <p className="text-[#57534E] text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                Thank you for your inquiry. A WhatsApp chat with your details has been opened, or click below to message Farisha directly.
              </p>
              <a
                href={siteData.brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-8 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs uppercase tracking-[0.2em] rounded-sm shadow-sm"
              >
                Open WhatsApp Chat
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-[#EADDCB] pb-3 mb-4">
                <h3 className="font-serif text-2xl text-[#1C1917] font-light">Send a Direct Message</h3>
                <p className="text-xs text-stone-500 font-light mt-0.5">Farisha Arif personally responds to all studio commissions and activation inquiries.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-600 mb-1 font-medium">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Al-Thani"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#EADDCB] px-3.5 py-2.5 text-xs text-[#1C1917] placeholder-stone-400 focus:outline-none focus:border-[#C79F5E] rounded-lg shadow-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-600 mb-1 font-medium">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+974 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#EADDCB] px-3.5 py-2.5 text-xs text-[#1C1917] placeholder-stone-400 focus:outline-none focus:border-[#C79F5E] rounded-lg shadow-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-600 mb-1 font-medium">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. contact@domain.qa"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#EADDCB] px-3.5 py-2.5 text-xs text-[#1C1917] placeholder-stone-400 focus:outline-none focus:border-[#C79F5E] rounded-lg shadow-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-600 mb-1 font-medium">Location</label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#EADDCB] px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#C79F5E] rounded-lg shadow-xs"
                  >
                    <option value="Qatar (Doha & surrounding)">Qatar (Doha)</option>
                    <option value="Saudi Arabia (Riyadh)">Saudi Arabia (Riyadh)</option>
                    <option value="Saudi Arabia (Other)">Saudi Arabia (Other)</option>
                    <option value="Other / International">Other / GCC</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-600 mb-1 font-medium">Service of Interest</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#EADDCB] px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#C79F5E] rounded-lg shadow-xs"
                >
                  {siteData.services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.id}. {s.title}
                    </option>
                  ))}
                  <option value="Custom Bespoke Artwork Commission">
                    Custom Bespoke Artwork Commission
                  </option>
                  <option value="Weddings & Favors">
                    Weddings &amp; Special Favors
                  </option>
                  <option value="General Studio Consultation">
                    General Studio Consultation
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-600 mb-1 font-medium">Project or Event Details</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your event, preferred date, surfaces to engrave, or personalized words..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#EADDCB] px-3.5 py-2.5 text-xs text-[#1C1917] placeholder-stone-400 focus:outline-none focus:border-[#C79F5E] rounded-lg resize-none shadow-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#C79F5E] hover:bg-[#9E672B] text-white text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-colors shadow-md rounded-sm"
              >
                <Send className="w-4 h-4" />
                <span>Submit &amp; Open WhatsApp Chat</span>
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}
