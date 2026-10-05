import React from 'react';
import Reveal from '@/components/Reveal';
import { publications } from '@/data/site-data';

const Research: React.FC = () => (
  <section
    id="research"
    className="relative px-6 sm:px-12 lg:px-20 py-24 sm:py-36 bg-gradient-to-b from-transparent via-ink/60 to-transparent md:via-transparent"
  >
    <div className="max-w-5xl">
      <Reveal>
        <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-[0.22em] text-gold/90">Research</h2>
        <p className="mt-4 max-w-xl text-paper-dim">
          Applied ML work, mostly where a model&apos;s output has to hold up against real
          domain expertise: sensory science, microbiology, credibility scoring.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-x-16 gap-y-12 sm:grid-cols-2">
        {publications.map((pub, i) => (
          <Reveal key={pub.title} delay={(i % 2) * 0.08}>
            <p className="text-xs text-paper-faint tracking-wide">{pub.venue}</p>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl leading-tight text-gold">{pub.title}</h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-paper-dim">{pub.note}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Research;
