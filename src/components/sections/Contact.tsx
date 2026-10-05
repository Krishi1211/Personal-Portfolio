import React, { useState } from 'react';
import { Check, Copy, FileDown, Github, Linkedin, Mail } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { profile } from '@/data/site-data';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable: the mailto link still works
    }
  };

  return (
    <section
      id="contact"
      className="relative px-6 sm:px-12 lg:px-20 pt-24 sm:pt-36 pb-32 bg-gradient-to-b from-transparent via-ink/60 to-transparent md:via-transparent"
    >
      <div className="max-w-5xl">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-6xl text-gold">Get in touch</h2>
          <p className="mt-6 max-w-lg leading-relaxed text-paper-dim">
            Hiring for a new-grad or intern SWE role, want to talk systems design, or just
            found a bug in this site? Email is the fastest way to reach me. I require CPT
            sponsorship for US roles and I&apos;m upfront about that from message one.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center gap-3">
          <a href={`mailto:${profile.email}`} className="pill">
            <Mail className="w-3.5 h-3.5" />
            Send message
          </a>
          <button type="button" onClick={copyEmail} className="pill" aria-label="Copy email address">
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied' : profile.email}
          </button>
        </Reveal>

        <Reveal delay={0.15} className="mt-4 flex flex-wrap items-center gap-3">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="pill">
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="pill">
            <Linkedin className="w-3.5 h-3.5" />
            LinkedIn
          </a>
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="pill">
            <FileDown className="w-3.5 h-3.5" />
            Resume
          </a>
        </Reveal>

        <p className="mt-24 text-xs tracking-[0.2em] uppercase text-paper-faint">
          © {new Date().getFullYear()} Krishi Shah
        </p>
      </div>
    </section>
  );
};

export default Contact;
