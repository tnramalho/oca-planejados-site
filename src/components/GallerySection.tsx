'use client';
import { useState } from 'react';
import Image from 'next/image';
import ImageLightbox from './ImageLightbox';

const GALLERY_IMAGES = [
  { src: '/images/oca-showroom-2751.webp', alt: 'Quarto com painel amadeirado e cabeceira estofada — Showroom Oca Planejados' },
  { src: '/images/oca-showroom-2775.webp', alt: 'Sala de jantar integrada com cristaleira iluminada — Showroom Oca Planejados' },
  { src: '/images/oca-showroom-2805.webp', alt: 'Cozinha com ilha e armários cinza — Showroom Oca Planejados' },
  { src: '/images/oca-showroom-2763.webp', alt: 'Painel de TV com bancada e prateleiras iluminadas — Showroom Oca Planejados' },
  { src: '/images/oca-showroom-2742.webp', alt: 'Detalhe da cabeceira e painel amadeirado — Showroom Oca Planejados' },
  { src: '/images/oca-showroom-2757.webp', alt: 'Armário com portas de vidro e iluminação interna — Showroom Oca Planejados' },
  { src: '/images/oca-showroom-2769.webp', alt: 'Integração entre sala de jantar e painel de TV — Showroom Oca Planejados' },
  { src: '/images/oca-showroom-2790.webp', alt: 'Mesa de jantar e cristaleira do ambiente integrado — Showroom Oca Planejados' },
  { src: '/images/oca-showroom-2796.webp', alt: 'Torre de eletrodomésticos e armários planejados — Showroom Oca Planejados' },
  { src: '/images/oca-showroom-2799.webp', alt: 'Bancada de cozinha e armários inferiores — Showroom Oca Planejados' },
  { src: '/images/oca-4O9A2849.webp', alt: 'Cozinha com ilha, armários amadeirados e iluminação embutida — Oca Planejados' },
  { src: '/images/oca-4O9A2791.webp', alt: 'Closet com ilha central e prateleiras iluminadas — Oca Planejados' },
  { src: '/images/oca-4O9A2804.webp', alt: 'Sapateira com prateleiras iluminadas e estrutura dourada — Oca Planejados' },
  { src: '/images/oca-4O9A2852.webp', alt: 'Cozinha com armários cinza e nichos para eletrodomésticos — Oca Planejados' },
  { src: '/images/oca-drive-2-4O9A2771.webp', alt: 'Banheiro com gabinete planejado e espelho — Oca Planejados João Pessoa' },
  { src: '/images/oca-drive-2-4O9A2775.webp', alt: 'Closet com nichos e prateleiras iluminadas — Oca Planejados' },
  { src: '/images/oca-gallery3.webp',          alt: 'Walk-in closet completo com iluminação LED — Oca Planejados JP' },
  { src: '/images/oca-drive-2-4O9A2780.webp', alt: 'Escritório com bancada planejada e prateleiras embutidas — Oca Planejados' },
  { src: '/images/oca-4O9A2837.webp', alt: 'Sala de estar com painel ripado em madeira e sofá claro — Oca Planejados' },
  { src: '/images/oca-drive-2-4O9A2773.webp', alt: 'Closet premium de alto padrão — Oca Planejados João Pessoa' },
  { src: '/images/oca-gallery2.webp',          alt: 'Quarto planejado com cabeceira em madeira natural — Oca Planejados' },
  { src: '/images/oca-gallery6.webp',          alt: 'Escritório integrado com painel escuro e bancada — Oca Planejados' },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <section id="portfolio" className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 reveal">
            <div>
              <span className="text-white/30 text-xs tracking-[0.3em] uppercase mb-4 block">
                Portfólio
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
                Projetos que
                <br />
                <em className="font-semibold not-italic">inspiram</em>
              </h2>
            </div>
            <p className="text-white/40 text-sm font-light max-w-xs leading-relaxed">
              Conheça os ambientes do nosso showroom e projetos de móveis planejados em João Pessoa.
            </p>
          </div>

          {/* Gallery grid — masonry-like */}
          <div className="portfolio-editorial-grid">
            {GALLERY_IMAGES.slice(0, expanded ? GALLERY_IMAGES.length : 6).map((img, i) => (
              <button
                type="button"
                aria-label={`Ampliar: ${img.alt}`}
                aria-haspopup="dialog"
                key={img.src}
                className={`gallery-item group relative overflow-hidden cursor-zoom-in reveal reveal-delay-${(i % 4) + 1} ${i % 5 === 0 ? 'portfolio-wide' : ''}`}
                onClick={() => setLightbox(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={i % 5 === 0 ? "100vw" : "50vw"}
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 hover:scale-105"
                />
                <div className="gallery-overlay">
                  <span className="text-white/0 group-hover:text-white/80 text-xs tracking-widest uppercase transition-colors duration-300">
                    Ver projeto
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-10">
            <button type="button" className="editorial-link" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>
              {expanded ? 'Mostrar seleção' : `Ver todas as ${GALLERY_IMAGES.length} imagens`} <span aria-hidden="true">{expanded ? '−' : '+'}</span>
            </button>
          </div>

          {/* CTA */}
          <div className="text-center mt-14 reveal">
            <a
              href="https://wa.me/5583987922774?text=Olá!%20Vi%20o%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Iniciar meu projeto
            </a>
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <ImageLightbox images={GALLERY_IMAGES} initialIndex={lightbox} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}
