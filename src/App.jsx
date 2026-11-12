import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import AboutArtist from './components/AboutArtist';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import LiveExperiences from './components/LiveExperiences';
import Collaborations from './components/Collaborations';
import CustomArtwork from './components/CustomArtwork';
import InteractiveCalligraphyPreview from './components/InteractiveCalligraphyPreview';
import WhyRuwaa from './components/WhyRuwaa';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { siteData } from './data/siteData';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenBooking = (serviceName = "") => {
    setSelectedService(serviceName);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-ink-900 font-sans selection:bg-[#E2C798] selection:text-ink-900">
      
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking("General Experience Booking")} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section (matching top & middle cards of reference design) */}
        <Hero onOpenBooking={() => handleOpenBooking("Bespoke Experience")} />

        {/* 1b. Introduction (matching bottom card of reference design) */}
        <Introduction />

        {/* 2. About the Artist – Farisha Arif */}
        <AboutArtist />

        {/* 3. Our Services (01 - 05) */}
        <Services onSelectServiceForBooking={(srv) => handleOpenBooking(srv)} />

        {/* Atelier Interactive Inscription Previewer */}
        <InteractiveCalligraphyPreview />

        {/* 4. Our Portfolio (All 8 Categories + Lightbox) */}
        <Portfolio onOpenBooking={(item) => handleOpenBooking(item)} />

        {/* 5. Live Artistry & Event Experiences */}
        <LiveExperiences onOpenBooking={(srv) => handleOpenBooking(srv)} />

        {/* 6. Brand Collaborations & Events */}
        <Collaborations />

        {/* 7. Custom Artwork & Exhibitions */}
        <CustomArtwork onOpenBooking={(art) => handleOpenBooking(art)} />

        {/* 8. Why Ruwaa Artistry? */}
        <WhyRuwaa />

        {/* 9. Contact Us */}
        <ContactSection prefilledService={selectedService} />
      </main>

      {/* 10. Website Footer */}
      <Footer />

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedService}
      />

      {/* Floating WhatsApp Action Button */}
      <aside aria-label="Contact via WhatsApp" className="fixed bottom-6 right-6 z-40">
        <a
          href={siteData.brand.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Studio Hotline"
          className="group flex items-center gap-2.5 px-4 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full shadow-2xl hover:shadow-emerald-900/30 transition-all duration-300 hover:scale-105 border border-emerald-500/30"
        >
          <MessageCircle className="w-5 h-5 animate-bounce" />
          <span className="text-xs uppercase tracking-[0.16em] font-medium hidden sm:inline-block">
            Inquire on WhatsApp
          </span>
        </a>
      </aside>

    </div>
  );
}
