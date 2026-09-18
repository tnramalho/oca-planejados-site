export const SITE_URL = 'https://ocaplanejados.com';

export const business = {
  name: 'Oca Planejados',
  instagram: 'https://www.instagram.com/ocaplanejados_/',
  streetAddress: 'Av. Maria Rosa, 1094 - Loja 02',
  neighborhood: 'Manaíra',
  city: 'João Pessoa',
  state: 'PB',
  telephone: '+5583987922774',
  phoneDisplay: '(83) 98792-2774',
};

export const fullAddress = `${business.streetAddress}, ${business.neighborhood}, ${business.city} - ${business.state}`;
export const mapQuery = encodeURIComponent(`Oca Planejados, ${fullAddress}`);
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&output=embed&hl=pt-BR`;

export const faqs = [
  {
    question: 'Onde fica a Oca Planejados em João Pessoa?',
    answer: `Nosso showroom fica na ${fullAddress}. Entre em contato pelo WhatsApp ${business.phoneDisplay} para combinar sua visita e conhecer materiais e acabamentos. Há estacionamento para clientes no local.`,
  },
  {
    question: 'Quais ambientes podem receber móveis planejados?',
    answer: 'Desenvolvemos projetos para cozinhas, closets, dormitórios, salas de estar, home offices e espaços corporativos. A proposta considera as medidas do ambiente, a organização e a rotina de quem vai usá-lo.',
  },
  {
    question: 'Como solicitar um orçamento de móveis planejados?',
    answer: 'Envie pelo WhatsApp a planta ou as medidas disponíveis, fotos do ambiente e uma descrição do que você precisa. Informe também a localização do imóvel. Nossa equipe conversa com você para definir os próximos passos do projeto.',
  },
  {
    question: 'Quanto custam os móveis planejados?',
    answer: 'O orçamento depende das dimensões, dos materiais, dos acabamentos, das ferragens e da quantidade de ambientes. Para receber uma proposta adequada ao seu espaço, fale com a equipe e apresente suas necessidades.',
  },
  {
    question: 'É possível visualizar o projeto antes da fabricação?',
    answer: 'Sim. O projeto 3D permite avaliar a distribuição dos móveis e os acabamentos antes de aprovar a produção. Aproveite essa etapa para discutir os detalhes e solicitar os ajustes necessários.',
  },
  {
    question: 'Qual é o prazo de fabricação e montagem?',
    answer: 'O prazo deve ser confirmado na proposta, conforme o escopo do projeto e a programação de produção e montagem. Informe quando pretende usar o imóvel para alinhar o cronograma com a equipe antes da contratação.',
  },
];
