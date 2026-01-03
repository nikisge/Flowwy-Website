import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-slate-950 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-orange-500 to-blue-500 flex items-center justify-center">
              <span className="font-bold text-white text-xs">F</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">Flowey</span>
          </div>
          <p className="text-slate-500 text-sm">Automatisierung für die Macher von morgen.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={20} /></a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></a>
        </div>

        <div className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Flowey Agency.
        </div>
      </div>
    </footer>
  );
};

export default Footer;