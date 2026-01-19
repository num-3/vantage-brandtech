
import React from 'react';

const FlowVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[440px] aspect-square">
      {/* Decorative Outer Rings */}
      <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_60s_linear_infinite]"></div>
      <div className="absolute inset-[15%] rounded-full border border-white/10 border-dashed animate-[spin_40s_linear_infinite_reverse]"></div>
      
      <svg viewBox="0 0 500 500" className="w-full h-full relative z-10 filter drop-shadow-[0_0_20px_rgba(57,255,20,0.1)]">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Technical Axis Lines */}
        <line x1="250" y1="0" x2="250" y2="500" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
        <line x1="0" y1="250" x2="500" y2="250" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />

        {/* Central Engine - VANTAGE CORE */}
        <g className="core group">
          <circle cx="250" cy="250" r="50" fill="#070708" stroke="#39FF14" strokeWidth="1.5" className="animate-pulse" />
          <circle cx="250" cy="250" r="45" fill="none" stroke="#39FF14" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="4 2" className="animate-[spin_10s_linear_infinite]" />
          <text x="250" y="255" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="JetBrains Mono" className="tracking-widest">VNTG.SYS</text>
        </g>

        {/* Node 1: MCP (Model Control Platform) - Top */}
        <g className="node" transform="translate(250, 80)">
          <rect x="-40" y="-30" width="80" height="60" fill="#070708" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
          {/* MCP Logo Abstract */}
          <path d="M-10,-10 L10,-10 L0,10 Z" fill="none" stroke="#39FF14" strokeWidth="1" />
          <circle cx="0" cy="0" r="15" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
          <text y="42" textAnchor="middle" fill="white" fontSize="7" fontFamily="JetBrains Mono" className="uppercase opacity-40">MCP Layer</text>
        </g>

        {/* Node 2: UCP (Universal Content Platform) - Right */}
        <g className="node" transform="translate(420, 250)">
          <rect x="-40" y="-30" width="80" height="60" fill="#070708" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
          {/* UCP Logo Abstract */}
          <circle cx="-5" cy="-5" r="5" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="5" cy="5" r="5" fill="none" stroke="#39FF14" strokeWidth="1" />
          <text y="42" textAnchor="middle" fill="white" fontSize="7" fontFamily="JetBrains Mono" className="uppercase opacity-40">UCP Fabric</text>
        </g>

        {/* Node 3: BRAND ENGINE - Bottom */}
        <g className="node" transform="translate(250, 420)">
          <rect x="-40" y="-30" width="80" height="60" fill="#070708" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
          {/* Brand Logo Abstract */}
          <rect x="-8" y="-8" width="16" height="16" fill="none" stroke="#39FF14" strokeWidth="1" />
          <rect x="-4" y="-4" width="8" height="8" fill="white" fillOpacity="0.2" />
          <text y="42" textAnchor="middle" fill="white" fontSize="7" fontFamily="JetBrains Mono" className="uppercase opacity-40">Brand.AI</text>
        </g>

        {/* Node 4: GEO ENGINE - Left */}
        <g className="node" transform="translate(80, 250)">
          <rect x="-40" y="-30" width="80" height="60" fill="#070708" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
          {/* GEO Logo Abstract */}
          <circle cx="0" cy="0" r="8" fill="none" stroke="white" strokeWidth="1" />
          <line x1="-12" y1="0" x2="12" y2="0" stroke="#39FF14" strokeWidth="0.5" />
          <line x1="0" y1="-12" x2="0" y2="12" stroke="#39FF14" strokeWidth="0.5" />
          <text y="42" textAnchor="middle" fill="white" fontSize="7" fontFamily="JetBrains Mono" className="uppercase opacity-40">GEO.OS</text>
        </g>

        {/* Connection Lines (Flowing) */}
        <path d="M250,140 L250,200" stroke="#39FF14" strokeWidth="1" strokeDasharray="4 2" className="flow-line" />
        <path d="M370,250 L300,250" stroke="white" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 2" className="flow-line" />
        <path d="M250,370 L250,300" stroke="white" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 2" className="flow-line" />
        <path d="M130,250 L200,250" stroke="white" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 2" className="flow-line" />
      </svg>
    </div>
  );
};

export default FlowVisual;
