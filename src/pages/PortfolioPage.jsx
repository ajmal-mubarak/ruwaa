import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import PortfolioModal from '../components/PortfolioModal';
import { Eye } from 'lucide-react';

export default function PortfolioPage({ onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalItem, setActiveModalItem] = useState(null);

  const filteredItems = selectedCategory === "All"
    ? siteData.portfolioItems
    : siteData.portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-[#0E0E0D] text-white min-h-screen">
      
      {/* Header */}
      <section className="pt-14 sm:pt-20 pb-12 sm:pb-16 border-b border-stone-800 bg-[#121211]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-stone-400 font-sans mb-1">
            SELECTED WORKS
          </p>
          <span className="font-calligraphy text-5xl sm:text-7xl text-[#E2C798] block mb-2">
            Our Portfolio
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-stone-100 font-light">
            A Collection of Artistry
          </h1>
          <div className="w-12 h-[1px] bg-[#A38257] mx-auto my-5" />
          <p className="text-stone-300 font-light text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Every creation reflects a unique combination of creativity, craftsmanship, and artistic detail. Explore our selected works across different materials, surfaces, and calligraphy styles.
          </p>
          <p className="font-serif italic text-sm text-[#E2C798] mt-3">
            Discover the Art. Experience the Details.
          </p>
        </div>
      </section>

      {/* Category Filter Navigation */}
      <section className="py-8 bg-[#0E0E0D] border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-wrap items-center justify-center gap-2">
          {siteData.portfolioCategories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors focus:outline-none rounded-sm ${
                  isSelected
                    ? 'bg-[#A38257] text-white font-medium shadow-md'
                    : 'bg-[#181816] text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800'
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
              className="group cursor-pointer border border-stone-800 bg-[#161614] p-3 space-y-3 transition-all hover:border-[#A38257]/60 hover:shadow-2xl rounded-xl"
            >
              <div className="aspect-[4/3] bg-stone-900 overflow-hidden relative rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover standard-image-hover"
                />
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 bg-stone-900/90 text-[#E2C798] border border-stone-700 text-xs uppercase tracking-[0.18em] font-medium flex items-center gap-1.5 shadow-md rounded-sm">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Craft</span>
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#E2C798] font-semibold">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg text-white font-medium mt-1 line-clamp-1 group-hover:text-[#E2C798] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-stone-400 font-sans mt-0.5">
                  Surface: {item.surface}
                </p>
                <p className="text-xs text-stone-400 font-light line-clamp-2 mt-2 leading-relaxed">
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
