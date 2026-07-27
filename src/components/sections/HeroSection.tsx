import { motion } from "framer-motion";
import { heroHeadlines, tools } from "@/data/content";
import AnimatedBackground from "@/components/AnimatedBackground";
import ToolBadge from "@/components/ToolBadge";
import { ArrowRight, Play } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";

const HeroSection = () => {
  const displayText = useTypewriter(heroHeadlines);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <AnimatedBackground />
      <div className="grid-bg absolute inset-0 opacity-30" />

      <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Left Col */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl flex-1"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Vinicius Terra
          </p>

          <h1 className="mb-2 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-primary">{displayText}</span>
            <span className="inline-block w-[3px] animate-typewriter-blink border-r-2 border-primary ml-1">
              &nbsp;
            </span>
          </h1>

          <p className="mb-8 max-w-xl text-lg text-muted-foreground">
            Ensino você a transformar processos manuais em máquinas automáticas usando N8N, o
            ecossistema Claude (Claude Code incluso) e outras ferramentas modernas de IA. Venha
            aprender comigo e se destacar no mercado.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/5551997192049?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20Aulas/Consultorias"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all hover:bg-primary/90 glow-teal"
            >
              Falar no WhatsApp <ArrowRight size={16} />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-semibold text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all hover:border-primary/50 hover:text-primary"
            >
              <Play size={16} /> Ver Metodologia
            </a>
          </div>

          {/* Floating tool badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex flex-wrap gap-2"
          >
            {tools.slice(0, 6).map((tool, i) => (
              <motion.div
                key={tool}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
              >
                <ToolBadge name={tool} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Col (Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[480px] flex-shrink-0"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full"></div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/40 bg-card shadow-2xl backdrop-blur-sm">
            <img 
              src="/profile.webp" 
              alt="Vinicius Terra" 
              width={480}
              height={600}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover object-center" 
            />
            {/* Estética Neon Dark */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"></div>
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
