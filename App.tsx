
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import TechnologyScaling from './components/TechnologyScaling';
import CreativeSynthesis from './components/CreativeSynthesis';
import About from './components/About';
import KnowledgeBase from './components/KnowledgeBase';
import Team from './components/Team';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#39FF14] selection:text-black overflow-x-hidden">
      {/* Notebook Grid Layer */}
      <div className="fixed inset-0 dot-grid pointer-events-none z-0"></div>

      {/* Scanning Line Overlay */}
      <div className="fixed inset-0 scanning-line pointer-events-none z-1"></div>

      <Navbar />

      <main className="relative z-10">
        <section id="hero">
          <Hero />
        </section>

        <section id="about" className="py-32 border-y border-white/5 bg-black/40">
          <About />
        </section>

        <section id="capabilities" className="py-32">
          <Capabilities />
        </section>

        <section id="technology" className="py-32 border-y border-white/5 bg-white/[0.01]">
          <TechnologyScaling />
        </section>

        <section id="creative" className="py-32">
          <CreativeSynthesis />
        </section>

        <section id="knowledge" className="py-32 border-t border-white/5 bg-black/80">
          <KnowledgeBase />
        </section>

        <section id="team" className="py-32 border-t border-white/5">
          <Team />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
