"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Plataforma completa de e-commerce com sistema de pagamentos, gestão de produtos e painel administrativo.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Aplicativo de gerenciamento de tarefas com colaboração em tempo real e notificações.",
    image: "/api/placeholder/400/250",
    technologies: ["Next.js", "TypeScript", "Socket.io", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Dashboard de previsão do tempo com gráficos interativos e múltiplas localizações.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Site pessoal responsivo com animações e design moderno.",
    image: "/api/placeholder/400/250",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 5,
    title: "Chat Application",
    description:
      "Aplicativo de chat em tempo real com autenticação e salas privadas.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Socket.io", "Express", "JWT"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description:
      "App para acompanhamento de exercícios e metas fitness com dashboard personalizado.",
    image: "/api/placeholder/400/250",
    technologies: ["React Native", "Expo", "Firebase", "Redux"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meus Projetos
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi para demonstrar minhas
            habilidades e experiência.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                project.featured ? "ring-2 ring-purple-500" : ""
              }`}
            >
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {project.title}
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Destaque
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm font-medium">Código</span>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
            <span>Ver Mais no GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
