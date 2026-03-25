"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Laptop } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="about" className="min-h-screen flex flex-col justify-center py-20 md:py-32 bg-white dark:bg-black overflow-hidden scroll-mt-0">
            <div className="container mx-auto px-6 h-full">
                <motion.div 
                    className="grid md:grid-cols-2 gap-12 items-start"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Left Column - Image/Visual */}
                    <motion.div variants={itemVariants} className="relative flex justify-center order-2 md:order-1 md:sticky md:top-32 h-fit">
                        <div className="relative w-full max-w-md aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                             {/* Placeholder for About Image - Replace src with actual image */}
                            <Image 
                                src="/Image-about_section.png" 
                                alt="Foto de Vinicius Terra"
                                fill
                                className="object-cover"
                            />
                        </div>
                        
                        {/* Background Blobs */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-sm blur-3xl opacity-20 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full" />
                    </motion.div>

                    {/* Right Column - Content */}
                    <div className="space-y-6 order-1 md:order-2">
                        <motion.div variants={itemVariants} className="space-y-2">
                            <span className="text-sm font-medium uppercase tracking-wider text-purple-600 dark:text-purple-400">
                             Quem sou eu
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
                                Muito prazer, <br />
                                <span className="font-signature text-5xl md:text-6xl text-zinc-600 dark:text-zinc-300">
                                    Vinicius Terra.
                                </span>
                            </h2>
                        </motion.div>

                        <motion.p variants={itemVariants} className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            A tecnologia não foi feita apenas para programadores experientes. Ela foi feita para quem tem ideias.
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            Eu ensino pessoas comuns a transformarem ideias em soluções reais usando ferramentas de baixo código, automações inteligentes e Inteligência Artificial. Meu foco é descomplicar o início na tecnologia, sem jargões desnecessários, sem barreiras técnicas que afastam, sem aquela sensação de que “isso não é para mim”.
                        </motion.p>
                        
                        <motion.p variants={itemVariants} className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            Acredito no VibeCoding como o principal conceito que permite a democratização no Desenvolvimento. Minhas aulas são práticas, acessíveis e orientadas para resultado. O objetivo não é só entender tecnologia, é usar tecnologia para gerar oportunidades.
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            Se você quer dar seus primeiros passos na área, criar projetos próprios ou descobrir como a IA pode trabalhar a seu favor, eu estou aqui para te mostrar que é possível começar agora, mesmo do zero.
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            Acredito que a tecnologia é uma ferramenta poderosa para transformar ideias em realidade. 
                        </motion.p>


                    </div>
                </motion.div>
            </div>
        </section>
    );
}