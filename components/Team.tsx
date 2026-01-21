
import React from 'react';

const Team: React.FC = () => {
   const humans = [
      { name: 'Marcus Thorne', role: 'Lead Architect', bio: 'Former Data Strategy @ Scale Studio' },
      { name: 'Elena Vost', role: 'Growth Operative', bio: 'Algorithmic Distribution Expert' },
      { name: 'Julian Gray', role: 'Creative Synthesis', bio: 'Pioneer in Generative Brand Systems' }
   ];

   const agents = [
      { name: 'NEXUS-1', function: 'Data Orchestration', status: 'ACTIVE' },
      { name: 'SENTINEL', function: 'Probabilistic Attribution', status: 'ACTIVE' },
      { name: 'MUSE-V4', function: 'Creative Production', status: 'LEARNING' },
      { name: 'ATLAS', function: 'GenAI Optimisation', status: 'ACTIVE' },
      { name: 'ORACLE', function: 'Predictive Forecasting', status: 'IDLE' }
   ];

   return (
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
         <div className="mb-20">
            <h2 className="text-xs font-mono text-white/40 uppercase tracking-[0.2em] mb-4">Core Personnel</h2>
            <h3 className="text-5xl font-bold tracking-tighter">Human & Synthetic.</h3>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            {/* Humans */}
            <div>
               <h4 className="text-xs font-mono text-[#39FF14] mb-12 uppercase tracking-[0.3em]">/ HUMAN_CAPITAL</h4>
               <div className="space-y-12">
                  {humans.map((h, i) => (
                     <div key={i} className="flex gap-8 group">
                        <div className="w-16 h-16 bg-white/5 border border-white/10 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all"></div>
                        <div>
                           <h5 className="text-xl font-bold">{h.name}</h5>
                           <div className="text-[10px] font-mono text-white/40 mb-2">{h.role}</div>
                           <p className="text-sm text-white/50">{h.bio}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Agents */}
            <div>
               <h4 className="text-xs font-mono text-white/40 mb-12 uppercase tracking-[0.3em]">/ AGENT_RESOURCES</h4>
               <div className="space-y-4">
                  {agents.map((a, i) => (
                     <div key={i} className="p-6 border border-white/5 flex justify-between items-center bg-white/[0.01]">
                        <div className="flex items-center gap-4">
                           <div className={`w-2 h-2 rounded-full ${a.status === 'ACTIVE' ? 'bg-[#39FF14]' : a.status === 'LEARNING' ? 'bg-blue-400' : 'bg-white/20'}`}></div>
                           <div>
                              <div className="text-sm font-bold font-mono">{a.name}</div>
                              <div className="text-[10px] font-mono text-white/30">{a.function}</div>
                           </div>
                        </div>
                        <div className="text-[10px] font-mono text-white/20 border border-white/10 px-2 py-1">
                           STATUS_{a.status}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Trusted By / Logo Section */}
         <div className="mt-24 pt-12 border-t border-white/5">
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-8 text-center">Infrastructure Deployed At</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale mix-blend-screen">
               {/* Google */}
               <div className="text-xl font-bold tracking-tight text-white/80">Google</div>

               {/* Deloitte */}
               <div className="text-xl font-bold tracking-tight text-white/80">Deloitte.</div>

               {/* Kärcher */}
               <div className="text-xl font-bold tracking-tight text-white/80">KÄRCHER</div>
            </div>
         </div>
      </div>
   );
};

export default Team;
