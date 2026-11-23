import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ScrollToTop from './components/ScrollToTop';

// Dedicated Simple Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
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
      <div className="min-h-screen flex flex-col bg-white text-ink-900 font-sans selection:bg-[#E2C798] selection:text-ink-900 relative">
        
        {/* Subtle Arabic Calligraphy Watermark Background */}
        <div 
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.035] mix-blend-multiply bg-repeat"
          style={{
            backgroundImage: `url('/arabic-pattern.jpg')`,
            backgroundSize: '520px auto'
          }}
        />

        <div className="relative z-10 flex flex-col min-h-screen flex-grow">
          {/* Simple & Responsive Sticky Navigation */}
          <Navbar onOpenBooking={(srv) => handleOpenBooking(srv)} />

          {/* Multi-Page Routes */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
              <Route path="/about" element={<AboutPage onOpenBooking={handleOpenBooking} />} />
              <Route path="/services" element={<ServicesPage onOpenBooking={handleOpenBooking} />} />
              <Route path="/portfolio" element={<PortfolioPage onOpenBooking={handleOpenBooking} />} />
              <Route path="/collaborations" element={<CollaborationsPage onOpenBooking={handleOpenBooking} />} />
              <Route path="/why-ruwaa" element={<WhyRuwaaPage onOpenBooking={handleOpenBooking} />} />
              <Route path="/contact" element={<ContactPage prefilledService={selectedService} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />
        </div>

        {/* Booking Modal */}
        <BookingModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          initialService={selectedService}
        />

        {/* Compact Floating WhatsApp Button */}
        <aside aria-label="Contact via WhatsApp" className="fixed bottom-5 right-5 z-40">
          <a
            href={siteData.brand.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp Studio Hotline"
            className="w-12 h-12 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all border border-emerald-500/40"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </aside>

      </div>
    </Router>
  );
}
