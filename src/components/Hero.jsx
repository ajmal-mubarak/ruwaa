import React, { useState, useRef, useEffect } from 'react';
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

  // Interactive Shader Reveal Mouse & Touch Tracking (Direct DOM Ref - Zero Component Re-renders)
  const sectionRef = useRef(null);
  const maskRef = useRef(null);
  const isHoveringRef = useRef(false);
  const targetPos = useRef({ x: 500, y: 300 });
  const currentPos = useRef({ x: 500, y: 300 });
  const animFrameId = useRef(null);

  useEffect(() => {
    const revealRadius = window.innerWidth < 768 ? 200 : 320;

    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const initialX = rect.width * 0.52;
      const initialY = rect.height * 0.44;
      targetPos.current = { x: initialX, y: initialY };
      currentPos.current = { x: initialX, y: initialY };
      if (maskRef.current) {
        const maskVal = `radial-gradient(circle ${revealRadius}px at ${initialX}px ${initialY}px, black 0%, rgba(0,0,0,0.85) 45%, transparent 75%)`;
        maskRef.current.style.maskImage = maskVal;
        maskRef.current.style.webkitMaskImage = maskVal;
      }
    }

    const updateLoop = () => {
      // Smooth lerp for fluid liquid-brush tracking
      const ease = 0.12;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease;

      if (maskRef.current) {
        const x = Math.round(currentPos.current.x * 10) / 10;
        const y = Math.round(currentPos.current.y * 10) / 10;
        const maskVal = `radial-gradient(circle ${revealRadius}px at ${x}px ${y}px, black 0%, rgba(0,0,0,0.85) 45%, transparent 75%)`;
        maskRef.current.style.maskImage = maskVal;
        maskRef.current.style.webkitMaskImage = maskVal;
        maskRef.current.style.opacity = isHoveringRef.current ? '0.95' : '0.22';
      }

      animFrameId.current = requestAnimationFrame(updateLoop);
    };

    animFrameId.current = requestAnimationFrame(updateLoop);
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  const handlePointerMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    targetPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    isHoveringRef.current = true;
  };

  const handlePointerLeave = () => {
    isHoveringRef.current = false;
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      targetPos.current = {
        x: rect.width * 0.52,
        y: rect.height * 0.44,
      };
    }
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => { isHoveringRef.current = true; }}
      onPointerLeave={handlePointerLeave}
      className="relative bg-[#FAF7F2] border-b border-[#EADDCB] overflow-hidden lg:h-[calc(100vh-4.5rem)] flex flex-col md:flex-row text-[#1C1917]"
    >
      {/* Interactive Shader Reveal Background: Blank Textured Paper mainly + Calligraphy Artwork reveal */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Layer 1: Blank textured paper - shown mainly */}
        <img
          src="/hero-paper-texture.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-95"
        />

        {/* Layer 2: Watercolor calligraphy art revealed at cursor position like React Bits Shader Reveal */}
        <div
          ref={maskRef}
          className="absolute inset-0 transition-opacity duration-500 ease-out"
          style={{ opacity: 0.22 }}
        >
          <img
            src="/hero-calligraphy.jpg"
            alt="Handcrafted Arabic Calligraphy"
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>

        {/* Soft luxury parchment ambient vignette to preserve clean contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/65 via-[#FAF7F2]/20 to-[#FAF7F2]/45 pointer-events-none" />
      </div>

      {/* 1. Left Vertical Rail */}
      <aside
        aria-label="Social and location links"
        className="hidden md:flex flex-col justify-between items-center w-14 lg:w-16 py-8 border-r border-[#EADDCB] bg-[#F4EFE6]/70 backdrop-blur-xs shrink-0 z-20"
      >
        <div className="w-2 h-2 rounded-full bg-[#C79F5E]" />

        <div className="flex flex-col items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-[#1C1917] font-semibold">
          <div className="h-20 flex items-center justify-center">
            <a
              href={siteData.brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#9E672B] transition-colors transform -rotate-90 whitespace-nowrap"
            >
              Instagram
            </a>
          </div>

          <div className="w-4 h-[1.5px] bg-[#C79F5E]" />

          <div className="h-20 flex items-center justify-center">
            <a
              href={siteData.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-700 transition-colors transform -rotate-90 whitespace-nowrap"
            >
              WhatsApp
            </a>
          </div>

          <div className="w-4 h-[1.5px] bg-[#C79F5E]" />

          <div className="h-28 flex items-center justify-center">
            <span className="text-[#44403C] font-semibold transform -rotate-90 whitespace-nowrap cursor-default">
              Qatar &bull; KSA
            </span>
          </div>
        </div>

        <div className="w-2 h-2 rounded-full bg-[#C79F5E]" />
      </aside>

      {/* 2. Main Stage (Calibrated to fit viewport height with luxury light atmosphere) */}
      <div className="flex-1 flex flex-col justify-between px-6 sm:px-10 lg:px-14 py-4 sm:py-6 lg:py-6 relative z-10 overflow-hidden">

        {/* Top/Middle Grid: Left Content + Right Showcase Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center my-auto relative z-10 py-2 sm:py-4">

          {/* Left Column: Number + Bold Headline + Subtitle (1 line) + Description (3 lines in transparent golden box) + Link */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-left">

            {/* Slide Large Highlighted Number */}
            <span className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#9E672B] font-semibold block -mb-1 drop-shadow-2xs">
              {slide.number}
            </span>

            {/* Huge Bold Title with Accent Dot */}
            <div className="flex items-baseline gap-2.5">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#1C1917] font-semibold tracking-tight">
                {slide.title}
              </h1>
              <span className={`w-3.5 h-3.5 rounded-full ${slide.dotColor} shrink-0 animate-pulse`} />
            </div>

            {/* Subtitle - In One Line */}
            <p className="font-serif italic text-base sm:text-lg lg:text-[19px] text-[#2B231A] font-medium leading-snug whitespace-nowrap overflow-hidden text-ellipsis">
              {slide.subtitle}
            </p>

            {/* Description - Clean 3 Lines */}
            <p className="text-[#292524] font-normal text-xs sm:text-sm lg:text-[15px] leading-relaxed max-w-xl">
              {slide.description}
            </p>

            {/* Action Link Highlight */}
            <div className="pt-1 sm:pt-2">
              <Link
                to={slide.ctaLink}
                className="inline-flex items-center gap-2.5 text-xs sm:text-sm uppercase tracking-[0.22em] font-bold text-[#1C1917] hover:text-[#9E672B] transition-all group border-b-2 border-[#1C1917] pb-1 hover:border-[#9E672B]"
              >
                <span>&rarr; {slide.ctaText}</span>
              </Link>
            </div>

          </div>

          {/* Right Column: High-Fashion Craft Scene */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] max-h-[46vh] lg:max-h-[50vh] aspect-[16/11] bg-white rounded-2xl overflow-hidden shadow-xl border border-[#EADDCB] group">
              <img
                key={slide.number}
                src={slide.scene.image}
                alt={slide.scene.alt}
                className="w-full h-full object-cover animate-fadeIn transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Bottom Craft Watermark Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-3.5 sm:p-4 flex items-center justify-between text-white text-[11px] uppercase tracking-wider font-medium">
                <span>Farisha Arif Atelier &bull; Qatar &bull; KSA</span>
                <span className="text-[#F4C96B] font-semibold">Bespoke Collection</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Pagination & Slide Controls */}
        <div className="pt-4 border-t border-[#EADDCB] flex items-center justify-between relative z-10 shrink-0">

          <div className="text-xs sm:text-sm font-sans text-[#1C1917] font-semibold uppercase tracking-widest hidden sm:block">
            {slide.number} &mdash; 04
          </div>

          <div className="flex items-center gap-4 mx-auto sm:mx-0">
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#EADDCB] hover:border-[#C79F5E] bg-white hover:bg-[#FAF7F2] flex items-center justify-center transition-colors text-stone-700 shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <div className="flex items-center gap-2">
              {SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full ${idx === current
                    ? 'w-5 sm:w-6 h-2 bg-[#C79F5E]'
                    : 'w-2 h-2 bg-[#EADDCB] hover:bg-stone-400'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#C79F5E] text-white flex items-center justify-center hover:bg-[#9E672B] transition-colors shadow-xs"
            >
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          <button
            onClick={() => onOpenBooking("Hero Diagonal Action")}
            aria-label="Book Atelier Experience"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-[#EADDCB] hover:border-[#C79F5E] flex items-center justify-center text-stone-700 hover:text-[#9E672B] shadow-xs hover:shadow-md transition-all group"
          >
            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
          </button>

        </div>

      </div>

    </section>
  );
}
