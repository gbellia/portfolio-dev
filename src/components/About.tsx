"use client";

import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const skills = [
  {
    name: "Frontend",
    icon: Globe,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    icon: Database,
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    name: "Mobile",
    icon: Smartphone,
    items: ["React Native", "Expo", "Native Base"],
  },
  { name: "Outros", icon: Code, items: ["Git", "Docker", "AWS", "Figma"] },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Desenvolvedor apaixonado por criar soluções inovadoras
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Com mais de 5 anos de experiência em desenvolvimento web e mobile,
              tenho trabalhado em projetos desafiadores que me permitiram
              desenvolver habilidades técnicas sólidas e uma visão estratégica
              para resolver problemas.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Sou apaixonado por aprender novas tecnologias e sempre busco me
              manter atualizado com as melhores práticas do mercado. Acredito
              que a tecnologia deve ser usada para criar experiências que
              realmente impactem a vida das pessoas.
            </p>

            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-600">Projetos Concluídos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">5+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">30+</div>
                <div className="text-sm text-gray-600">
                  Clientes Satisfeitos
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-gray-900 mb-6">
              Minhas Habilidades
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <skill.icon className="w-6 h-6 text-purple-600" />
                    <h5 className="font-semibold text-gray-900">
                      {skill.name}
                    </h5>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
