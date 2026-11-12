import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left: Studio Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-stone-500 font-sans mb-1">
              STUDIO INQUIRIES &amp; BOOKINGS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-light">
              Let’s Create Something Beautiful Together.
            </h2>
            <p className="font-serif italic text-base text-[#A38257] mt-1">
              Let’s turn your vision into art.
            </p>
          </div>

          <p className="text-stone-600 font-light text-xs sm:text-sm leading-relaxed">
            Whether you are planning a luxury brand activation, organizing a special celebration, or looking for a personalized calligraphy artwork, we would love to hear from you. Get in touch with us to discuss your ideas, explore our services, and create something truly memorable.
          </p>

          <div className="space-y-4 pt-4 border-t border-stone-200">
            
            {/* Phone / WhatsApp */}
            <a
              href={siteData.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-stone-200 hover:border-stone-900 transition-colors bg-white group"
            >
              <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-stone-400 font-sans">Phone / WhatsApp</p>
                <p className="text-sm font-medium text-stone-900 group-hover:text-emerald-700 transition-colors">
                  {siteData.brand.phoneDisplay}
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${siteData.brand.email}?subject=Ruwaa%20Artistry%20Inquiry`}
              className="flex items-center gap-4 p-4 border border-stone-200 hover:border-stone-900 transition-colors bg-white group"
            >
              <div className="w-10 h-10 bg-stone-100 border border-stone-300 flex items-center justify-center text-stone-700 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-stone-400 font-sans">Email</p>
                <p className="text-sm font-medium text-stone-900 group-hover:text-[#A38257] transition-colors">
                  {siteData.brand.email}
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 border border-stone-200 bg-white">
              <div className="w-10 h-10 bg-stone-100 border border-stone-300 flex items-center justify-center text-stone-700 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-stone-400 font-sans">Location</p>
                <p className="text-sm font-medium text-stone-900">
                  Qatar &amp; Saudi Arabia
                </p>
              </div>
            </div>

            {/* Instagram */}
            <a
              href={siteData.brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-stone-200 hover:border-stone-900 transition-colors bg-white group"
            >
              <div className="w-10 h-10 bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700 shrink-0">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-stone-400 font-sans">Instagram</p>
                <p className="text-sm font-medium text-stone-900 group-hover:text-rose-700 transition-colors">
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
              className="flex-1 py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white text-xs uppercase tracking-[0.18em] font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact on WhatsApp</span>
            </a>
            <a
              href={siteData.brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 border border-stone-400 hover:border-stone-900 text-stone-900 text-xs uppercase tracking-[0.18em] font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>

        {/* Right: Clean Inquiry Form */}
        <div className="lg:col-span-7 bg-[#FAFAFA] border border-stone-200 p-6 sm:p-10">
          
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl text-stone-900">Message Received</h3>
              <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                Thank you for your inquiry. A WhatsApp chat with your details has been opened, or click below to message Farisha directly.
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
              <div className="border-b border-stone-200 pb-3 mb-4">
                <h3 className="font-serif text-2xl text-stone-900 font-light">Send a Direct Message</h3>
                <p className="text-xs text-stone-400 font-light">Farisha Arif personally responds to all studio commissions and activation inquiries.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-500 mb-1 font-medium">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Al-Thani"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-stone-300 px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-900"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-500 mb-1 font-medium">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+974 / +966..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-stone-300 px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-500 mb-1 font-medium">Email Address</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-stone-300 px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-900"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-500 mb-1 font-medium">Location</label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-white border border-stone-300 px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-stone-900"
                  >
                    <option value="Qatar">Qatar (Doha)</option>
                    <option value="Saudi Arabia">Saudi Arabia (Riyadh / Jeddah)</option>
                    <option value="Other GCC">Other GCC Region</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-500 mb-1 font-medium">Service of Interest</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-white border border-stone-300 px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-stone-900"
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
                <label className="block text-[11px] uppercase tracking-wider text-stone-500 mb-1 font-medium">Message &amp; Event Details</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share details regarding your event, date, preferred calligraphy style, or custom commission..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-stone-300 px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-stone-900 hover:bg-[#A38257] text-white text-xs uppercase tracking-[0.22em] font-medium transition-colors"
              >
                Send Studio Inquiry
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}
