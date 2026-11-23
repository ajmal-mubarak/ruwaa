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
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#EADDCB]' 
          : 'bg-transparent border-b border-[#EADDCB]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <div className="shrink-0 pr-4 lg:pr-8">
          <Link to="/" className="flex items-center gap-2.5 group focus:outline-none">
            <div className="w-8 h-8 rounded-full border border-[#C79F5E] flex items-center justify-center font-calligraphy text-lg text-[#9E672B] group-hover:border-[#9E672B] transition-colors shrink-0 bg-white">
              R
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg tracking-[0.14em] font-medium text-[#1C1917] group-hover:text-[#9E672B] transition-colors whitespace-nowrap">
                Ruwaa Artistry
              </span>
              <span className="text-[7.5px] uppercase tracking-[0.2em] text-[#8C8277] font-sans -mt-0.5 whitespace-nowrap">
                Qatar &amp; Saudi Arabia
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Delicate, Centered Nav Items */}
        <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 2xl:gap-8 px-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `text-[11px] uppercase tracking-[0.14em] font-sans whitespace-nowrap transition-colors relative py-1 focus:outline-none ${
                  isActive
                    ? 'text-[#1C1917] font-bold after:w-full after:bg-[#C79F5E]'
                    : 'text-[#1C1917]/85 hover:text-[#9E672B] font-semibold after:w-0 hover:after:w-full after:bg-[#C79F5E]'
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-300`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="shrink-0 pl-1 sm:pl-4 lg:pl-8 flex items-center gap-1.5 sm:gap-2.5">
          <a
            href={siteData.brand.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="w-8 h-8 rounded-full border border-[#EADDCB] hover:border-emerald-500 text-stone-600 hover:text-emerald-600 flex items-center justify-center transition-colors focus:outline-none bg-white shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
          </a>
          
          <button
            onClick={() => onOpenBooking("Header Book Experience")}
            className="text-[10.5px] sm:text-[11px] uppercase tracking-[0.14em] px-3 py-1.5 sm:px-4 sm:py-2 bg-[#C79F5E] hover:bg-[#9E672B] text-white transition-colors whitespace-nowrap focus:outline-none rounded-sm font-medium shadow-sm shrink-0"
          >
            Book
          </button>

          {/* Mobile Menu Button - 3 Lines Hamburger Only, No Text, Fully Visible */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-8 h-8 flex items-center justify-center text-[#1C1917] hover:text-[#9E672B] focus:outline-none border border-[#EADDCB] rounded-md bg-white shadow-xs shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-[#1C1917]" /> : <Menu className="w-4 h-4 text-[#1C1917] stroke-[2.2]" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#EADDCB] px-6 py-4 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.16em] py-2 border-b border-[#EADDCB] flex items-center justify-between ${
                    isActive ? 'text-[#9E672B] font-semibold pl-2' : 'text-stone-700 hover:text-[#1C1917]'
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="text-stone-400 text-xs">&rarr;</span>
              </NavLink>
            ))}
            <div className="pt-2 flex items-center gap-2">
              <a
                href={siteData.brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 text-[11px] uppercase tracking-[0.14em] py-2 rounded border border-[#EADDCB] text-stone-700 bg-white"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking("Mobile Booking");
                }}
                className="flex-1 text-[11px] uppercase tracking-[0.14em] py-2 bg-[#C79F5E] hover:bg-[#9E672B] text-white text-center font-medium rounded shadow-sm"
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
