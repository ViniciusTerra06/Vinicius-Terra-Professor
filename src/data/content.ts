export const heroHeadlines = [
  "Professor de Automação",
  "Especialista em N8N",
  "Construtor de Fluxos com IA",
];

export const teachingPillars = [
  {
    icon: "Zap",
    title: "Prática Imediata",
    description: "Aprenda construindo fluxos reais desde a primeira aula.",
  },
  {
    icon: "Brain",
    title: "IA Aplicada",
    description: "Integre modelos de IA nos seus fluxos de automação.",
  },
  {
    icon: "Users",
    title: "Comunidade Ativa",
    description: "Suporte e networking com outros automatizadores.",
  },
  {
    icon: "TrendingUp",
    title: "Resultados Reais",
    description: "Cases de alunos que economizam horas por semana.",
  },
];

export const tools = [
  "N8N",
  "Make",
  "Zapier",
  "ChatGPT",
  "Google Sheets",
  "Slack",
  "Notion",
  "Telegram",
  "WhatsApp API",
  "PostgreSQL",
];

export interface MethodologyStep {
  id: string;
  title: string;
  description: string;
  subItems?: string[];
  icon: string;
}

export const methodologySteps: MethodologyStep[] = [
  {
    id: "passo-1",
    title: "1. Contato e Alinhamento",
    description:
      "Primeiro encontro estratégico. Vamos alinhar suas expectativas, entender seu nível de conhecimento técnico, apresentar a dinâmica das aulas e combinar detalhes importantes como métodos de pagamento, para que tudo flua com transparência.",
    icon: "MessageSquare",
  },
  {
    id: "passo-2",
    title: "2. Aulas Práticas (Mão na Massa)",
    description:
      "Construímos as automações juntos. O modelo da aula se molda exatamente ao que você precisa:",
    subItems: [
      "Para Iniciantes: Abordagem cuidadosa dos fundamentos da ferramenta. Avanço gradual, mas sempre com a mão na massa desde o dia um.",
      "Para Avançados: Foco absoluto em fluxos complexos, ideias específicas e gargalos difíceis que você precisa resolver hoje."
    ],
    icon: "Settings",
  },
  {
    id: "passo-3",
    title: "3. Autonomia Completa",
    description:
      "O objetivo final não é manter você dependente das aulas, mas sim conquistar a liberdade. Você sai com as automações rodando no seu negócio e totalmente capaz de criá-las ou mantê-las sozinho.",
    icon: "Rocket",
  },
];

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ana Oliveira",
    role: "Analista de Marketing",
    text: "O curso do Vinicius transformou a forma como trabalho. Automatizei relatórios que levavam 4 horas em 10 minutos.",
  },
  {
    name: "Carlos Mendes",
    role: "Desenvolvedor Full-Stack",
    text: "Didática incrível. Mesmo já programando, aprendi técnicas de automação que aceleraram meus projetos.",
  },
  {
    name: "Mariana Santos",
    role: "Empreendedora",
    text: "Meu negócio rodava no manual. Hoje tenho fluxos automáticos de onboarding, cobrança e suporte.",
  },
  {
    name: "Pedro Alves",
    role: "Gestor de Projetos",
    text: "A comunidade é sensacional. Sempre tem alguém pra ajudar e os cases de outros alunos inspiram demais.",
  },
];

export const stats = [
  { value: "+100", label: "Alunos" },
  { value: "+300", label: "Aulas" },
  { value: "98%", label: "Satisfação" },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Preciso saber programar para fazer as aulas?",
    answer:
      "Não! O foco das nossas aulas é em ferramentas no-code e low-code (como N8N, Make, Zapier). Você aprenderá a construir integrações poderosas pela lógica, sem precisar escrever código.",
  },
  {
    question: "Como funciona o agendamento das aulas?",
    answer:
      "As datas e horários são definidos de forma flexível no nosso primeiro contato, adaptando-se à sua rotina e ao seu ritmo de aprendizado.",
  },
  {
    question: "Quais ferramentas vou aprender a usar?",
    answer:
      "Aulas totalmente personalizadas. Podemos focar em N8N, Make, Zapier, ChatGPT API, Google Sheets, WhatsApp Business API ou o que for melhor para o seu projeto.",
  },
  {
    question: "As aulas são gravadas?",
    answer:
      "Sim! Se desejar, as aulas são 100% gravadas e o material fica disponível para você revisar quantas vezes e quando quiser.",
  },
  {
    question: "Como funciona o suporte entre as aulas?",
    answer:
      "Você terá contato direto comigo via WhatsApp/Discord para tirar dúvidas e destravar eventuais problemas nos fluxos enquanto treina entre nossas sessões.",
  },
  {
    question: "Posso trazer projetos reais do meu trabalho?",
    answer:
      "Com certeza! Esse é o maior objetivo: usar as aulas para criarmos juntos soluções reais que você possa usar imediatamente no seu negócio ou emprego.",
  },
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "como-automatizar-com-n8n",
    title: "Como automatizar processos com N8N em 2024",
    excerpt:
      "Um guia completo para iniciantes que querem dar os primeiros passos no mundo da automação com N8N.",
    date: "2024-12-15",
    readingTime: "8 min",
    category: "N8N",
  },
  {
    id: "ia-no-dia-a-dia",
    title: "5 formas de usar IA no seu dia a dia de trabalho",
    excerpt:
      "Descubra como integrar inteligência artificial nas suas tarefas diárias e ganhar produtividade.",
    date: "2024-12-01",
    readingTime: "6 min",
    category: "IA",
  },
  {
    id: "whatsapp-chatbot",
    title: "Criando um chatbot para WhatsApp do zero",
    excerpt:
      "Passo a passo para construir um chatbot inteligente usando WhatsApp Business API e N8N.",
    date: "2024-11-20",
    readingTime: "12 min",
    category: "WhatsApp",
  },
];
