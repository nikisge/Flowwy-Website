import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Background from './components/Background';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-orange-500/30">
      <Background />
      <Navbar />
      
      <main className="relative z-10 flex flex-col gap-24 md:gap-32">
        <Hero />
        <Process />
        <Portfolio />
      </main>

      <Footer />
    </div>
  );
};

export default App;