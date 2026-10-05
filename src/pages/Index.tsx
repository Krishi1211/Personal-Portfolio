import React, { useEffect, useRef, useState } from 'react';
import Scene3D from '@/components/Scene3D';
import SideNav, { NavSection } from '@/components/SideNav';
import ConnectPill from '@/components/ConnectPill';
import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import ProjectWorlds from '@/components/sections/ProjectWorlds';
import Skills from '@/components/sections/Skills';
import Research from '@/components/sections/Research';
import Contact from '@/components/sections/Contact';
import { scrollState } from '@/lib/scroll-state';

const SECTIONS: NavSection[] = [
  { id: 'hero', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'research', label: 'research' },
  { id: 'contact', label: 'contact' },
];

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

const Index = () => {
  const [active, setActive] = useState(0);
  const dimRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const mid = window.innerHeight * 0.5;
      let idx = 0;
      let frac = 0;
      SECTIONS.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= mid) {
          idx = i;
          frac = clamp01((mid - r.top) / Math.max(r.height, 1));
        }
      });
      // Hold each scene layout for the first half of a section, then blend
      // into the next one as the reader approaches it.
      const blend = clamp01((frac - 0.55) / 0.45);
      scrollState.section = Math.min(idx + blend, SECTIONS.length - 1);
      // Dim the scene once the reader leaves the hero so body text stays legible.
      if (dimRef.current) dimRef.current.style.opacity = String(clamp01(scrollState.section) * 0.5);
      setActive((prev) => (prev === idx ? prev : idx));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="relative bg-ink text-paper">
      <Scene3D />
      {/* warm glow behind the scene */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(ellipse_at_65%_55%,hsl(var(--gold)/0.07),transparent_60%)]"
      />
      <div ref={dimRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[2] bg-ink opacity-0" />
      <SideNav sections={SECTIONS} active={active} />
      <ConnectPill />

      <main className="relative z-10">
        <Hero />
        <Experience />
        <ProjectWorlds />
        <Skills />
        <Research />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
