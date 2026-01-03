import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ToggleLeft, ToggleRight, CheckCircle2, XCircle } from 'lucide-react';

const projects = [
  {
    id: 1,
    client: "Logistics Pro GmbH",
    industry: "Logistik & Transport",
    description: "Automatisierung der Frachtdokumentation und Kundenkommunikation.",
    beforeState: {
      title: "Manuelles Chaos",
      points: ["Excel-Tabellen für Tracking", "4h/Tag manuelle Dateneingabe", "Verzögerte Kunden-Updates"]
    },
    afterState: {
      title: "Flowey Automatisierung",
      points: ["Echtzeit N8n Synchronisation", "0h Dateneingabe (Vollautomatisch)", "KI-generierte Status-Mails"]
    }
  },
  {
    id: 2,
    client: "Creative Studios",
    industry: "Marketing Agentur",
    description: "KI-Agenten für Content-Erstellung und Social Media Planung.",
    beforeState: {
      title: "Der Flaschenhals",
      points: ["Copywriting dauert 3 Tage", "Bildrecherche ist teuer", "Kein konsistenter Tone-of-Voice"]
    },
    afterState: {
      title: "KI Content Maschine",
      points: ["Drafts in 30 Sekunden", "Automatische Bildgenerierung", "Trainierte Custom GPTs"]
    }
  },
  {
    id: 3,
    client: "FinTech Connect",
    industry: "Finanzdienstleistung",
    description: "Automatisierte Lead-Qualifizierung und CRM-Pflege.",
    beforeState: {
      title: "Kalte Leads",
      points: ["Sales Team ruft jeden an", "CRM Daten veraltet", "Hohe Absprungrate"]
    },
    afterState: {
      title: "Smart Sales Pipeline",
      points: ["KI-Scoring der Leads", "Automatische Anreicherung", "+40% Conversion Rate"]
    }
  }
];

const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAfter, setShowAfter] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setShowAfter(true); // Reset to "After" view on slide change usually looks better
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setShowAfter(true);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="work" className="py-24 px-6 relative border-t border-white/5 bg-gradient-to-b from-transparent to-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Ausgewählte <span className="font-accent italic text-blue-400">Erfolge</span>
            </h2>
            <p className="text-slate-400">Echte Ergebnisse durch intelligente Automatisierung.</p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button onClick={prevSlide} className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              <ArrowLeft size={24} />
            </button>
            <button onClick={nextSlide} className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Main Card */}
        <div className="relative overflow-hidden bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 min-h-[500px] flex flex-col md:flex-row gap-12">
          
          {/* Left: Project Info */}
          <div className="flex-1 flex flex-col justify-center z-10">
             <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
             >
                <div className="text-orange-400 font-mono text-sm mb-4">{currentProject.industry}</div>
                <h3 className="text-4xl font-bold text-white mb-6">{currentProject.client}</h3>
                <p className="text-lg text-slate-300 mb-8">{currentProject.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span>Projekt ID: #{currentProject.id.toString().padStart(3, '0')}</span>
                  <div className="h-1 w-1 bg-slate-700 rounded-full" />
                  <span>Status: Completed</span>
                </div>
             </motion.div>
          </div>

          {/* Right: Before/After Interactive Card */}
          <div className="flex-1 relative z-10">
            <div className="bg-slate-950 border border-white/10 rounded-2xl overflow-hidden h-full min-h-[350px] relative shadow-2xl">
              
              {/* Header with Toggle */}
              <div className="flex justify-between items-center p-6 border-b border-white/5 bg-white/5">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">Transformation</span>
                <button 
                  onClick={() => setShowAfter(!showAfter)}
                  className="flex items-center gap-2 text-sm font-medium focus:outline-none"
                >
                  <span className={`${!showAfter ? 'text-white' : 'text-slate-500'}`}>Vorher</span>
                  {showAfter ? <ToggleRight className="text-blue-500" size={28} /> : <ToggleLeft className="text-slate-500" size={28} />}
                  <span className={`${showAfter ? 'text-white' : 'text-slate-500'}`}>Nachher</span>
                </button>
              </div>

              {/* Content Area */}
              <div className="p-8 h-full">
                <AnimatePresence mode="wait">
                  {showAfter ? (
                    <motion.div
                      key="after"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-6 border border-blue-500/20">
                        FLOWEY EFFECT
                      </div>
                      <h4 className="text-2xl font-accent italic text-white mb-6">{currentProject.afterState.title}</h4>
                      <ul className="space-y-4">
                        {currentProject.afterState.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-300">
                            <CheckCircle2 className="text-green-400 shrink-0 mt-0.5" size={18} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="before"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                       <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold mb-6 border border-red-500/20">
                        PROBLEM
                      </div>
                      <h4 className="text-2xl text-slate-400 mb-6 line-through decoration-slate-600 decoration-2">{currentProject.beforeState.title}</h4>
                      <ul className="space-y-4">
                        {currentProject.beforeState.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-500">
                            <XCircle className="text-slate-600 shrink-0 mt-0.5" size={18} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Decorative Gradient Background inside card */}
              <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${showAfter ? 'opacity-20' : 'opacity-0'}`}>
                 <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/30 blur-[80px] rounded-full" />
              </div>

            </div>
          </div>

        </div>

        {/* Client Logos / Trust Signals (Optional based on brief, but good for holistic agency feel) */}
        <div className="mt-16 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['OpenAI', 'n8n', 'Python', 'Make'].map((tech) => (
                <div key={tech} className="flex items-center justify-center text-lg font-bold text-slate-400">{tech}</div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;