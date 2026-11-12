import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function ContactSection({ prefilledService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: prefilledService || 'Live Event Activation',
    location: 'Qatar',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Format WhatsApp message
    const msg = `*New Inquiry via Ruwaa Artistry Website*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Service:* ${encodeURIComponent(formData.service)}%0A*Location:* ${encodeURIComponent(formData.location)}%0A*Message:* ${encodeURIComponent(formData.message)}`;
    
    setSubmitted(true);
    // Open WhatsApp with prefilled message
    setTimeout(() => {
      window.open(`https://wa.me/97455196080?text=${msg}`, '_blank');
    }, 400);
  };

  return (
    <section id="contact" className="py-24 bg-[#FCFAF7] relative border-t border-[#EAE2D5]">
      
      {/* Background script accent */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 top-6 opacity-[0.03] text-ink-900 font-script text-[180px] leading-none z-0 whitespace-nowrap"
      >
        Contact Ruwaa
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-stone-500 font-sans mb-2">
            CONTACT US
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-ink-900 font-normal tracking-wide">
            Let’s Create Something Beautiful Together.
          </h2>
          <p className="font-script text-2xl md:text-3xl text-gold-600 mt-2">
            Let’s turn your vision into art.
          </p>
          <p className="text-ink-600 text-sm md:text-base font-light mt-3 leading-relaxed">
            Whether you are planning a luxury brand activation, organizing a special celebration, or looking for a personalized calligraphy artwork, we would love to hear from you. Get in touch with us to discuss your ideas, explore our services, and create something truly memorable.
          </p>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-6" />
        </div>

        {/* 2-Column Contact: Direct Cards + Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Studio Inquiries & Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-2xl text-ink-900">
              Studio Inquiries &amp; Event Bookings
            </h3>
            <p className="text-xs text-stone-500 font-light leading-relaxed">
              Available for bespoke studio commissions and on-site activations across Qatar and the Kingdom of Saudi Arabia.
            </p>

            <div className="space-y-4 pt-2">
              
              {/* WhatsApp Card */}
              <a
                href={siteData.brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#E9E1D5] luxury-card-hover group"
              >
                <div className="w-11 h-11 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-sans">
                    Phone / WhatsApp
                  </p>
                  <p className="text-sm font-medium text-ink-900 group-hover:text-emerald-700 transition-colors">
                    {siteData.brand.phoneDisplay}
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${siteData.brand.email}?subject=Ruwaa%20Artistry%20Inquiry`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#E9E1D5] luxury-card-hover group"
              >
                <div className="w-11 h-11 rounded-lg bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-700 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-sans">
                    Email Inquiries
                  </p>
                  <p className="text-sm font-medium text-ink-900 group-hover:text-gold-700 transition-colors">
                    {siteData.brand.email}
                  </p>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href={siteData.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#E9E1D5] luxury-card-hover group"
              >
                <div className="w-11 h-11 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700 shrink-0">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-sans">
                    Official Instagram
                  </p>
                  <p className="text-sm font-medium text-ink-900 group-hover:text-rose-700 transition-colors">
                    {siteData.brand.instagram}
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#E9E1D5]">
                <div className="w-11 h-11 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-sans">
                    Studio Locations
                  </p>
                  <p className="text-sm font-medium text-ink-900">
                    Qatar &amp; Saudi Arabia
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={siteData.brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact on WhatsApp</span>
              </a>
              <a
                href={siteData.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 border border-stone-300 hover:border-gold-500 bg-white text-ink-900 text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Follow on Instagram</span>
              </a>
            </div>

          </div>

          {/* Right: Commission & Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 md:p-10 border border-[#E9E1D5] luxury-card-shadow">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-3xl text-ink-900">Thank You</h4>
                <p className="text-stone-600 text-sm max-w-md mx-auto">
                  Your message has been initiated. If WhatsApp didn't open automatically, please click below to send it directly.
                </p>
                <a
                  href={siteData.brand.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-8 py-3 bg-emerald-700 text-white text-xs uppercase tracking-[0.2em]"
                >
                  Open WhatsApp Chat
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-stone-100 pb-3 mb-4">
                  <h4 className="font-serif text-2xl text-ink-900">Direct Studio Inquiry</h4>
                  <p className="text-xs text-stone-400 font-light mt-0.5">
                    Fill in your details below for a prompt response from Farisha Arif.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-500 mb-1 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sheikha Al-Thani / John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-stone-200 rounded-lg px-3.5 py-2.5 text-xs text-ink-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-500 mb-1 font-medium">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+974 / +966..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-stone-200 rounded-lg px-3.5 py-2.5 text-xs text-ink-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-500 mb-1 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="yourname@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-stone-200 rounded-lg px-3.5 py-2.5 text-xs text-ink-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-500 mb-1 font-medium">
                      Preferred Location
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-stone-200 rounded-lg px-3.5 py-2.5 text-xs text-ink-900 focus:outline-none focus:border-gold-500"
                    >
                      <option value="Qatar (Doha)">Qatar (Doha)</option>
                      <option value="Saudi Arabia (Riyadh/Jeddah)">Saudi Arabia (Riyadh/Jeddah)</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Other International">Other International</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-500 mb-1 font-medium">
                    Service of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-stone-200 rounded-lg px-3.5 py-2.5 text-xs text-ink-900 focus:outline-none focus:border-gold-500"
                  >
                    <option value="Glass & Fragrance Bottle Engraving">Glass &amp; Fragrance Bottle Engraving</option>
                    <option value="Custom Ceramics & Artisanal Pottery">Custom Ceramics &amp; Artisanal Pottery</option>
                    <option value="Live Calligraphy & Event Experiences">Live Calligraphy &amp; Event Experiences</option>
                    <option value="Weddings & Special Occasions">Weddings &amp; Special Occasions</option>
                    <option value="Bespoke Calligraphy Artwork">Bespoke Calligraphy Artwork</option>
                    <option value="Luxury Brand Collaboration">Luxury Brand Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.18em] text-stone-500 mb-1 font-medium">
                    Project Details &amp; Event Dates
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your event, quantity of items, calligraphy preferences, or specific vision..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-stone-200 rounded-lg px-3.5 py-2.5 text-xs text-ink-900 focus:outline-none focus:border-gold-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-ink-900 hover:bg-gold-600 text-white text-xs uppercase tracking-[0.25em] font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Studio Inquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
