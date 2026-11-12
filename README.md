# RUWAA ARTISTRY — Official Website

> **The Art of Calligraphy, Crafted with Elegance.**  
> Where timeless Arabic and English calligraphy meets contemporary luxury.

A bespoke React website for **Ruwaa Artistry** by **Farisha Arif**, developed with Vite, React, and Tailwind CSS. The design is inspired by high-end editorial and modern luxury atelier aesthetics with delicate textures, warm linen tones, authentic Arabic typography, and bespoke interactive features.

---

## ✨ Features & Structure

1. **Top Announcement & Sticky Header**
   - Brand monogram, navigation links, quick WhatsApp action, and mobile responsive drawer.
2. **Hero Section (Matching Reference Design)**
   - Top card with tracked kicker, cursive script accent (*"We Slow Down. We Reflect. Rise with Intention —"*), editorial headline, and minimalist action buttons.
   - Middle card with large floating Arabic & English calligraphy watermarks, an Instagram atelier card (`@ruwaa_artistry`), and quick avenue list with clean divider rules.
   - Stats ticker highlighting prestige partnerships, live activations, and Qatar & KSA studio reach.
3. **Introduction Section (Matching Reference Design)**
   - Cursive lead-in *"explore our world and"* with serif title *"Art Beyond Letters. Beauty Beyond Imagination."*
   - 3-column visual presentation celebrating penmanship, micro-engraving, and pottery.
4. **About the Artist – Farisha Arif**
   - Story of Farisha Arif bridging classical Arabic typographic heritage with modern luxury.
   - Surfaces explored: hand-turned pottery, glass fragrance bottles, leather, ceramics, decorative objects.
   - Studio locations in Qatar and Saudi Arabia.
5. **Our Services (01 - 05)**
   - 01. Glass & Fragrance Bottle Engraving (Liquid gold & metallic leaf)
   - 02. Custom Ceramics & Artisanal Pottery
   - 03. Live Calligraphy & Event Experiences
   - 04. Weddings & Special Occasions (Weddings, Henna Nights, Bridal Showers, Private Celebrations)
   - 05. Bespoke Calligraphy Artwork
6. **Interactive Atelier Inscription Previewer**
   - Allows clients to enter their custom name or event text in English or Arabic.
   - Live toggling between styles (Modern Script, Arabic Heritage, Serif Italic), finishes (24K Liquid Gold Leaf, Obsidian Ink, Rose Bronze), and surfaces (Handmade Paper, Crystal Flacon, Ceramic Mug).
   - One-click export to WhatsApp with all custom specs pre-filled!
7. **Our Portfolio (All 8 Categories)**
   - Filterable gallery: Arabic Calligraphy, English Calligraphy, Glass Engraving & Painting, Fragrance Bottle Personalization, Leather Foiling, Custom Ceramics & Pottery, Personalized Event Keepsakes, Canvas & Decorative Artwork.
   - Interactive Lightbox modal with close-up surface notes and WhatsApp inquiry.
8. **Live Artistry & Event Experiences**
   - Spotlight on live activations with an interactive **Event Concierge & Quote Builder**.
9. **Brand Collaborations & Events**
   - Interactive showcase of prestige partnerships: Lexus, GAC GS8, Blue Saloon, TikTok, Paris Gallery, Rituals, Qatar Masters (Doha Golf Club), Doha Mall, and Qatar Museums.
10. **Custom Artwork & Exhibitions**
    - Abstract Arabic calligraphy compositions and bespoke decorative pieces for upscale interiors in Qatar and beyond.
11. **Why Ruwaa Artistry?**
    - The 5 pillars: Personalized Creations, Traditional Meets Contemporary, Exceptional Craftsmanship, Memorable Experiences, and Bespoke Luxury.
12. **Contact & Booking Section**
    - Direct WhatsApp hotline (`+974 55196080`), email (`farishaop@gmail.com`), location (Qatar & Saudi Arabia), and official Instagram (`@ruwaa_artistry`).
    - Direct studio inquiry form and booking modal.
13. **Website Footer**
    - Monogram, service summaries, navigation, Instagram links, and copyright.

---

## 🚀 Getting Started

### 1. Run Development Server
```bash
npm run dev
```

### 2. Build for Production
```bash
npm run build
```

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📁 Key File Structure

```
ruwaa-artistry/
├── index.html              # HTML shell with Google Fonts (Cormorant, Cinzel, Alex Brush, Amiri)
├── package.json            # Vite, React, Tailwind CSS, Lucide icons
├── tailwind.config.js      # Custom luxury palette, typography & spacing
├── src/
│   ├── main.jsx            # React root mount
│   ├── App.jsx             # Main layout combining all 10 sections
│   ├── index.css           # Custom styles, grain textures & scrollbars
│   ├── data/
│   │   └── siteData.js     # Centralized brand, portfolio, and service content
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── Introduction.jsx
│       ├── AboutArtist.jsx
│       ├── Services.jsx
│       ├── Portfolio.jsx
│       ├── PortfolioModal.jsx
│       ├── LiveExperiences.jsx
│       ├── Collaborations.jsx
│       ├── CustomArtwork.jsx
│       ├── InteractiveCalligraphyPreview.jsx
│       ├── WhyRuwaa.jsx
│       ├── ContactSection.jsx
│       ├── BookingModal.jsx
│       ├── Icons.jsx
│       └── Footer.jsx
```

