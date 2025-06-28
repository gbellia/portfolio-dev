"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-4">
              Guilherme Bellia
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Desenvolvedor Full Stack apaixonado por criar experiências
              digitais incríveis.
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <div className="flex flex-col space-y-2">
              <a
                href="#sobre"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                Sobre
              </a>
              <a
                href="#projetos"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                Projetos
              </a>
              <a
                href="#contato"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                Contato
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:joao@email.com"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} João Silva. Todos os direitos
            reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Desenvolvido com Next.js, TypeScript e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
