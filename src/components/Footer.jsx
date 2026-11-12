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
    <footer className="bg-[#181614] text-[#E8DFD3] pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Brand Center Header */}
        <div className="text-center space-y-3 pb-10 border-b border-stone-800">
          <div className="w-10 h-10 rounded-full border border-stone-700 mx-auto flex items-center justify-center font-calligraphy text-2xl text-stone-200">
            R
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl tracking-[0.16em] text-white">
            RUWAA ARTISTRY
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#C5A880] font-light">
            The Art of Calligraphy, Crafted with Elegance.
          </p>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-stone-400 font-sans max-w-xl mx-auto leading-relaxed">
            Bespoke Arabic &amp; English Calligraphy | Luxury Engraving | Live Artistry | Personalized Keepsakes
          </p>
        </div>

        {/* Navigation & Socials */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-stone-800">
          
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.18em] text-stone-400">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={siteData.brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full border border-stone-700 hover:border-white text-stone-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href={siteData.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-8 h-8 rounded-full border border-stone-700 hover:border-white text-stone-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-8 h-8 rounded-full border border-stone-700 hover:border-white text-stone-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 font-sans tracking-wider gap-3 text-center sm:text-left">
          <p>
            Instagram: <a href={siteData.brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:underline">{siteData.brand.instagram}</a>
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
