
import React from 'react';

const StackCard = ({ index, title, description, tags, win }: { index: string, title: string, description: string, tags: string[], win: string }) => (
  <div className="relative group border border-white/5 bg-white/[0.01] p-10 hover:border-[#39FF14]/30 hover:bg-white/[0.02] transition-all flex flex-col h-full">
    <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-white/10 group-hover:text-[#39FF14]/40 uppercase tracking-widest">
      {Math.floor(Math.random() * 1000).toString(16).toUpperCase()} // NODE
    </div>
    <div className="text-[10px] font-mono text-[#39FF14] mb-8 tracking-[0.3em] uppercase">{index}</div>
    <h3 className="text-3xl font-bold tracking-tighter mb-4 group-hover:translate-x-2 transition-transform">{title}</h3>
    <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-[260px]">
      {description}
    </p>
    
    <div className="mt-auto pt-8 border-t border-white/5">
      <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-4">The Win:</div>
      <div className="text-sm font-bold text-white mb-6 leading-snug">
        {win}
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span key={i} className="text-[8px] font-mono px-2 py-1 border border-white/10 text-white/20 uppercase tracking-widest group-hover:border-white/20 group-hover:text-white/40">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Capabilities: React.FC = () => {
  return (
    <div className="px-6 lg:px-24 max-w-[1400px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
        <div className="max-w-2xl">
          <div className="text-[10px] font-mono text-[#39FF14] mb-4 tracking-[0.4em] uppercase">Operational Foundations</div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
            Scale Without <br/><span className="text-white/20 italic">Human Limits.</span>
          </h2>
        </div>
        <div className="text-sm font-mono text-white/30 uppercase tracking-[0.2em] border-l border-[#39FF14]/20 pl-6 py-2">
          De-siloing data.<br/>
          Scaling intelligence.<br/>
          Automating impact.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
        <StackCard 
          index="[ INFRASTRUCTURE ]"
          title="Data Layers"
          description="Unified customer profiles and technical data warehouses for real-time visibility."
          win="Eliminate data silos and gain 100% attribution accuracy across all channels."
          tags={['MCP', 'UCP', 'Snowflake', 'DWH']}
        />
        <StackCard 
          index="[ DISTRIBUTION ]"
          title="Algorithmic Ads"
          description="Precision-engineered media buying powered by proprietary MMM and AI attribution."
          win="Lower Customer Acquisition Cost (CAC) by 40% through automated audience mapping."
          tags={['Meta', 'TikTok', 'Google', 'MMM']}
        />
        <StackCard 
          index="[ SYNTHESIS ]"
          title="AI Creative"
          description="High-fidelity visual systems that generate and optimize assets based on performance signals."
          win="Reduce production costs by 80% while generating 10,000+ localized assets weekly."
          tags={['Video.AI', 'Image.Gen', 'UI/UX']}
        />
        <StackCard 
          index="[ INTELLIGENCE ]"
          title="Scale Strategy"
          description="High-fidelity roadmaps for institutional AI integration and growth design."
          win="A definitive architecture to scale from $10M to $100M+ with zero headcount growth."
          tags={['Roadmaps', 'Audit', 'Growth', 'LTV']}
        />
      </div>
    </div>
  );
};

export default Capabilities;
