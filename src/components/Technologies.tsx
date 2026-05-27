import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Globe, Server, Database, Cloud, ExternalLink, ArrowRight } from 'lucide-react';

const techGroups = [
  {
    id: 'all',
    label: 'All Skills',
    icon: Code2
  },
  {
    id: 'languages',
    label: 'Languages',
    icon: Code2,
    items: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', docs: 'https://developer.mozilla.org/docs/Web/JavaScript' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', docs: 'https://www.typescriptlang.org/docs/' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', docs: 'https://docs.python.org/3/' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', docs: 'https://docs.oracle.com/en/java/' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', docs: 'https://isocpp.org/std/the-standard' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', docs: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', docs: 'https://developer.mozilla.org/docs/Web/HTML' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', docs: 'https://developer.mozilla.org/docs/Web/CSS' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Globe,
    items: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', docs: 'https://react.dev/' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', docs: 'https://nextjs.org/docs' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', docs: 'https://angular.io/docs' },
      { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', docs: 'https://tailwindcss.com/docs' },
      { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', docs: 'https://redux.js.org/' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', docs: 'https://getbootstrap.com/' },
      { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg', docs: 'https://mui.com/' },
      { name: 'jQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg', docs: 'https://api.jquery.com/' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: Server,
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', docs: 'https://nodejs.org/en/docs' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', docs: 'https://expressjs.com/' },
      { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', docs: 'https://docs.djangoproject.com/' },
      { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', docs: 'https://www.tensorflow.org/learn' },
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', docs: 'https://fastapi.tiangolo.com/' },
      { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', docs: 'https://graphql.org/learn/' },
      { name: 'REST', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/api/api-original-wordmark.svg', docs: 'https://restfulapi.net/' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: Database,
    items: [
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', docs: 'https://www.mongodb.com/docs/' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', docs: 'https://www.postgresql.org/docs/' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', docs: 'https://dev.mysql.com/doc/' },
      { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', docs: 'https://www.sqlite.org/docs.html' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', docs: 'https://redis.io/docs/' },
      { name: 'Supabase', icon: 'https://avatars.githubusercontent.com/u/54469796?s=200&v=4', docs: 'https://supabase.com/docs' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', docs: 'https://firebase.google.com/docs' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    icon: Cloud,
    items: [
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', docs: 'https://docs.docker.com/' },
      { name: 'AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', docs: 'https://docs.aws.amazon.com/' },
      { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', docs: 'https://docs.microsoft.com/en-us/azure/' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', docs: 'https://git-scm.com/doc' },
      { name: 'Vercel', icon: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png', docs: 'https://vercel.com/docs' },
      { name: 'Netlify', icon: 'https://www.netlify.com/v3/img/components/logomark.png', docs: 'https://docs.netlify.com/' },
      { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', docs: 'https://www.jenkins.io/doc/' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', docs: 'https://www.kernel.org/doc/html/latest/' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120, damping: 15 }
  },
};

const Technologies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (techName: string) => {
    setImageErrors(prev => ({ ...prev, [techName]: true }));
  };

  // Compile active skills list
  const getFilteredSkills = () => {
    if (activeTab === 'all') {
      const allSkills: typeof techGroups[1]['items'] = [];
      techGroups.forEach(group => {
        if (group.items) {
          group.items.forEach(item => {
            if (!allSkills.some(skill => skill.name === item.name)) {
              allSkills.push(item);
            }
          });
        }
      });
      return allSkills;
    }
    const matched = techGroups.find(g => g.id === activeTab);
    return matched ? matched.items || [] : [];
  };

  const activeSkills = getFilteredSkills();

  return (
    <section id="technologies" className="section-container relative py-24">
      {/* Visual background lights */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="section-title">Technical Matrix</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-2">
          An interactive roadmap of the languages, utilities, and cloud stacks I work with.
        </p>
      </div>

      {/* Dynamic Tab Selector Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 relative z-10 max-w-4xl mx-auto">
        {techGroups.map((group) => {
          const Icon = group.icon;
          return (
            <button
              key={group.id}
              onClick={() => setActiveTab(group.id)}
              className={`relative px-4 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2.5 transition-all duration-300 border border-white/5 shadow-md ${
                activeTab === group.id
                  ? 'text-white'
                  : 'text-gray-400 bg-gray-900/10 hover:bg-gray-800/20 hover:text-gray-200'
              }`}
            >
              {activeTab === group.id && (
                <motion.div
                  layoutId="activeTechTabGlow"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
              <Icon className={`w-4 h-4 relative z-10 ${activeTab === group.id ? 'text-blue-400' : 'text-gray-500'}`} />
              <span className="relative z-10">{group.label}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of Interactive Neon Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={activeTab}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 max-w-7xl mx-auto relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {activeSkills.map((tech) => (
            <motion.a
              key={tech.name}
              href={tech.docs}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ 
                y: -6,
                transition: { duration: 0.2 }
              }}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-900/20 backdrop-blur-md border border-white/5 hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.12)] transition-all duration-300 overflow-hidden"
            >
              {/* Radial gradient background light */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/5 group-hover:via-purple-600/5 group-hover:to-pink-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm scale-110"></div>
              
              <div className="relative w-14 h-14 flex items-center justify-center mb-3">
                {/* Neon blur accent */}
                <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 scale-125 transition-all duration-500"></div>
                
                {!imageErrors[tech.name] ? (
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-11 h-11 object-contain relative z-10 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-all duration-300"
                    onError={() => handleImageError(tech.name)}
                  />
                ) : (
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-950/40 border border-blue-500/30 text-blue-400 font-extrabold text-lg relative z-10 shadow-lg">
                    {tech.name.charAt(0)}
                  </div>
                )}
              </div>

              <span className="relative z-10 text-xs font-bold text-gray-400 group-hover:text-white transition-colors tracking-wide text-center">
                {tech.name}
              </span>

              {/* Action indicator tag */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-[9px] text-blue-400 flex items-center gap-0.5 font-bold uppercase tracking-wider transition-opacity duration-300">
                <span>Docs</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Technologies;
