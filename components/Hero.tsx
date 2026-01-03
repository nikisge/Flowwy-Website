import React from 'react';
import { motion } from 'framer-motion';
import { Network, Bot, Zap, Database, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium tracking-wide mb-6">
            DIE AGENTUR FÜR AUTOMATISIERUNG
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Wir bauen deine <br/>
          <span className="font-accent text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200 pr-2">
            digitale Zukunft.
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Flowey entwickelt intelligente N8n Workflows und KI-Agenten für zukunftsorientierte Unternehmen. Wir sind nicht nur Entwickler, sondern dein langfristiger Partner für Skalierung.
        </motion.p>
      </div>

      {/* GitHub-Inspired Circle Concept */}
      <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] mt-8 md:mt-0 flex items-center justify-center">
        {/* Glow behind */}
        <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full" />
        
        {/* Rotating Rings */}
        <motion.div 
          className="absolute w-full h-full border border-slate-700/50 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute w-[80%] h-[80%] border border-slate-700/30 rounded-full border-dashed"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Orbiting Icons */}
        <OrbitIcon delay={0} radius="100%" duration={20}>
          <div className="p-3 bg-slate-900 border border-slate-700 rounded-xl text-orange-400 shadow-lg shadow-orange-500/20">
            <Zap size={20} />
          </div>
        </OrbitIcon>
        
        <OrbitIcon delay={5} radius="100%" duration={20}>
          <div className="p-3 bg-slate-900 border border-slate-700 rounded-xl text-blue-400 shadow-lg shadow-blue-500/20">
            <Bot size={20} />
          </div>
        </OrbitIcon>
        
        <OrbitIcon delay={10} radius="100%" duration={20}>
           <div className="p-3 bg-slate-900 border border-slate-700 rounded-xl text-purple-400 shadow-lg shadow-purple-500/20">
            <Network size={20} />
          </div>
        </OrbitIcon>
         <OrbitIcon delay={15} radius="100%" duration={20}>
           <div className="p-3 bg-slate-900 border border-slate-700 rounded-xl text-green-400 shadow-lg shadow-green-500/20">
            <Database size={20} />
          </div>
        </OrbitIcon>

        {/* Center Core */}
        <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shadow-2xl">
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-ping absolute" />
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-blue-500/20 backdrop-blur-sm flex items-center justify-center">
                 <span className="font-accent text-2xl text-white">F</span>
            </div>
        </div>
      </div>
      
       <motion.div 
        className="absolute bottom-10 flex flex-col items-center gap-2 text-slate-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span>Unser Ansatz</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
};

// Helper for orbiting elements
const OrbitIcon: React.FC<{ children: React.ReactNode, delay: number, radius: string, duration: number }> = ({ children, delay, radius, duration }) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      animate={{ rotate: 360 }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear", delay: -delay }}
    >
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ transform: `rotate(0deg)` }} // Keeps icon upright if needed, but here we let it rotate with container for simplicity or counter-rotate for upright
      >
        <motion.div 
          animate={{ rotate: -360 }} 
          transition={{ duration: duration, repeat: Infinity, ease: "linear", delay: -delay }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;