import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { siteData } from '../data/siteData';
import { Menu, X, MessageCircle } from 'lucide-react';

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
      {/* Top slim announcement bar */}
      <div className="bg-[#181614] text-[#E8DFD3] text-[10px] sm:text-[11px] uppercase tracking-[0.25em] py-2 px-4 text-center font-medium">
        <span>Bespoke Calligraphy &amp; Live Luxury Activations &bull; Qatar &amp; Saudi Arabia</span>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E8DFD3]'
            : 'bg-[#FAF7F2] border-b border-stone-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start shrink-0 group focus:outline-none">
            <span className="font-serif text-xl sm:text-2xl tracking-[0.18em] font-medium text-ink-900 group-hover:text-gold-600 transition-colors whitespace-nowrap">
              RUWAA ARTISTRY
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.28em] text-ink-400 font-sans -mt-0.5 whitespace-nowrap">
              By Farisha Arif &bull; Doha &amp; Riyadh
            </span>
          </Link>

          {/* Clean Desktop Navigation Links (no boxy borders, smooth hover) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.18em] font-sans whitespace-nowrap py-1 transition-colors focus:outline-none ${
                    isActive
                      ? 'text-ink-900 font-semibold border-b-2 border-gold-600'
                      : 'text-stone-600 hover:text-ink-900 border-b-2 border-transparent'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Single Clean Right Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={siteData.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] px-4 py-2.5 rounded-full border border-stone-300 hover:border-gold-500 bg-white/80 text-ink-800 hover:text-gold-700 transition-all shadow-2xs whitespace-nowrap focus:outline-none"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenBooking("General Booking")}
              className="text-xs uppercase tracking-[0.18em] px-4 py-2.5 bg-ink-900 hover:bg-gold-600 text-white transition-colors whitespace-nowrap focus:outline-none shadow-xs"
            >
              Book
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-ink-800 hover:text-gold-600 focus:outline-none flex items-center gap-1.5 border border-stone-200 rounded-md px-3 py-1.5 bg-white/80"
            aria-label="Toggle navigation menu"
          >
            <span className="text-[10px] uppercase tracking-widest font-medium">Menu</span>
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-stone-200 px-6 py-5 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    `text-xs uppercase tracking-[0.18em] py-2 border-b border-stone-100 flex items-center justify-between ${
                      isActive ? 'text-gold-600 font-semibold pl-2 border-gold-400' : 'text-stone-700 hover:text-ink-900'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <span className="text-stone-300 text-sm">&rarr;</span>
                </NavLink>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href={siteData.brand.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] py-2.5 rounded border border-stone-300 text-ink-800 bg-white"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp: {siteData.brand.phoneDisplay}</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking("Mobile Booking");
                  }}
                  className="w-full text-xs uppercase tracking-[0.18em] py-2.5 bg-ink-900 text-white text-center font-medium"
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
