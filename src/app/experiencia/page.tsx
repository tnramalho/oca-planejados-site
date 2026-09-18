import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import AssemblyHero from '@/components/experience/AssemblyHero';
import ScrollReveal from '@/components/ScrollReveal';
import AtmosphereSection from '@/components/AtmosphereSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import FAQSection from '@/components/FAQSection';
import ShowroomSection from '@/components/ShowroomSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Do espaço ao seu ambiente | Experiência Oca',
  description: 'Uma experiência visual da Oca Planejados: acompanhe o ambiente ganhar forma, do espaço vazio ao showroom completo.',
  alternates: { canonical: '/experiencia/' },
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
  openGraph: {
    title: 'Do espaço ao seu ambiente | Experiência Oca',
    description: 'Veja o ambiente ganhar forma com móveis planejados.',
    url: '/experiencia/', type: 'website', locale: 'pt_BR', siteName: 'Oca Planejados',
    images: [{ url: '/images/oca-social.jpg', width: 1200, height: 630 }],
  },
};

export default function ExperiencePage() {
  return <>
    <Navigation anchorRoot="/experiencia/" />
    <main id="conteudo">
      <AssemblyHero />
      <ScrollReveal>
        <AtmosphereSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <FAQSection />
        <ShowroomSection />
        <CTASection />
      </ScrollReveal>
    </main>
    <Footer anchorRoot="/experiencia/" />
  </>;
}
