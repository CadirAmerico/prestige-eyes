export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const site = {
  name: "Prestige Eyes",
  city: "Coimbra",
  description:
    "Aluguer de carros e lavagem de viaturas em Coimbra. Frota moderna, preços acessíveis e atendimento de qualidade.",
  whatsappNumber: "351937179618",
  whatsappDisplay: "+351 937 179 618",
  email: "cadirvalgy@gmail.com",
  address: "Eiras, Coimbra",
  schedule: [
    { days: "Segunda a Sexta", hours: "08:00 – 20:00" },
    { days: "Sábado", hours: "09:00 – 19:00" },
    { days: "Domingo", hours: "09:00 – 13:00" },
  ],
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Eiras,%20Coimbra,%20Portugal&t=&z=14&ie=UTF8&iwloc=&output=embed",
  mapsLink: "https://maps.google.com/?q=Eiras, Coimbra, Portugal",
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const fleet = [
  {
    name: "Renault Clio",
    category: "Citadino",
    pricePerDay: 35,
    seats: 5,
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Peugeot 208",
    category: "Citadino",
    pricePerDay: 38,
    seats: 5,
    transmission: "Automático",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Volkswagen Golf",
    category: "Familiar",
    pricePerDay: 55,
    seats: 5,
    transmission: "Automático",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Mercedes-Benz Classe A",
    category: "Premium",
    pricePerDay: 85,
    seats: 5,
    transmission: "Automático",
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Opel Insignia 2009 Cosmo",
    category: "Executiva",
    pricePerDay: 90,
    seats: 5,
    transmission: "Automático",
    tag: "Eventos especiais",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Opel_Insignia_Cosmo_V6_4x4_Karbongrau.JPG/960px-Opel_Insignia_Cosmo_V6_4x4_Karbongrau.JPG",
    imageCredit: "Foto: Thomas doerfer · CC BY-SA 3.0",
  },
] as const;

export const services = [
  {
    title: "Aluguer de Carros",
    description:
      "Frota moderna e revisada para viagens de negócios ou lazer. Contratos simples, sem surpresas.",
    icon: "car",
    items: [
      "Aluguer diário, semanal ou mensal",
      "Seguro incluído em todos os alugueres",
      "Entrega e recolha em Coimbra",
      "Kilómetros livres em contratos semanais",
    ],
  },
  {
    title: "Lavagem de Viaturas",
    description:
      "Cuidamos do seu carro com produtos de qualidade e acabamento profissional.",
    icon: "sparkles",
    items: [
      "Lavagem simples e exterior",
      "Lavagem completa com polimento",
      "Aspiração e limpeza interior",
      "Enceramento e proteção de pintura",
    ],
  },
  {
    title: "Manutenção Mecânica",
    description:
      "Oficina completa para manter a sua viatura segura, fiável e pronta para a estrada.",
    icon: "wrench",
    items: [
      "Revisão geral e manutenção programada",
      "Mudança de óleo e filtros",
      "Travões e suspensão",
      "Diagnóstico eletrónico",
    ],
  },
] as const;

export const detailedServices = [
  {
    category: "Lavagem & Detalhe",
    items: [
      {
        name: "Lavagem simples exterior",
        description: "Pré-lavagem, champô, jantes e secagem.",
        price: "desde 10 €",
      },
      {
        name: "Lavagem a vapor",
        description: "Limpeza ecológica com vapor, interior e exterior.",
        price: "desde 15 €",
      },
      {
        name: "Lavagem completa",
        description: "Exterior + aspiração e limpeza interior.",
        price: "desde 25 €",
      },
      {
        name: "Limpeza interior profunda",
        description: "Estofos, plásticos, vidros e higienização com ozono.",
        price: "desde 30 €",
      },
      {
        name: "Enceramento e proteção",
        description: "Cera de proteção com brilho duradouro.",
        price: "desde 35 €",
      },
      {
        name: "Polimento profissional",
        description: "Remoção de riscos leves e oxidação.",
        price: "desde 90 €",
      },
    ],
  },
  {
    category: "Manutenção Mecânica",
    items: [
      {
        name: "Diagnóstico eletrónico",
        description: "Leitura de avarias com equipamento profissional.",
        price: "desde 25 €",
      },
      {
        name: "Mudança de óleo + filtros",
        description: "Óleo, filtro de óleo, ar e habitáculo.",
        price: "desde 60 €",
      },
      {
        name: "Travões (pastilhas)",
        description: "Substituição de pastilhas, eixo dianteiro ou traseiro.",
        price: "desde 50 €",
      },
      {
        name: "Revisão geral",
        description: "Verificação de 30 pontos + mudança de óleo.",
        price: "desde 90 €",
      },
      {
        name: "Alinhamento de direção",
        description: "Alinhamento computadorizado dos 4 eixos.",
        price: "desde 30 €",
      },
      {
        name: "Ar condicionado",
        description: "Recarga de gás e higienização do circuito.",
        price: "desde 50 €",
      },
    ],
  },
] as const;