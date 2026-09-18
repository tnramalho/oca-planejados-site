import { Cormorant_Garamond, Jost } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import { SITE_URL, business, mapsUrl } from '@/lib/site';
import './globals.css';

const headingFont = Cormorant_Garamond({ subsets: ['latin'], style: ['normal', 'italic'], display: 'swap', variable: '--font-heading' });
const bodyFont = Jost({ subsets: ['latin'], display: 'swap', variable: '--font-body' });

const title = 'Móveis Planejados em João Pessoa | Oca Planejados';
const description = 'Cozinhas, closets, quartos e escritórios planejados em João Pessoa. Conheça o showroom da Oca em Manaíra e solicite um orçamento para seu projeto.';

export const viewport: Viewport = { themeColor: '#171815' };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: '%s | Oca Planejados' },
  description,
  authors: [{ name: business.name }],
  publisher: business.name,
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  openGraph: {
    type: 'website', locale: 'pt_BR', url: '/', siteName: business.name,
    title, description,
    images: [{ url: '/images/oca-social.jpg', width: 1200, height: 630, alt: 'Cozinha planejada com ilha e armários amadeirados — Oca Planejados' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/oca-social.jpg'] },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FurnitureStore', '@id': `${SITE_URL}/#empresa`,
      name: business.name, url: `${SITE_URL}/`, description,
      telephone: business.telephone,
      sameAs: [business.instagram],
      address: {
        '@type': 'PostalAddress', streetAddress: `${business.streetAddress}, ${business.neighborhood}`,
        addressLocality: business.city, addressRegion: business.state, addressCountry: 'BR',
      },
      image: `${SITE_URL}/images/oca-4O9A2849.webp`,
      logo: `${SITE_URL}/images/oca-logo.webp`, hasMap: mapsUrl,
      areaServed: { '@type': 'City', name: business.city },
      hasOfferCatalog: {
        '@type': 'OfferCatalog', name: 'Móveis planejados',
        itemListElement: ['Cozinha planejada', 'Closet planejado', 'Dormitório planejado', 'Home office planejado', 'Sala de estar planejada', 'Escritório corporativo planejado'].map(name => ({
          '@type': 'Offer', itemOffered: { '@type': 'Service', name, provider: { '@id': `${SITE_URL}/#empresa` } },
        })),
      },
    },
    { '@type': 'WebSite', '@id': `${SITE_URL}/#site`, url: `${SITE_URL}/`, name: business.name, inLanguage: 'pt-BR', publisher: { '@id': `${SITE_URL}/#empresa` } },

  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      </head>
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-black focus:p-4">Pular para o conteúdo</a>
        {children}
      </body>
    </html>
  );
}
