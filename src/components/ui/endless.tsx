"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { siteData } from "../../data/siteData";

export interface EndlessItem {
  id: number | string;
  title: string;
  category: string;
  surface: string;
  description: string;
  image: string;
}

const DEFAULT_ITEMS: EndlessItem[] = [
  {
    id: 1,
    title: "Royal Oud Flacon Engraving with Gold Leaf",
    category: "Fragrance Bottle Personalization",
    surface: "Glass Flacon & 24K Liquid Gold",
    description: "Delicate Arabic Thuluth script engraved directly onto high-end crystal fragrance flacons, infilled with warm liquid gold leaf.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Abstract Diwani Script on Raw Canvas",
    category: "Arabic Calligraphy",
    surface: "Textured Belgian Linen Canvas",
    description: "A contemporary reimagining of traditional Diwani script celebrating harmony, movement, and negative space.",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Artisanal Terracotta & Clay Mugs with Poetry",
    category: "Custom Ceramics & Pottery",
    surface: "Hand-turned Terracotta & Glaze",
    description: "Personalized Arabic poetry strokes hand-painted on organic terracotta clay vessels and stoneware cups.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Hand-Painted Bamboo & Paper Fans",
    category: "Personalized Event Keepsakes",
    surface: "Pleated Paper & Natural Bamboo",
    description: "Custom hand-lettered event keepsakes crafted live for wedding guests and VIP gatherings across Qatar.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Lexus Ramadan VIP Guest Keepsakes",
    category: "Leather Foiling",
    surface: "Italian Calf Leather & Hot Gold Foil",
    description: "Custom leather keychains and journal debossing performed live during the Lexus Ramadan customer appreciation gala.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Modern English Copperplate Vow Folios",
    category: "English Calligraphy",
    surface: "Handmade Cotton Rag Paper with Deckled Edge",
    description: "Bespoke English flourishing with dip-pen nib and archival walnut ink for bespoke wedding vows.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Rituals Luxury Perfume Live Engraving",
    category: "Glass Engraving & Painting",
    surface: "High-density Glass & Gold Mica",
    description: "On-site personalization experience at Rituals boutique, customizing luxury scents with personalized names.",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Contemporary Architectural Calligraphy Installation",
    category: "Canvas & Decorative Artwork",
    surface: "Sculpted Board with Gold Leaf & Plaster",
    description: "Monumental abstract calligraphy triptych designed for an upscale private villa residence in Doha.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Wedding Place Cards & Wax Sealed Menus",
    category: "Personalized Event Keepsakes",
    surface: "Handmade Paper, Gold Wax & Metallic Ink",
    description: "Intricate Arabic name cards accompanied by custom stamped botanical wax seals.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 10,
    title: "Classical Thuluth Script on Handmade Paper",
    category: "Arabic Calligraphy",
    surface: "Handmade Ahar Paper & Lampblack Ink",
    description: "Mastery of classical Arabic script geometry combined with gold leaf flourishes.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 11,
    title: "Ceramic Stoneware with Inlaid Gold Poetry",
    category: "Custom Ceramics & Pottery",
    surface: "Stoneware & Japanese Urushi with 24K Gold",
    description: "Philosophical calligraphy strokes cured onto ceramic vessels for everyday tactile art.",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 12,
    title: "VIP Crystal Decanter Rotary Engraving",
    category: "Glass Engraving & Painting",
    surface: "Lead-free Crystal & 24K Leaf",
    description: "Personalized monogram and heraldic crest engraved for diplomatic state gifts.",
    image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?q=80&w=1000&auto=format&fit=crop"
  }
];

const Z_FAR = -2400;
const Z_NEAR = 780;
const RANGE = Z_NEAR - Z_FAR;
const DURATION = 18;
const FADE_IN = 0.06;
const FADE_OUT = 0.04;

const css = `
.endless-root,
.endless-root *,
.endless-root *::before,
.endless-root *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.endless-root {
  position: relative;
  width: 100%;
  height: 80vh;
  min-height: 540px;
  max-height: 750px;
  overflow: hidden;
  background-color: #0E0E0D;
  color: #ffffff;
  font-family: inherit;
  user-select: none;
  pointer-events: auto;
}

.endless-root .endless-scene {
  position: absolute;
  inset: 0;
  -webkit-perspective: 1100px;
  perspective: 1100px;
  -webkit-perspective-origin: 50% 50%;
  perspective-origin: 50% 50%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  pointer-events: auto;
}

.endless-root .endless-world {
  position: absolute;
  inset: 0;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  pointer-events: auto;
}

.endless-root .endless-plane {
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #161614;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  will-change: transform;
  cursor: pointer;
  pointer-events: auto;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.85);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.endless-root .endless-plane:hover {
  border-color: #A38257;
  box-shadow: 0 20px 50px rgba(163, 130, 87, 0.45);
}

.endless-root .endless-plane img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: auto;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.endless-root .endless-title {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 50;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-family: inherit;
  font-size: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.18em;
  line-height: 1;
  white-space: nowrap;
  pointer-events: none;
  text-align: center;
}

@media (min-width: 768px) {
  .endless-root .endless-title {
    font-size: 2.25rem;
  }
}

@media (min-width: 1200px) {
  .endless-root .endless-title {
    font-size: 2.75rem;
  }
}

.endless-root .endless-footer {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transform: translateX(-50%);
  color: #A8A29E;
  pointer-events: none;
}

.endless-root .endless-globe {
  display: block;
  flex-shrink: 0;
  color: #A38257;
}

.endless-root .endless-caption {
  color: #D6D3D1;
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  line-height: 1.3;
  text-align: center;
  white-space: nowrap;
}

@media (min-width: 768px) {
  .endless-root .endless-caption {
    font-size: 0.875rem;
  }
}

/* iOS WebKit flattens nested 3D when an ancestor uses overflow: hidden. */
@supports (-webkit-touch-callout: none) {
  .endless-root {
    overflow: visible;
    -webkit-clip-path: inset(0);
    clip-path: inset(0);
  }
}
`;

function opacityForProgress(progress: number) {
  if (progress < FADE_IN) return Math.max(0, progress / FADE_IN);
  if (progress > 1 - FADE_OUT) return Math.max(0, (1 - progress) / FADE_OUT);
  return 1;
}

function getLayout() {
  const width = typeof window !== "undefined" ? window.innerWidth : 1200;
  const planeW = width < 768 ? Math.min(width * 0.32, 220) : Math.min(width * 0.26, 440);
  return {
    planeW,
    planeH: planeW * (4 / 3),
    offsetX: width < 768 ? width * 0.38 : width * 0.33,
    angle: 24,
  };
}

export interface EndlessProps {
  items?: EndlessItem[];
  title?: string;
  caption?: string;
  onCardClick?: (item: EndlessItem, index: number) => void;
}

export default function Endless({
  items = DEFAULT_ITEMS,
  title = "Endless Artistry",
  caption = "Every Stroke Tells A Story • Doha & Riyadh",
  onCardClick,
}: EndlessProps) {
  const worldRef = useRef<HTMLDivElement>(null);
  const TOTAL = items.length;

  useEffect(() => {
    const world = worldRef.current;
    if (!world) return;

    const planes = Array.from(world.querySelectorAll<HTMLElement>(".endless-plane"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tweens: gsap.core.Tween[] = [];

    gsap.ticker.lagSmoothing(0);
    gsap.set(world, { force3D: true });

    const applyLayout = () => {
      const { planeW, planeH, offsetX, angle } = getLayout();
      planes.forEach((plane, index) => {
        const isLeft = index % 2 === 0;
        plane.style.width = `${planeW}px`;
        plane.style.height = `${planeH}px`;
        gsap.set(plane, {
          xPercent: -50,
          yPercent: -50,
          x: isLeft ? -offsetX : offsetX,
          y: 0,
          rotationY: isLeft ? angle : -angle,
          force3D: true,
        });
      });
    };

    applyLayout();

    planes.forEach((plane, index) => {
      const img = plane.querySelector("img") as HTMLImageElement;
      const startProgress = index / TOTAL;

      gsap.set(plane, { z: Z_FAR + startProgress * RANGE });
      if (img) img.style.opacity = String(opacityForProgress(startProgress));
      plane.style.zIndex = String(Math.round(startProgress * 1000));

      if (reduceMotion) return;

      const tween = gsap.fromTo(
        plane,
        { z: Z_FAR },
        {
          z: Z_NEAR,
          duration: DURATION,
          ease: "none",
          repeat: -1,
          immediateRender: false,
          onUpdate() {
            const progress = this.progress();
            if (img) img.style.opacity = String(opacityForProgress(progress));
            plane.style.zIndex = String(Math.round(progress * 1000));
          },
        },
      );

      tween.progress(startProgress);
      tweens.push(tween);
    });

    window.addEventListener("resize", applyLayout);

    return () => {
      window.removeEventListener("resize", applyLayout);
      tweens.forEach((tween) => tween.kill());
      gsap.killTweensOf(planes);
    };
  }, [TOTAL]);

  return (
    <section className="endless-root" aria-label="Endless 3D image corridor">
      <style>{css}</style>
      
      {/* Background calligraphy watermark */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-screen bg-repeat z-0"
        style={{
          backgroundImage: `url('/arabic-pattern.jpg')`,
          backgroundSize: '480px auto'
        }}
      />

      <div className="endless-scene">
        <div className="endless-world" ref={worldRef}>
          {items.map((item, index) => (
            <div
              className="endless-plane group"
              key={item.id || index}
              onClick={() => onCardClick && onCardClick(item, index)}
              title={`View ${item.title}`}
            >
              <img src={item.image} alt={item.title} loading="eager" decoding="async" />
              {/* Subtle hover badge indicating clickability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3.5">
                <span className="text-[9px] uppercase tracking-wider text-[#E2C798] font-semibold">
                  {item.category}
                </span>
                <p className="font-serif text-xs text-white font-medium line-clamp-1">
                  {item.title}
                </p>
                <span className="text-[10px] text-[#A38257] mt-1 font-medium">
                  Click to view craft &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="endless-title">
        <span className="font-calligraphy text-2xl sm:text-4xl text-[#E2C798] block mb-1">
          Farisha Arif
        </span>
        <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light text-white tracking-[0.14em]">
          {title}
        </h2>
      </div>

      <div className="endless-footer">
        <svg
          className="endless-globe"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="22"
          width="22"
          aria-hidden="true"
        >
          <path
            stroke="currentColor"
            strokeWidth="1.25"
            d="M23 12c0 -6.075 -4.925 -11 -11 -11m11 11c0 6.075 -4.925 11 -11 11m11 -11c0 2.21 -4.925 4 -11 4S1 14.21 1 12M12 1C5.925 1 1 5.925 1 12M12 1c2.761 0 5 4.925 5 11s-2.239 11 -5 11m0 -22C9.239 1 7 5.925 7 12s2.239 11 5 11M1 12c0 6.075 4.925 11 11 11"
          />
        </svg>
        <p className="endless-caption">{caption}</p>
        <p className="text-[10px] text-stone-500 tracking-wider uppercase font-light">
          Click any card to inspect piece details
        </p>
      </div>
    </section>
  );
}

export { Endless as Component };
