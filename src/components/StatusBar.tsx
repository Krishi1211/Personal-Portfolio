import React, { useEffect, useState } from 'react';
import { profile } from '@/data/site-data';

const NAV_LINKS = [
  { id: 'about', label: 'about' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'research', label: 'research' },
  { id: 'contact', label: 'contact' },
];

interface Props {
  onNavigate: (id: string) => void;
  onHome: () => void;
}

const StatusBar: React.FC<Props> = ({ onNavigate, onHome }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const str = now.toLocaleTimeString('en-US', {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      setTime(str);
    };
    update();
    const t = setInterval(update, 15000);
    return () => clearInterval(t);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-line bg-ink/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-11 flex items-center justify-between font-mono text-[11px] tracking-wide">
        <div className="flex items-center gap-4 min-w-0">
          <button onClick={onHome} className="flex items-center gap-2 shrink-0 text-paper hover:text-sig-info transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-sig-ok" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sig-ok" />
            </span>
            <span className="font-semibold hidden sm:inline">krishi.dev</span>
          </button>
          <span className="hidden md:inline text-paper-faint">/</span>
          <span className="hidden md:inline text-paper-dim truncate">{profile.availability}</span>
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-paper-dim">
          {NAV_LINKS.map((link) => (
            <button key={link.id} onClick={() => onNavigate(link.id)} className="hover:text-sig-info transition-colors">
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-paper-faint shrink-0">
          <span className="hidden sm:inline">{profile.location.toUpperCase()}</span>
          <span className="hidden sm:inline text-line-strong">|</span>
          <span tabular-nums="true">{time} PT</span>
        </div>
      </div>
    </header>
  );
};

export default StatusBar;
