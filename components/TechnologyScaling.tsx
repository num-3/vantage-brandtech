
import React from 'react';

const TechnologyScaling: React.FC = () => {
  return (
    <div className="px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="text-xs font-mono text-white/40 mb-6">[ INFRASTRUCTURE ]</div>
          <h2 className="text-5xl font-semibold mb-8 tracking-tighter leading-none">The Foundation of <br/>Predictable Scale.</h2>
          <p className="text-lg text-white/60 leading-relaxed mb-10">
            Most brands fail to scale because their data is siloed and their AI is disconnected. We build the "BrandTech" foundations—MCP and UCP—to ensure your intelligence layer is functional, sovereign, and scalable.
          </p>
          
          <div className="mb-12 p-6 bg-[#39FF14]/5 border-l-2 border-[#39FF14]">
             <div className="text-[10px] font-mono text-[#39FF14] uppercase tracking-widest mb-2">The Business Win:</div>
             <p className="text-sm text-white/70">Reduce technical debt and operational drag by 60%, allowing your team to focus on strategy while the infrastructure handles the execution.</p>
          </div>
          
          <ul className="space-y-6">
            <li className="flex items-start gap-4 group">
              <div className="mt-1 w-2 h-2 bg-[#39FF14] shadow-[0_0_10px_#39FF14] group-hover:scale-125 transition-transform"></div>
              <div>
                <h4 className="font-semibold text-white">Universal Customer Profile (UCP)</h4>
                <p className="text-sm text-white/40">Real-time stitching of identity across all touchpoints. <span className="text-[#39FF14]/60">WIN: 1:1 Personalization.</span></p>
              </div>
            </li>
            <li className="flex items-start gap-4 group">
              <div className="mt-1 w-2 h-2 bg-white group-hover:bg-[#39FF14] transition-colors"></div>
              <div>
                <h4 className="font-semibold text-white">Geospatial Intelligence (GEO)</h4>
                <p className="text-sm text-white/40">Mapping physical presence to digital intent. <span className="text-[#39FF14]/60">WIN: Localized Domination.</span></p>
              </div>
            </li>
            <li className="flex items-start gap-4 group">
              <div className="mt-1 w-2 h-2 bg-white group-hover:bg-[#39FF14] transition-colors"></div>
              <div>
                <h4 className="font-semibold text-white">Model Control Platform (MCP)</h4>
                <p className="text-sm text-white/40">Orchestrating proprietary LLMs on your data stack. <span className="text-[#39FF14]/60">WIN: AI Sovereignty.</span></p>
              </div>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7 relative h-[600px] bg-black border border-white/10 overflow-hidden flex items-center justify-center p-8 group">
          <div className="absolute inset-0 grid-bg opacity-10"></div>
          <div className="absolute inset-0 scanner opacity-20 pointer-events-none"></div>
          
          <div className="relative w-full h-full flex items-center justify-center">
             <div className="relative w-72 h-72 border border-white/20 rotate-45 flex items-center justify-center group-hover:scale-110 transition-transform duration-1000">
                <div className="absolute inset-0 border border-white/10 scale-150 rotate-[15deg]"></div>
                <div className="absolute inset-0 border border-[#39FF14]/30 scale-[0.8] animate-pulse"></div>
                <div className="w-1/2 h-1/2 bg-white/5 flex items-center justify-center -rotate-45">
                   <div className="text-[8px] font-mono text-white/40 leading-tight">
                      SYSTEM: OPTIMIZED<br/>
                      OUTCOME: SCALE_STABLE<br/>
                      ROI_DELTA: +24%<br/>
                      NODES: 1,442
                   </div>
                </div>
                <div className="absolute top-0 left-0 -translate-x-full -translate-y-full w-32 h-[1px] bg-gradient-to-r from-transparent to-white/20 rotate-45"></div>
                <div className="absolute bottom-0 right-0 translate-x-full translate-y-full w-32 h-[1px] bg-gradient-to-l from-transparent to-white/20 rotate-45"></div>
             </div>
             
             <div className="absolute top-10 left-10 text-[10px] font-mono text-white/20 uppercase tracking-widest border-l border-white/20 pl-2">
                Compound.Growth.V4
             </div>
             <div className="absolute bottom-10 right-10 text-[10px] font-mono text-white/20 uppercase tracking-widest border-r border-white/20 pr-2">
                Scale_Operating_System
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyScaling;
