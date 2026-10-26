/**
 * Configuração central do conceito comercial Cidade Pet Spa (DEMO).
 *
 * Todos os dados públicos exibidos no site vêm daqui. Quando o prospect
 * fornecer fotos, horários ou números oficiais, basta atualizar este arquivo.
 *
 * Fontes revalidadas em 03/09/2026 — ver IMPLEMENTATION_REPORT.md.
 */

export const DEMO_MODE = true;

export const site = {
  brand: {
    name: "Cidade Pet Spa",
    tagline: "Pet care boutique em São Carlos",
    city: "São Carlos · SP",
  },

  hero: {
    headline: "Cuidado que eles sentem. Tranquilidade que você percebe.",
    subheadline:
      "Banho, tosa e estética pet em um ambiente limpo e acolhedor — com agendamento simples pelo WhatsApp.",
    primaryCta: "Agendar pelo WhatsApp",
  },

  /** WhatsApp comercial revalidado via OndePet (03/09/2026). */
  whatsapp: {
    display: "(16) 99602-1599",
    international: "+55 16 99602-1599",
    /** wa.me exige somente dígitos com código do país. */
    number: "5516996021599",
    defaultMessage:
      "Olá! Vim pelo site e quero agendar um horário para o meu pet.",
  },

  /** Telefone fixo público (fonte derivada de CNPJ) — uso secundário. */
  phone: {
    display: "(16) 3307-1533",
    href: "tel:+551633071533",
  },

  address: {
    street: "Rua Dona Alexandrina, 1553",
    district: "Centro",
    city: "São Carlos",
    state: "SP",
    cep: "13560-290",
    full: "Rua Dona Alexandrina, 1553 — Centro, São Carlos/SP · CEP 13560-290",
  },

  location: {
    latitude: -22.0121535,
    longitude: -47.889935,
    placeId: "ChIJLXP5C3R3uJQRYmd4Ie9fqGo",
    googleMapsUrl:
      "https://www.google.com/maps/place/Cidade+Pet+Spa/data=!4m7!3m6!1s0x94b877740bf9732d:0x6aa85fef21786762!8m2!3d-22.0121535!4d-47.889935!16s%2Fg%2F11k3x7b4qg!19sChIJLXP5C3R3uJQRYmd4Ie9fqGo",
    wazeUrl: "https://waze.com/ul?ll=-22.0121535,-47.889935&navigate=yes",
  },

  social: {
    instagram: "https://www.instagram.com/cidadepetspa",
    instagramHandle: "@cidadepetspa",
  },

  /**
   * Reputação exibida COM origem explícita (decisão do contratante).
   * Números obtidos via TutorCanino em 03/09/2026; o agregador afirma
   * derivar os dados do Google Maps. Não é uma leitura direta do Google.
   */
  reputation: {
    score: "4,9",
    count: "216",
    countLabel: "avaliações",
    sourceName: "TutorCanino",
    sourceNote: "agregador · dados derivados do Google Maps",
    verifiedOn: "03/09/2026",
  },

  services: [
    {
      title: "Banho",
      description:
        "Banho com produtos adequados ao tipo de pelo e pele do seu pet, secagem cuidadosa e acabamento caprichado.",
    },
    {
      title: "Tosa",
      description:
        "Tosa higiênica e na tesoura ou máquina conforme a necessidade da raça — sempre com calma e respeito ao tempo do animal.",
    },
    {
      title: "Estética",
      description:
        "Cuidados de acabamento: hidratação, desembolo, corte de unhas e limpeza de ouvidos para um visual saudável.",
    },
  ] as { title: string; description: string }[],

  differentials: [
    {
      title: "Cuidado individual",
      description:
        "Cada pet é atendido no seu ritmo, sem pressa e sem estresse desnecessário.",
    },
    {
      title: "Higiene em primeiro lugar",
      description:
        "Ambiente limpo, materiais higienizados e rotina de cuidado que você percebe na primeira visita.",
    },
    {
      title: "Comunicação direta",
      description:
        "Agendamento e dúvidas resolvidos de forma simples pelo WhatsApp, sem burocracia.",
    },
  ] as { title: string; description: string }[],

  steps: [
    {
      title: "Chame no WhatsApp",
      description: "Toque em qualquer botão de agendamento desta página.",
    },
    {
      title: "Conte sobre seu pet",
      description: "Raça, porte e o que ele precisa: banho, tosa ou estética.",
    },
    {
      title: "Escolha o horário",
      description: "A equipe sugere os melhores horários disponíveis.",
    },
    {
      title: "Pronto, confirmado",
      description: "Você recebe a confirmação e é só trazer seu pet.",
    },
  ] as { title: string; description: string }[],

  /**
   * Galeria conceitual — placeholders premium. Nenhuma foto do Instagram
   * do prospect foi baixada ou republicada. Os slots abaixo são substituídos
   * por fotos reais assim que houver autorização.
   */
  galleryNote:
    "Imagens conceituais para demonstração — serão substituídas pelas fotos reais do espaço mediante autorização.",

  footer: {
    demoNotice:
      "Conceito comercial não oficial — demonstração preparada para apresentação ao negócio. Não é o site oficial da Cidade Pet Spa.",
  },
} as const;

export function whatsappUrl(message: string = site.whatsapp.defaultMessage): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
