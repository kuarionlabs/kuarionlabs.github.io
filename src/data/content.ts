export const CONTACT = {
  email: "contato@kuarionlabs.com",
  instagram: "https://www.instagram.com/kuarionlabs/",
} as const;

export function mailto(subject: string): string {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`;
}

export const SUBJECTS = {
  problem: "Quero descrever meu problema",
  waitlist: "Lista de espera dos cursos",
} as const;

export const MARQUEE_WORDS = ["Software", "Inteligência artificial", "Cursos"] as const;

export type ServiceIcon = "software" | "ai" | "courses";

export interface Service {
  id: string;
  icon: ServiceIcon;
  title: string;
  text: string;
}

export const SERVICES: readonly Service[] = [
  {
    id: "software",
    icon: "software",
    title: "Software sob medida",
    text: "Sites, sistemas, aplicativos e plataformas completos, do zero ao ar. Chega de adaptar seu negócio a sistemas prontos.",
  },
  {
    id: "ai",
    icon: "ai",
    title: "IA aplicada",
    text: "Uma tarefa chata do seu time, resolvida de verdade. Começamos com um teste pequeno e você vê o resultado.",
  },
  {
    id: "courses",
    icon: "courses",
    title: "Aulas e cursos",
    text: "Capacite seu time ou comece em tecnologia. Aprender fazendo, com projeto real.",
  },
];

export interface Step {
  title: string;
  text: string;
}

export const STEPS: readonly Step[] = [
  { title: "Conversa", text: "Você conta o desafio e a gente desenha a solução." },
  { title: "Desenho", text: "Sua ideia ganha forma logo no começo." },
  { title: "Entregas", text: "Novidades a cada etapa, no seu ritmo." },
  { title: "Lançamento", text: "Seguimos com você depois de entrar no ar." },
];

export const COMMITMENTS: readonly string[] = [
  "Prazo e valor claros desde o início",
  "Você acompanha cada etapa",
  "Código e documentação entregues a você",
  "Dados protegidos (LGPD)",
  "Suporte depois da entrega",
];

export interface ChatMessage {
  from: "client" | "company";
  time: string;
  text: string;
}

/** Conversa ilustrativa exibida na seção "Na prática". Não é de um cliente real. */
export const CHAT: readonly ChatMessage[] = [
  {
    from: "client",
    time: "09:41",
    text: "Oi, bom dia! Tenho uma rede de clínicas e hoje a agenda é toda em planilha. Vocês fazem um sistema completo pra gente?",
  },
  {
    from: "company",
    time: "09:42",
    text: "Bom dia! Fazemos sim. Me conta: quantas unidades vocês têm e o que mais trava no dia a dia?",
  },
  {
    from: "client",
    time: "09:44",
    text: "São 3 unidades. O pior é o agendamento e lembrar os pacientes das consultas.",
  },
  {
    from: "company",
    time: "09:45",
    text: "Dá para resolver isso tudo num sistema só: agenda online, lembrete automático por WhatsApp e um painel para vocês acompanharem as unidades.",
  },
  { from: "company", time: "09:45", text: "Te envio o plano com as etapas e o valor." },
  { from: "client", time: "09:47", text: "Fechado, pode mandar!" },
];
