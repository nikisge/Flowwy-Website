import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Dark Noise Overlay (Optional for texture, kept simple here) */}
      <div className="absolute inset-0 bg-slate-950" />
      
      {/* Washed out Blue Orb - Top Left */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
      
      {/* Washed out Orange Orb - Bottom Right/Center */}
      <div className="absolute top-[20%] right-[-5%] w-[40vw] h-[40vw] bg-orange-600/15 rounded-full blur-[100px] mix-blend-screen" />

      {/* Deep Blue Bottom */}
      <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[40vw] bg-indigo-900/20 rounded-full blur-[140px] mix-blend-screen" />
      
      {/* Grid overlay for tech feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
    </div>
  );
};

export default Background;