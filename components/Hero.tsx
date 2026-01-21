
import React from 'react';
import FlowVisual from './FlowVisual';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center pt-20">
      {/* Structural "Foundry" Lines */}
      <div className="absolute top-0 left-[5%] bottom-0 w-px bg-white/5 hidden lg:block"></div>
      <div className="absolute top-0 right-[5%] bottom-0 w-px bg-white/5 hidden lg:block"></div>
      <div className="absolute top-[20%] left-0 right-0 h-px bg-white/5"></div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Value-Driven Title Block */}
          <div className="lg:col-span-7 pt-12">
            <div className="flex items-center gap-6 mb-10">
              <div className="inline-flex items-center gap-3 px-3 py-1 border border-[#39FF14]/20 bg-[#39FF14]/5">
                <span className="w-1.5 h-1.5 bg-[#39FF14] animate-pulse"></span>
                <span className="text-[9px] font-mono tracking-[0.3em] text-[#39FF14] uppercase">Protocol V4.1 // DEPLOYED</span>
              </div>
              <div className="hidden sm:block h-px w-24 bg-white/10"></div>
              <span className="text-[9px] font-mono text-white/20 tracking-widest uppercase">[ SOVEREIGN_GROWTH_SYSTEM ]</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[5.5rem] font-bold tracking-tighter leading-[0.9] mb-8">
              Sovereign Growth <br />
              <span className="text-white/30 italic font-light">Infrastructure.</span>
            </h1>

            <div className="max-w-xl space-y-8">
              <p className="text-lg md:text-2xl text-white/60 leading-tight font-medium">
                Decouple your brand's growth from human bandwidth.
                <span className="text-white"> Scale efficiency by 10x</span> by deploying institutional-grade Data, AI, and Creative infrastructure.
              </p>

              <div className="flex flex-wrap gap-6 items-center pt-4">
                <button className="relative group overflow-hidden bg-white text-black px-12 py-5 text-[11px] font-bold tracking-[0.2em] uppercase transition-all hover:bg-[#39FF14]">
                  <span className="relative z-10">Book Meeting</span>
                </button>
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em]">Efficiency Report</span>
                  <a href="#" className="text-[11px] font-mono text-white/60 hover:text-white transition-colors border-b border-white/10 pb-1">Request Quote</a>
                </div>
              </div>
            </div>

            {/* Direct Win / Business Outcomes */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 border-t border-white/5 pt-12 max-w-2xl">
              <div>
                <div className="text-[10px] font-mono text-[#39FF14] mb-2 tracking-widest uppercase">/ OP_EFFICIENCY</div>
                <div className="text-3xl font-bold tracking-tighter text-white">84%<span className="text-white/20 text-xl ml-1">Reduction</span></div>
                <div className="text-[9px] font-mono text-white/20 mt-1 uppercase">In production overhead</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#39FF14] mb-2 tracking-widest uppercase">/ SCALE_VELOCITY</div>
                <div className="text-3xl font-bold tracking-tighter text-white">12h<span className="text-white/20 text-xl ml-1">Sync</span></div>
                <div className="text-[9px] font-mono text-white/20 mt-1 uppercase">Global node deployment</div>
              </div>
              <div className="hidden md:block">
                <div className="text-[10px] font-mono text-[#39FF14] mb-2 tracking-widest uppercase">/ DATA_PRECISION</div>
                <div className="text-3xl font-bold tracking-tighter text-white">100%<span className="text-white/20 text-xl ml-1">Sovereign</span></div>
                <div className="text-[9px] font-mono text-white/20 mt-1 uppercase">Zero-party data control</div>
              </div>
            </div>
          </div>

          {/* Right Visual Side */}
          <div className="lg:col-span-5 relative z-20 mt-12 lg:mt-0">
            <div className="relative flex justify-center w-full">
              <div className="w-full max-w-[500px]">
                <FlowVisual />
              </div>
            </div>

            {/* Floating Telemetry Data */}
            <div className="mt-8 lg:mt-0 lg:absolute lg:-bottom-24 lg:-right-12 glass-panel p-6 w-full lg:w-80 space-y-4 bg-black/50 backdrop-blur-xl">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-[9px] font-mono text-white/30 tracking-widest uppercase">Growth Engine</span>
                <span className="text-[9px] font-mono text-[#39FF14] tracking-widest uppercase">OPTIMIZING</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[8px] font-mono text-white/20 mb-1">ROI_COEFFICIENT</div>
                  <div className="text-sm font-mono font-bold tracking-tighter">14.2x</div>
                </div>
                <div>
                  <div className="text-[8px] font-mono text-white/20 mb-1">LTV_DELTA</div>
                  <div className="text-sm font-mono font-bold tracking-tighter">+242%</div>
                </div>
              </div>
              <div className="h-10 w-full bg-white/5 relative overflow-hidden flex items-end gap-[2px] p-1">
                {[...Array(30)].map((_, i) => (
                  <div key={i} className="flex-1 bg-white/20 group-hover:bg-[#39FF14]/40 transition-colors" style={{ height: `${20 + Math.random() * 80}%` }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Interface */}
      <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end border-t border-white/5 pt-8 pointer-events-none">
        <div className="flex gap-12 pointer-events-auto">
          <div className="flex flex-col gap-1">
            <span className="text-[8px] font-mono text-white/20 tracking-widest uppercase">Infrastructure ID</span>
            <span className="text-[10px] font-mono text-white/60 uppercase">VNTG_D_AI_B_04</span>
          </div>
          <div className="hidden sm:flex flex-col gap-1">
            <span className="text-[8px] font-mono text-white/20 tracking-widest uppercase">Core Vertical</span>
            <span className="text-[10px] font-mono text-white/60 uppercase">Scalable BrandTech</span>
          </div>
        </div>
        <div className="hidden lg:block text-right">
          <div className="text-[8px] font-mono text-white/20 tracking-widest uppercase mb-2">Live Node Sync</div>
          <div className="text-[10px] font-mono text-[#39FF14] flex items-center gap-3 justify-end">
            <span className="w-1 h-1 bg-[#39FF14] rounded-full animate-pulse"></span>
            LATENCY: 0.001ms
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
