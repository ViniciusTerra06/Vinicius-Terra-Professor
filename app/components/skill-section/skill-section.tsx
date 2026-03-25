'use client';

import { 
  Workflow, 
  BrainCircuit, 
  Zap, 
  GraduationCap, 
  Rocket, 
  Users,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const skills = [
  {
    title: "Automação com N8N",
    description: "Transforme tarefas repetitivas em fluxos inteligentes. Ensino a integrar APIs e sistemas para economizar horas de trabalho, sem dor de cabeça.",
    icon: Workflow,
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    title: "Inteligência Artificial Aplicada",
    description: "Vá além do básico. Domine o uso de LLMs e agentes de IA para criar soluções reais que o mercado valoriza e exige hoje.",
    icon: BrainCircuit,
    color: "text-purple-600",
    bg: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    title: "Low-Code & Agilidade",
    description: "Construa MVPs e aplicações completas em tempo recorde. O foco é no resultado e no negócio, não apenas em escrever linhas de código.",
    icon: Zap,
    color: "text-yellow-600",
    bg: "bg-yellow-50 dark:bg-yellow-900/20",
  },
  {
    title: "Didática para Iniciantes",
    description: "Uma abordagem que respeita seu ritmo. Explicações visuais, analogias claras e zero 'tiopês' técnico desnecessário. Aprenda sem medo.",
    icon: GraduationCap,
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
  },
  {
    title: "Projetos do Mundo Real",
    description: "Chega de exemplos bobos. Aqui você aprende criando sistemas que funcionam e resolvem dores reais, prontos para seu portfólio.",
    icon: Rocket,
    color: "text-orange-600",
    bg: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    title: "Mentoria de Carreira",
    description: "Orientação estratégica para quem quer entrar na área tech ou migrar de carreira. Preparação real para o que as empresas buscam.",
    icon: Users,
    color: "text-pink-600",
    bg: "bg-pink-50 dark:bg-pink-900/20",
  }
];

export function SkillSection() {
  return (
    <section className="py-24 bg-white dark:bg-neutral-950" id="habilidades">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-3 block"
          >
            O que eu ofereço
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 font-sans"
          >
            Habilidades & Metodologia
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1 bg-neutral-900 dark:bg-white mx-auto mb-8"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed"
          >
            Do zero ao profissional: domino e ensino as ferramentas que o mercado exige, sem complicação. 
            Foco em Low-Code, IA e transformação de carreira.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${skill.bg} ${skill.color} flex items-center justify-center mb-6 text-opacity-100 transition-colors`}>
                <skill.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {skill.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center"
        >
            <Link 
              href="#contato" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
            >
              Começar minha jornada
              <ArrowRight size={18} />
            </Link>
        </motion.div>

      </div>
    </section>
  );
}
