import React from 'react';
import Reveal from '@/components/Reveal';
import { skills } from '@/data/site-data';

const Skills: React.FC = () => (
  <section
    id="skills"
    className="relative px-6 sm:px-12 lg:px-20 py-24 sm:py-36 bg-gradient-to-b from-transparent via-ink/60 to-transparent md:via-transparent"
  >
    <div className="max-w-5xl">
      <Reveal>
        <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-[0.22em] text-gold/90">Skills</h2>
        <p className="mt-4 max-w-xl text-paper-dim">
          No badge wall. Just what I actually reach for, grouped by what it&apos;s for.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-x-16 gap-y-12 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={(i % 2) * 0.08}>
            <h3 className="font-display text-2xl sm:text-3xl text-gold">{group.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
