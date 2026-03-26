import { motion } from "framer-motion";
import { ArrowRight, Bot, GitMerge, Rocket } from "lucide-react";

const features = [
  {
    title: "Diagnóstico e Mapeamento",
    description: "Análise profunda do seu negócio para identificar gargalos e tarefas repetitivas que podem ser automatizadas.",
    icon: <GitMerge className="h-6 w-6 text-primary" />,
  },
  {
    title: "Implementação Sob Medida",
    description: "Desenvolvimento de automações utilizando N8N e Inteligência Artificial integradas aos seus sistemas atuais.",
    icon: <Bot className="h-6 w-6 text-primary" />,
  },
  {
    title: "Acompanhamento e Escala",
    description: "Suporte contínuo para garantir que a operação rode perfeitamente e possa crescer sem depender de trabalho manual.",
    icon: <Rocket className="h-6 w-6 text-primary" />,
  },
];

const ConsultancySection = () => {
  return (
    <section id="consultoria" className="relative border-t border-border/50 bg-muted/30 py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-medium uppercase tracking-widest text-primary"
          >
            Consultoria Estratégica
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Seu Negócio no Piloto Automático
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Ajudo empresas e equipes a eliminar processos manuais. Uma automação bem estruturada salva meses de salário humano e permite que seu time foque no que realmente importa.
            <br/><br/>
            <span className="font-semibold text-primary">Atenção:</span> Devido à minha agenda atual de projetos, possuo vagas muito limitadas para novos atendimentos de consultoria neste mês.
          </motion.p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/50"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                {feature.icon}
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mx-auto mt-16 text-center"
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all hover:bg-primary/90 glow-teal"
          >
            Agendar Reunião de Diagnóstico <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultancySection;
