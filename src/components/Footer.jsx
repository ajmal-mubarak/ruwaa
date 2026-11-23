import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-black text-stone-300 pt-16 sm:pt-20 pb-12 border-t border-stone-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Grid: Left Brand Narrative + Right 4 Columns (Directly matching reference) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-stone-800/80">
          
          {/* Left Column: Brand Name & Atelier Manifesto */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <h2 className="text-xl sm:text-2xl font-bold tracking-[0.08em] text-white uppercase">
              RUWAA ARTISTRY
            </h2>
            <p className="text-stone-400 font-light text-xs sm:text-sm leading-relaxed max-w-sm">
              Ruwaa Artistry is a luxury calligraphy &amp; engraving atelier by Farisha Arif, working across bespoke commissions, luxury perfume flacons, and live artistic activations from Qatar through to Saudi Arabia.
            </p>
          </div>

          {/* Right Columns: Studio • Work • Resources • Social */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 text-left">
            
            {/* Column 1: Studio */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-white">
                Studio
              </h3>
              <ul className="space-y-2 text-xs text-stone-400 font-light">
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    Farisha Arif
                  </Link>
                </li>
                <li>
                  <Link to="/why-ruwaa" className="hover:text-white transition-colors">
                    Why Ruwaa
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Work */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-white">
                Work
              </h3>
              <ul className="space-y-2 text-xs text-stone-400 font-light">
                <li>
                  <Link to="/services" className="hover:text-white transition-colors">
                    Glass Engraving
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition-colors">
                    Calligraphy
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition-colors">
                    Ceramics &amp; Clay
                  </Link>
                </li>
                <li>
                  <Link to="/collaborations" className="hover:text-white transition-colors">
                    Live Activations
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-white">
                Resources
              </h3>
              <ul className="space-y-2 text-xs text-stone-400 font-light">
                <li>
                  <Link to="/portfolio" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/collaborations" className="hover:text-white transition-colors">
                    Brand Collaborations
                  </Link>
                </li>
                <li>
                  <Link to="/why-ruwaa" className="hover:text-white transition-colors">
                    Craft Pillars
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Studio Inquiries
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Social */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-white">
                Social
              </h3>
              <ul className="space-y-2 text-xs text-stone-400 font-light">
                <li>
                  <a
                    href={siteData.brand.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={siteData.brand.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <span className="text-stone-500 cursor-default">
                    Qatar (Doha)
                  </span>
                </li>
                <li>
                  <span className="text-stone-500 cursor-default">
                    Saudi (Riyadh)
                  </span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Credits Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-light gap-4 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Ruwaa Artistry Studio. All rights reserved.
          </p>
          <p className="text-stone-500">
            Farisha Arif Atelier &bull; Doha &bull; Riyadh
          </p>
        </div>

      </div>
    </footer>
  );
}
