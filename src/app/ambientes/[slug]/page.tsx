import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { serviceGuides } from '@/lib/services';
import { SITE_URL, business, fullAddress, mapsUrl } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return serviceGuides.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = serviceGuides.find(item => item.slug === slug);
  if (!guide) notFound();
  const url = `/ambientes/${slug}/`;
  return {
    title: guide.title, description: guide.description, alternates: { canonical: url },
    openGraph: { type: 'website', locale: 'pt_BR', siteName: business.name, url, title: guide.title, description: guide.description, images: [{ url: guide.image, alt: guide.alt }] },
    twitter: { card: 'summary_large_image', title: guide.title, description: guide.description, images: [guide.image] },
  };
}
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const guide = serviceGuides.find(item => item.slug === slug);
  if (!guide) notFound();
  const url = `${SITE_URL}/ambientes/${slug}/`;
  const structuredData = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', '@id': `${url}#pagina`, url, name: guide.title, description: guide.description, inLanguage: 'pt-BR', isPartOf: { '@id': `${SITE_URL}/#site` }, primaryImageOfPage: `${SITE_URL}${guide.image}`, mainEntity: { '@id': `${url}#servico` } },
    { '@type': 'Service', '@id': `${url}#servico`, name: guide.title, description: guide.intro, url, image: `${SITE_URL}${guide.image}`, provider: { '@id': `${SITE_URL}/#empresa` }, areaServed: { '@type': 'City', name: business.city } },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: guide.name, item: url },
    ] },
  ] };
  return <>
    <Navigation />
    <main id="conteudo" className="service-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-44 md:pb-24">
        <nav aria-label="Caminho de navegação" className="text-sm text-white/70 mb-10"><a href="/" className="underline">Início</a> <span aria-hidden="true"> / </span> {guide.name}</nav>
        <span className="eyebrow mb-6">Oca Planejados · Manaíra</span>
        <h1 className="text-5xl md:text-7xl max-w-4xl mb-8">{guide.title}</h1>
        <p className="text-lg leading-relaxed text-white/80 max-w-2xl mb-10">{guide.intro}</p>
        <a href={`https://wa.me/5583987922774?text=${encodeURIComponent(`Olá! Gostaria de conversar sobre ${guide.name.toLowerCase()}.`)}`} className="btn-primary" target="_blank" rel="noopener noreferrer">Conversar sobre meu projeto</a>
      </div>
      <figure className="max-w-7xl mx-auto px-6">
        <div className="relative h-[60svh] min-h-80 max-h-[720px]"><Image src={guide.image} alt={guide.alt} fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" /></div>
        <figcaption className="text-sm text-white/70 mt-4">Ambiente do showroom Oca Planejados, em Manaíra, João Pessoa.</figcaption>
      </figure>
      <article className="max-w-3xl mx-auto px-6 py-20 md:py-28 space-y-14">
        {guide.sections.map(section => <section key={section.title}><h2 className="text-4xl mb-5">{section.title}</h2><p className="text-white/80 text-lg leading-relaxed">{section.text}</p></section>)}
        <section><h2 className="text-4xl mb-5">O que enviar para solicitar uma proposta</h2><ul className="list-disc pl-5 space-y-3 text-white/80">{guide.checklist.map(item => <li key={item}>{item}</li>)}</ul></section>
        <section><h2 className="text-4xl mb-5">Do projeto 3D à montagem</h2><p className="text-white/80 text-lg leading-relaxed">Converse com a equipe sobre suas prioridades e avalie a distribuição e os acabamentos no projeto 3D antes da aprovação. Preço, materiais, itens incluídos e prazo de fabricação e montagem devem constar na proposta do seu projeto.</p><a href="/#duvidas" className="editorial-link mt-6">Dúvidas sobre orçamento e prazos</a></section>
      </article>
      <section className="bg-[#eeece4] text-[#36382f] px-6 py-20"><div className="max-w-3xl mx-auto"><h2 className="text-4xl md:text-5xl mb-6">Seu projeto começa com uma conversa.</h2><p className="text-lg leading-relaxed mb-6">Conheça os ambientes e acabamentos no showroom da Oca Planejados.</p><address className="not-italic mb-4">{fullAddress}</address><a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="editorial-link">Como chegar ↗</a><p className="mt-6">Agende sua visita pelo <a href="https://wa.me/5583987922774" className="underline">WhatsApp {business.phoneDisplay}</a>.</p></div></section>
      <nav aria-label="Outros ambientes" className="max-w-7xl mx-auto px-6 py-16 flex flex-wrap gap-8">{serviceGuides.filter(item => item.slug !== slug).map(item => <a className="editorial-link" key={item.slug} href={`/ambientes/${item.slug}/`}>{item.name} ↗</a>)}</nav>
    </main>
    <Footer />
  </>;
}
