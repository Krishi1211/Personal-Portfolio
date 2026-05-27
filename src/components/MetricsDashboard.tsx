import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Clock, Coffee, BrainCircuit } from 'lucide-react';

interface MetricItemProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  color: string;
  glowColor: string;
}

const MetricCard: React.FC<MetricItemProps> = ({ icon, value, suffix = "", label, color, glowColor }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 100 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="relative overflow-hidden p-6 rounded-2xl bg-gray-900/40 backdrop-blur-md border border-white/5 shadow-xl group"
    >
      {/* Dynamic Hover Glow effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`
        }}
      ></div>

      <div className="flex items-center justify-between mb-4">
        <div 
          className="p-3.5 rounded-xl border transition-all duration-300 relative z-10"
          style={{
            borderColor: `${color}30`,
            backgroundColor: `${color}10`,
            color: color,
            boxShadow: `0 0 15px ${glowColor}10`
          }}
        >
          {icon}
        </div>
        
        {/* Animated Radial SVG Progress Ring */}
        <svg className="w-10 h-10 transform -rotate-90">
          <circle 
            cx="20" 
            cy="20" 
            r="16" 
            className="stroke-gray-800" 
            strokeWidth="3.5" 
            fill="transparent" 
          />
          <motion.circle 
            cx="20" 
            cy="20" 
            r="16" 
            stroke={color} 
            strokeWidth="3.5" 
            fill="transparent" 
            strokeDasharray="100"
            initial={{ strokeDashoffset: 100 }}
            whileInView={{ strokeDashoffset: 100 - (value > 100 ? 92 : value) }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
      </div>

      <div className="relative z-10">
        <h3 className="text-3xl font-extrabold text-white tracking-tight flex items-baseline mb-1">
          {count.toLocaleString()}{suffix}
        </h3>
        <p className="text-xs font-medium text-gray-500 uppercase tracking-widest">{label}</p>
      </div>
    </motion.div>
  );
};

const MetricsDashboard: React.FC = () => {
  const metrics = [
    {
      icon: <GitBranch className="w-5 h-5" />,
      value: 1250,
      suffix: "+",
      label: "Git Commits",
      color: "#60a5fa",
      glowColor: "rgba(59, 130, 246, 0.4)"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      value: 2500,
      suffix: "+",
      label: "VS Code Hours",
      color: "#a78bfa",
      glowColor: "rgba(167, 139, 250, 0.4)"
    },
    {
      icon: <BrainCircuit className="w-5 h-5" />,
      value: 15,
      suffix: "+",
      label: "AI Models Trained",
      color: "#f472b6",
      glowColor: "rgba(244, 114, 182, 0.4)"
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      value: 450,
      suffix: "/yr",
      label: "Coffee Fuel",
      color: "#fb923c",
      glowColor: "rgba(251, 146, 60, 0.4)"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      {metrics.map((m, idx) => (
        <MetricCard key={idx} {...m} />
      ))}
    </div>
  );
};

export default MetricsDashboard;
