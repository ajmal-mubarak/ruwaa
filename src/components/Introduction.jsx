import React from 'react';
import { Link } from 'react-router-dom';

export default function Introduction() {
  return (
    <section className="py-16 sm:py-24 bg-[#111110] border-b border-stone-800/80 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-stone-400 font-sans mb-1">
            THE ART OF CALLIGRAPHY
          </p>
          <span className="font-calligraphy text-4xl sm:text-6xl text-[#E2C798] block mb-2">
            Art Beyond Letters.
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-stone-100 tracking-tight">
            Beauty Beyond Imagination.
          </h2>
          <div className="w-12 h-[1px] bg-[#A38257] mx-auto my-5" />
          <p className="text-stone-300 font-light text-xs sm:text-sm md:text-base leading-relaxed">
            Discover the beauty of calligraphy through a unique blend of traditional artistry and modern luxury. At Ruwaa Artistry, every stroke tells a story, every detail carries meaning, and every creation is made to leave a lasting impression.
          </p>
        </div>

        {/* 3 Clean Standard Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="group bg-[#171715] p-4 border border-stone-800 space-y-4 rounded-xl transition-all hover:border-[#A38257]/60 hover:shadow-xl">
            <div className="aspect-[4/3] overflow-hidden bg-stone-900 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=700&auto=format&fit=crop"
                alt="Traditional Calligraphy Lettering"
                className="w-full h-full object-cover standard-image-hover"
              />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#E2C798] font-semibold">Typography</span>
              <h3 className="font-serif text-xl text-white mt-1 mb-2">Arabic &amp; English Calligraphy</h3>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                Classical Thuluth and Diwani geometry combined with modern flowing English script for bespoke commissions.
              </p>
            </div>
          </div>

          <div className="group bg-[#171715] p-4 border border-stone-800 space-y-4 rounded-xl transition-all hover:border-[#A38257]/60 hover:shadow-xl">
            <div className="aspect-[4/3] overflow-hidden bg-stone-900 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=700&auto=format&fit=crop"
                alt="Glass Bottle Engraving"
                className="w-full h-full object-cover standard-image-hover"
              />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#E2C798] font-semibold">Luxury Keepsakes</span>
              <h3 className="font-serif text-xl text-white mt-1 mb-2">Glass &amp; Bottle Engraving</h3>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                Hand-engraved luxury fragrance bottles and glassware finished with shimmering metallic leaf and liquid gold.
              </p>
            </div>
          </div>

          <div className="group bg-[#171715] p-4 border border-stone-800 space-y-4 rounded-xl transition-all hover:border-[#A38257]/60 hover:shadow-xl">
            <div className="aspect-[4/3] overflow-hidden bg-stone-900 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=700&auto=format&fit=crop"
                alt="Ceramics and Pottery"
                className="w-full h-full object-cover standard-image-hover"
              />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#E2C798] font-semibold">Artisanal Objects</span>
              <h3 className="font-serif text-xl text-white mt-1 mb-2">Ceramics &amp; Clay Pottery</h3>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                Personalized Arabic poetry strokes on hand-turned ceramic mugs and decorative vessels combining functional beauty.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
