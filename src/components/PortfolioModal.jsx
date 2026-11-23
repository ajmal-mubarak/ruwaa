import React from 'react';
import { X, Sparkles, MessageCircle, ExternalLink } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function PortfolioModal({ item, onClose, onBookItem }) {
  if (!item) return null;

  const encodedMsg = encodeURIComponent(
    `Hello Ruwaa Artistry, I saw "${item.title}" in your portfolio (${item.category}) and would like to commission a similar piece or inquire about details.`
  );
  const itemWhatsAppUrl = `https://wa.me/97455196080?text=${encodedMsg}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#161614] text-stone-100 rounded-2xl overflow-hidden shadow-2xl border border-stone-800 max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-white flex items-center justify-center border border-stone-700 shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Side */}
        <div className="md:w-1/2 relative bg-stone-950">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover max-h-[350px] md:max-h-full"
          />
          <div className="absolute top-4 left-4 bg-stone-900/90 border border-stone-700 text-[#E2C798] px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em]">
            {item.category}
          </div>
        </div>

        {/* Content Side */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A38257] font-sans font-semibold">
              RUWAA ARTISTRY PORTFOLIO
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-white mt-1 mb-2 font-normal">
              {item.title}
            </h3>
            
            <div className="py-2 px-3 bg-[#20201D] rounded-lg border border-stone-700/80 mb-4 inline-block">
              <span className="text-xs text-stone-300">
                <strong className="text-white font-medium">Surface / Finish:</strong> {item.surface}
              </span>
            </div>

            <p className="text-stone-300 text-sm font-light leading-relaxed mb-6">
              {item.description}
            </p>

            <div className="space-y-2 border-t border-stone-800 pt-4">
              <div className="flex items-center gap-2 text-xs text-stone-400">
                <Sparkles className="w-3.5 h-3.5 text-[#A38257]" />
                <span>Handcrafted by Farisha Arif Atelier</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-400">
                <span className="text-[#A38257]">&bull;</span>
                <span>Available for commission across Qatar &amp; Saudi Arabia</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-800 mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={itemWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white text-xs uppercase tracking-[0.16em] font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Inquire</span>
            </a>
            
            <button
              onClick={() => onBookItem(item.title)}
              className="flex-1 py-3 px-4 bg-[#A38257] hover:bg-[#b8976b] text-white text-xs uppercase tracking-[0.16em] font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <span>Book Experience</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
