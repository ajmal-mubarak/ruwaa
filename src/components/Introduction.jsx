import React from 'react';
import { siteData } from '../data/siteData';

export default function Introduction() {
  return (
    <section className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* PANEL 3: MATCHING BOTTOM CARD IN REFERENCE IMAGE */}
        <div className="bg-[#FCFAF7] border border-[#E9E1D5] rounded-2xl p-8 md:p-14 mb-8 shadow-[0_20px_50px_-20px_rgba(26,23,21,0.06)] text-center">
          
          {/* Cursive script kicker */}
          <p className="font-script text-3xl md:text-4xl text-ink-800 mb-2">
            explore our world and
          </p>

          {/* High-contrast serif headline */}
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.1em] uppercase text-ink-900 mb-6">
            Art Beyond Letters. Beauty Beyond Imagination.
          </h2>

          {/* Centered reflective paragraphs */}
          <div className="max-w-2xl mx-auto space-y-4 text-stone-600 font-light text-sm md:text-base leading-relaxed mb-12">
            <p>
              Discover the beauty of calligraphy through a unique blend of traditional artistry and modern luxury. At Ruwaa Artistry, every stroke tells a story, every detail carries meaning, and every creation is made to leave a lasting impression.
            </p>
          </div>

          {/* 3-Column Visual Presentation matching bottom of reference image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            {/* Visual 1 */}
            <div className="group space-y-3">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-stone-100 relative shadow-sm border border-stone-200/80">
                <img
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop"
                  alt="Precision Penmanship & Calligraphy Nibs"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded">
                  01 • The Pen &amp; Ink
                </span>
              </div>
              <h3 className="font-serif text-lg text-ink-900">Centuries-Old Typography</h3>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                Honoring classical Arabic Thuluth and Diwani geometric rules with archival metallic inks.
              </p>
            </div>

            {/* Visual 2 */}
            <div className="group space-y-3">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-stone-100 relative shadow-sm border border-stone-200/80">
                <img
                  src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop"
                  alt="Glass Perfume Engraving with Gold Infill"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded">
                  02 • Luxury Engraving
                </span>
              </div>
              <h3 className="font-serif text-lg text-ink-900">Rotary Micro-Engraving</h3>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                Transforming crystal fragrance bottles and glass keepsakes with 24K shimmering gold inlays.
              </p>
            </div>

            {/* Visual 3 */}
            <div className="group space-y-3">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-stone-100 relative shadow-sm border border-stone-200/80">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop"
                  alt="Custom Ceramics and Pottery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded">
                  03 • Tactile Surfaces
                </span>
              </div>
              <h3 className="font-serif text-lg text-ink-900">Ceramics &amp; Clay Pottery</h3>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                Meaningful poetry on hand-turned vessels, combining functional beauty with artistic soul.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
