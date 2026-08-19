import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import { timeline } from '@/data/site-data';

const About: React.FC = () => {
  return (
    <section id="about" className="section-shell hairline">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="eyebrow mb-3"
      >
        <span className="status-dot bg-sig-info" />
        Section / About
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper text-balance">
            Originally from Mumbai. Now building distributed systems in Davis.
          </h2>
          <p className="mt-5 text-paper-dim leading-relaxed">
            I like the parts of a system that only get noticed when they fail —
            consensus protocols, recovery paths, the agent that catches an
            incident before a human has to. That's the thread through most of
            what's on this page: an incident-response agent swarm, a
            Raft-backed key-value store, a voice triage agent whose safety-critical
            decisions are deterministic on purpose.
          </p>
          <p className="mt-4 text-paper-dim leading-relaxed">
            Outside of that: I cook, I shoot around on a basketball court by
            myself more than I probably should, and I'm slowly turning an NSE
            equity portfolio into an actual systematic process instead of
            vibes.
          </p>
        </div>

        <div className="lg:col-span-7">
          <ul className="space-y-0">
            {timeline.map((item, i) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className={`flex gap-4 py-5 ${i !== timeline.length - 1 ? 'border-b border-line/70' : ''}`}
              >
                <div className="shrink-0 pt-1">
                  {item.type === 'education' ? (
                    <GraduationCap className="w-4 h-4 text-sig-info" />
                  ) : (
                    <Briefcase className="w-4 h-4 text-sig-warn" />
                  )}
                </div>
                <div>
                  <p className="font-mono text-[11px] text-paper-faint tracking-wide">{item.period}</p>
                  <h3 className="font-display font-medium text-paper mt-1">{item.title}</h3>
                  <p className="text-sm text-sig-info font-mono mt-0.5">{item.org}</p>
                  <p className="text-sm text-paper-dim leading-relaxed mt-2">{item.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
