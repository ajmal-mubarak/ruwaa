import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import ArcList from './ArcList';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative bg-white border-b border-stone-100 overflow-hidden flex items-center py-6 sm:py-10 lg:py-12 min-h-[calc(100vh-4.25rem)]">
      
      {/* Subtle Calligraphy Pattern Ambient Background */}
      <div 
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 opacity-[0.035] mix-blend-multiply bg-repeat z-0"
        style={{
          backgroundImage: `url('/arabic-pattern.jpg')`,
          backgroundSize: '400px auto'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full my-auto">
        
        {/* 2-Column Balanced Editorial Hero Layout with Arc List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left: Typography & Story */}
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-4 text-left">
            
            {/* Small uppercase kicker with line */}
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-[1px] bg-[#A38257]" />
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-stone-500 font-sans">
                THE ELEGANCE OF WRITING
              </p>
            </div>

            {/* Expressive Calligraphy & Serif Headline */}
            <div className="leading-tight">
              <span className="font-calligraphy text-4xl sm:text-5xl lg:text-6xl text-stone-900 block tracking-wide">
                The Art of Calligraphy,
              </span>
              <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-800 font-light block mt-0.5 tracking-tight">
                Crafted with Elegance.
              </span>
            </div>

            {/* Subtitle */}
            <p className="font-serif italic text-sm sm:text-base text-[#8C6D46] font-normal">
              Where timeless Arabic and English calligraphy meets contemporary luxury.
            </p>

            {/* Official Content Body */}
            <p className="text-stone-600 font-light text-xs sm:text-sm leading-relaxed max-w-lg">
              At Ruwaa Artistry, we transform everyday objects and special moments into extraordinary artistic expressions through bespoke calligraphy, personalized creations, and live artistic experiences. From luxury engraving to handcrafted keepsakes, every creation is designed with passion, precision, and attention to detail.
            </p>

            {/* Clean Professional Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to="/portfolio"
                className="w-full sm:w-auto px-7 py-3 text-xs font-medium tracking-[0.18em] uppercase text-white bg-[#A38257] hover:bg-[#8B6B40] transition-colors text-center shadow-xs"
              >
                Explore Our Art
              </Link>
              
              <button
                onClick={() => onOpenBooking("Hero Book Calligraphy Experience")}
                className="w-full sm:w-auto px-7 py-3 text-xs font-medium tracking-[0.18em] uppercase text-stone-900 border border-stone-800 hover:bg-stone-900 hover:text-white transition-colors text-center"
              >
                Book an Experience
              </button>
            </div>

          </div>

          {/* Right: Arc List Animation (Turning along an arc beside image preview) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end overflow-hidden">
            <ArcList />
          </div>

        </div>

      </div>
    </section>
  );
}
