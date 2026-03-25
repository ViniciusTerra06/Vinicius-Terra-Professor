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

export interface Course {
  id: string;
  title: string;
  description: string;
  tools: string[];
  level: string;
  price: string;
  bestSeller?: boolean;
  ctaLabel: string;
  ctaUrl: string;
}

export const courses: Course[] = [
  {
    id: "n8n-masterclass",
    title: "N8N Masterclass",
    description:
      "Do zero ao avançado: construa automações poderosas com N8N, integrando APIs, bancos de dados e IA.",
    tools: ["N8N", "PostgreSQL", "ChatGPT"],
    level: "Iniciante → Avançado",
    price: "R$ 497",
    bestSeller: true,
    ctaLabel: "Quero me inscrever",
    ctaUrl: "#contato",
  },
  {
    id: "ia-automacao",
    title: "IA + Automação",
    description:
      "Aprenda a integrar modelos de IA nos seus fluxos. GPT, análise de sentimento, geração de conteúdo e muito mais.",
    tools: ["ChatGPT", "N8N", "Make"],
    level: "Intermediário",
    price: "R$ 397",
    ctaLabel: "Saiba mais",
    ctaUrl: "#contato",
  },
  {
    id: "automacao-whatsapp",
    title: "Automação para WhatsApp",
    description:
      "Crie chatbots inteligentes e fluxos de atendimento automatizado via WhatsApp Business API.",
    tools: ["WhatsApp API", "N8N", "Telegram"],
    level: "Intermediário",
    price: "R$ 347",
    ctaLabel: "Saiba mais",
    ctaUrl: "#contato",
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
  { value: "2.500+", label: "Alunos" },
  { value: "150+", label: "Aulas" },
  { value: "98%", label: "Satisfação" },
  { value: "50h+", label: "Conteúdo" },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Preciso saber programar para fazer os cursos?",
    answer:
      "Não! Os cursos são pensados para iniciantes. Usamos ferramentas no-code e low-code que permitem criar automações poderosas sem escrever código.",
  },
  {
    question: "Por quanto tempo tenho acesso ao curso?",
    answer:
      "Acesso vitalício. Comprou, é seu para sempre, incluindo todas as atualizações futuras.",
  },
  {
    question: "Quais ferramentas vou aprender a usar?",
    answer:
      "Depende do curso. Trabalhamos com N8N, Make, Zapier, ChatGPT API, Google Sheets, Slack, Notion, WhatsApp Business API e muito mais.",
  },
  {
    question: "Tem certificado?",
    answer:
      "Sim! Todos os cursos emitem certificado de conclusão que pode ser adicionado ao seu LinkedIn.",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "Você terá acesso à comunidade exclusiva no Discord, além de sessões de Q&A ao vivo semanais.",
  },
  {
    question: "Posso pedir reembolso?",
    answer:
      "Sim. Garantia incondicional de 7 dias. Se não gostar, devolvemos 100% do valor.",
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
