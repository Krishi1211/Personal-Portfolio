import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowUpRight, FileDown } from 'lucide-react';
import { profile, projects, sideProjects } from '@/data/site-data';

const allProjects = [...projects, ...sideProjects];
const totalCount = allProjects.length;
const shippedCount = allProjects.filter((p) => p.status === 'operational').length;
const activeCount = allProjects.filter((p) => p.status === 'active').length;

const stats = [
  { label: 'systems built', value: totalCount, cls: 'text-paper' },
  { label: 'shipped', value: shippedCount, cls: 'text-sig-ok' },
  { label: 'in progress', value: activeCount, cls: 'text-sig-warn' },
];

interface Props {
  onNavigate: (id: string) => void;
}

const HeroOverlay: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="fixed inset-0 z-30 flex items-end sm:items-center pointer-events-none">
      <div className="w-full sm:w-[56%] lg:w-[46%] h-auto sm:h-full bg-gradient-to-t sm:bg-gradient-to-r from-ink via-ink/90 sm:via-ink/85 to-transparent pt-24 sm:pt-0 flex items-end sm:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pointer-events-auto w-full px-6 sm:px-12 lg:px-16 pb-10 sm:pb-0"
        >
          <p className="eyebrow mb-5">
            <span className="status-dot bg-sig-ok animate-pulse-soft" />
            {profile.availability}
          </p>

          <h1 className="font-display font-semibold text-[14vw] sm:text-6xl lg:text-7xl text-paper leading-[0.92] text-balance">
            {profile.name}
          </h1>

          <p className="mt-5 font-display text-lg sm:text-xl text-paper-dim max-w-md leading-snug">
            <span className="bg-sig-info text-ink px-2 py-0.5 font-semibold">{profile.role}</span>{' '}
            — distributed systems, agents, infra that doesn&apos;t fall over.
          </p>

          <p className="mt-4 max-w-md text-sm text-paper-dim leading-relaxed hidden sm:block">
            MS Computer Science candidate at UC Davis. I build the parts of a
            system most people don&apos;t see until they break.
          </p>

          <div className="mt-7 flex items-end gap-7">
            {stats.map((s) => (
              <div key={s.label}>
                <p className={`font-display text-3xl sm:text-4xl font-bold leading-none ${s.cls}`}>{s.value}</p>
                <p className="mt-1.5 font-mono text-[9px] uppercase tracking-widest text-paper-faint">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 font-mono text-[10px] text-paper-faint">
            drag to look around · click a shape to explore
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => onNavigate('projects')}
              className="btn-console border-sig-info bg-sig-info text-ink font-semibold hover:bg-sig-info/85 transition-colors"
            >
              View projects <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-console border-line text-paper-dim hover:border-line-strong hover:text-paper"
            >
              <FileDown className="w-3.5 h-3.5" /> Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 border border-line text-paper-dim hover:text-paper hover:border-line-strong transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 border border-line text-paper-dim hover:text-paper hover:border-line-strong transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroOverlay;
