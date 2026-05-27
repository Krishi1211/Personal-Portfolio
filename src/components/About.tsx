import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from 'framer-motion';
import MetricsDashboard from './MetricsDashboard';
import { GraduationCap, Briefcase, Award, ArrowUpRight, Sparkles } from 'lucide-react';

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  type: 'education' | 'experience';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "August 2025 – Present",
    title: "Masters of Science in Computer Science, University of California, Davis",
    description: `Studying Data Structures & Algorithms, Machine Learning, Artificial Intelligence, Cloud Computing, Database Systems, Software Engineering, Computer Networks`,
    type: "education"
  },
  {
    id: 2,
    year: "August 2023 – June 2024",
    title: "Junior Next JS Developer, Kenmark Itan Solutions",
    description: `Orchestrated the development of a Next.js application that served 5+ backend APIs, delivered 2 new features in the first 3 months, and enhanced user engagement through an immersive streaming experience. Created and deployed 3+ travel partner websites using Next.js, React, Node.js, and MongoDB, implementing CI/CD pipelines on cloud platforms that reduced deployment time by 40% and improved site reliability and scalability.`,
    type: "experience"
  },
  {
    id: 3,
    year: "Apr. 2023 – May. 2024",
    title: "Student Trainee, JP Morgan Chase & Co",
    description: `Implemented AI/ML predictive models and automation workflows, improving efficiency in financial services by 15% following Agile methodologies. Analyzed 5+ web applications using React.js and Python, collaborating with cross-functional teams to deliver scalable solutions.`,
    type: "experience"
  },
  {
    id: 4,
    year: "2021 - 2025",
    title: "Bachelors in Computer Engineering, Dwarkadas J. Sanghvi College of Engineering",
    description: "Studied Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Artificial Intelligence, Web Development, Software Engineering",
    type: "education"
  }
];

const About = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education'>('all');

  const filteredTimeline = timelineData.filter(item => 
    activeTab === 'all' ? true : item.type === activeTab
  );

  return (
    <section id="about" className="section-container relative py-24">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="section-title">About & Experience</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-2">
          An overview of my academic trajectory, professional experience, and raw production achievements.
        </p>
      </div>

      {/* Developer Metrics Dashboard (Top of Section) */}
      <div className="mb-20 relative z-10">
        <MetricsDashboard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        {/* Left Column: Bio & Certifications */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="glass-card rounded-2xl border-white/5 bg-gray-900/20 backdrop-blur-md overflow-hidden relative group">
            {/* Fine ambient card border light */}
            <div className="absolute inset-0 border border-blue-500/10 rounded-2xl group-hover:border-blue-500/30 transition-colors duration-500"></div>

            <CardContent className="p-8 space-y-6 relative z-10">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                Who I Am
              </h3>
              
              <p className="text-gray-300 leading-relaxed text-sm">
                I'm a <span className="font-semibold text-blue-400">full stack engineer</span> specializing in building intelligent, agent-powered software and high-performance web systems.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-sm">
                With a robust mastery of both frontend and backend architectures, I design seamless, responsive user experiences supported by scalable cloud services and optimal schemas.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-sm">
                Currently, I'm pursuing my <span className="font-semibold text-blue-400">Master's at UC Davis</span> to delve deeper into machine learning, large language models, and cloud-scale infrastructures.
              </p>

              <div className="border-t border-white/10 pt-6">
                <h4 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-400" />
                  Credentials & Certs
                </h4>
                
                <div className="flex flex-col gap-3">
                  <a 
                    href="https://coursera.org/share/ef22eab9d9952f3bee8e58408b3d4ac7" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-blue-500/40 hover:bg-blue-950/20 transition-all duration-300 group/cert"
                  >
                    <div className="flex items-center gap-3">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-7 h-7" />
                      <div>
                        <div className="font-bold text-white text-xs">Google AI Essentials</div>
                        <div className="text-[10px] text-gray-500 font-semibold">AI & Machine Learning</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover/cert:text-blue-400 transition-colors" />
                  </a>

                  <a 
                    href="https://coursera.org/share/76ae0e8ce9574736e3f90dcf36e3580b" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-blue-500/40 hover:bg-blue-950/20 transition-all duration-300 group/cert"
                  >
                    <div className="flex items-center gap-3">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-7 h-7" />
                      <div>
                        <div className="font-bold text-white text-xs">Google Cybersecurity</div>
                        <div className="text-[10px] text-gray-500 font-semibold">Security Operations & Policy</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover/cert:text-blue-400 transition-colors" />
                  </a>

                  <a 
                    href="https://www.credly.com/badges/c9fe9354-7b62-4581-8427-2852f239231d/public_url" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-blue-500/40 hover:bg-blue-950/20 transition-all duration-300 group/cert"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/20 font-black text-orange-400 text-xs tracking-wider">AWS</div>
                      <div>
                        <div className="font-bold text-white text-xs">AWS ML Foundations</div>
                        <div className="text-[10px] text-gray-500 font-semibold">AWS Educate Academy</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover/cert:text-blue-400 transition-colors" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Tabbed Timeline */}
        <div className="lg:col-span-8 space-y-8">
          {/* Custom Timeline Tab Bar */}
          <div className="flex p-1.5 rounded-xl bg-gray-950/40 border border-white/5 w-fit gap-2">
            {[
              { id: 'all', label: 'All Events' },
              { id: 'experience', label: 'Experience', icon: Briefcase },
              { id: 'education', label: 'Education', icon: GraduationCap }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`relative px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'text-white' 
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="timelineTabGlow"
                    className="absolute inset-0 bg-blue-600/20 border border-blue-500/30 rounded-lg"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {tab.icon && <tab.icon className="w-4 h-4" />}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Interactive Timeline Track */}
          <div className="relative pl-8 md:pl-10 space-y-12">
            {/* Glowing Vertical Connector Track */}
            <div className="absolute left-3.5 md:left-4.5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500/10 shadow-[0_0_10px_rgba(59,130,246,0.3)] rounded-full"></div>

            <AnimatePresence mode="popLayout">
              {filteredTimeline.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="relative group"
                >
                  {/* Glowing Node Pulse Dot */}
                  <div className="absolute -left-[37px] md:-left-[41px] top-1.5 w-6 h-6 rounded-full bg-black border-2 border-blue-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:border-purple-400 group-hover:scale-110 transition-all duration-300">
                    {item.type === 'experience' ? (
                      <Briefcase className="w-3 h-3 text-blue-400 group-hover:text-purple-300" />
                    ) : (
                      <GraduationCap className="w-3 h-3 text-purple-400 group-hover:text-pink-300" />
                    )}
                  </div>

                  {/* Glassmorphic timeline card */}
                  <Card className="glass-card rounded-2xl border-white/5 bg-gray-900/10 backdrop-blur-md overflow-hidden relative hover:border-blue-500/20 shadow-xl transition-all duration-300">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-widest w-fit">
                          {item.year}
                        </span>
                        
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                          {item.type === 'experience' ? 'Professional' : 'Academic'}
                        </span>
                      </div>

                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-3">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-400 leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
