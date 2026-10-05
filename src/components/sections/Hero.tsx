import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { profile } from '@/data/site-data';

const Hero: React.FC = () => (
  <section id="hero" className="relative min-h-dvh flex items-center px-6 sm:px-12 lg:px-20 pt-24 pb-28">
    <div className="max-w-xl">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="label mb-10 sm:mb-14"
      >
        {profile.location}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="font-display font-semibold uppercase text-gold leading-[0.88] text-[18vw] sm:text-8xl lg:text-[9.5rem]"
      >
        Krishi
        <br />
        Shah
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-8"
      >
        <a href={`mailto:${profile.email}`} className="pill">
          Hire me
        </a>

        <p className="mt-8 text-base sm:text-lg text-paper-dim">
          {profile.role} / Distributed Systems / Agents
        </p>

        <p className="mt-5 max-w-md text-sm sm:text-base leading-relaxed text-paper-dim/90">
          MS Computer Science candidate at UC Davis. I build the parts of a system most
          people don&apos;t see until they break: consensus, recovery, observability, and
          the agents that watch over all three.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-7 inline-flex items-center gap-3 font-display text-xl sm:text-2xl text-gold hover:text-paper transition-colors"
        >
          <Mail className="w-4 h-4" />
          {profile.email}
        </a>

        <p className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-paper-faint">
          <span className="status-dot bg-sig-ok" />
          {profile.availability}
        </p>
      </motion.div>
    </div>
  </section>
);

export default Hero;
