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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/85 backdrop-blur-md shadow-xs border-b border-stone-200/60' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        
        {/* Left: Brand Logo (Sleek, Compact, Never Collides) */}
        <div className="shrink-0 pr-4 lg:pr-8">
          <Link to="/" className="flex items-center gap-2.5 group focus:outline-none">
            <div className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center font-calligraphy text-lg text-stone-900 group-hover:border-[#A38257] group-hover:text-[#A38257] transition-colors shrink-0">
              R
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg tracking-[0.14em] font-medium text-stone-900 group-hover:text-[#A38257] transition-colors whitespace-nowrap">
                Ruwaa Artistry
              </span>
              <span className="text-[7.5px] uppercase tracking-[0.2em] text-stone-400 font-sans -mt-0.5 whitespace-nowrap">
                Qatar &amp; Saudi Arabia
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Delicate, Centered Nav Items with Proportional Spacing */}
        <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 2xl:gap-8 px-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `text-[11px] uppercase tracking-[0.14em] font-sans whitespace-nowrap transition-colors relative py-1 focus:outline-none ${
                  isActive
                    ? 'text-stone-900 font-semibold after:w-full after:bg-[#A38257]'
                    : 'text-stone-500 hover:text-stone-900 after:w-0 hover:after:w-full after:bg-stone-300'
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:transition-all after:duration-300`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right: Sleek & Compact Actions (Never Overflowing) */}
        <div className="shrink-0 pl-4 lg:pl-8 flex items-center gap-2.5">
          <a
            href={siteData.brand.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="w-8 h-8 rounded-full border border-stone-300 hover:border-emerald-600 text-stone-700 hover:text-emerald-700 flex items-center justify-center transition-colors focus:outline-none"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
          </a>
          
          <button
            onClick={() => onOpenBooking("Header Book Experience")}
            className="text-[11px] uppercase tracking-[0.14em] px-3.5 py-1.5 sm:px-4 sm:py-2 bg-stone-900 hover:bg-[#A38257] text-white transition-colors whitespace-nowrap focus:outline-none"
          >
            Book
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-stone-800 hover:text-[#A38257] focus:outline-none flex items-center gap-1 border border-stone-200 rounded px-2"
            aria-label="Toggle navigation menu"
          >
            <span className="text-[10px] uppercase tracking-widest font-medium">Menu</span>
            {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-4 shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.16em] py-1.5 border-b border-stone-100 flex items-center justify-between ${
                    isActive ? 'text-[#A38257] font-semibold pl-2' : 'text-stone-700 hover:text-stone-900'
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="text-stone-300 text-xs">&rarr;</span>
              </NavLink>
            ))}
            <div className="pt-2 flex items-center gap-2">
              <a
                href={siteData.brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 text-[11px] uppercase tracking-[0.14em] py-2 rounded border border-stone-300 text-stone-800"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking("Mobile Booking");
                }}
                className="flex-1 text-[11px] uppercase tracking-[0.14em] py-2 bg-stone-900 text-white text-center font-medium"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
