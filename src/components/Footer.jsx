import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Live Artistry", href: "/live-experiences" },
    { name: "Collaborations", href: "/collaborations" },
    { name: "Why Ruwaa", href: "/why-ruwaa" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#1A1715] text-[#EDE6DD] pt-16 pb-12 border-t border-[#2D2824] relative overflow-hidden">
      
      {/* Decorative large Arabic calligraphy watermark in footer */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 bottom-0 opacity-[0.03] text-white font-arabic text-[120px] sm:text-[180px] md:text-[220px] whitespace-nowrap leading-none"
      >
        روعة الفن
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Brand Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto pb-12 border-b border-[#2D2824]">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-[0.2em] font-light text-white">
            RUWAA ARTISTRY
          </h2>
          <p className="font-serif italic text-gold-300 text-base sm:text-lg md:text-xl font-light">
            The Art of Calligraphy, Crafted with Elegance.
          </p>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-stone-400 font-sans leading-relaxed">
            Bespoke Arabic &amp; English Calligraphy | Luxury Engraving | Live Artistry | Personalized Keepsakes
          </p>
        </div>

        {/* Navigation & Social Links */}
        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#2D2824]">
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[11px] sm:text-xs uppercase tracking-[0.18em] text-stone-400">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="hover:text-gold-300 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={siteData.brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @ruwaa_artistry"
              className="w-9 h-9 rounded-full bg-stone-800 hover:bg-gold-600 text-stone-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-stone-700"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href={siteData.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Ruwaa Artistry"
              className="w-9 h-9 rounded-full bg-stone-800 hover:bg-emerald-600 text-stone-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-stone-700"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-full bg-stone-800 hover:bg-white text-stone-300 hover:text-ink-900 flex items-center justify-center transition-all duration-300 border border-stone-700"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] text-stone-500 font-sans tracking-wider gap-4 text-center sm:text-left">
          <p>
            Instagram: <a href={siteData.brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:underline">@ruwaa_artistry</a>
          </p>
          <p>
            &copy; {new Date().getFullYear()} Ruwaa Artistry by Farisha Arif. All Rights Reserved.
          </p>
          <p className="text-stone-400">
            Doha, Qatar &bull; Riyadh, Saudi Arabia
          </p>
        </div>

      </div>
    </footer>
  );
}
