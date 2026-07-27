import { motion } from "framer-motion";
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
  return (
    <section id="sobre" className="border-t border-border py-24 overflow-hidden relative">
      <div className="container relative z-10 mx-auto px-4">
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
            Didática prática, suporte direto comigo e foco em resultados reais. Meus
            alunos automatizam processos desde a primeira semana.
          </p>
        </motion.div>

        {/* 2D Infinite Marquee Carousel */}
        <div className="relative mx-auto mt-16 w-full max-w-6xl overflow-hidden py-4 mask-edges">
          <style>{`
            .mask-edges {
              mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
            .animate-marquee {
              display: flex;
              width: max-content;
              animation: marquee 25s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
            @keyframes marquee {
              0% { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(-50%, 0, 0); }
            }
          `}</style>

          <div className="animate-marquee gap-6">
            {[...teachingPillars, ...teachingPillars].map((pillar, i) => (
              <div 
                key={`${pillar.title}-${i}`} 
                className="flex-shrink-0 w-[280px] md:w-[320px]"
              >
                <div className="flex flex-col h-full rounded-xl bg-card border border-border/40 p-6 md:p-8 transition-colors hover:border-primary/50 hover:bg-card">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden="true">
                    {iconMap[pillar.icon]}
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools belt */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 flex flex-wrap items-center justify-center gap-3 relative z-40"
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
