import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, ExternalLink, Info } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { projects, sideProjects, statusMeta, Project } from '@/data/site-data';

const allProjects = [...projects, ...sideProjects];

const statusDot: Record<string, string> = {
  operational: 'bg-sig-ok',
  active: 'bg-sig-warn animate-pulse',
  archived: 'bg-paper-faint',
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [open, setOpen] = useState(false);
  const hasDetails = !!(project.pipeline || project.metric || project.githubUrl || project.demoUrl);

  return (
    <Reveal delay={(index % 2) * 0.08}>
      <div className="flex items-center gap-3">
        <p className="text-xs uppercase tracking-[0.28em] text-paper-faint">
          Project {String(index + 1).padStart(2, '0')}
        </p>
        <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-paper-faint">
          <span className={`status-dot ${statusDot[project.status]}`} />
          {statusMeta[project.status].label}
        </span>
      </div>

      <h3 className="mt-3 font-cinzel text-2xl sm:text-[1.7rem] font-semibold uppercase leading-tight text-gold">
        {project.name}
      </h3>
      <p className="mt-2 text-sm text-paper">{project.tagline}</p>
      <p className="mt-3 text-sm sm:text-base leading-relaxed text-paper-dim">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>

      {hasDetails && (
        <button type="button" onClick={() => setOpen((v) => !v)} className="pill mt-6" aria-expanded={open}>
          <Info className="w-3.5 h-3.5" />
          {open ? 'Hide details' : 'Project details'}
        </button>
      )}

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-5 rounded-2xl border border-line bg-ink-raised/60 p-5 backdrop-blur-sm">
              {project.pipeline && (
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em] text-gold/80">
                  {project.pipeline.map((step, i) => (
                    <React.Fragment key={step}>
                      <span>{step}</span>
                      {i !== project.pipeline!.length - 1 && <span className="text-paper-faint">/</span>}
                    </React.Fragment>
                  ))}
                </div>
              )}
              {project.metric && (
                <p className={`text-sm text-paper-dim ${project.pipeline ? 'mt-4' : ''}`}>{project.metric}</p>
              )}
              {(project.githubUrl || project.demoUrl) && (
                <div className={`flex items-center gap-5 ${project.pipeline || project.metric ? 'mt-4' : ''}`}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gold hover:text-paper transition-colors"
                    >
                      <Github className="w-4 h-4" /> Repo
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gold hover:text-paper transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  );
};

const ProjectWorlds: React.FC = () => (
  <section
    id="projects"
    className="relative px-6 sm:px-12 lg:px-20 py-24 sm:py-36 bg-gradient-to-b from-transparent via-ink/60 to-transparent md:via-transparent"
  >
    <div className="max-w-5xl">
      <Reveal>
        <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-[0.22em] text-gold/90">Project Worlds</h2>
        <p className="mt-4 max-w-xl text-paper-dim">
          Everything here is a real system I built, not a demo. Status shows where each one
          actually is: shipped, in progress, or retired in favor of something better.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-x-16 gap-y-20 sm:grid-cols-2">
        {allProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectWorlds;
