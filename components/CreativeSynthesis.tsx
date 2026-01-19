
import React from 'react';

const CreativeSynthesis: React.FC = () => {
  return (
    <div className="px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col space-y-20">
        <div className="max-w-3xl">
          <h2 className="text-xs font-mono text-white/40 uppercase tracking-[0.2em] mb-4">Algorithmic Aesthetics</h2>
          <h3 className="text-6xl font-bold tracking-tighter">Creative <span className="text-white/40">Synthesis</span>.</h3>
          <p className="mt-8 text-xl text-white/60 leading-relaxed font-light">
            We replace manual content production with generative pipelines. 
            <span className="text-white"> Produce more, spend less, and convert better</span> with creative that adapts to your performance data in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: 'Synthetic Video', desc: 'Custom trained models for dynamic ad-creative generation.', win: '-92% Cost per Video', label: '01' },
             { title: 'Generative Design', desc: 'Landing pages that reconfigure based on user intent signals.', win: '+44% Conversion Rate', label: '02' },
             { title: 'Neural Brand Kits', desc: 'Brand systems built to evolve through AI-assisted iteration.', win: 'Infinite Consistency', label: '03' }
           ].map((item, i) => (
             <div key={i} className="p-10 border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-[#39FF14]/30 transition-all cursor-crosshair flex flex-col h-full group">
                <div className="text-xs font-mono text-white/30 mb-12">SYNTH_{item.label}</div>
                <h4 className="text-2xl font-semibold mb-4">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed mb-10">{item.desc}</p>
                <div className="mt-auto">
                  <div className="text-[10px] font-mono text-[#39FF14] uppercase tracking-widest mb-2 opacity-60 group-hover:opacity-100 transition-opacity">The Win:</div>
                  <div className="text-lg font-bold text-white tracking-tight">{item.win}</div>
                </div>
                <div className="mt-8 h-[2px] w-12 bg-[#39FF14]"></div>
             </div>
           ))}
        </div>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between p-12 bg-white/[0.02] border border-white/5">
           <div className="text-sm font-mono text-white/40 uppercase tracking-widest">
              Join the alpha program for sovereign brand intelligence
           </div>
           <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="INPUT_EMAIL" 
                className="bg-transparent border border-white/20 px-6 py-4 text-sm font-mono focus:outline-none focus:border-[#39FF14] transition-all w-64 text-white"
              />
              <button className="bg-white text-black px-10 py-4 text-[11px] font-bold uppercase tracking-wider hover:bg-[#39FF14] transition-all">
                Access_OS
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeSynthesis;
