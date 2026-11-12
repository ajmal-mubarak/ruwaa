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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-2xl border border-stone-300 max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-ink-900 flex items-center justify-center shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Side */}
        <div className="md:w-1/2 relative bg-stone-900">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover max-h-[350px] md:max-h-full"
          />
          <div className="absolute top-4 left-4 bg-ink-900/80 backdrop-blur-sm text-gold-300 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em]">
            {item.category}
          </div>
        </div>

        {/* Content Side */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-sans">
              RUWAA ARTISTRY PORTFOLIO
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-ink-900 mt-1 mb-2 font-normal">
              {item.title}
            </h3>
            
            <div className="py-2 px-3 bg-white rounded-lg border border-stone-200/80 mb-4 inline-block">
              <span className="text-xs text-stone-600">
                <strong className="text-ink-900 font-medium">Surface / Finish:</strong> {item.surface}
              </span>
            </div>

            <p className="text-ink-600 text-sm font-light leading-relaxed mb-6">
              {item.description}
            </p>

            <div className="space-y-2 border-t border-stone-200 pt-4">
              <div className="flex items-center gap-2 text-xs text-stone-600">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>Custom designed for individual requirements</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-600">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>Available for private delivery across Qatar &amp; Saudi Arabia</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row gap-3 mt-6">
            <a
              href={itemWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-none text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onBookItem(item.title);
              }}
              className="py-3 px-4 bg-ink-900 hover:bg-gold-600 text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              Book Commission
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
