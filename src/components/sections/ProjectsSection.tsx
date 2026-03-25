import { motion } from "framer-motion";
import { BarChart3, Clock, Zap } from "lucide-react";

const projects = [
  {
    title: "Automação de Pré-Vendas Integrada",
    description: "Conexão de CRM com N8N e OpenAI para qualificar leads instantaneamente e agendar reuniões de vendas de forma 100% autônoma.",
    metric: "+300%",
    metricLabel: "Em Agendamentos Válidos",
    icon: <Zap className="h-6 w-6 text-primary" />,
    delay: 0.1,
  },
  {
    title: "Esteira de Cobrança Inteligente",
    description: "Fluxo que analisa o status financeiro do ERP e dispara réguas de mensagens de cobrança humanizada no WhatsApp sem margem de erro.",
    metric: "-45%",
    metricLabel: "Inadimplência Reduzida",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    delay: 0.2,
  },
  {
    title: "Gestão Automatizada de Contratos",
    description: "Leitura autônoma de anexos em e-mail corporativo, extração de dados essenciais via IA, e envio para assinatura via DocuSign automática.",
    metric: "40h",
    metricLabel: "Horas Operacionais Salvas/Mês",
    icon: <Clock className="h-6 w-6 text-primary" />,
    delay: 0.3,
  }
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="border-t border-border bg-background py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              Cases de Sucesso
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Máquinas em Ação
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Exemplos reais de como a automação estratégica reduz o esforço braçal diário, corta custos e escala o crescimento na prática.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.delay }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              <div>
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  {project.icon}
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mb-8 text-muted-foreground">
                  {project.description}
                </p>
              </div>
              
              <div className="mt-auto border-t border-border/50 pt-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold text-primary">
                    {project.metric}
                  </span>
                </div>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-muted-foreground/80">
                  {project.metricLabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
