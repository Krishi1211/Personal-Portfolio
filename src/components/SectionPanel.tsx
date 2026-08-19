import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface Props {
  onClose: () => void;
  children: React.ReactNode;
}

const SectionPanel: React.FC<Props> = ({ onClose, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-40 flex items-start sm:items-center justify-center sm:p-6"
    >
      <div className="absolute inset-0 bg-ink/85 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.28 }}
        className="relative w-full sm:max-w-4xl h-full sm:h-auto sm:max-h-[85vh] overflow-y-auto bg-ink border border-line-strong"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="fixed sm:sticky top-3 right-3 sm:float-right sm:mr-3 sm:top-3 z-10 p-2 bg-ink-raised border border-line text-paper-dim hover:text-paper transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default SectionPanel;
