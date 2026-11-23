import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Pause, Play, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function HaloCarousel({ onOpenBooking }) {
  const items = siteData.portfolioItems;
  const total = items.length;

  // Active rotation angle in degrees for Desktop Half-Circle Arc
  const [angle, setAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartAngle, setDragStartAngle] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const containerRef = useRef(null);
  const mobileScrollRef = useRef(null);
  const lastTimeRef = useRef(Date.now());

  // Step angle for desktop half-circle arc: 20 degrees produces a tight, low gap hugging the circular line
  const stepAngle = 20;

  // Desktop ONLY Auto-rotation effect (Screen width >= 768px)
  useEffect(() => {
    // Check if on mobile: if window width < 768, DO NOT auto-rotate or auto-scroll!
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    if (isMobile) return; // Strict: NEVER auto-scroll on mobile

    if (!isAutoPlaying || isDragging) return;

    let animationFrame;
    const animate = () => {
      const now = Date.now();
      const delta = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      // Slow elegant turn on desktop: ~3.2 degrees per second
      setAngle((prev) => prev + delta * 3.2);
      animationFrame = requestAnimationFrame(animate);
    };

    lastTimeRef.current = Date.now();
    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isAutoPlaying, isDragging]);

  // Sync selectedIdx based on desktop angle ONLY on desktop screens
  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    if (isMobile) return; // Do not overwrite mobile selection from desktop rotation!

    const rawIdx = Math.round(-angle / stepAngle);
    const normalized = ((rawIdx % total) + total) % total;
    setSelectedIdx(normalized);
  }, [angle, stepAngle, total]);

  // Desktop Drag handlers
  const handlePointerDown = (e) => {
    if (window.innerWidth < 768) return; // Ignore on mobile
    setIsDragging(true);
    const clientX = e.clientX || 0;
    setDragStartX(clientX);
    setDragStartAngle(angle);
  };

  const handlePointerMove = (e) => {
    if (!isDragging || window.innerWidth < 768) return;
    const clientX = e.clientX || 0;
    const deltaX = clientX - dragStartX;
    const sensitivity = 0.14;
    setAngle(dragStartAngle + deltaX * sensitivity);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const targetIdx = Math.round(-angle / stepAngle);
    setAngle(-targetIdx * stepAngle);
  };

  // Click card to center
  const snapToCard = (index) => {
    setSelectedIdx(index);

    // Update desktop angle
    const currentVirtualIdx = -angle / stepAngle;
    const currentBase = Math.round(currentVirtualIdx);
    const currentMod = ((currentBase % total) + total) % total;

    let diff = index - currentMod;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const targetVirtual = currentBase + diff;
    setAngle(-targetVirtual * stepAngle);

    // Update mobile scroll container position cleanly
    if (mobileScrollRef.current) {
      const container = mobileScrollRef.current;
      const cardWidth = 160 + 12; // 160px width + 12px gap
      container.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    const nextIdx = (selectedIdx + 1) % total;
    snapToCard(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (selectedIdx - 1 + total) % total;
    snapToCard(prevIdx);
  };

  // Mobile User Manual Scroll Listener (Updates selectedIdx ONLY when user manually scrolls)
  const handleMobileScroll = (e) => {
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    const cardWidth = 160 + 12; // width + gap
    const index = Math.round(scrollLeft / cardWidth);
    if (index >= 0 && index < total && index !== selectedIdx) {
      setSelectedIdx(index);
    }
  };

  const activeItem = items[selectedIdx] || items[0];

  return (
    <section
      ref={containerRef}
      className="relative bg-gradient-to-b from-[#FAF7F2] via-[#F4EFE6] to-[#FAF7F2] text-[#1C1917] min-h-[560px] md:h-[calc(100vh-4.5rem)] md:max-h-[760px] flex flex-col justify-between overflow-hidden select-none py-4 sm:py-5 border-b border-[#EADDCB]"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      style={{ cursor: isDragging ? 'grabbing' : 'default' }}
    >
      {/* Arabic calligraphy watermark pattern in ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply bg-repeat z-0"
        style={{
          backgroundImage: `url('/arabic-pattern.jpg')`,
          backgroundSize: '480px auto'
        }}
      />

      {/* Radial overhead halo spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[360px] bg-gradient-to-b from-[#C79F5E]/15 via-transparent to-transparent blur-3xl rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col justify-between h-full flex-grow">

        {/* Top Badges & Controls Header Bar */}
        <div className="flex items-center justify-between shrink-0 pt-1 pb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-[#EADDCB] text-[10px] uppercase tracking-[0.2em] text-[#9E672B] font-medium backdrop-blur-xs shadow-xs">
            <Sparkles className="w-3 h-3 text-[#C79F5E]" />
            <span>PORTFOLIO ARCHIVE</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Auto-Turn Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              aria-label={isAutoPlaying ? "Pause rotation" : "Enable rotation"}
              className="hidden md:flex px-3 py-1.5 rounded-full bg-white/90 hover:bg-[#FAF7F2] border border-[#EADDCB] text-[10px] uppercase tracking-wider text-stone-700 items-center gap-1.5 transition-colors shadow-xs"
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3 h-3 text-[#9E672B]" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-[#9E672B] fill-[#9E672B]" />
                  <span>Auto-Turn</span>
                </>
              )}
            </button>

            <Link
              to="/portfolio"
              className="text-xs uppercase tracking-[0.18em] text-[#9E672B] hover:text-[#1C1917] font-medium flex items-center gap-1 transition-colors pl-1 sm:pl-2"
            >
              <span>Explore All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP VIEW (md and up): TRUE HALF-CIRCLE ARC WITH LOW GAP */}
        {/* ======================================================== */}
        <div className="hidden md:flex relative w-full flex-1 min-h-[380px] max-h-[460px] items-center justify-center overflow-hidden my-auto">

          {/* Overhead Cards Following the Half-Circle Line closely with low gap - Lifted Up to Prevent Text Overlap */}
          <div className="absolute -top-8 lg:-top-12 inset-x-0 h-[230px] flex items-center justify-center">
            {items.map((item, i) => {
              const virtualCurrent = -angle / stepAngle;
              let diff = i - (virtualCurrent % total);
              while (diff > total / 2) diff -= total;
              while (diff < -total / 2) diff += total;

              const cardAngle = diff * stepAngle;

              if (Math.abs(cardAngle) > 75) return null;

              const rad = (cardAngle * Math.PI) / 180;
              const R = 460;
              const x = Math.sin(rad) * R;
              const y = (1 - Math.cos(rad)) * (R * 0.42);

              const distRatio = Math.abs(cardAngle) / 70;
              const scale = Math.max(0.74, 1 - 0.26 * Math.pow(distRatio, 1.3));
              const opacity = Math.max(0.12, 1 - 0.88 * Math.pow(distRatio, 1.8));
              const zIndex = Math.round(100 - Math.abs(cardAngle));
              const isCenter = Math.abs(cardAngle) < stepAngle / 2;

              return (
                <div
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    snapToCard(i);
                  }}
                  className={`absolute rounded-[26px] overflow-hidden cursor-pointer transition-shadow duration-300 ${isCenter
                    ? 'ring-2 ring-[#C79F5E] shadow-[0_15px_40px_rgba(199,159,94,0.35)]'
                    : 'shadow-md opacity-90 hover:opacity-100 hover:ring-1 hover:ring-[#C79F5E]/60'
                    }`}
                  style={{
                    width: 'clamp(140px, 14.5vw, 168px)',
                    aspectRatio: '1 / 1',
                    transform: `translate3d(${x}px, ${y}px, 0) rotate(${cardAngle}deg) scale(${scale})`,
                    transformOrigin: '50% 120%',
                    zIndex,
                    opacity,
                    transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    draggable={false}
                    className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 inset-x-2.5 text-left pointer-events-none">
                    <span className="text-[8.5px] uppercase tracking-wider text-[#F4C96B] font-semibold block line-clamp-1">
                      {item.category}
                    </span>
                    <p className="font-serif text-[11px] text-white font-medium line-clamp-1 drop-shadow-sm">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Editorial Text Beneath the Overhead Arc with Generous Clearance */}
          <div className="absolute top-[225px] lg:top-[235px] inset-x-4 max-w-xl mx-auto text-center pointer-events-none z-30">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#9E672B] font-semibold font-sans mb-1 drop-shadow-xs">
              ARCHIVE 08 &bull; OUR PORTFOLIO
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1C1917] font-light tracking-tight leading-snug">
              Built slowly, shown all at once
            </h2>

            <p className="text-[#57534E] font-light text-xs sm:text-sm mt-1.5 max-w-md mx-auto leading-relaxed">
              Bespoke calligraphy, fragrance engraving, and functional pottery across Qatar &amp; Saudi Arabia. Drag the arc, or let it turn on its own.
            </p>

            {/* Active Card Quick Details Pill */}
            <div className="mt-3 pointer-events-auto inline-flex items-center gap-2 bg-white/95 border border-[#EADDCB] rounded-full px-4 py-1 shadow-md backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C79F5E] shrink-0 animate-pulse" />
              <span className="text-[11px] text-[#1C1917] font-serif line-clamp-1 max-w-[280px]">
                {activeItem.title}
              </span>
              <span className="text-[#8C8277]">&bull;</span>
              <Link
                to="/portfolio"
                className="text-[10px] uppercase tracking-wider text-[#9E672B] hover:text-[#1C1917] font-medium transition-colors"
              >
                View &rarr;
              </Link>
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* MOBILE VIEW (< md): 100% MANUAL STRAIGHT-LINE SCROLL (NO AUTO SCROLL) */}
        {/* ======================================================== */}
        <div className="md:hidden flex flex-col justify-center my-auto py-2">

          {/* Straight Horizontal Swipe Track with Low Gap (12px) - Manual Scroll ONLY */}
          <div
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="flex items-center gap-3 overflow-x-auto snap-x snap-mandatory py-3 px-4 no-scrollbar scroll-smooth"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {items.map((item, idx) => {
              const isSelected = idx === selectedIdx;
              return (
                <div
                  key={item.id}
                  onClick={() => snapToCard(idx)}
                  className={`shrink-0 w-[160px] aspect-square rounded-2xl overflow-hidden snap-center cursor-pointer transition-all duration-300 relative ${
                    isSelected 
                      ? 'ring-2 ring-[#C79F5E] scale-[1.03] shadow-[0_12px_32px_rgba(199,159,94,0.3)] opacity-100' 
                      : 'opacity-75 border border-[#EADDCB]'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 inset-x-2.5 text-left pointer-events-none">
                    <span className="text-[8px] uppercase tracking-wider text-[#F4C96B] font-semibold block line-clamp-1">
                      {item.category}
                    </span>
                    <p className="font-serif text-[11px] text-white font-medium line-clamp-1">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Editorial Text Below Track */}
          <div className="text-center px-4 mt-3">
            <p className="text-[9.5px] uppercase tracking-[0.25em] text-[#9E672B] font-semibold mb-0.5">
              ARCHIVE 08 &bull; OUR PORTFOLIO
            </p>
            <h2 className="font-serif text-xl sm:text-2xl text-[#1C1917] font-light tracking-tight">
              Built slowly, shown all at once
            </h2>
            <p className="text-[#57534E] font-light text-[11px] mt-1 line-clamp-2 leading-relaxed">
              Bespoke calligraphy, fragrance engraving, and functional pottery across Qatar &amp; Saudi Arabia.
            </p>

            {/* Mobile Active Pill */}
            <div className="mt-2.5 inline-flex items-center gap-2 bg-white/95 border border-[#EADDCB] rounded-full px-3.5 py-1 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C79F5E] shrink-0 animate-pulse" />
              <span className="text-[10px] text-[#1C1917] font-serif line-clamp-1 max-w-[200px]">
                {activeItem.title}
              </span>
              <span className="text-[#8C8277]">&bull;</span>
              <Link
                to="/portfolio"
                className="text-[9px] uppercase tracking-wider text-[#9E672B] hover:text-[#1C1917] font-medium"
              >
                View &rarr;
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Navigation & Controls */}
        <div className="pt-3 border-t border-[#EADDCB] flex items-center justify-between shrink-0 pb-1">

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
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#EADDCB] hover:border-[#C79F5E] bg-white hover:bg-[#FAF7F2] text-stone-700 flex items-center justify-center transition-all shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* Quick Dots for each card */}
            <div className="hidden sm:flex items-center gap-1.5 px-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => snapToCard(idx)}
                  aria-label={`Jump to piece ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full ${idx === selectedIdx
                    ? 'w-5 sm:w-6 h-1.5 bg-[#C79F5E]'
                    : 'w-1.5 h-1.5 bg-[#EADDCB] hover:bg-stone-400'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next artwork"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#C79F5E] hover:bg-[#9E672B] text-white flex items-center justify-center transition-all shadow-xs"
            >
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* Book Experience CTA */}
          <button
            onClick={() => onOpenBooking(activeItem.title)}
            className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] px-3 sm:px-3.5 py-1.5 bg-white hover:bg-[#C79F5E] text-[#1C1917] hover:text-white rounded-lg transition-colors border border-[#EADDCB] shadow-xs"
          >
            Inquire Piece
          </button>

        </div>

      </div>
    </section>
  );
}
