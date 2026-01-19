
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-xl bg-black/40 border-b border-white/5">
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="w-7 h-7 flex items-center justify-center border border-[#39FF14]/50 group-hover:border-[#39FF14] transition-all">
          <div className="w-3 h-3 bg-[#39FF14] group-hover:scale-125 transition-transform"></div>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-xl font-bold tracking-[0.2em] uppercase">VANTAGE</span>
          <span className="text-[7px] font-mono text-white/30 tracking-[0.4em] uppercase">BrandTech System</span>
        </div>
      </div>
      
      <div className="hidden lg:flex items-center space-x-10 text-[10px] font-mono tracking-widest uppercase text-white/40">
        <div className="relative group">
          <a href="#about" className="hover:text-white transition-colors py-2 flex items-center gap-1">
            01_About
          </a>
        </div>
        <div className="relative group">
          <a href="#capabilities" className="hover:text-white transition-colors py-2 flex items-center gap-1">
            02_Solutions
          </a>
        </div>
        <div className="relative group">
          <a href="#technology" className="hover:text-white transition-colors py-2 flex items-center gap-1">
            03_Architecture
          </a>
        </div>
        <div className="relative group">
          <a href="#knowledge" className="hover:text-white transition-colors py-2 flex items-center gap-1">
            04_Archive
          </a>
        </div>
        <div className="relative group">
          <a href="#team" className="hover:text-white transition-colors py-2 flex items-center gap-1">
            05_Personnel
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex flex-col text-right mr-4 border-r border-white/10 pr-4">
          <span className="text-[8px] font-mono text-[#39FF14]">SYS: ONLINE</span>
          <span className="text-[8px] font-mono text-white/20">V4.1.0_STABLE</span>
        </div>
        <button className="text-[10px] font-mono border border-white/10 px-6 py-2 hover:border-[#39FF14]/50 transition-all text-white/40 hover:text-white bg-white/5">
          INITIALIZE_SYS
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
