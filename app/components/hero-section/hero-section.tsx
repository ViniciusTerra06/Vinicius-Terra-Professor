"use client";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import TestimonialCarousel from "./testimonial-carousel";

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        
        {/* Lado Esquerdo: Texto e CTA */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="px-3 py-1 text-sm font-medium bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-600 dark:text-zinc-300">
              Olá, visitante! Seja bem-vindo(a)!
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-zinc-900 dark:text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Eu sou <br />
            <span className="text-6xl md:text-8xl font-signature text-black dark:text-white block mt-2">
              Vinicius Terra
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Professor / Aluno / Desenvolvedor / Apaixonado por tecnologia e ensino.
            <br />
            <br /> "Eu amo oque faço, então faço com amor!"

          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link 
              href="#projetos"
              className="group flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium transition-all hover:scale-105 active:scale-95"
            >
              Ver Projetos
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <div className="flex items-center gap-4 px-4">
              <a href="#" className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contato@vinicius.dev" className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Lado Direito: Imagem Hero */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Círculo Decorativo Animado */}
            <motion.div 
              className="absolute inset-0 rounded-full border border-zinc-200 dark:border-zinc-800"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
             <motion.div 
              className="absolute inset-4 rounded-full border border-dashed border-zinc-300 dark:border-zinc-700"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Carrossel de Depoimentos (Substituindo Foto Estática) */}
            <div className="absolute inset-8 rounded-full overflow-hidden bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center border-4 border-white dark:border-black shadow-2xl z-10 backdrop-blur-sm">
               <TestimonialCarousel />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}