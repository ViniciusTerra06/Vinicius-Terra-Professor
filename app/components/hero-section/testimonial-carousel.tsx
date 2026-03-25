"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";

// Dados de avaliações
const testimonials = [
  {
    id: 1,
    name: "José",
    role: "Aluno",
    text: "Tem uma boa didatica, calmo, paciente e atencioso. Recomendo!",
    stars: 5,
  },
  {
    id: 2,
    name: "Danilo",
    role: "Aluno",
    text: "O conteúdo de n8n foi apresentado de forma clara e objetiva, com conteúdo prático demonstrando o uso de maneira de fácil compreensão. Muito bem explicado.",
    stars: 5,
  },
  {
    id: 3,
    name: "Tailson",
    role: "Dev Full-Stack e Aluno.",
    text: "O Vinícius tem uma didática bem precisa nas explicações e ainda se houver dúvidas ele se disponibiliza 100% pra explicar com clareza.",
    stars: 5,
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Troca automática de slide a cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center p-6 text-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-3"
        >
          {/* Ícone de Aspas decorativo */}
            <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-full mb-2">
                <Quote className="text-zinc-400 w-6 h-6 rotate-180" />
            </div>

          {/* Texto do Depoimento */}
          <p className="text-zinc-700 dark:text-zinc-300 text-sm md:text-base italic leading-relaxed max-w-xs">
            "{testimonials[currentIndex].text}"
          </p>

          {/* Estrelas */}
          <div className="flex gap-1 text-yellow-400">
            {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
          </div>

          {/* Autor e Cargo */}
          <div className="mt-2">
            <h4 className="font-bold text-zinc-900 dark:text-white text-sm">
              {testimonials[currentIndex].name}
            </h4>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold">
              {testimonials[currentIndex].role}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Indicadores (Bolinhas) */}
      <div className="absolute bottom-4 flex gap-2">
        {testimonials.map((_, index) => (
            <div 
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                    ? "bg-zinc-800 dark:bg-white w-4" 
                    : "bg-zinc-300 dark:bg-zinc-700"
                }`}
            />
        ))}
      </div>
    </div>
  );
}
