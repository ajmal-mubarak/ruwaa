import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import PortfolioModal from '../components/PortfolioModal';
import Endless from '../components/ui/endless';
import { Eye } from 'lucide-react';

export default function PortfolioPage({ onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalItem, setActiveModalItem] = useState(null);

  const filteredItems = selectedCategory === "All"
    ? siteData.portfolioItems
    : siteData.portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-[#FAF7F2] text-[#1C1917] min-h-screen">
      
      {/* Header */}
      <section className="pt-14 sm:pt-20 pb-12 sm:pb-16 border-b border-[#EADDCB] bg-[#F4EFE6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#9E672B] font-sans mb-1">
            SELECTED WORKS
          </p>
          <span className="font-calligraphy text-5xl sm:text-7xl text-[#9E672B] block mb-2">
            Our Portfolio
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-light">
            A Collection of Artistry
          </h1>
          <div className="w-12 h-[1px] bg-[#C79F5E] mx-auto my-5" />
          <p className="text-[#57534E] font-light text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Every creation reflects a unique combination of creativity, craftsmanship, and artistic detail. Explore our selected works across different materials, surfaces, and calligraphy styles.
          </p>
          <p className="font-serif italic text-sm text-[#9E672B] mt-3">
            Discover the Art. Experience the Details.
          </p>
        </div>
      </section>

      {/* 3D Endless Corridor Showcase (Clickable Planes) */}
      <section className="border-b border-[#EADDCB] relative bg-[#FAF7F2]">
        <Endless 
          title="Endless Artistry"
          caption="Every Stroke Tells A Story • Doha &amp; Riyadh"
          onCardClick={(item) => setActiveModalItem(item)}
        />
      </section>

      {/* Category Filter Navigation */}
      <section className="py-8 bg-[#FAF7F2] border-b border-[#EADDCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-wrap items-center justify-center gap-2">
          {siteData.portfolioCategories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors focus:outline-none rounded-sm ${
                  isSelected
                    ? 'bg-[#C79F5E] text-white font-medium shadow-sm'
                    : 'bg-white text-stone-700 hover:text-[#9E672B] hover:bg-[#F4EFE6] border border-[#EADDCB]'
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
              className="group cursor-pointer border border-[#EADDCB] bg-white p-3 space-y-3 transition-all hover:border-[#C79F5E]/60 hover:shadow-xl rounded-xl shadow-xs"
            >
              <div className="aspect-[4/3] bg-[#F4EFE6] overflow-hidden relative rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover standard-image-hover"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 bg-white/95 text-[#9E672B] border border-[#EADDCB] text-xs uppercase tracking-[0.18em] font-medium flex items-center gap-1.5 shadow-md rounded-sm">
                    <Eye className="w-3.5 h-3.5 text-[#C79F5E]" />
                    <span>View Craft</span>
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E672B] font-semibold">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg text-[#1C1917] font-medium mt-1 line-clamp-1 group-hover:text-[#9E672B] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-stone-500 font-sans mt-0.5">
                  Surface: {item.surface}
                </p>
                <p className="text-xs text-[#57534E] font-light line-clamp-2 mt-2 leading-relaxed">
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
