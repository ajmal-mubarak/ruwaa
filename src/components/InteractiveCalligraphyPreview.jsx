import React, { useState } from 'react';
import { Sparkles, MessageCircle, RefreshCw, Check } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function InteractiveCalligraphyPreview() {
  const [text, setText] = useState("Farisha Arif");
  const [style, setStyle] = useState("script"); // 'script' | 'arabic' | 'serif'
  const [finish, setFinish] = useState("gold"); // 'gold' | 'ink' | 'rose'
  const [surface, setSurface] = useState("paper"); // 'paper' | 'bottle' | 'ceramic'

  const finishStyles = {
    gold: "text-transparent bg-clip-text bg-gradient-to-r from-[#A37B3E] via-[#F2DCA5] to-[#B38E5D] drop-shadow-[0_2px_4px_rgba(180,140,70,0.3)]",
    ink: "text-stone-900 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]",
    rose: "text-transparent bg-clip-text bg-gradient-to-r from-[#9C6653] via-[#E2B7A8] to-[#9C6653] drop-shadow-[0_2px_4px_rgba(156,102,83,0.3)]"
  };

  const fontClasses = {
    script: "font-script text-4xl sm:text-6xl md:text-7xl",
    arabic: "font-arabic text-4xl sm:text-6xl md:text-7xl direction-rtl",
    serif: "font-serif italic text-3xl sm:text-5xl md:text-6xl font-light",
  };

  const surfaceThemes = {
    paper: "bg-[#FDFBF7] border-[#E8DEC9] shadow-[0_20px_40px_-15px_rgba(26,23,21,0.08)]",
    bottle: "bg-gradient-to-b from-stone-900 via-stone-800 to-stone-950 border-stone-700 shadow-2xl text-white",
    ceramic: "bg-[#F4ECE1] border-[#DFD1BF] shadow-lg",
  };

  const handleWhatsAppShare = () => {
    const message = `Hello Ruwaa Artistry, I created a custom preview on your website!%0A%0A*Name / Inscription:* ${encodeURIComponent(text)}%0A*Style:* ${style}%0A*Finish:* ${finish}%0A*Surface:* ${surface}%0A%0ACould you share pricing and availability for this custom piece?`;
    window.open(`https://wa.me/97455196080?text=${message}`, '_blank');
  };

  return (
    <section className="py-24 bg-[#FAF7F2] relative border-t border-[#EAE2D5]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-stone-500 font-sans mb-2">
            ATELIER INTERACTIVE PREVIEW
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-ink-900 font-normal tracking-wide">
            Visualize Your Personalized Inscription
          </h2>
          <p className="text-xs text-stone-500 font-light mt-3">
            Type your name, couple initials, or event sentiment below to preview your bespoke calligraphy style.
          </p>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-5" />
        </div>

        {/* Studio Interactive Card */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-[#E9E1D5] luxury-card-shadow">
          
          {/* Controls Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            
            {/* Input Name */}
            <div className="md:col-span-2">
              <label className="block text-[11px] uppercase tracking-[0.2em] text-stone-500 mb-1.5 font-medium">
                Your Inscription / Name
              </label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter name or Arabic text..."
                maxLength={40}
                className="w-full bg-[#FAF7F2] border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-ink-900 focus:outline-none focus:border-gold-500 font-serif"
              />
            </div>

            {/* Style Selector */}
            <div>
              <label className="block text-[11px] uppercase tracking-[0.2em] text-stone-500 mb-1.5 font-medium">
                Calligraphy Style
              </label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-stone-200 rounded-xl px-3 py-2.5 text-xs text-ink-900 focus:outline-none focus:border-gold-500"
              >
                <option value="script">Modern Script Flourish</option>
                <option value="arabic">Arabic Heritage (العربية)</option>
                <option value="serif">High-Fashion Serif Italic</option>
              </select>
            </div>

            {/* Finish Selector */}
            <div>
              <label className="block text-[11px] uppercase tracking-[0.2em] text-stone-500 mb-1.5 font-medium">
                Inlay Finish
              </label>
              <select
                value={finish}
                onChange={(e) => setFinish(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-stone-200 rounded-xl px-3 py-2.5 text-xs text-ink-900 focus:outline-none focus:border-gold-500"
              >
                <option value="gold">24K Liquid Gold Leaf</option>
                <option value="ink">Obsidian Deep Ink</option>
                <option value="rose">Rose Bronze Foil</option>
              </select>
            </div>

          </div>

          {/* Live Stage Canvas */}
          <div className={`relative rounded-2xl p-8 sm:p-14 border text-center transition-all duration-500 overflow-hidden flex flex-col items-center justify-center min-h-[260px] md:min-h-[300px] ${surfaceThemes[surface]}`}>
            
            {/* Corner Ornamental marks */}
            <div className="absolute top-4 left-4 text-xs font-serif opacity-30 select-none">✦</div>
            <div className="absolute top-4 right-4 text-xs font-serif opacity-30 select-none">✦</div>
            <div className="absolute bottom-4 left-4 text-xs font-serif opacity-30 select-none">✦</div>
            <div className="absolute bottom-4 right-4 text-xs font-serif opacity-30 select-none">✦</div>

            {/* Top kicker on card */}
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-4 font-sans font-medium">
              Bespoke Artisan Commission • Qatar
            </p>

            {/* Rendered Text */}
            <div className="py-4 px-2 max-w-full overflow-hidden">
              <span className={`block tracking-wide transition-all duration-300 break-words ${fontClasses[style]} ${finishStyles[finish]}`}>
                {text || "Ruwaa Artistry"}
              </span>
            </div>

            {/* Sub-line */}
            <p className="text-xs font-serif italic opacity-70 mt-3">
              Crafted by Farisha Arif Atelier
            </p>

            {/* Finish & Style Tags Pill */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              <span className="text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/5 border border-black/10">
                Finish: {finish === 'gold' ? '24K Liquid Gold' : finish === 'ink' ? 'Obsidian Ink' : 'Rose Bronze'}
              </span>
              <span className="text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/5 border border-black/10">
                Surface: {surface === 'paper' ? 'Handmade Rag Paper' : surface === 'bottle' ? 'Crystal Flacon' : 'Ceramic Glaze'}
              </span>
            </div>
          </div>

          {/* Surface Switcher Pills & WhatsApp Send */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-[0.18em] text-stone-500 font-medium">Surface:</span>
              <button
                onClick={() => setSurface("paper")}
                className={`px-3 py-1.5 rounded-full text-xs transition-colors ${
                  surface === 'paper' ? 'bg-ink-900 text-white font-medium' : 'bg-stone-100 text-stone-600'
                }`}
              >
                Handmade Paper
              </button>
              <button
                onClick={() => setSurface("bottle")}
                className={`px-3 py-1.5 rounded-full text-xs transition-colors ${
                  surface === 'bottle' ? 'bg-ink-900 text-white font-medium' : 'bg-stone-100 text-stone-600'
                }`}
              >
                Crystal Bottle
              </button>
              <button
                onClick={() => setSurface("ceramic")}
                className={`px-3 py-1.5 rounded-full text-xs transition-colors ${
                  surface === 'ceramic' ? 'bg-ink-900 text-white font-medium' : 'bg-stone-100 text-stone-600'
                }`}
              >
                Ceramic Mug
              </button>
            </div>

            <button
              onClick={handleWhatsAppShare}
              className="w-full sm:w-auto px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs uppercase tracking-[0.2em] font-medium rounded-none flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire With This Preview on WhatsApp</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

