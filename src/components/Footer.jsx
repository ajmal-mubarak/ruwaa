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
    { name: "Collaborations", href: "/collaborations" },
    { name: "Why Ruwaa", href: "/why-ruwaa" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#0B0B0A] text-[#E8DFD3] pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Brand Center Header */}
        <div className="text-center space-y-3 pb-10 border-b border-stone-800">
          <div className="w-10 h-10 rounded-full border border-[#A38257] mx-auto flex items-center justify-center font-calligraphy text-2xl text-[#E2C798]">
            R
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl tracking-[0.16em] text-white">
            RUWAA ARTISTRY
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#E2C798] font-light">
            The Art of Calligraphy, Crafted with Elegance.
          </p>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-stone-400 font-sans max-w-xl mx-auto leading-relaxed">
            Bespoke Arabic &amp; English Calligraphy | Luxury Engraving | Live Artistry | Personalized Keepsakes
          </p>
        </div>

        {/* Navigation & Socials: Shown line-by-line as requested */}
        <div className="py-12 flex flex-col items-center justify-center gap-8 border-b border-stone-800">
          
          {/* Vertical Line-by-Line Nav Links */}
          <nav 
            aria-label="Footer Navigation" 
            className="flex flex-col items-center space-y-4 text-xs uppercase tracking-[0.26em] text-stone-400 font-medium"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="hover:text-[#E2C798] transition-colors py-0.5 tracking-[0.26em]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social and back to top icons */}
          <div className="flex items-center gap-4 pt-6 border-t border-stone-800/80 w-full max-w-xs justify-center">
            <a
              href={siteData.brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-stone-700 hover:border-[#E2C798] text-stone-300 hover:text-[#E2C798] flex items-center justify-center transition-colors bg-stone-900/60"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href={siteData.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full border border-stone-700 hover:border-emerald-500 text-stone-300 hover:text-emerald-400 flex items-center justify-center transition-colors bg-stone-900/60"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-9 h-9 rounded-full border border-stone-700 hover:border-white text-stone-300 hover:text-white flex items-center justify-center transition-colors bg-stone-900/60"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 font-sans tracking-wider gap-3 text-center sm:text-left">
          <p>
            Instagram: <a href={siteData.brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-[#E2C798] transition-colors">{siteData.brand.instagram}</a>
          </p>
          <p>
            &copy; {new Date().getFullYear()} Ruwaa Artistry. All Rights Reserved.
          </p>
          <p className="text-stone-400">
            Qatar &bull; Saudi Arabia
          </p>
        </div>

      </div>
    </footer>
  );
}
