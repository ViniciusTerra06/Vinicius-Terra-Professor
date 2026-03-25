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
    <section id="sobre" className="border-t border-border py-24">
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {teachingPillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="gradient-border rounded-lg bg-card p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {iconMap[pillar.icon]}
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tools belt */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
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
