import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { heroHeadlines, tools } from "@/data/content";
import AnimatedBackground from "@/components/AnimatedBackground";
import ToolBadge from "@/components/ToolBadge";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = heroHeadlines[headlineIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 80);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length - 1)), 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setHeadlineIndex((prev) => (prev + 1) % heroHeadlines.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, headlineIndex]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <AnimatedBackground />
      <div className="grid-bg absolute inset-0 opacity-30" />

      <div className="container relative z-10 mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Vinicius Terra
          </p>

          <h1 className="mb-2 font-display text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
            <span className="text-primary">{displayText}</span>
            <span className="inline-block w-[3px] animate-typewriter-blink border-r-2 border-primary ml-1">
              &nbsp;
            </span>
          </h1>

          <p className="mb-8 max-w-xl text-lg text-muted-foreground">
            Transformo processos manuais em máquinas automáticas usando N8N, IA e
            ferramentas modernas. Aprenda comigo.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#cursos"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90 glow-teal"
            >
              Ver cursos <ArrowRight size={16} />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-semibold text-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              <Play size={16} /> Conhecer mais
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
      </div>
    </section>
  );
};

export default HeroSection;
