import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Search, Lightbulb, Cog, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Discovery & Audit",
    desc: "Wir analysieren deine aktuellen Prozesse. Wo verlierst du Zeit? Wo gibt es Datenbrüche? Wir finden das Potenzial.",
    icon: Search,
    color: "text-blue-400"
  },
  {
    id: 2,
    title: "Strategie & Konzept",
    desc: "Wir entwerfen eine maßgeschneiderte Automatisierungs-Architektur. Kein Flickenteppich, sondern ein System.",
    icon: Lightbulb,
    color: "text-orange-400"
  },
  {
    id: 3,
    title: "Entwicklung (N8n & AI)",
    desc: "Unsere Experten bauen deine Agenten und Workflows. Wir verbinden deine Tools nahtlos miteinander.",
    icon: Cog,
    color: "text-blue-400"
  },
  {
    id: 4,
    title: "Launch & Partnerschaft",
    desc: "Nach dem Go-Live bleiben wir an deiner Seite. Wir optimieren und skalieren das System, wenn du wächst.",
    icon: Rocket,
    color: "text-orange-400"
  }
];

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="process" className="py-24 px-6 relative" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            So arbeiten wir <span className="font-accent italic text-slate-400">zusammen</span>
          </h2>
          <p className="text-slate-400">Vom ersten Audit bis zur langfristigen Skalierung.</p>
        </div>

        <div className="relative">
          {/* The Connecting Line Background */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 -translate-x-1/2" />
          
          {/* The Animated Line */}
          <motion.div 
            className="absolute left-[28px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-orange-500 via-blue-500 to-orange-500 -translate-x-1/2 origin-top"
            style={{ scaleY, height: "100%" }}
          />

          <div className="flex flex-col gap-12 md:gap-24">
            {steps.map((step, index) => (
              <StepCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StepCard: React.FC<{ step: any, index: number }> = ({ step, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      className={`relative flex md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row items-start gap-8`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Icon Node */}
      <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        <step.icon size={24} className={step.color} />
      </div>

      {/* Spacer for the central line */}
      <div className="w-14 md:w-1/2 shrink-0" />

      {/* Content Card */}
      <div className="flex-1 pt-2 md:pt-0">
        <div className={`bg-white/5 border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors backdrop-blur-sm ${isEven ? 'md:text-right' : 'md:text-left'}`}>
          <div className="text-sm font-mono text-slate-500 mb-2">0{step.id}</div>
          <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
          <p className="text-slate-400 leading-relaxed text-sm md:text-base">{step.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Process;