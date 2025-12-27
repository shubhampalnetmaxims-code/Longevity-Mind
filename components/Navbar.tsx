
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity, Download } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Benefits', href: '/benefits' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || location.pathname !== '/' ? 'py-4 glass border-b border-white/5 shadow-2xl bg-slate-950/80' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-emerald-500 p-1.5 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-emerald-500/20">
              <Activity className="w-6 h-6 text-slate-950" />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase">
              LONGEVITY<span className="text-emerald-500">MIND</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  location.pathname === link.href ? 'text-emerald-500' : 'text-slate-400 hover:text-emerald-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/pricing" className="px-6 py-2.5 bg-white text-slate-950 hover:bg-emerald-500 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-white/5 active:scale-95 flex items-center">
              <Download className="w-3 h-3 mr-2" />
              Download
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 bg-slate-900 rounded-xl border border-slate-800"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full glass border-b transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-10 space-y-8 text-center bg-slate-950">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-xl font-black uppercase ${
                location.pathname === link.href ? 'text-emerald-500' : 'text-slate-200 hover:text-emerald-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/pricing"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full px-8 py-5 bg-emerald-500 text-slate-950 rounded-2xl font-black uppercase tracking-widest text-lg"
          >
            Start Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;