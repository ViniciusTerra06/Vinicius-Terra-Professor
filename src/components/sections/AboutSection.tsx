import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teachingPillars, tools } from "@/data/content";
import { Zap, Brain, Users, TrendingUp } from "lucide-react";
import ToolBadge from "@/components/ToolBadge";

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap size={24} />,
  Brain: <Brain size={24} />,
  Users: <Users size={24} />,
  TrendingUp: <TrendingUp size={24} />,
};

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % teachingPillars.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="sobre" className="border-t border-border py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Por que aprender comigo?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Didática prática, comunidade ativa e foco em resultados reais. Meus
            alunos automatizam processos desde a primeira semana.
          </p>
        </motion.div>

        {/* 3D Carousel Container */}
        <div className="relative mx-auto mt-12 flex h-[360px] w-full max-w-6xl items-center justify-center" style={{ perspective: 1000 }}>
          {teachingPillars.map((pillar, i) => {
            const diff = (i - activeIndex + teachingPillars.length) % teachingPillars.length;
            
            let x = 0;
            let rotateY = 0;
            let scale = 1;
            let zIndex = 0;
            let opacity = 1;

            if (diff === 0) {
               x = 0; scale = 1; zIndex = 30; rotateY = 0; opacity = 1;
            } else if (diff === 1) {
               x = 220; scale = 0.85; zIndex = 20; rotateY = -15; opacity = 0.5;
            } else if (diff === 2) {
               x = 0; scale = 0.7; zIndex = 10; rotateY = 0; opacity = 0;
            } else if (diff === 3) {
               x = -220; scale = 0.85; zIndex = 20; rotateY = 15; opacity = 0.5;
            }

            return (
              <motion.div
                key={pillar.title}
                animate={{ x, rotateY, scale, opacity, zIndex }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-full max-w-[320px] cursor-pointer"
                onClick={() => setActiveIndex(i)}
              >
                <div className="gradient-border h-full rounded-2xl bg-card p-8 shadow-2xl transition-colors hover:bg-card/90">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {iconMap[pillar.icon]}
                  </div>
                  <h3 className="mb-3 font-display text-xl font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tools belt */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-wrap items-center justify-center gap-3 relative z-40"
        >
          <span className="mr-4 text-sm text-muted-foreground">Ferramentas:</span>
          {tools.map((tool) => (
            <ToolBadge key={tool} name={tool} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
