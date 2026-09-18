import type { Metadata } from 'next';
import './globals.css';

const BASE_URL = 'https://ocaplanejados.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Oca Planejados | Móveis Planejados e Sob Medida em João Pessoa',
    template: '%s | Oca Planejados',
  },
  description:
    'Há 33 anos criando ambientes planejados únicos em João Pessoa, PB. Cozinhas, closets, quartos, home offices e escritórios sob medida. Do projeto 3D à montagem. Agende uma visita ao nosso showroom.',
  keywords: [
    'móveis planejados joão pessoa',
    'marcenaria joão pessoa',
    'cozinha planejada joão pessoa',
    'closet planejado joão pessoa',
    'home office planejado jp',
    'dormitório planejado joão pessoa',
    'móveis sob medida João Pessoa PB',
    'oca planejados',
    'showroom móveis joão pessoa',
    'manaíra móveis planejados',
  ],
  authors: [{ name: 'Oca Planejados' }],
  creator: 'Oca Planejados',
  publisher: 'Oca Planejados',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: BASE_URL,
    siteName: 'Oca Planejados',
    title: 'Oca Planejados | Móveis Planejados e Sob Medida em João Pessoa',
    description:
      'Há 33 anos criando ambientes planejados únicos. Do design 3D à montagem final. Visite nosso showroom em Manaíra, João Pessoa.',
    images: [
      {
        url: '/images/oca-hero-bg.webp',
        width: 1920,
        height: 838,
        alt: 'Oca Planejados — Móveis Planejados João Pessoa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oca Planejados | Móveis Planejados João Pessoa',
    description: 'Ambientes planejados únicos há 33 anos em João Pessoa, PB.',
    images: ['/images/oca-hero-bg.webp'],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': BASE_URL,
    name: 'Oca Planejados',
    description:
      'Especialistas em móveis planejados e sob medida em João Pessoa, PB. Cozinhas, closets, quartos, home offices e escritórios. 33 anos de tradição, +8.000 clientes satisfeitos.',
    url: BASE_URL,
    telephone: '+55-83-98792-2774',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Maria Rosa, 1094 - Loja 02',
      addressLocality: 'João Pessoa',
      addressRegion: 'PB',
      postalCode: '58038-460',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -7.1012,
      longitude: -34.8454,
    },
    image: `${BASE_URL}/images/oca-hero-bg.webp`,
    logo: `${BASE_URL}/images/oca-logo.webp`,
    priceRange: 'RRR',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '13:00',
      },
    ],
    hasMap: 'https://maps.google.com/?q=Av.+Maria+Rosa,+1094+-+Loja+02,+Manaíra,+João+Pessoa',
    sameAs: ['https://wa.me/5583987922774'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '8000',
    },
    areaServed: {
      '@type': 'GeoCircle',
      name: 'Paraíba e nordeste brasileiro',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: -7.1012, longitude: -34.8454 },
      geoRadius: '500000',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Ambientes Planejados',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cozinha Planejada' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Closet Planejado' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Quarto Planejado' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Office Planejado' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sala de Estar Planejada' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Escritório Planejado' } },
      ],
    },
  };

  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0A0A0A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* AIO: AI-legible metadata */}
        <meta name="ai-description" content="Oca Planejados é uma marcenaria especializada em móveis planejados e sob medida em João Pessoa, Paraíba, Brasil. Atende residências e empresas com cozinhas, closets, dormitórios, home offices e escritórios. Fundada há mais de 33 anos, já atendeu mais de 8.000 clientes em mais de 120 cidades. Showroom físico no bairro Manaíra. Contato via WhatsApp: (83) 98792-2774." />
        <meta name="geo.region" content="BR-PB" />
        <meta name="geo.placename" content="João Pessoa" />
        <meta name="geo.position" content="-7.1012;-34.8454" />
        <meta name="ICBM" content="-7.1012, -34.8454" />
      </head>
      <body>{children}</body>
    </html>
  );
}
