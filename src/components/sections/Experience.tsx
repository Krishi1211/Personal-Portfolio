import React from 'react';
import Reveal from '@/components/Reveal';
import { timeline } from '@/data/site-data';

const Experience: React.FC = () => (
  <section
    id="about"
    className="relative px-6 sm:px-12 lg:px-20 py-24 sm:py-36 bg-gradient-to-b from-transparent via-ink/60 to-transparent md:via-transparent"
  >
    <div className="max-w-5xl">
      <Reveal className="md:ml-auto md:w-[46%]">
        <p className="label mb-5">About</p>
        <h2 className="font-display text-3xl sm:text-4xl leading-tight text-gold text-balance">
          Originally from Mumbai. Now building distributed systems in Davis.
        </h2>
        <p className="mt-6 leading-relaxed text-paper-dim">
          I like the parts of a system that only get noticed when they fail: consensus
          protocols, recovery paths, the agent that catches an incident before a human
          has to. That&apos;s the thread through most of what&apos;s on this page: an
          incident-response agent swarm, a Raft-backed key-value store, a voice triage
          agent whose safety-critical decisions are deterministic on purpose.
        </p>
        <p className="mt-4 leading-relaxed text-paper-dim">
          Outside of that: I cook, I shoot around on a basketball court by myself more
          than I probably should, and I&apos;m slowly turning an NSE equity portfolio
          into an actual systematic process instead of vibes.
        </p>
      </Reveal>

      <Reveal className="mt-24 sm:mt-32">
        <h2 className="font-display text-4xl sm:text-5xl text-gold">Experience</h2>
      </Reveal>

      <div className="mt-12 grid gap-x-16 gap-y-14 sm:grid-cols-2">
        {timeline.map((item, i) => {
          const [company, extra] = item.org.split(' · ');
          return (
            <Reveal key={item.id} delay={(i % 2) * 0.08}>
              <p className="text-xs text-paper-faint tracking-wide">{item.period}</p>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl text-gold leading-tight">{company}</h3>
              <p className="mt-2 text-sm sm:text-base font-normal text-paper">
                {item.title}
                {extra ? ` · ${extra}` : ''}
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-paper-dim">{item.description}</p>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Experience;
