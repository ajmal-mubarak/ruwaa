import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative bg-white pt-8 sm:pt-14 pb-16 sm:pb-24 border-b border-stone-100 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* 2-Column Standard Editorial Hero Layout (Like Caligra & Divi) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Typography & Story */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Small uppercase kicker with line */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#A38257]" />
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-stone-500 font-sans">
                THE ELEGANCE OF WRITING
              </p>
            </div>

            {/* Giant Expressive Calligraphy & Serif Headline */}
            <div>
              <span className="font-calligraphy text-5xl sm:text-7xl md:text-8xl text-stone-900 block leading-[1.05] tracking-wide">
                The Art of Calligraphy,
              </span>
              <span className="font-serif text-3xl sm:text-5xl md:text-6xl text-stone-800 font-light block mt-1 tracking-tight">
                Crafted with Elegance.
              </span>
            </div>

            {/* Subtitle */}
            <p className="font-serif italic text-base sm:text-lg text-[#8C6D46] font-normal">
              Where timeless Arabic and English calligraphy meets contemporary luxury.
            </p>

            {/* Official Content Body */}
            <p className="text-stone-600 font-light text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
              At Ruwaa Artistry, we transform everyday objects and special moments into extraordinary artistic expressions through bespoke calligraphy, personalized creations, and live artistic experiences. From luxury engraving to handcrafted keepsakes, every creation is designed with passion, precision, and attention to detail.
            </p>

            {/* Clean Professional Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <Link
                to="/portfolio"
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-medium tracking-[0.2em] uppercase text-white bg-[#A38257] hover:bg-[#8B6B40] transition-colors text-center shadow-xs"
              >
                Explore Our Art
              </Link>
              
              <button
                onClick={() => onOpenBooking("Hero Book Calligraphy Experience")}
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-medium tracking-[0.2em] uppercase text-stone-900 border border-stone-800 hover:bg-stone-900 hover:text-white transition-colors text-center"
              >
                Book a Calligraphy Experience
              </button>
            </div>

          </div>

          {/* Right: Authentic Studio Photography (Like Caligra & Divi layouts) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[460px]">
              
              {/* Primary Calligraphy Craft Photograph */}
              <div className="aspect-[4/5] rounded-none overflow-hidden bg-stone-100 shadow-xl border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=900&auto=format&fit=crop"
                  alt="Farisha Arif - Hand Engraved Luxury Perfume Flacon"
                  className="w-full h-full object-cover standard-image-hover"
                />
              </div>

              {/* Subtle Atelier Note */}
              <div className="mt-4 flex items-center justify-between text-[11px] text-stone-500 font-sans border-t border-stone-200 pt-3">
                <span className="uppercase tracking-[0.18em] font-medium text-stone-700">Farisha Arif Atelier</span>
                <span className="italic text-stone-400">Doha &bull; Riyadh</span>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Feature Strip (Directly inspired by Caligra Elementor kit) */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A38257] font-semibold">01 &bull; Service</span>
            <h4 className="font-serif text-lg text-stone-900">Glass &amp; Fragrance Engraving</h4>
            <p className="text-xs text-stone-500 font-light">24K liquid gold inlays on crystal</p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A38257] font-semibold">02 &bull; Surface</span>
            <h4 className="font-serif text-lg text-stone-900">Custom Ceramics &amp; Pottery</h4>
            <p className="text-xs text-stone-500 font-light">Hand-turned functional pottery</p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A38257] font-semibold">03 &bull; Events</span>
            <h4 className="font-serif text-lg text-stone-900">Live Calligraphy Activations</h4>
            <p className="text-xs text-stone-500 font-light">Brand galas &amp; luxury events</p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A38257] font-semibold">04 &bull; Celebrations</span>
            <h4 className="font-serif text-lg text-stone-900">Weddings &amp; Keepsakes</h4>
            <p className="text-xs text-stone-500 font-light">Place cards, fans &amp; guest books</p>
          </div>

        </div>

      </div>
    </section>
  );
}
