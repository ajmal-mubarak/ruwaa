import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import PortfolioModal from '../components/PortfolioModal';
import { Eye, ArrowUpRight } from 'lucide-react';

export default function PortfolioPage({ onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalItem, setActiveModalItem] = useState(null);

  const filteredItems = selectedCategory === "All"
    ? siteData.portfolioItems
    : siteData.portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen">
      
      {/* Header */}
      <section className="pt-14 sm:pt-20 pb-12 sm:pb-16 border-b border-stone-100 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-stone-500 font-sans mb-1">
            SELECTED WORKS
          </p>
          <span className="font-calligraphy text-5xl sm:text-7xl text-[#A38257] block mb-2">
            Our Portfolio
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 font-light">
            A Collection of Artistry
          </h1>
          <div className="w-12 h-[1px] bg-stone-300 mx-auto my-5" />
          <p className="text-stone-600 font-light text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Every creation reflects a unique combination of creativity, craftsmanship, and artistic detail. Explore our selected works across different materials, surfaces, and calligraphy styles.
          </p>
          <p className="font-serif italic text-sm text-[#A38257] mt-3">
            Discover the Art. Experience the Details.
          </p>
        </div>
      </section>

      {/* Category Filter Navigation */}
      <section className="py-8 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-wrap items-center justify-center gap-2">
          {siteData.portfolioCategories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors focus:outline-none ${
                  isSelected
                    ? 'bg-stone-900 text-white font-medium'
                    : 'bg-stone-50 text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {/* Standard Portfolio Grid */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group cursor-pointer border border-stone-200 bg-white p-3 space-y-3 transition-all hover:shadow-lg"
            >
              <div className="aspect-[4/3] bg-stone-100 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover standard-image-hover"
                />
                <div className="absolute inset-0 bg-stone-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 bg-white text-stone-900 text-xs uppercase tracking-[0.18em] font-medium flex items-center gap-1.5 shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Craft</span>
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#A38257] font-semibold">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg text-stone-900 font-medium mt-1 line-clamp-1 group-hover:text-[#A38257] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-stone-400 font-sans mt-0.5">
                  Surface: {item.surface}
                </p>
                <p className="text-xs text-stone-500 font-light line-clamp-2 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

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

    </div>
  );
}
