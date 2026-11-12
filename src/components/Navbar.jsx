import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { siteData } from '../data/siteData';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
    <>
      {/* Top clean slim bar */}
      <div className="bg-[#1C1A18] text-[#E8DFD3] text-[10px] sm:text-[11px] uppercase tracking-[0.25em] py-2 px-4 text-center font-medium">
        <span>Bespoke Calligraphy &bull; Luxury Engraving &bull; Qatar &amp; Saudi Arabia</span>
      </div>

      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-xs border-b border-stone-200/80 py-3' : 'border-b border-stone-100 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          
          {/* Brand Logo with Calligraphic Monogram */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group focus:outline-none">
            <div className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center font-calligraphy text-2xl text-stone-900 group-hover:border-[#A38257] group-hover:text-[#A38257] transition-colors">
              R
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-[0.14em] font-medium text-stone-900 group-hover:text-[#A38257] transition-colors whitespace-nowrap">
                Ruwaa Artistry
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-stone-400 font-sans -mt-0.5 whitespace-nowrap">
                By Farisha Arif &bull; Qatar &amp; KSA
              </span>
            </div>
          </Link>

          {/* Clean Desktop Navigation (No boxes, generous tracking, standard professional) */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.18em] font-sans whitespace-nowrap transition-colors relative py-1 focus:outline-none ${
                    isActive
                      ? 'text-stone-900 font-semibold after:w-full after:bg-[#A38257]'
                      : 'text-stone-600 hover:text-stone-900 after:w-0 hover:after:w-full after:bg-stone-300'
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:transition-all after:duration-300`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Clean Right Actions */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={siteData.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] px-4 py-2.5 rounded-full border border-stone-300 hover:border-stone-900 text-stone-700 hover:text-stone-900 transition-colors whitespace-nowrap focus:outline-none"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>WhatsApp</span>
            </a>
            
            <button
              onClick={() => onOpenBooking("Header Book Experience")}
              className="text-xs uppercase tracking-[0.18em] px-5 py-2.5 bg-[#1C1A18] hover:bg-[#A38257] text-white transition-colors whitespace-nowrap focus:outline-none shadow-xs"
            >
              Book an Experience
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-800 hover:text-[#A38257] focus:outline-none flex items-center gap-1.5 border border-stone-200 rounded px-2.5 py-1.5"
            aria-label="Toggle navigation menu"
          >
            <span className="text-[10px] uppercase tracking-widest font-medium">Menu</span>
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-5 shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    `text-xs uppercase tracking-[0.18em] py-2 border-b border-stone-100 flex items-center justify-between ${
                      isActive ? 'text-[#A38257] font-semibold pl-2' : 'text-stone-700 hover:text-stone-900'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <span className="text-stone-300 text-sm">&rarr;</span>
                </NavLink>
              ))}
              <div className="pt-3 flex flex-col gap-2.5">
                <a
                  href={siteData.brand.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] py-2.5 rounded border border-stone-300 text-stone-800"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp: {siteData.brand.phoneDisplay}</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking("Mobile Booking");
                  }}
                  className="w-full text-xs uppercase tracking-[0.18em] py-2.5 bg-[#1C1A18] text-white text-center font-medium"
                >
                  Book an Experience
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
