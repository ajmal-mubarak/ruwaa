import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Pause, Play, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function HaloCarousel({ onOpenBooking }) {
  const items = siteData.portfolioItems;
  const total = items.length;

  // Active rotation angle in degrees
  const [angle, setAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartAngle, setDragStartAngle] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const containerRef = useRef(null);
  const autoPlayRef = useRef(null);
  const lastTimeRef = useRef(Date.now());

  // Step angle between adjacent cards
  const stepAngle = 18; // 18 degrees per card

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return;

    let animationFrame;
    const animate = () => {
      const now = Date.now();
      const delta = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      // Slow elegant turn: ~3 degrees per second
      setAngle((prev) => prev + delta * 3.5);
      animationFrame = requestAnimationFrame(animate);
    };

    lastTimeRef.current = Date.now();
    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isAutoPlaying, isDragging]);

  // Sync selectedIdx based on closest card to 0deg (top of the arch)
  useEffect(() => {
    // Current normalized index
    const rawIdx = Math.round(-angle / stepAngle);
    const normalized = ((rawIdx % total) + total) % total;
    setSelectedIdx(normalized);
  }, [angle, stepAngle, total]);

  // Drag handlers
  const handlePointerDown = (e) => {
    setIsDragging(true);
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    setDragStartX(clientX);
    setDragStartAngle(angle);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const deltaX = clientX - dragStartX;
    // Map pixels to rotation degrees
    const sensitivity = 0.16;
    setAngle(dragStartAngle + deltaX * sensitivity);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    // Snap gently to nearest card
    const targetIdx = Math.round(-angle / stepAngle);
    setAngle(-targetIdx * stepAngle);
  };

  const snapToCard = (index) => {
    // Compute shortest angular distance
    const currentVirtualIdx = -angle / stepAngle;
    const currentBase = Math.round(currentVirtualIdx);
    const currentMod = ((currentBase % total) + total) % total;
    
    let diff = index - currentMod;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const targetVirtual = currentBase + diff;
    setAngle(-targetVirtual * stepAngle);
  };

  const handleNext = () => {
    const targetIdx = Math.round(-angle / stepAngle) + 1;
    setAngle(-targetIdx * stepAngle);
  };

  const handlePrev = () => {
    const targetIdx = Math.round(-angle / stepAngle) - 1;
    setAngle(-targetIdx * stepAngle);
  };

  const activeItem = items[selectedIdx] || items[0];

  return (
    <section 
      ref={containerRef}
      className="relative bg-gradient-to-b from-stone-900 via-[#181817] to-stone-950 text-white py-16 sm:py-24 border-b border-stone-800 overflow-hidden select-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {/* Subtle Arabic calligraphy watermark pattern in ambient background */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-screen bg-repeat z-0"
        style={{
          backgroundImage: `url('/arabic-pattern.jpg')`,
          backgroundSize: '480px auto'
        }}
      />

      {/* Radial overhead halo spotlight */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#A38257]/15 via-transparent to-transparent blur-3xl rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges & Controls Header Bar */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800/80 border border-stone-700/60 text-[10px] uppercase tracking-[0.2em] text-[#E2C798] font-medium backdrop-blur-xs">
            <Sparkles className="w-3 h-3 text-[#A38257]" />
            <span>PORTFOLIO ARCHIVE</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              aria-label={isAutoPlaying ? "Pause rotation" : "Play rotation"}
              className="px-3 py-1.5 rounded-full bg-stone-800/80 hover:bg-stone-700 border border-stone-700/60 text-[10px] uppercase tracking-wider text-stone-300 flex items-center gap-1.5 transition-colors"
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3 h-3 text-[#A38257]" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-[#A38257] fill-[#A38257]" />
                  <span className="hidden sm:inline">Auto-Turn</span>
                </>
              )}
            </button>

            <Link
              to="/portfolio"
              className="text-xs uppercase tracking-[0.18em] text-[#E2C798] hover:text-white font-medium flex items-center gap-1.5 transition-colors pl-2"
            >
              <span>Explore All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Halo Carousel Stage */}
        <div className="relative w-full h-[400px] sm:h-[460px] md:h-[500px] flex items-center justify-center overflow-hidden">
          
          {/* Render Cards Along the Convex Arch */}
          {items.map((item, i) => {
            // Compute relative angle for this card
            const virtualCurrent = -angle / stepAngle;
            let diff = i - (virtualCurrent % total);
            // Wrap difference around [-total/2, total/2]
            while (diff > total / 2) diff -= total;
            while (diff < -total / 2) diff += total;

            const cardAngle = diff * stepAngle; // angle in degrees

            // Hide cards that are far away out of visible arc
            if (Math.abs(cardAngle) > 75) return null;

            // Geometry along the convex halo arc:
            // x = Rx * sin(theta)
            // y = Ry * (1 - cos(theta))  --> starts at 0 at top, dips down towards edges
            const rad = (cardAngle * Math.PI) / 180;
            const rx = 440; // horizontal spread
            const ry = 190; // vertical curvature depth
            const x = Math.sin(rad) * rx;
            const y = (1 - Math.cos(rad)) * ry;

            // Scale and opacity based on proximity to center
            const distRatio = Math.abs(cardAngle) / 70;
            const scale = Math.max(0.68, 1 - 0.32 * Math.pow(distRatio, 1.4));
            const opacity = Math.max(0.15, 1 - 0.85 * Math.pow(distRatio, 2));
            const zIndex = Math.round(100 - Math.abs(cardAngle));
            const isCenter = Math.abs(cardAngle) < stepAngle / 2;

            return (
              <div
                key={item.id}
                onClick={(e) => {
                  e.stopPropagation();
                  snapToCard(i);
                }}
                className={`absolute transition-shadow duration-300 rounded-[28px] overflow-hidden cursor-pointer ${
                  isCenter ? 'ring-2 ring-[#A38257]/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)]' : 'shadow-xl opacity-90 hover:opacity-100'
                }`}
                style={{
                  width: 'clamp(170px, 22vw, 240px)',
                  aspectRatio: '1 / 1',
                  transform: `translate3d(${x}px, ${y}px, 0) rotate(${cardAngle}deg) scale(${scale})`,
                  transformOrigin: '50% 120%',
                  zIndex,
                  opacity,
                  transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s'
                }}
              >
                {/* Card Artwork Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  draggable={false}
                  className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 hover:scale-105"
                />

                {/* Subtle vignette border gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Card Tag overlay */}
                <div className="absolute bottom-3 inset-x-3 text-left pointer-events-none">
                  <span className="text-[9px] uppercase tracking-wider text-[#E2C798] font-semibold block line-clamp-1">
                    {item.category}
                  </span>
                  <p className="font-serif text-xs text-white font-medium line-clamp-1 drop-shadow-sm">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Center Editorial Text Beneath the Overhead Arc (Directly matching reference image) */}
          <div className="absolute top-[48%] sm:top-[50%] inset-x-4 max-w-xl mx-auto text-center pointer-events-none z-30">
            
            {/* Small uppercase label */}
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#A38257] font-semibold font-sans mb-1.5 drop-shadow-sm">
              ARCHIVE 08 &bull; OUR PORTFOLIO
            </p>

            {/* Editorial Serif Title */}
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-stone-100 font-light tracking-tight leading-tight">
              Built slowly, shown all at once
            </h2>

            {/* Subtitle / Instructions */}
            <p className="text-stone-400 font-light text-xs sm:text-sm mt-2.5 max-w-md mx-auto leading-relaxed">
              Signature bespoke calligraphy, fragrance engraving, and functional pottery across Qatar &amp; Saudi Arabia. Drag the arc, or let it turn on its own.
            </p>

            {/* Active Card Quick Details Pill */}
            <div className="mt-4 pointer-events-auto inline-flex items-center gap-2 bg-stone-900/90 border border-stone-700/80 rounded-full px-4 py-1.5 shadow-lg backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#A38257] shrink-0 animate-pulse" />
              <span className="text-[11px] text-stone-300 font-serif line-clamp-1">
                {activeItem.title}
              </span>
              <span className="text-stone-600">&bull;</span>
              <Link
                to="/portfolio"
                className="text-[10px] uppercase tracking-wider text-[#E2C798] hover:text-white font-medium transition-colors"
              >
                View &rarr;
              </Link>
            </div>

          </div>

        </div>

        {/* Bottom Navigation & Drag Controls */}
        <div className="mt-6 sm:mt-10 pt-6 border-t border-stone-800/80 flex items-center justify-between">
          
          {/* Slide counter */}
          <div className="text-[11px] font-sans text-stone-500 uppercase tracking-widest">
            <span>{String(selectedIdx + 1).padStart(2, '0')}</span>
            <span className="mx-2">&mdash;</span>
            <span>{String(total).padStart(2, '0')}</span>
          </div>

          {/* Prev / Next Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous artwork"
              className="w-9 h-9 rounded-full border border-stone-700 hover:border-white bg-stone-900/80 hover:bg-white hover:text-stone-950 text-stone-300 flex items-center justify-center transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            {/* Quick Dots for each card */}
            <div className="hidden sm:flex items-center gap-1.5 px-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => snapToCard(idx)}
                  aria-label={`Jump to piece ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    idx === selectedIdx
                      ? 'w-6 h-1.5 bg-[#A38257]'
                      : 'w-1.5 h-1.5 bg-stone-700 hover:bg-stone-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next artwork"
              className="w-9 h-9 rounded-full bg-[#A38257] hover:bg-[#b8976b] text-white flex items-center justify-center transition-all"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Book Experience CTA */}
          <button
            onClick={() => onOpenBooking(activeItem.title)}
            className="hidden sm:inline-block text-[11px] uppercase tracking-[0.16em] px-4 py-2 bg-stone-800 hover:bg-[#A38257] text-stone-200 hover:text-white rounded-lg transition-colors border border-stone-700"
          >
            Inquire This Piece
          </button>

        </div>

      </div>
    </section>
  );
}
