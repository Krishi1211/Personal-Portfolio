import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, X, Info, Zap, Settings, Database, Server } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  status?: string;
  statusColor?: string;
  statusGlow?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Custom detail highlights for projects
const projectSpecs: Record<number, {
  highlights: string[];
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    optimizations: string;
  }
}> = {
  1: {
    highlights: [
      "Role-based secure administrative authentication via Next-Auth",
      "Global content state management using React Context API",
      "Real-time database updates for projects and articles"
    ],
    architecture: {
      frontend: "Next.js SSR + Tailwind CSS",
      backend: "Node.js & Express.js API routes",
      database: "MongoDB Atlas",
      optimizations: "Role caching, server-side caching, responsive dashboards"
    }
  },
  2: {
    highlights: [
      "Dynamic interactive course delivery flow with modular tracking",
      "High performance GraphQL schema resolving Apollo Client queries",
      "Robust instructor-student workspace channels for direct queries"
    ],
    architecture: {
      frontend: "Angular SPA + Apollo Client",
      backend: "Node.js + GraphQL Apollo Server",
      database: "MongoDB",
      optimizations: "Optimized query fragments, JWT session authentication"
    }
  },
  3: {
    highlights: [
      "Real-time stream tracker utilizing external SpaceX REST endpoints",
      "Stateful launch status tracking, search queries, and launch caching",
      "Stunning grid filter systems rendering rucks, capsules, and dates"
    ],
    architecture: {
      frontend: "Angular SPA + TypeScript",
      backend: "SpaceX Launch API",
      database: "Local Index Caching",
      optimizations: "HTTP request caching, pipe filtering, clean layouts"
    }
  },
  4: {
    highlights: [
      "Live analytics plotting and data visualization via Recharts API",
      "Zustand state bindings syncing secure FastAPI routing",
      "Seamless data fetching structures utilizing Axios & SWR"
    ],
    architecture: {
      frontend: "React.js + Zustand + Recharts",
      backend: "Python FastAPI Core Router",
      database: "MongoDB NoSQL",
      optimizations: "SWR caching queries, clean asynchronous loaders"
    }
  },
  5: {
    highlights: [
      "Multi-modal AI orchestrator (code, audio, music, images, text)",
      "OpenAI API & LangChain models integration",
      "Secure SaaS subscription logic with Stripe Billing webhooks"
    ],
    architecture: {
      frontend: "Next.js App Router + Tailwind",
      backend: "LangChain Engine + LLM API endpoints",
      database: "PostgreSQL via Prisma ORM",
      optimizations: "Edge API functions, stripe webhook middleware, clean templates"
    }
  }
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const spec = projectSpecs[project.id] || {
    highlights: ["High-performance software workflows", "Seamless responsive layouts", "Secure APIs integration"],
    architecture: {
      frontend: "React / Next.js",
      backend: "Node.js API",
      database: "MongoDB / PostgreSQL",
      optimizations: "Clean layouts, fast loading times"
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.35,
            duration: 0.8,
            delay: index * 0.08
          }
        }}
        viewport={{ once: true, amount: 0.1 }}
        whileHover={{ y: -6 }}
        className="h-full group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <Card className="overflow-hidden transition-all duration-300 h-full flex flex-col bg-gray-950/60 border-white/5 hover:border-blue-500/30 rounded-2xl relative project-card-hover card-shadow-effect shadow-xl">
          {/* Subtle neon glowing card trail */}
          <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 rounded-2xl transition-all duration-300 blur-md scale-150 group-hover:scale-100 -z-10"></div>
          
          <div className="overflow-hidden h-48 relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Top dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent"></div>
            
            {/* Floating visual indicator tag */}
            <div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-bold text-blue-400 uppercase tracking-widest flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
              <Info className="w-3 h-3" />
              <span>Click for Details</span>
            </div>
          </div>
          
          <CardHeader className="pb-3">
            <CardTitle className="text-xl font-bold text-white flex items-center gap-2 group-hover:text-blue-400 transition-colors">
              {project.title}
              {project.statusGlow === 'in-progress' && (
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
              )}
            </CardTitle>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {project.tags.slice(0, 4).map((tag, idx) => (
                <Badge key={idx} variant="outline" className="text-[10px] py-0 px-2 bg-gray-900/60 text-blue-300 border-blue-500/10">
                  {tag}
                </Badge>
              ))}
              {project.tags.length > 4 && (
                <Badge variant="outline" className="text-[10px] py-0 px-2 bg-gray-900/60 text-gray-500 border-white/5">
                  +{project.tags.length - 4}
                </Badge>
              )}
            </div>
          </CardHeader>
          
          <CardContent className="flex-grow pb-4">
            <CardDescription className="text-xs text-gray-400 leading-relaxed font-medium line-clamp-3">
              {project.description}
            </CardDescription>
          </CardContent>
          
          <CardFooter className="flex gap-3 pt-2 pb-6 px-6" onClick={(e) => e.stopPropagation()}>
            {project.demoUrl && (
              <Button asChild className="flex-1 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold text-xs transition duration-200">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </Button>
            )}
            
            {project.githubUrl && (
              <Button asChild variant="outline" className="flex-1 py-4 rounded-xl border-white/10 hover:border-blue-500/30 bg-white/5 hover:bg-blue-500/10 text-white font-bold text-xs transition duration-200">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </Button>
            )}
          </CardFooter>
        </Card>
      </motion.div>

      {/* High-Fidelity Details Overlay Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative w-full max-w-3xl bg-gray-950 border border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.25)] rounded-2xl overflow-hidden z-10 flex flex-col font-sans"
            >
              {/* Scanline terminal screen effect on top image */}
              <div className="relative h-60 md:h-72 overflow-hidden terminal-screen-glow">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>
                
                {/* Close Button */}
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 hover:border-blue-500/40 text-gray-400 hover:text-white transition-all shadow-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-6 md:p-8 space-y-6 max-h-[50vh] md:max-h-[55vh] overflow-y-auto scrollbar-none">
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-[10px] font-bold py-0.5 px-2 bg-blue-950/30 text-blue-300 border-blue-500/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed font-medium">
                  {project.description}
                </p>

                {/* Key Features Bullet Grid */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-black uppercase text-blue-400 tracking-wider flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-blue-400" />
                    Key Capabilities & Achievements
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-400 pl-1 font-medium">
                    {spec.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-gray-900/30 p-2.5 rounded-xl border border-white/5">
                        <span className="text-blue-500 font-bold mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture Technical Specs */}
                <div className="border-t border-white/10 pt-5 space-y-4">
                  <h3 className="text-xs font-black uppercase text-purple-400 tracking-wider flex items-center gap-1.5">
                    <Settings className="w-4 h-4 text-purple-400" />
                    Technical Architecture Specifications
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-900/30 border border-white/5">
                      <Zap className="w-4 h-4 text-blue-400" />
                      <div>
                        <div className="text-gray-500 font-bold">CLIENT ORCHESTRATION</div>
                        <div className="text-gray-200">{spec.architecture.frontend}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-900/30 border border-white/5">
                      <Server className="w-4 h-4 text-purple-400" />
                      <div>
                        <div className="text-gray-500 font-bold">ROUTER / SERVICES</div>
                        <div className="text-gray-200">{spec.architecture.backend}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-900/30 border border-white/5">
                      <Database className="w-4 h-4 text-pink-400" />
                      <div>
                        <div className="text-gray-500 font-bold">PERSISTENCE SCHEMA</div>
                        <div className="text-gray-200">{spec.architecture.database}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-900/30 border border-white/5">
                      <Settings className="w-4 h-4 text-green-400" />
                      <div>
                        <div className="text-gray-500 font-bold">KEY OPTIMIZATIONS</div>
                        <div className="text-gray-200">{spec.architecture.optimizations}</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Modal Action Footer */}
              <div className="p-6 border-t border-white/5 bg-gray-950/50 flex gap-4">
                {project.demoUrl && (
                  <Button asChild className="flex-1 py-6 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg transition-all duration-300">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
                      Launch Application
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                )}
                
                {project.githubUrl && (
                  <Button asChild variant="outline" className="flex-1 py-6 rounded-xl border-white/10 hover:border-blue-500/40 bg-white/5 hover:bg-blue-500/10 text-white font-bold text-sm transition-all duration-300">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Github className="w-4 h-4" />
                      Source Repository
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
