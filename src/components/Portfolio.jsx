import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Eye, ArrowUpRight, Sparkles } from 'lucide-react';
import PortfolioModal from './PortfolioModal';

export default function Portfolio({ onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalItem, setActiveModalItem] = useState(null);

  const filteredItems = selectedCategory === "All"
    ? siteData.portfolioItems
    : siteData.portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#FAF7F2] relative border-t border-[#EAE2D5]">
      
      {/* Arabic watermark in the background */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none select-none absolute left-0 bottom-12 opacity-[0.03] text-ink-900 font-arabic text-[160px] leading-none z-0"
      >
        مجموعة الأعمال الفنية
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-stone-500 font-sans mb-2">
            OUR PORTFOLIO
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-ink-900 font-normal tracking-wide">
            A Collection of Artistry
          </h2>
          <p className="font-script text-2xl md:text-3xl text-gold-600 mt-2">
            Discover the Art. Experience the Details.
          </p>
          <p className="text-ink-600 text-sm font-light mt-3 leading-relaxed">
            Every creation reflects a unique combination of creativity, craftsmanship, and artistic detail. Explore our selected works across different materials, surfaces, and calligraphy styles.
          </p>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-6" />
        </div>

        {/* Category Pills Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {siteData.portfolioCategories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.16em] transition-all duration-300 rounded-full font-sans ${
                  isSelected
                    ? 'bg-ink-900 text-white shadow-sm font-medium'
                    : 'bg-white/80 text-ink-600 hover:text-ink-900 hover:bg-white border border-stone-200/80'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group bg-white rounded-2xl p-4 border border-[#E9E1D5] luxury-card-shadow luxury-card-hover cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Container with overlay */}
                <div className="aspect-[4/3] rounded-xl overflow-hidden relative bg-stone-100 mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-white/90 text-ink-900 text-xs uppercase tracking-[0.2em] font-medium flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Craft</span>
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 bg-white/90 backdrop-blur-sm text-ink-800 rounded font-medium">
                    {item.category}
                  </span>
                </div>

                {/* Information */}
                <h3 className="font-serif text-xl text-ink-900 group-hover:text-gold-700 transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-stone-500 font-sans uppercase tracking-wider mb-2">
                  Surface: {item.surface}
                </p>
                <p className="text-xs text-stone-600 font-light line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-stone-100 mt-4 flex items-center justify-between text-xs">
                <span className="text-gold-600 uppercase tracking-[0.15em] font-medium text-[11px]">
                  Bespoke Commission
                </span>
                <span className="text-stone-400 group-hover:text-ink-900 transition-colors flex items-center gap-1">
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner to prompt direct custom commission */}
        <div className="mt-16 text-center bg-white border border-[#E9E1D5] rounded-2xl p-8 max-w-2xl mx-auto shadow-xs">
          <p className="font-serif text-2xl text-ink-900 mb-2">Have a Unique Surface or Vision in Mind?</p>
          <p className="text-xs text-stone-500 font-light mb-6 max-w-lg mx-auto">
            From vintage leather goods to architectural panels and luxury brand packaging, we create tailor-made calligraphy artwork.
          </p>
          <button
            onClick={() => onOpenBooking()}
            className="px-8 py-3.5 bg-ink-900 hover:bg-gold-600 text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
          >
            Commission Custom Artwork
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <PortfolioModal
          item={activeModalItem}
          onClose={() => setActiveModalItem(null)}
          onBookItem={(title) => {
            setActiveModalItem(null);
            onOpenBooking(title);
          }}
        />
      )}
    </section>
  );
}

