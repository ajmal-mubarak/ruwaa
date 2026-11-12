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
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
    <>
      {/* Top micro-announcement bar */}
      <div className="bg-[#1E1B18] text-[#E8DFD3] text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] py-2 px-4 text-center font-medium border-b border-[#2D2824]">
        <span>Bespoke Calligraphy &amp; Live Luxury Activations &bull; Qatar &amp; Saudi Arabia</span>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8DFD3]'
            : 'bg-[#FAF7F2] border-b border-stone-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo / Brand */}
          <Link to="/" className="flex flex-col items-start group shrink-0">
            <span className="font-serif text-xl sm:text-2xl tracking-[0.16em] sm:tracking-[0.18em] font-medium text-ink-900 group-hover:text-gold-600 transition-colors whitespace-nowrap">
              RUWAA ARTISTRY
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-ink-400 font-sans -mt-0.5 whitespace-nowrap">
              By Farisha Arif &bull; Doha &amp; Riyadh
            </span>
          </Link>

          {/* Desktop Nav Links (Spacious, Never Wrapped) */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `text-[11px] 2xl:text-xs uppercase tracking-[0.16em] 2xl:tracking-[0.2em] font-sans whitespace-nowrap shrink-0 relative py-1 transition-colors ${
                    isActive
                      ? 'text-ink-900 font-semibold after:w-full after:bg-gold-500'
                      : 'text-ink-600 hover:text-ink-900 after:w-0 hover:after:w-full after:bg-stone-300'
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:transition-all after:duration-300`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA & WhatsApp Button */}
          <div className="hidden sm:flex items-center gap-2.5 sm:gap-3 shrink-0">
            <a
              href={siteData.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.16em] px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-full border border-stone-300 hover:border-gold-500 text-ink-700 hover:text-gold-600 transition-all duration-300 bg-white/80 whitespace-nowrap shrink-0 shadow-2xs"
            >
              <MessageCircle className="w-3.5 h-3.5 text-gold-600 shrink-0" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking("General Experience Booking")}
              className="text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] px-3.5 sm:px-5 py-2 sm:py-2.5 bg-ink-900 hover:bg-gold-600 text-white rounded-none border border-ink-900 hover:border-gold-600 transition-all duration-300 flex items-center gap-1.5 shadow-sm whitespace-nowrap shrink-0"
            >
              <span>Book Experience</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>

          {/* Mobile & Tablet Menu Button (Active below xl) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-ink-800 hover:text-gold-600 focus:outline-none flex items-center gap-2 border border-stone-200 rounded-lg px-3 py-1.5 bg-white/80"
            aria-label="Toggle menu"
          >
            <span className="text-[10px] uppercase tracking-widest font-medium text-ink-700">Menu</span>
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#FAF7F2] border-b border-stone-200 px-6 py-6 shadow-2xl animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    `text-xs uppercase tracking-[0.18em] py-2 border-b border-stone-100 flex items-center justify-between ${
                      isActive ? 'text-gold-600 font-semibold pl-2 border-gold-300' : 'text-ink-700 hover:text-gold-600'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <span className="text-stone-300 text-sm">&rarr;</span>
                </NavLink>
              ))}
              <div className="pt-4 flex flex-col gap-2.5">
                <a
                  href={siteData.brand.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] py-3 rounded border border-stone-300 text-ink-800 bg-white"
                >
                  <MessageCircle className="w-4 h-4 text-gold-600" />
                  <span>WhatsApp: {siteData.brand.phoneDisplay}</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking("General Experience Booking");
                  }}
                  className="w-full text-xs uppercase tracking-[0.18em] py-3 bg-ink-900 text-white text-center font-medium"
                >
                  Book a Calligraphy Experience
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
