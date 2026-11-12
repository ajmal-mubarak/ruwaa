import React from 'react';

export default function Introduction() {
  return (
    <section className="py-12 sm:py-16 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Panel matching bottom card of reference */}
        <div className="bg-[#FCFAF7] border border-[#E9E1D5] rounded-2xl p-6 sm:p-12 lg:p-14 text-center shadow-xs">
          
          <p className="font-script text-2xl sm:text-4xl text-gold-600 mb-1">
            Art Beyond Letters.
          </p>

          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light tracking-[0.08em] uppercase text-ink-900 mb-5">
            Beauty Beyond Imagination.
          </h2>

          <p className="max-w-2xl mx-auto text-ink-600 font-light text-xs sm:text-sm md:text-base leading-relaxed mb-10">
            Discover the beauty of calligraphy through a unique blend of traditional artistry and modern luxury. At Ruwaa Artistry, every stroke tells a story, every detail carries meaning, and every creation is made to leave a lasting impression.
          </p>

          {/* 3 Visual Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="space-y-2">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop"
                  alt="Traditional Calligraphy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-base text-ink-900 font-medium">Bespoke Calligraphy</h3>
              <p className="text-[11px] text-stone-500 font-light leading-relaxed">
                Timeless Arabic and English calligraphy customized for individual commissions.
              </p>
            </div>

            <div className="space-y-2">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=600&auto=format&fit=crop"
                  alt="Perfume Bottle Engraving"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-base text-ink-900 font-medium">Luxury Bottle Engraving</h3>
              <p className="text-[11px] text-stone-500 font-light leading-relaxed">
                Hand-engraved glass flacons with metallic leaf and pure liquid gold.
              </p>
            </div>

            <div className="space-y-2">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=600&auto=format&fit=crop"
                  alt="Custom Ceramics & Pottery"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-base text-ink-900 font-medium">Ceramics &amp; Keepsakes</h3>
              <p className="text-[11px] text-stone-500 font-light leading-relaxed">
                Artisanal pottery and event keepsakes crafted with functional beauty.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
