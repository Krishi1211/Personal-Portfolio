import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] text-paper-faint">
        <span>© {year} Krishi Shah — built from scratch, no template.</span>
        <span className="flex items-center gap-2">
          <span className="status-dot bg-sig-ok" />
          all systems operational
        </span>
      </div>
    </footer>
  );
};

export default Footer;
