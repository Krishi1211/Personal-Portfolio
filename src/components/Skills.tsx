import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/data/site-data';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-shell hairline">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="eyebrow mb-3"
      >
        <span className="status-dot bg-sig-info" />
        Section / Skills
      </motion.p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper">Spec sheet</h2>
      <p className="mt-3 text-paper-dim max-w-2xl leading-relaxed">
        No badge wall. Just what I actually reach for, grouped by what it&apos;s for.
      </p>

      <div className="mt-12 panel divide-y divide-line">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-6 px-5 sm:px-6 py-5"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-paper-faint pt-1">
              {group.category}
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {group.items.map((item) => (
                <span key={item} className="text-sm text-paper font-medium">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
