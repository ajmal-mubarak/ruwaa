import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ScrollToTop from './components/ScrollToTop';

// Dedicated Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import LiveExperiencesPage from './pages/LiveExperiencesPage';
import CollaborationsPage from './pages/CollaborationsPage';
import WhyRuwaaPage from './pages/WhyRuwaaPage';
import ContactPage from './pages/ContactPage';

import { siteData } from './data/siteData';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenBooking = (serviceName = "General Inquiry") => {
    setSelectedService(serviceName);
    setBookingModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-ink-900 font-sans selection:bg-[#E2C798] selection:text-ink-900">
        
        {/* Responsive Sticky Header with Page Navigation */}
        <Navbar onOpenBooking={(srv) => handleOpenBooking(srv)} />

        {/* Multi-Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/about" element={<AboutPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/services" element={<ServicesPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/portfolio" element={<PortfolioPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/live-experiences" element={<LiveExperiencesPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/collaborations" element={<CollaborationsPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/why-ruwaa" element={<WhyRuwaaPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/contact" element={<ContactPage prefilledService={selectedService} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Booking & Concierge Modal */}
        <BookingModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          initialService={selectedService}
        />

        {/* Floating WhatsApp Quick Action Button */}
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
    </Router>
  );
}
