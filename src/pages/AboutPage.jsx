import React from 'react';
import { siteData } from '../data/siteData';

export default function AboutPage({ onOpenBooking }) {
  const { about } = siteData;

  const surfaceItems = [
    {
      title: "Hand-Turned Pottery",
      desc: "Raw clay and ceramic vessels inscribed with classical Arabic poetry and heat-cured glazes.",
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=700&auto=format&fit=crop"
    },
    {
      title: "Glass Fragrance Bottles",
      desc: "Delicate rotary engraving infilled with 24K liquid gold on crystal flacons and luxury perfume.",
      image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=700&auto=format&fit=crop"
    },
    {
      title: "Supple Leather & Folios",
      desc: "Hot metallic foil stamping on bespoke cardholders, guestbooks, and luxury leather accessories.",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=700&auto=format&fit=crop"
    },
    {
      title: "Decorative Objects & Canvases",
      desc: "Monumental abstract calligraphy art created with mixed media, textural gesso, and gold leaf.",
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=700&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-[#FAF7F2] text-[#1C1917] min-h-screen">
      
      {/* Editorial Page Header */}
      <section className="pt-14 sm:pt-20 pb-12 sm:pb-16 border-b border-[#EADDCB] bg-[#F4EFE6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#9E672B] font-sans mb-1">
            ABOUT THE ARTIST
          </p>
          <span className="font-calligraphy text-5xl sm:text-7xl text-[#9E672B] block mb-2">
            Farisha Arif
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-light">
            Where Tradition Meets Contemporary Artistry.
          </h1>
          <div className="w-12 h-[1px] bg-[#C79F5E] mx-auto my-5" />
          <p className="text-xs uppercase tracking-[0.25em] text-[#8C8277]">
            Doha, Qatar &bull; Riyadh, Saudi Arabia
          </p>
        </div>
      </section>

      {/* Main Narrative & Studio Portrait */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] bg-white overflow-hidden border border-[#EADDCB] rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=900&auto=format&fit=crop"
                alt="Farisha Arif Atelier"
                className="w-full h-full object-cover standard-image-hover"
              />
            </div>
            <p className="text-[11px] text-stone-500 font-sans uppercase tracking-widest mt-3 text-center">
              Farisha Arif &bull; Calligrapher &amp; Engraver
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6 text-[#57534E] font-light text-sm sm:text-base leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-[#9E672B]">
              {about.bio[0]}
            </p>
            <p>{about.bio[1]}</p>
            <p>{about.bio[2]}</p>
            <p>{about.bio[3]}</p>
            <blockquote className="font-serif italic text-lg sm:text-xl text-[#1C1917] border-l-2 border-[#C79F5E] pl-5 py-2 my-4 bg-white/60 rounded-r-lg">
              "{about.bio[4]}"
            </blockquote>
          </div>

        </div>
      </section>

      {/* Surfaces Explored */}
      <section className="py-16 sm:py-24 bg-[#F4EFE6] border-t border-b border-[#EADDCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#9E672B] font-sans mb-1">
              SURFACES EXPLORED
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-light">
              Transforming Everyday Objects into Art
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {surfaceItems.map((item, idx) => (
              <div key={idx} className="bg-white border border-[#EADDCB] p-4 space-y-3 rounded-xl transition-all hover:border-[#C79F5E]/60 hover:shadow-xl shadow-xs">
                <div className="aspect-square bg-[#FAF7F2] overflow-hidden rounded-lg">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover standard-image-hover" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#9E672B] font-semibold">0{idx + 1}</span>
                <h3 className="font-serif text-lg text-[#1C1917]">{item.title}</h3>
                <p className="text-xs text-[#57534E] font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="py-16 text-center max-w-2xl mx-auto px-4">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1917] mb-3">Collaborate with Farisha Arif</h3>
        <p className="text-xs sm:text-sm text-[#57534E] font-light mb-6">
          Available for private commissions, brand activations, and cultural programs across Qatar and Saudi Arabia.
        </p>
        <button
          onClick={() => onOpenBooking("About Page Commission")}
          className="px-8 py-3.5 bg-[#C79F5E] hover:bg-[#9E672B] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors rounded-sm shadow-sm"
        >
          Book an Experience
        </button>
      </section>

    </div>
  );
}
