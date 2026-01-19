
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-xs font-mono text-[#39FF14] uppercase tracking-[0.3em] mb-6">/ MISSION_STATEMENT</h2>
          <h3 className="text-5xl font-bold tracking-tighter leading-tight mb-8">
            Decoupling growth <br/>from human bandwidth.
          </h3>
        </div>
        <div className="flex flex-col space-y-8">
           <p className="text-xl text-white/60 font-light leading-relaxed">
             Vantage was founded to solve the scalability crisis in modern brand building. As consumer touchpoints fragment, traditional agencies fail to maintain consistency and efficiency.
           </p>
           <p className="text-lg text-white/40 leading-relaxed">
             We operate as a technical partner, deploying "Scalable BrandTech" frameworks that allow brands to automate data attribution, generate creative at scale, and orchestrate complex distribution networks through a unified intelligence layer.
           </p>
           <div className="pt-6 grid grid-cols-2 gap-8 border-t border-white/10">
              <div>
                 <div className="text-3xl font-bold text-white mb-2">1.2B+</div>
                 <div className="text-[10px] font-mono text-white/30 uppercase">Data Points Orchestrated</div>
              </div>
              <div>
                 <div className="text-3xl font-bold text-white mb-2">$400M</div>
                 <div className="text-[10px] font-mono text-white/30 uppercase">Annual Spend Optimized</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
