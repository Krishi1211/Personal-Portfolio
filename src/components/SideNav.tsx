import React from 'react';

export interface NavSection {
  id: string;
  label: string;
}

interface Props {
  sections: NavSection[];
  active: number;
}

const SideNav: React.FC<Props> = ({ sections, active }) => {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <nav
      aria-label="Sections"
      className="hidden md:flex fixed left-5 lg:left-7 top-1/2 -translate-y-1/2 z-40 flex-col items-start"
    >
      {sections.map((s, i) => {
        const isActive = i === active;
        return (
          <React.Fragment key={s.id}>
            {i > 0 && <span className="ml-[9px] h-5 w-px bg-line" aria-hidden="true" />}
            <button
              type="button"
              onClick={() => go(s.id)}
              aria-label={s.label}
              aria-current={isActive ? 'true' : undefined}
              className="group flex items-center gap-4"
            >
              <span
                className={`block rounded-full border transition-all duration-300 ${
                  isActive
                    ? 'h-[19px] w-[19px] border-gold/70 bg-gold/80 shadow-[0_0_14px_hsl(var(--gold)/0.45)]'
                    : 'h-[19px] w-[19px] border-line-strong bg-ink-raised group-hover:border-gold/50'
                }`}
              />
              <span
                className={`text-xs tracking-[0.2em] transition-opacity duration-300 ${
                  isActive ? 'text-paper-dim opacity-100' : 'text-paper-faint opacity-0 group-hover:opacity-100'
                }`}
              >
                {isActive ? String(i + 1).padStart(2, '0') : s.label}
              </span>
            </button>
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default SideNav;
