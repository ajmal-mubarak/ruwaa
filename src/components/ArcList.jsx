import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DEFAULT_ITEMS = [
  {
    id: 'engraving',
    title: 'Bottle Engraving',
    subtitle: '24K Liquid Gold on Glass Flacons',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=900&auto=format&fit=crop',
    tag: 'Signature Craft',
    link: '/services'
  },
  {
    id: 'arabic',
    title: 'Arabic Calligraphy',
    subtitle: 'Classical Thuluth & Diwani Geometry',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=900&auto=format&fit=crop',
    tag: 'Bespoke Artwork',
    link: '/portfolio'
  },
  {
    id: 'ceramics',
    title: 'Custom Ceramics',
    subtitle: 'Hand-Turned Poetry Vessels & Mugs',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=900&auto=format&fit=crop',
    tag: 'Artisanal Pottery',
    link: '/services'
  },
  {
    id: 'events',
    title: 'Live Artistry',
    subtitle: 'VIP Activations & Brand Galas',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=900&auto=format&fit=crop',
    tag: 'Brand Collaborations',
    link: '/collaborations'
  },
  {
    id: 'leather',
    title: 'Leather Foiling',
    subtitle: 'Hot Metallic Foil Debossing',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=900&auto=format&fit=crop',
    tag: 'Luxury Accessories',
    link: '/portfolio'
  },
  {
    id: 'weddings',
    title: 'Wedding Keepsakes',
    subtitle: 'Custom Paper Fans & Wax Sealed Place Cards',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop',
    tag: 'Special Celebrations',
    link: '/services'
  }
];

export default function ArcList({ items = DEFAULT_ITEMS, radius = 260, arcAngle = 18 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  // Auto rotation every 4.5 seconds unless paused by user interaction
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, items.length]);

  // Handle wheel navigation
  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY > 20) {
      setActiveIndex((prev) => (prev + 1) % items.length);
    } else if (e.deltaY < -20) {
      setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  const activeItem = items[activeIndex];

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onWheel={handleWheel}
      className="relative flex flex-col md:flex-row items-center gap-6 lg:gap-8 select-none py-2"
    >
      {/* 1. Image Preview Frame */}
      <div className="relative shrink-0 w-[240px] sm:w-[270px] lg:w-[290px] aspect-[4/5] bg-stone-100 overflow-hidden shadow-xl border border-stone-200">
        {items.map((item, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={item.id}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                isActive
                  ? 'opacity-100 scale-100 z-10'
                  : 'opacity-0 scale-105 z-0 pointer-events-none'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </div>
          );
        })}

        {/* Floating Tag */}
        <div className="absolute top-3 left-3 z-20">
          <span className="px-2.5 py-1 bg-white/90 backdrop-blur-xs text-[9px] uppercase tracking-[0.2em] font-medium text-stone-800 shadow-xs">
            {activeItem.tag}
          </span>
        </div>

        {/* Bottom Note */}
        <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between text-white border-t border-white/20 pt-2 text-[10px] font-sans">
          <span className="uppercase tracking-[0.16em] font-medium text-stone-200">Farisha Arif Atelier</span>
          <span className="italic text-stone-300">Doha &bull; Riyadh</span>
        </div>
      </div>

      {/* 2. Arc List of Titles (Turns along an arc) */}
      <div className="relative h-[280px] sm:h-[320px] w-full md:w-[260px] flex items-center justify-start overflow-hidden">
        {items.map((item, idx) => {
          // Calculate relative circular offset from active item
          const offset = idx - activeIndex;
          const isVisible = Math.abs(offset) <= 2;

          // Trigonometric arc calculations (curved wheel)
          const angleDeg = offset * arcAngle;
          const rad = (angleDeg * Math.PI) / 180;
          const translateY = Math.sin(rad) * radius;
          // Arc curvature away from image (curves in an arc path)
          const translateX = (1 - Math.cos(rad)) * radius * 0.75;
          const opacity = isActiveOpacity(offset);
          const isActive = offset === 0;

          return (
            <div
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              onMouseEnter={() => setActiveIndex(idx)}
              className="absolute left-0 cursor-pointer transition-all duration-500 ease-out text-left"
              style={{
                transform: `translate3d(${translateX}px, ${translateY}px, 0) rotate(${angleDeg}deg)`,
                opacity: isVisible ? opacity : 0,
                zIndex: isVisible ? 10 - Math.abs(offset) : 0,
                pointerEvents: isVisible ? 'auto' : 'none'
              }}
            >
              <div className="flex items-center gap-2 group py-1">
                {/* Active indicator mark */}
                {isActive && (
                  <span className="text-[#A38257] font-serif text-sm animate-pulse">&gt;</span>
                )}
                
                <div>
                  <h3
                    className={`font-serif tracking-tight transition-all duration-300 ${
                      isActive
                        ? 'text-xl sm:text-2xl text-stone-900 font-semibold'
                        : 'text-base sm:text-lg text-stone-500 hover:text-stone-800 font-light'
                    }`}
                  >
                    {item.title}
                  </h3>

                  {isActive && (
                    <p className="text-[11px] text-stone-500 font-light max-w-[200px] leading-tight font-sans mt-0.5 animate-fadeIn">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

function isActiveOpacity(offset) {
  if (offset === 0) return 1;
  if (Math.abs(offset) === 1) return 0.55;
  if (Math.abs(offset) === 2) return 0.25;
  return 0;
}
