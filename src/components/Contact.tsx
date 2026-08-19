import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/site-data';

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, copyable: true },
  { icon: Github, label: 'GitHub', value: 'github.com/Krishi1211', href: profile.github, copyable: false },
  { icon: Linkedin, label: 'LinkedIn', value: 'in/krishishah1211', href: profile.linkedin, copyable: false },
];

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — the mailto link still works
    }
  };

  return (
    <section id="contact" className="section-shell hairline">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="eyebrow mb-3"
      >
        <span className="status-dot bg-sig-info" />
        Section / Contact
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-6">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper text-balance">
            Open a channel.
          </h2>
          <p className="mt-4 text-paper-dim max-w-md leading-relaxed">
            Hiring for a new-grad or intern SWE role, want to talk systems
            design, or just found a bug in this site — email is the fastest
            way to reach me. I require CPT sponsorship for US roles and I'm
            upfront about that from message one.
          </p>
        </div>

        <div className="lg:col-span-6 panel divide-y divide-line">
          {channels.map((c) => (
            <div key={c.label} className="flex items-center justify-between px-5 py-4">
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 min-w-0 group"
              >
                <c.icon className="w-4 h-4 text-sig-info shrink-0" />
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-paper-faint">{c.label}</p>
                  <p className="text-sm text-paper truncate group-hover:text-sig-info transition-colors">{c.value}</p>
                </div>
              </a>
              <div className="flex items-center gap-2 shrink-0">
                {c.copyable && (
                  <button
                    onClick={handleCopy}
                    aria-label="Copy email address"
                    className="p-2 text-paper-faint hover:text-paper transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-sig-ok" /> : <Copy className="w-4 h-4" />}
                  </button>
                )}
                <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" aria-label={`Open ${c.label}`}>
                  <ArrowUpRight className="w-4 h-4 text-paper-faint hover:text-paper transition-colors" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
