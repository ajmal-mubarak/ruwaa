import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';
import { siteData } from '../data/siteData';

const SLIDES = [
  {
    number: "01.",
    title: "Calligraphy",
    dotColor: "bg-[#A38257]",
    subtitle: "Where timeless Arabic and English calligraphy meets contemporary luxury.",
    description: "At Ruwaa Artistry, we transform everyday objects and special moments into extraordinary artistic expressions through bespoke calligraphy, personalized creations, and live artistic experiences.",
    ctaText: "Explore our art",
    ctaLink: "/portfolio",
    scene: {
      image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1200&auto=format&fit=crop",
      alt: "Luxury Fragrance Bottle Engraved in Gold Leaf"
    }
  },
  {
    number: "02.",
    title: "Engraving",
    dotColor: "bg-[#8C6D46]",
    subtitle: "Luxury fragrance bottles and crystal transformed into heirloom keepsakes.",
    description: "From fine perfumery flacons to bespoke glassware, our rotary diamond engraving combines traditional scripts with refined liquid gold leaf finishes.",
    ctaText: "View engraving service",
    ctaLink: "/services",
    scene: {
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop",
      alt: "Perfume bottle engraving with gold leaf"
    }
  },
  {
    number: "03.",
    title: "Ceramics",
    dotColor: "bg-[#7D5C26]",
    subtitle: "Artisanal pottery and personalized Arabic poetry vessels.",
    description: "Discover personalized calligraphy on ceramic mugs, clay pots, and decorative stoneware. Each piece is crafted to combine functional beauty with artistic soul.",
    ctaText: "Discover pottery",
    ctaLink: "/services",
    scene: {
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop",
      alt: "Handcrafted ceramics with Arabic calligraphy"
    }
  },
  {
    number: "04.",
    title: "Activations",
    dotColor: "bg-emerald-600",
    subtitle: "Live artistic experiences and guest keepsakes for VIP events.",
    description: "We bring the beauty of calligraphy directly to your celebrations. From elegant weddings to exclusive brand activations across Qatar and Saudi Arabia.",
    ctaText: "Book an experience",
    ctaLink: "/collaborations",
    scene: {
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=1200&auto=format&fit=crop",
      alt: "Live calligraphy at luxury event"
    }
  }
];

export default function Hero({ onOpenBooking }) {
  const [current, setCurrent] = useState(0);
  const slide = SLIDES[current];

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <section className="relative bg-transparent border-b border-stone-800/80 overflow-hidden lg:h-[calc(100vh-4.5rem)] flex flex-col md:flex-row text-white">
      
      {/* 1. Left Vertical Rail */}
      <aside 
        aria-label="Social and location links" 
        className="hidden md:flex flex-col justify-between items-center w-14 lg:w-16 py-8 border-r border-stone-800/80 bg-[#121211]/50 backdrop-blur-xs shrink-0 z-20"
      >
        <div className="w-2 h-2 rounded-full bg-stone-700" />

        <div className="flex flex-col items-center gap-12 text-[10px] uppercase tracking-[0.25em] text-stone-400 font-medium">
          <a
            href={siteData.brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors transform -rotate-90 whitespace-nowrap"
          >
            Instagram
          </a>
          <a
            href={siteData.brand.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors transform -rotate-90 whitespace-nowrap"
          >
            WhatsApp
          </a>
          <span className="text-stone-600 transform -rotate-90 whitespace-nowrap cursor-default">
            Qatar &bull; KSA
          </span>
        </div>

        <div className="w-2 h-2 rounded-full bg-stone-700" />
      </aside>

      {/* 2. Main Stage (Calibrated to fit viewport height with luxury dark atmosphere) */}
      <div className="flex-1 flex flex-col justify-between px-6 sm:px-10 lg:px-14 py-4 sm:py-6 lg:py-6 relative z-10 overflow-hidden">
        
        {/* Subtle Arabic calligraphy watermark in ambient background */}
        <div 
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 opacity-[0.04] mix-blend-screen bg-repeat z-0"
          style={{
            backgroundImage: `url('/arabic-pattern.jpg')`,
            backgroundSize: '480px auto'
          }}
        />

        {/* Top/Middle Grid: Left Content + Right Showcase Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center my-auto relative z-10 py-2 sm:py-4">
          
          {/* Left Column: Number + Bold Headline + Paragraph + Link */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4 text-left">
            
            {/* Slide Large Faded Number */}
            <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-700 font-light block -mb-1">
              {slide.number}
            </span>

            {/* Huge Bold Title with Accent Dot */}
            <div className="flex items-baseline gap-2">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight">
                {slide.title}
              </h1>
              <span className={`w-3 h-3 rounded-full ${slide.dotColor} shrink-0 animate-pulse`} />
            </div>

            {/* Subtitle */}
            <p className="font-serif italic text-sm sm:text-base text-[#E2C798] font-normal">
              {slide.subtitle}
            </p>
            
            {/* Description */}
            <p className="text-stone-400 font-light text-xs sm:text-sm leading-relaxed max-w-md">
              {slide.description}
            </p>

            {/* Arrow Link */}
            <div className="pt-2">
              <Link
                to={slide.ctaLink}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-white hover:text-[#E2C798] transition-colors group"
              >
                <span>&rarr; {slide.ctaText}</span>
              </Link>
            </div>

          </div>

          {/* Right Column: High-Fashion Craft Scene */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] max-h-[46vh] lg:max-h-[50vh] aspect-[16/11] bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-800 group">
              
              <img
                key={slide.number}
                src={slide.scene.image}
                alt={slide.scene.alt}
                className="w-full h-full object-cover animate-fadeIn transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Bottom Craft Watermark Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-3 sm:p-4 flex items-center justify-between text-white text-[10px] uppercase tracking-wider">
                <span>Farisha Arif Atelier &bull; Qatar &bull; KSA</span>
                <span className="text-[#E2C798]">Bespoke Collection</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Pagination & Slide Controls */}
        <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between relative z-10 shrink-0">
          
          <div className="text-[11px] font-sans text-stone-500 uppercase tracking-widest hidden sm:block">
            {slide.number} &mdash; 04
          </div>

          <div className="flex items-center gap-4 mx-auto sm:mx-0">
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-stone-700 hover:border-white bg-stone-900/80 hover:bg-white hover:text-stone-950 flex items-center justify-center transition-colors text-stone-300"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <div className="flex items-center gap-2">
              {SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    idx === current
                      ? 'w-5 sm:w-6 h-2 bg-[#A38257]'
                      : 'w-2 h-2 bg-stone-700 hover:bg-stone-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#A38257] text-white flex items-center justify-center hover:bg-[#b8976b] transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          <button
            onClick={() => onOpenBooking("Hero Diagonal Action")}
            aria-label="Book Atelier Experience"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-stone-900 border border-stone-700 hover:border-[#A38257] flex items-center justify-center text-stone-300 hover:text-white shadow-xs hover:shadow-md transition-all group"
          >
            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
          </button>

        </div>

      </div>

    </section>
  );
}
