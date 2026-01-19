
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 md:px-12 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-6 h-6 border border-[#39FF14]/50 flex items-center justify-center">
              <div className="w-3 h-3 bg-[#39FF14]"></div>
            </div>
            <span className="text-xl font-bold uppercase tracking-[0.2em]">VANTAGE</span>
          </div>
          <p className="text-white/40 text-sm max-w-sm leading-relaxed">
            The technical foundational for high-growth Scalable BrandTech. Deployed globally. Controlled centrally.
          </p>
        </div>
        
        <div>
          <h4 className="text-[10px] font-mono text-white/60 uppercase mb-6 tracking-widest">Protocol</h4>
          <ul className="space-y-4 text-xs text-white/40 font-medium font-mono uppercase">
            <li><a href="#about" className="hover:text-white transition-colors">Mission</a></li>
            <li><a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a></li>
            <li><a href="#knowledge" className="hover:text-white transition-colors">Archive</a></li>
            <li><a href="#team" className="hover:text-white transition-colors">Agents</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-mono text-white/60 uppercase mb-6 tracking-widest">Global Ops</h4>
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#39FF14] mb-1">
             <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse"></div>
             SYNC_STABLE_V4
          </div>
          <div className="text-[10px] font-mono text-white/20 uppercase mt-4">
             UPTIME: 99.998%<br/>
             NODES: 24 (ACTIVE)
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-white/10 uppercase tracking-widest">
         <span>&copy; 2025 VANTAGE BRANDTECH OPERATIVE</span>
         <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Signal</a>
            <a href="#" className="hover:text-white transition-colors">Nexus</a>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
