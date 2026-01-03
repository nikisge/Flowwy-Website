import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-blue-500 flex items-center justify-center">
            <span className="font-bold text-white text-lg">F</span>
          </div>
          <span className="text-xl font-semibold tracking-tight">Flowey</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#process" className="text-sm text-slate-300 hover:text-white transition-colors">Unser Prozess</a>
          <a href="#work" className="text-sm text-slate-300 hover:text-white transition-colors">Projekte</a>
          <a href="#about" className="text-sm text-slate-300 hover:text-white transition-colors">Über uns</a>
          
          <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-sm font-medium">
            Kontakt aufnehmen
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-950 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden">
          <a href="#process" className="text-lg text-slate-300" onClick={() => setMobileMenuOpen(false)}>Unser Prozess</a>
          <a href="#work" className="text-lg text-slate-300" onClick={() => setMobileMenuOpen(false)}>Projekte</a>
          <button className="mt-4 w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg font-semibold text-white">
            Kontakt
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;