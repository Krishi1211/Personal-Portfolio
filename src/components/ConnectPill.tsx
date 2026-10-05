import React from 'react';
import { Mail, Sparkles } from 'lucide-react';
import { profile } from '@/data/site-data';

const ConnectPill: React.FC = () => (
  <a
    href={`mailto:${profile.email}`}
    className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-ink/80 py-2 pl-2 pr-5 text-[11px] sm:text-xs uppercase tracking-[0.22em] text-gold backdrop-blur-md transition-colors hover:bg-gold/10 hover:border-gold/50"
  >
    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line-strong bg-ink-raised">
      <Mail className="h-3.5 w-3.5" />
    </span>
    Let&apos;s connect
    <Sparkles className="h-3 w-3 opacity-80" />
  </a>
);

export default ConnectPill;
