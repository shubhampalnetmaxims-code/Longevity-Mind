
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HealthEssence from './components/HealthEssence';
import WorkoutScience from './components/WorkoutScience';
import WalkingWisdom from './components/WalkingWisdom';
import LongevityPillars from './components/LongevityPillars';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Utility to scroll to top on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Refresh intersection observer for the new page content
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <HealthEssence />
    <WorkoutScience />
    <WalkingWisdom />
    <LongevityPillars />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen selection:bg-emerald-500/30 flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<Features />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
