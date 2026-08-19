import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects, sideProjects, statusMeta, Project } from '@/data/site-data';

const flagship = projects.filter((p) => p.flagship);
const rest = [...projects.filter((p) => !p.flagship), ...sideProjects];

const statusBorder: Record<string, string> = {
  operational: 'border-sig-ok',
  active: 'border-sig-warn',
  archived: 'border-sig-crit',
};

const statusNumeral: Record<string, string> = {
  operational: 'text-sig-ok',
  active: 'text-sig-warn',
  archived: 'text-sig-crit',
};

const statusDot: Record<string, string> = {
  operational: 'bg-sig-ok',
  active: 'bg-sig-warn animate-pulse-soft',
  archived: 'bg-sig-crit',
};

const FeatureRow: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.45, delay: index * 0.08 }}
    className={`border-l-4 ${statusBorder[project.status]} bg-ink-raised/40 pl-6 sm:pl-8 py-6`}
  >
    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
      <span className={`font-display text-6xl sm:text-7xl font-bold leading-none shrink-0 ${statusNumeral[project.status]}`}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-paper-faint">
          <span>{project.id}</span>
          <span>·</span>
          <span className={statusNumeral[project.status]}>{statusMeta[project.status].label}</span>
        </div>
        <h3 className="mt-1 font-display text-2xl sm:text-3xl font-semibold text-paper">{project.name}</h3>
        <p className="mt-1 text-sm text-sig-info font-mono">{project.tagline}</p>
        <p className="mt-3 text-paper-dim leading-relaxed max-w-2xl">{project.description}</p>

        {project.pipeline && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {project.pipeline.map((step, i) => (
              <React.Fragment key={step}>
                <span className="px-2.5 py-1 text-xs font-mono uppercase tracking-wide border border-line text-paper-dim">
                  {step}
                </span>
                {i !== project.pipeline!.length - 1 && <span className="text-paper-faint">→</span>}
              </React.Fragment>
            ))}
          </div>
        )}

        {project.metric && (
          <p className="mt-4 text-sm text-paper-faint border-l-2 border-sig-info/50 pl-3">{project.metric}</p>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span key={tech} className="px-2 py-1 text-[10px] font-mono text-paper-dim border border-line bg-ink/40">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.article>
);

const CompactRow: React.FC<{ project: Project }> = ({ project }) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-5 sm:px-6 py-4">
    <span className={`status-dot shrink-0 ${statusDot[project.status]}`} />
    <span className="font-mono text-[10px] text-paper-faint w-14 shrink-0">{project.id}</span>
    <span className="font-display font-medium text-paper w-40 shrink-0">{project.name}</span>
    <span className="text-sm text-paper-dim flex-1 min-w-0 truncate">{project.tagline}</span>
    <div className="flex flex-wrap gap-1.5 shrink-0">
      {project.stack.slice(0, 3).map((tech) => (
        <span key={tech} className="px-1.5 py-0.5 text-[10px] font-mono text-paper-faint border border-line">
          {tech}
        </span>
      ))}
    </div>
    {(project.githubUrl || project.demoUrl) && (
      <div className="flex items-center gap-3 shrink-0">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} repo`} className="text-paper-faint hover:text-paper transition-colors">
            <Github className="w-3.5 h-3.5" />
          </a>
        )}
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} demo`} className="text-paper-faint hover:text-paper transition-colors">
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    )}
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-shell hairline">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="eyebrow mb-3"
      >
        <span className="status-dot bg-sig-info" />
        Section / Projects
      </motion.p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper">Service registry</h2>
      <p className="mt-3 text-paper-dim max-w-2xl leading-relaxed">
        Everything below is a real system I built, not a demo. Status reflects
        where each one actually is — shipped, in progress, or retired in favor
        of something better.
      </p>

      <div className="mt-12 space-y-5">
        {flagship.map((project, index) => (
          <FeatureRow key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="mt-12">
        <p className="eyebrow mb-3">
          <span className="status-dot bg-paper-faint" />
          Everything else
        </p>
        <div className="panel divide-y divide-line">
          {rest.map((project) => (
            <CompactRow key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
