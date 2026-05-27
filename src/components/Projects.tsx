import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import GlowingEffectDemo from "./ui/glowing-effect-demo";

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio with Admin Dashboard",
    description: "A modern, full-stack portfolio website featuring an integrated admin dashboard for seamless content and project management. The platform supports secure authentication with Next-Auth, state management via React Context API. The admin dashboard allows easy updates to portfolio content, project listings, and blog posts, all within a responsive and visually engaging UI.",
    image: "/lovable-uploads/Portfolio.png",
    tags: ["React", "Next.js", "Tailwind CSS", "JS", "Node.js", "Express.js", "Next-Auth", "Context API", "Mongo"],
    demoUrl: "",
    githubUrl: "https://github.com/Krishi1211/Personal-Portfolio.git"
  },
  {
    id: 2,
    title: "Elearning-Platform-Using-MERN",
    description: "This is an Elearning Platform built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides a comprehensive solution for delivering online courses, managing users, and facilitating communication between instructors and students.",
    image: "/lovable-uploads/Ems.png",
    tags: ["Angular", "Node.js", "GraphQL", "Authentication", "Apollo Client","Express.js"],
    demoUrl: "https://srm-a-elearning-mern-platform.vercel.app/",
    githubUrl: "https://github.com/Krishi1211/SRM--A-E-Learning-MERN-platform"
  },
  {
    id: 3,
    title: "Melo Music distribution Platform",
    description: "A comprehensive SpaceX launch tracker that displays upcoming and past launches with advanced filtering, sorting, and search capabilities. Features include mission details, launch status, and rocket information.",
    image: "/lovable-uploads/Space-X.png",
    tags: ["Angular", "SpaceX API", "TypeScript", "Tailwind"],
    demoUrl: "https://melo-gamma.vercel.app/",
    githubUrl: "https://github.com/Krishi1211/Melo"
  },
  {
    id: 4,
    title: "Finance-Guru",
    description: "Finance-Guru is a MERN-based personal finance tracker that helps users manage income, expenses, and budgets effortlessly. It offers real-time analytics and visual insights to promote smarter financial decisions.",
    image: "/lovable-uploads/crypto.png",
    tags: ["React.js", "Tailwind CSS", "Recharts", "Axios", "SWR", "Zustand", "FastAPI", "MongoDB", "Python"],
    demoUrl: "https://finance-guru.onrender.com/", 
    githubUrl: "https://github.com/Krishi1211/Finance-guru/tree/main"
  },
  {
    id: 5,
    title: "Prometheus AI",
    description: "A full-stack AI platform enabling multi-modal generation (text, code, music, image, video) by integrating OpenAI and LangChain APIs, serving 100+ active users in testing.",
    image: "/lovable-uploads/prometheus.jpg",
    tags: ["Next JS", "LLM's", "Langchains", "NLP", "Prisma", "Stripe"],
    githubUrl: "https://github.com/Krishi1211/Prometheus/tree/main"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title mb-8">Projects</h2>
      
      {/* Project Description */}
      <motion.div 
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          Explore my collection of innovative projects that showcase my expertise in AI, web development, and software engineering. 
          Each project represents a unique solution to real-world challenges, combining cutting-edge technologies with practical applications.
        </p>
      </motion.div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Micro Projects Section */}
      {/* <div className="mt-16">
        <h3 className="section-title mb-8">Micro Projects</h3>
        <GlowingEffectDemo />
      </div> */}
    </section>
  );
};

export default Projects;
