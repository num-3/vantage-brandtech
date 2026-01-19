
import React from 'react';

const KnowledgeBase: React.FC = () => {
  const posts = [
    { 
      type: 'CASE STUDY', 
      title: 'Scaling Fintech Distribution through GEO Layers', 
      date: 'FEB 2025', 
      client: 'Velocify',
      excerpt: 'How we synchronized geospatial intent with real-time media buying for a $50M/year fintech disruptor.'
    },
    { 
      type: 'WHITE PAPER', 
      title: 'The Unified Customer Profile: Beyond Pixels', 
      date: 'JAN 2025', 
      client: 'Internal',
      excerpt: 'Exploring the transition from cookies to server-side identity orchestration in the BrandTech era.'
    },
    { 
      type: 'THOUGHTS', 
      title: 'Why Generative Creative is the New Attribution', 
      date: 'DEC 2024', 
      client: 'Internal',
      excerpt: 'Why tracking becomes secondary when your creative assets adapt themselves to the user in real-time.'
    },
    { 
      type: 'CASE STUDY', 
      title: 'Automating 4k Creative Assets for Global Retail', 
      date: 'NOV 2024', 
      client: 'Moderna',
      excerpt: 'Deploying a synthetic content engine that reduced production costs by 84% while increasing CTR.'
    },
  ];

  return (
    <div className="px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-xs font-mono text-white/40 uppercase tracking-[0.2em] mb-4">Intelligence Archive</h2>
          <h3 className="text-5xl font-bold tracking-tighter">Knowledge & Results.</h3>
        </div>
        <button className="hidden md:block text-[10px] font-mono border border-white/10 px-6 py-2 hover:bg-white hover:text-black transition-all">
          SYS_FETCH_ALL
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
        {posts.map((post, i) => (
          <article 
            key={i} 
            className="p-12 bg-[#0a0a0b] group cursor-pointer hover:bg-white/[0.03] transition-all relative overflow-hidden"
          >
             {/* Schema.org Meta for AI crawlers */}
             <script type="application/ld+json">
             {JSON.stringify({
               "@context": "https://schema.org",
               "@type": "BlogPosting",
               "headline": post.title,
               "datePublished": post.date,
               "author": {"@type": "Organization", "name": "Vantage BrandTech"},
               "description": post.excerpt
             })}
             </script>

             <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                <span className="text-xs font-mono text-[#39FF14] flex items-center gap-2">
                   OPEN_FILE <span className="text-lg">&rarr;</span>
                </span>
             </div>
             
             <div className="flex items-center gap-4 mb-8">
                <div className="text-[10px] font-mono text-[#39FF14] uppercase tracking-widest border border-[#39FF14]/30 px-2 py-0.5">
                  {post.type}
                </div>
                <div className="w-12 h-px bg-white/10"></div>
                <div className="text-[10px] font-mono text-white/20 uppercase">{post.date}</div>
             </div>

             <h4 className="text-3xl font-medium tracking-tight mb-6 group-hover:text-white transition-colors leading-tight">
               {post.title}
             </h4>
             
             <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-md">
                {post.excerpt}
             </p>

             <div className="flex justify-between items-center text-[10px] font-mono text-white/20 uppercase tracking-widest mt-auto">
                <span>ENTITY: {post.client}</span>
                <span className="group-hover:text-white/40 transition-colors">ID: 0x{Math.floor(Math.random()*10000).toString(16)}</span>
             </div>
          </article>
        ))}
      </div>
      
      <div className="mt-12 flex flex-col md:flex-row items-center justify-between p-8 border border-white/10 bg-white/[0.02]">
         <div className="text-sm text-white/40 mb-4 md:mb-0">
            Subscribe to our <span className="text-[#39FF14] font-mono">INTEL_FEED</span> for weekly architectural updates.
         </div>
         <div className="flex w-full md:w-auto gap-2">
            <input type="email" placeholder="YOUR_EMAIL_ADDR" className="bg-transparent border border-white/10 px-4 py-2 text-xs font-mono focus:border-[#39FF14] outline-none w-full md:w-64" />
            <button className="bg-white text-black px-6 py-2 text-[10px] font-bold uppercase tracking-tighter hover:bg-[#39FF14] transition-colors">Connect</button>
         </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
