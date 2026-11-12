import React from 'react';
import { siteData } from '../data/siteData';
import { Feather, MapPin, Sparkles, Award, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage({ onOpenBooking }) {
  const { about } = siteData;

  const surfaceCards = [
    {
      title: "Hand-Turned Pottery",
      desc: "Raw clay and ceramic vessels inscribed with classical Arabic poetry and heat-cured glazes.",
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Glass Fragrance Bottles",
      desc: "Delicate rotary engraving infilled with 24K liquid gold on crystal flacons and luxury perfume.",
      image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Supple Leather & Folios",
      desc: "Hot metallic foil stamping on bespoke cardholders, guestbooks, and luxury leather accessories.",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Decorative Objects & Canvases",
      desc: "Monumental abstract calligraphy art created with mixed media, textural gesso, and gold leaf.",
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#FAF7F2] min-h-screen">
      
      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-16 sm:mb-20">
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-stone-500 font-sans mb-2">
          MEET THE ARTIST
        </p>
        <h1 className="font-serif text-4xl sm:text-6xl text-ink-900 font-normal tracking-wide">
          Farisha Arif
        </h1>
        <p className="font-script text-3xl sm:text-4xl text-gold-600 mt-2">
          Where Tradition Meets Contemporary Artistry.
        </p>
        <div className="w-16 h-[1.5px] bg-gold-400 mx-auto mt-6" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Main Bio Collage */}
        <div className="bg-[#FCFAF7] border border-[#E9E1D5] rounded-3xl p-6 sm:p-12 lg:p-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-white p-3">
                <div className="aspect-[3/4] rounded-xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=900&auto=format&fit=crop"
                    alt="Farisha Arif Atelier"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] uppercase tracking-widest text-gold-300">Farisha Arif</p>
                    <p className="font-serif text-lg">Calligrapher &bull; Luxury Engraver</p>
                  </div>
                </div>
              </div>

              {/* Location Badge */}
              <div className="absolute -bottom-5 -right-3 bg-ink-900 text-white px-4 py-2.5 rounded-xl border border-stone-700 shadow-xl flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span className="text-[11px] uppercase tracking-wider font-medium">Qatar &amp; Saudi Arabia</span>
              </div>
            </div>

            {/* Right Bio Narrative */}
            <div className="lg:col-span-7 space-y-5 text-ink-700 font-light text-sm sm:text-base leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-light first-letter:mr-3 first-letter:float-left first-letter:text-gold-600">
                {about.bio[0]}
              </p>
              <p>{about.bio[1]}</p>
              <p>{about.bio[2]}</p>
              <p>{about.bio[3]}</p>
              <p className="italic text-ink-900 font-normal border-l-2 border-gold-500 pl-4 py-1">
                "{about.bio[4]}"
              </p>
            </div>

          </div>
        </div>

        {/* Surfaces Explored Showcase */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-stone-500 font-sans mb-1">
              CANVAS BEYOND PAPER
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 font-normal">
              Surfaces Explored in the Atelier
            </h2>
            <p className="text-xs text-stone-500 font-light mt-2">
              Transforming everyday tactile objects into extraordinary heirlooms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {surfaceCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-[#E9E1D5] luxury-card-shadow luxury-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-stone-100">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="font-serif text-xl text-ink-900 mb-1.5">{card.title}</h3>
                  <p className="text-xs text-stone-500 font-light leading-relaxed">{card.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-[10px] uppercase tracking-wider text-gold-600 font-medium">
                  <span>Bespoke Medium</span>
                  <span>0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Artist Quote & Booking CTA */}
        <div className="bg-[#1E1B18] text-white rounded-3xl p-8 sm:p-14 text-center border border-stone-800 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-400 font-medium">Farisha Arif Atelier</span>
            <blockquote className="font-serif italic text-2xl sm:text-3xl text-stone-100 font-light leading-snug">
              "Every stroke tells a story, every detail carries meaning, and every creation is made to leave a lasting impression."
            </blockquote>
            <p className="text-xs text-stone-400 uppercase tracking-widest">
              Available for Luxury Brand Activations &bull; VIP Galas &bull; Private Commissions
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => onOpenBooking("About Page Commission Inquiry")}
                className="px-8 py-3.5 bg-gold-600 hover:bg-gold-700 text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                Book with Farisha Arif
              </button>
              <Link
                to="/portfolio"
                className="px-8 py-3.5 border border-stone-700 hover:border-gold-400 text-stone-200 text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                View Selected Portfolio
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
