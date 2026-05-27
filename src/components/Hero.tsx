import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import AnimatedText from './AnimatedText';
import { Github, Linkedin, Eye, FileText, X, Download, Sparkles } from 'lucide-react';
import AITerminal from './AITerminal';

const Hero: React.FC = () => {
  const handleResumeView = () => {
    window.open('/Krishi.pdf', '_blank');
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Krishi.pdf';
    link.download = 'Krishi.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Graphic Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl tech-orb pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl tech-orb pointer-events-none"></div>
      
      {/* Sci-fi Overlay Grid */}
      <div className="absolute inset-0 tech-grid-overlay opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Copywriting */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for Summer & Fall Co-ops</span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">Krishi Shah</span>
            </motion.h1>
            
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-200 tracking-tight leading-snug"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              I craft{' '}
              <AnimatedText 
                text={[
                  "scalable full stack solutions.", 
                  "intelligent & data-driven features.", 
                  "high-performance cloud systems.",
                  "agent-powered AI platforms."
                ]} 
                className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text font-extrabold" 
              />
            </motion.h2>
            
            <motion.p 
              className="text-base text-gray-400 max-w-xl leading-relaxed font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Currently studying <span className="text-blue-400 font-semibold">MS in Computer Science at UC Davis</span>. 
              I specialize in building future-ready, high-performance web systems and integrating autonomous AI workflows.
            </motion.p>
            
            {/* Social Icons with stunning hover glows */}
            <motion.div 
              className="flex gap-4 pt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <a 
                href="https://github.com/Krishi1211" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-3 rounded-xl bg-gray-900/50 backdrop-blur-md border border-white/5 shadow-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/krishishah1211/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-3 rounded-xl bg-gray-900/50 backdrop-blur-md border border-white/5 shadow-xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(167,139,250,0.2)]"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
              </a>
              
              <a 
                href="https://x.com/KrishiS13923223?t=QwDD9PsBbAn30HcCCWlO0Q&s=09" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-3 rounded-xl bg-gray-900/50 backdrop-blur-md border border-white/5 shadow-xl transition-all duration-300 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(244,114,182,0.2)]"
              >
                <X className="w-5 h-5 text-gray-400 group-hover:text-pink-500 transition-colors duration-300" />
              </a>
            </motion.div>
            
            {/* Glassmorphic Call to Action Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 pt-4 w-full"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button asChild className="py-6 px-8 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold flex items-center gap-2 shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:shadow-[0_0_35px_rgba(59,130,246,0.45)] transition-all duration-300">
                <a href="#projects" className="flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Explore My Work
                </a>
              </Button>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="py-6 px-6 rounded-xl border-white/10 hover:border-blue-500/50 bg-white/5 hover:bg-blue-500/10 text-gray-200 hover:text-white font-bold flex items-center gap-2 transition-all duration-300"
                  onClick={handleResumeView}
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Resume
                </Button>
                
                <Button 
                  variant="outline" 
                  size="icon"
                  className="py-6 px-4 rounded-xl border-white/10 hover:border-blue-500/50 bg-white/5 hover:bg-blue-500/10 text-gray-200 hover:text-white transition-all duration-300"
                  onClick={handleResumeDownload}
                  title="Download Resume"
                >
                  <Download className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column: Embedded Interactive AI Terminal */}
          <motion.div 
            className="lg:col-span-5 w-full flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7, type: 'spring', stiffness: 80 }}
          >
            <div className="w-full max-w-md lg:max-w-none relative">
              {/* Surrounding tech graphics decoration */}
              <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-blue-500/30 rounded-tl-xl pointer-events-none"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-purple-500/30 rounded-br-xl pointer-events-none"></div>
              <AITerminal />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
