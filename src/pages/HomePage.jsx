import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import InteractiveCalligraphyPreview from '../components/InteractiveCalligraphyPreview';
import { siteData } from '../data/siteData';
import { ArrowRight, Sparkles, MapPin, Feather, Check } from 'lucide-react';

export default function HomePage({ onOpenBooking }) {
  // Curated preview items for Home
  const featuredServices = siteData.services.slice(0, 3);
  const featuredPortfolio = siteData.portfolioItems.filter(item => item.featured).slice(0, 3);
  const marqueeCollaborations = siteData.collaborations.slice(0, 4);

  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section matching Panels 1 & 2 of reference */}
      <Hero onOpenBooking={() => onOpenBooking("Bespoke Commission")} />

      {/* 2. Introduction Section matching Panel 3 of reference */}
      <Introduction />

      {/* 3. Curated About Teaser */}
      <section className="py-20 bg-[#FAF7F2] border-t border-[#EAE2D5] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FCFAF7] border border-[#E9E1D5] rounded-2xl p-6 sm:p-10 lg:p-14 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-md border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop"
                  alt="Farisha Arif - Calligraphy Artist"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-ink-900 text-white px-4 py-2 rounded-xl text-left border border-stone-700 shadow-xl">
                <p className="text-[9px] uppercase tracking-widest text-gold-300">Based in</p>
                <p className="font-serif text-sm">Qatar &bull; Saudi Arabia</p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-stone-500 font-sans">
                MEET THE ARTIST
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 font-normal">
                Farisha Arif
              </h2>
              <p className="font-script text-2xl text-gold-600">
                Where Tradition Meets Contemporary Artistry.
              </p>
              <p className="text-ink-600 text-sm font-light leading-relaxed">
                Based in Qatar and active across the Gulf including Saudi Arabia, Farisha Arif brings together centuries-old Arabic typographic traditions and contemporary luxury design across hand-turned pottery, fragrance bottles, leather, and fine ceramics.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-ink-900 hover:text-gold-600 group transition-colors"
                >
                  <span>Read Full Artist Story &amp; Philosophy</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Curated Services Teaser */}
      <section className="py-20 bg-[#FCFAF7] border-t border-[#EAE2D5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-stone-500 font-sans mb-1">
                OUR SERVICES
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 font-normal">
                Bespoke Artistry &amp; Creative Experiences
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs uppercase tracking-[0.2em] font-medium text-ink-800 hover:text-gold-600 flex items-center gap-1.5 transition-colors shrink-0"
            >
              <span>Explore All 5 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-[#E9E1D5] luxury-card-shadow luxury-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-xl text-gold-600 font-light">{service.id}.</span>
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 bg-stone-100 text-stone-600 rounded-full">
                      {service.badge}
                    </span>
                  </div>
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-stone-100">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-serif text-xl text-ink-900 mb-2">{service.title}</h3>
                  <p className="text-xs text-stone-500 font-light line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-100 mt-4 flex items-center justify-between">
                  <Link
                    to="/services"
                    className="text-xs uppercase tracking-[0.16em] text-ink-900 hover:text-gold-600 font-medium"
                  >
                    View Details &rarr;
                  </Link>
                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="text-[11px] text-stone-400 hover:text-gold-700 tracking-wider"
                  >
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Interactive Studio Inscription Previewer */}
      <InteractiveCalligraphyPreview />

      {/* 6. Curated Portfolio Teaser */}
      <section className="py-20 bg-[#FAF7F2] border-t border-[#EAE2D5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-stone-500 font-sans mb-1">
                SELECTED WORKS
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 font-normal">
                A Collection of Artistry
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="text-xs uppercase tracking-[0.2em] font-medium text-ink-800 hover:text-gold-600 flex items-center gap-1.5 transition-colors shrink-0"
            >
              <span>View Full 8 Categories &rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPortfolio.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 border border-[#E9E1D5] luxury-card-shadow luxury-card-hover group"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden relative mb-4 bg-stone-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider px-2 py-0.5 bg-white/90 text-ink-800 rounded">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-ink-900 mb-1">{item.title}</h3>
                <p className="text-[11px] text-stone-400 font-sans">{item.surface}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/portfolio"
              className="inline-block px-8 py-3.5 bg-ink-900 hover:bg-gold-600 text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              Explore Full Portfolio
            </Link>
          </div>

        </div>
      </section>

      {/* 7. Prestige Brand Collaborations Teaser */}
      <section className="py-16 bg-[#1A1715] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-gold-400 font-semibold mb-3">
            TRUSTED BY PRESTIGIOUS LUXURY BRANDS
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-stone-800">
            {marqueeCollaborations.map((collab, i) => (
              <div key={i} className="text-center py-2">
                <p className="font-serif text-xl sm:text-2xl text-stone-200">{collab.brand}</p>
                <p className="text-[10px] text-stone-500 uppercase tracking-widest mt-1">{collab.badge}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/collaborations"
              className="text-xs uppercase tracking-[0.2em] text-gold-300 hover:text-white underline underline-offset-4 transition-colors"
            >
              Discover All Brand Collaborations &amp; Exhibitions &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Bottom Atelier Call to Action */}
      <section className="py-20 bg-[#FAF7F2] text-center border-t border-[#EAE2D5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="font-script text-3xl sm:text-4xl text-gold-600 mb-2">
            Let’s create something beautiful together.
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-ink-900 font-normal mb-6">
            Bespoke Calligraphy &amp; Live Event Experiences
          </h2>
          <p className="text-ink-600 text-sm font-light leading-relaxed mb-8 max-w-xl mx-auto">
            From luxury fragrance bottle engraving to grand live gala activations in Qatar and Saudi Arabia, Farisha Arif brings extraordinary elegance to every surface.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking("General Experience Booking")}
              className="w-full sm:w-auto px-10 py-3.5 bg-ink-900 hover:bg-gold-600 text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              Book an Experience
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-3.5 border border-ink-900 hover:bg-ink-900 hover:text-white text-ink-900 text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              Contact Studio
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
