import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, ArrowLeft, Plus, X, Search, ExternalLink } from 'lucide-react';
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
    miniCard: {
      title: "Atelier Penmanship",
      desc: "Traditional Thuluth & Diwani",
      thumb: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=400&auto=format&fit=crop"
    },
    scene: {
      image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1200&auto=format&fit=crop",
      alt: "Luxury Fragrance Bottle Engraved in Gold Leaf",
      hotspots: [
        {
          x: "48%",
          y: "55%",
          title: "Crystal Flacon Engraving",
          desc: "Micro-rotary engraved with 24K liquid gold infill."
        },
        {
          x: "32%",
          y: "35%",
          title: "Farisha Arif Signature",
          desc: "Bespoke calligraphy tailored to each recipient."
        }
      ]
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
    miniCard: {
      title: "Rotary Diamond Pen",
      desc: "Precision micro-engraving",
      thumb: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=400&auto=format&fit=crop"
    },
    scene: {
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop",
      alt: "Perfume bottle engraving with gold leaf",
      hotspots: [
        {
          x: "52%",
          y: "50%",
          title: "24K Liquid Gold",
          desc: "Permanent lustrous gold leaf inlaid by hand."
        }
      ]
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
    miniCard: {
      title: "Hand-Turned Clay",
      desc: "Organic terracotta glazes",
      thumb: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=400&auto=format&fit=crop"
    },
    scene: {
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop",
      alt: "Handcrafted ceramics with Arabic calligraphy",
      hotspots: [
        {
          x: "45%",
          y: "48%",
          title: "Hand-Turned Stoneware",
          desc: "Personalized Arabic poetry strokes cured for daily use."
        }
      ]
    }
  },
  {
    number: "04.",
    title: "Activations",
    dotColor: "bg-emerald-700",
    subtitle: "Live artistic experiences and guest keepsakes for VIP events.",
    description: "We bring the beauty of calligraphy directly to your celebrations. From elegant weddings to exclusive brand activations across Qatar and Saudi Arabia.",
    ctaText: "Book an experience",
    ctaLink: "/collaborations",
    miniCard: {
      title: "Live Guest Favors",
      desc: "Custom paper fans & scrolls",
      thumb: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=400&auto=format&fit=crop"
    },
    scene: {
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=1200&auto=format&fit=crop",
      alt: "Live calligraphy at luxury event",
      hotspots: [
        {
          x: "50%",
          y: "45%",
          title: "Live On-Site Easel",
          desc: "Personalized calligraphy demonstrations before guests."
        }
      ]
    }
  }
];

export default function Hero({ onOpenBooking }) {
  const [current, setCurrent] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const slide = SLIDES[current];

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
    setActiveHotspot(null);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setActiveHotspot(null);
  };

  return (
    <section className="relative bg-[#FAFAFA] border-b border-stone-200 overflow-hidden min-h-[calc(100vh-4rem)] flex">
      
      {/* 1. Left Vertical Rail (Exactly matching the reference image) */}
      <aside aria-label="Social and location links" className="hidden md:flex flex-col justify-between items-center w-14 lg:w-16 py-8 border-r border-stone-200/80 bg-white shrink-0 z-20">
        {/* Top decorative dot */}
        <div className="w-2 h-2 rounded-full bg-stone-300" />

        {/* Vertical Links rotated -90deg */}
        <div className="flex flex-col items-center gap-12 text-[10px] uppercase tracking-[0.25em] text-stone-400 font-medium">
          <a
            href={siteData.brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-900 transition-colors transform -rotate-90 whitespace-nowrap"
          >
            Instagram
          </a>
          <a
            href={siteData.brand.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-700 transition-colors transform -rotate-90 whitespace-nowrap"
          >
            WhatsApp
          </a>
          <span className="text-stone-300 transform -rotate-90 whitespace-nowrap cursor-default">
            Qatar &bull; KSA
          </span>
        </div>

        {/* Bottom Search / Inquire icon button */}
        <button
          onClick={() => onOpenBooking("Sidebar Search & Book")}
          aria-label="Inquire studio"
          className="p-2 text-stone-500 hover:text-stone-900 transition-colors focus:outline-none"
        >
          <Search className="w-4 h-4" />
        </button>
      </aside>

      {/* 2. Main Stage (Full-bleed luxury interior showroom style) */}
      <div className="flex-1 flex flex-col justify-between p-6 sm:p-10 lg:p-14 relative z-10">
        
        {/* Subtle Arabic calligraphy watermark in ambient background */}
        <div 
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 opacity-[0.025] mix-blend-multiply bg-repeat z-0"
          style={{
            backgroundImage: `url('/arabic-pattern.jpg')`,
            backgroundSize: '450px auto'
          }}
        />

        {/* Top/Middle Grid: Left Content + Right Interactive Lifestyle Scene */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto relative z-10">
          
          {/* Left Column: Number + Bold Headline + Paragraph + Mini Card */}
          <div className="lg:col-span-5 space-y-5 text-left">
            
            {/* Slide Large Faded Number */}
            <span className="font-serif text-5xl sm:text-6xl text-stone-300 font-light block -mb-2">
              {slide.number}
            </span>

            {/* Huge Bold Title with Accent Dot */}
            <div className="flex items-baseline gap-2">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-stone-900 font-medium tracking-tight">
                {slide.title}
              </h1>
              <span className={`w-3.5 h-3.5 rounded-full ${slide.dotColor} shrink-0 animate-pulse`} />
            </div>

            {/* Subtitle / Description */}
            <p className="font-serif italic text-base sm:text-lg text-stone-700 font-normal">
              {slide.subtitle}
            </p>
            
            <p className="text-stone-500 font-light text-xs sm:text-sm leading-relaxed max-w-md">
              {slide.description}
            </p>

            {/* Arrow Link */}
            <div className="pt-1">
              <Link
                to={slide.ctaLink}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-stone-900 hover:text-[#A38257] transition-colors group"
              >
                <span>&rarr; {slide.ctaText}</span>
              </Link>
            </div>

            {/* Floating Mini Card at Bottom Left (matching reference video preview card) */}
            <div className="pt-4">
              <div 
                onClick={() => onOpenBooking(slide.title)}
                className="inline-flex items-center gap-3 p-2.5 pr-5 bg-white/95 backdrop-blur-sm border border-stone-200/90 shadow-sm rounded-xl cursor-pointer hover:shadow-md transition-all group"
              >
                <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-stone-100 shrink-0">
                  <img
                    src={slide.miniCard.thumb}
                    alt={slide.miniCard.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Play className="w-3.5 h-3.5 text-white fill-white" />
                  </div>
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase tracking-wider text-[#A38257] font-semibold block">
                    Watch Atelier
                  </span>
                  <p className="font-serif text-xs text-stone-900 font-medium line-clamp-1">
                    {slide.miniCard.title}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fashion Craft Scene with Interactive Hotspots */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] aspect-[4/3] sm:aspect-[16/11] bg-white rounded-2xl overflow-hidden shadow-xl border border-stone-200 group">
              
              {/* Scene Image with Fade */}
              <img
                key={slide.number}
                src={slide.scene.image}
                alt={slide.scene.alt}
                className="w-full h-full object-cover animate-fadeIn transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Interactive "+" Hotspots (Like reference design) */}
              {slide.scene.hotspots.map((spot, i) => (
                <div
                  key={i}
                  className="absolute z-20"
                  style={{ top: spot.y, left: spot.x }}
                >
                  <button
                    onClick={() => setActiveHotspot(activeHotspot === i ? null : i)}
                    aria-label={spot.title}
                    className="w-7 h-7 rounded-full bg-white/90 text-stone-900 shadow-lg border border-stone-300 flex items-center justify-center hover:bg-stone-900 hover:text-white transition-all transform hover:scale-110 focus:outline-none"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>

                  {/* Hotspot Popover Tooltip */}
                  {activeHotspot === i && (
                    <div className="absolute left-9 -top-4 w-52 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-xl border border-stone-200 text-left animate-fadeIn z-30">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] uppercase tracking-wider text-[#A38257] font-semibold">Craft Note</span>
                        <button
                          onClick={() => setActiveHotspot(null)}
                          className="text-stone-400 hover:text-stone-900"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                      <h4 className="font-serif text-sm font-medium text-stone-900 mb-0.5">{spot.title}</h4>
                      <p className="text-[11px] text-stone-500 font-light leading-relaxed">{spot.desc}</p>
                    </div>
                  )}
                </div>
              ))}

              {/* Bottom Craft Watermark Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 flex items-center justify-between text-white text-[10px] uppercase tracking-wider">
                <span>Farisha Arif Atelier &bull; Qatar &bull; KSA</span>
                <span className="text-stone-300">Bespoke Collection</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Pagination & Slide Controls (Directly matching reference) */}
        <div className="pt-6 border-t border-stone-200/80 flex items-center justify-between relative z-10">
          
          {/* Quick Indicator */}
          <div className="text-[11px] font-sans text-stone-400 uppercase tracking-widest hidden sm:block">
            {slide.number} &mdash; 04
          </div>

          {/* Centered Slider Navigation (Arrow Left • Dots • Arrow Right) */}
          <div className="flex items-center gap-4 mx-auto sm:mx-0">
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="w-9 h-9 rounded-full border border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white flex items-center justify-center transition-colors text-stone-700"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    idx === current
                      ? 'w-6 h-2 bg-stone-900'
                      : 'w-2 h-2 bg-stone-300 hover:bg-stone-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="w-9 h-9 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-[#A38257] transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Right Floating Action Arrow */}
          <button
            onClick={() => onOpenBooking("Hero Diagonal Action")}
            aria-label="Book Atelier Experience"
            className="w-10 h-10 rounded-xl bg-white border border-stone-300 hover:border-stone-900 flex items-center justify-center text-stone-800 hover:text-stone-900 shadow-xs hover:shadow-md transition-all group"
          >
            <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>

        </div>

      </div>

    </section>
  );
}
