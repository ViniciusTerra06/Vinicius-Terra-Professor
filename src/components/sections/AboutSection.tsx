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
            Didática prática, comunidade ativa e foco em resultados reais. Meus
            alunos automatizam processos desde a primeira semana.
          </p>
        </motion.div>

        {/* 3D Continuous Carousel */}
        <div className="relative mx-auto mt-20 h-[400px] w-full max-w-[100vw]">
          <style>{`
            .carousel-scene {
              perspective: 1000px;
              width: 100%;
              height: 100%;
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .carousel-cylinder {
              width: 100%;
              height: 100%;
              position: absolute;
              transform-style: preserve-3d;
              animation: rotateCylinder 25s linear infinite;
              display: flex;
              align-items: center;
              justify-content: center;
              will-change: transform;
            }
            .carousel-cylinder:hover {
              animation-play-state: paused;
            }
            @keyframes rotateCylinder {
              0% { transform: rotateY(0deg); }
              100% { transform: rotateY(-360deg); }
            }
            .carousel-card-wrapper {
              position: absolute;
              left: 50%;
              top: 50%;
              margin-left: -130px;
              margin-top: -170px;
              width: 260px;
              height: 340px;
              backface-visibility: visible;
              will-change: transform;
            }
            @media (min-width: 768px) {
              .carousel-card-wrapper {
                margin-left: -150px;
                margin-top: -180px;
                width: 300px;
                height: 360px;
              }
            }
            /* Radius calculations based on card width */
            .card-0 { transform: rotateY(0deg) translateZ(200px); }
            .card-1 { transform: rotateY(90deg) translateZ(200px); }
            .card-2 { transform: rotateY(180deg) translateZ(200px); }
            .card-3 { transform: rotateY(270deg) translateZ(200px); }
            @media (min-width: 768px) {
              .card-0 { transform: rotateY(0deg) translateZ(250px); }
              .card-1 { transform: rotateY(90deg) translateZ(250px); }
              .card-2 { transform: rotateY(180deg) translateZ(250px); }
              .card-3 { transform: rotateY(270deg) translateZ(250px); }
            }
          `}</style>
          
          <div className="carousel-scene">
            <div className="carousel-cylinder">
              {teachingPillars.map((pillar, i) => (
                <div key={pillar.title} className={`carousel-card-wrapper card-${i}`}>
                   <div 
                     className="flex flex-col justify-center h-full rounded-xl bg-card border border-border/50 p-6 md:p-8 transition-colors hover:border-primary/50 hover:bg-card/90"
                     style={{ transform: "translateZ(0)" }}
                   >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        {iconMap[pillar.icon]}
                      </div>
                      <h3 className="mb-2 font-display text-xl font-bold text-foreground">
                        {pillar.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{pillar.description}</p>
                   </div>
                </div>
              ))}
            </div>
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
