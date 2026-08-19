import React from 'react';
import { motion } from 'framer-motion';
import { publications } from '@/data/site-data';

const Research: React.FC = () => {
  return (
    <section id="research" className="section-shell hairline">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="eyebrow mb-3"
      >
        <span className="status-dot bg-sig-info" />
        Section / Research
      </motion.p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper">Published & ongoing</h2>
      <p className="mt-3 text-paper-dim max-w-2xl leading-relaxed">
        Applied ML work, mostly where a model's output has to hold up against
        real domain expertise — sensory science, microbiology, credibility scoring.
      </p>

      <div className="mt-10 panel divide-y divide-line">
        {publications.map((pub, i) => (
          <motion.div
            key={pub.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="px-5 sm:px-6 py-5 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 sm:gap-6"
          >
            <div>
              <h3 className="font-display font-medium text-paper">{pub.title}</h3>
              <p className="text-sm text-paper-dim mt-1.5 leading-relaxed">{pub.note}</p>
            </div>
            <span className="font-mono text-[11px] text-paper-faint sm:text-right shrink-0 sm:max-w-[200px]">
              {pub.venue}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Research;
