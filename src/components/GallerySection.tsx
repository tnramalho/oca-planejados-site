'use client';
import { useState } from 'react';
import Image from 'next/image';

const GALLERY_IMAGES = [
  { src: '/images/oca-drive-2-4O9A2765.jpg', alt: 'Closet planejado com LED e cabideiros duplos — Oca Planejados João Pessoa' },
  { src: '/images/oca-drive-2-4O9A2766.jpg', alt: 'Walk-in closet elegante — Oca Planejados JP' },
  { src: '/images/oca-drive-2-4O9A2767.jpg', alt: 'Closet premium com espelho integrado — Oca Planejados' },
  { src: '/images/oca-hero-bg.webp',          alt: 'Cozinha planejada moderna com coifa e bancada em mármore — Oca Planejados' },
  { src: '/images/oca-drive-2-4O9A2771.jpg', alt: 'Home office planejado com painel em madeira — Oca Planejados João Pessoa' },
  { src: '/images/oca-drive-2-4O9A2775.jpg', alt: 'Suíte master planejada com cabeceira em painel — Oca Planejados' },
  { src: '/images/oca-gallery3.webp',          alt: 'Walk-in closet completo com iluminação LED — Oca Planejados JP' },
  { src: '/images/oca-drive-2-4O9A2780.jpg', alt: 'Escritório com bancada planejada e prateleiras embutidas — Oca Planejados' },
  { src: '/images/oca-gallery5.webp',          alt: 'Sala de estar com painel TV em porcelanato e rack planejado — Oca Planejados' },
  { src: '/images/oca-drive-2-4O9A2773.jpg', alt: 'Closet premium de alto padrão — Oca Planejados João Pessoa' },
  { src: '/images/oca-gallery2.webp',          alt: 'Quarto planejado com cabeceira em madeira natural — Oca Planejados' },
  { src: '/images/oca-gallery6.webp',          alt: 'Escritório integrado com painel escuro e bancada — Oca Planejados' },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<string | null>(null);

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
              Cada foto é um ambiente real entregue para famílias reais em João Pessoa e região.
            </p>
          </div>

          {/* Gallery grid — masonry-like */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={img.src}
                className={`gallery-item relative overflow-hidden cursor-zoom-in reveal reveal-delay-${(i % 4) + 1} ${
                  i === 0 ? 'col-span-2 row-span-2' : ''
                } ${i === 5 ? 'col-span-2' : ''}`}
                style={{ aspectRatio: i === 0 ? '1/1' : i === 5 ? '2/1' : '3/4' }}
                onClick={() => setLightbox(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 hover:scale-105"
                />
                <div className="gallery-overlay">
                  <span className="text-white/0 group-hover:text-white/80 text-xs tracking-widest uppercase transition-colors duration-300">
                    Ver projeto
                  </span>
                </div>
              </div>
            ))}
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

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox open"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl z-10"
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
          >
            ×
          </button>
          <div className="relative w-[90vw] h-[90vh]">
            <Image
              src={lightbox}
              alt="Projeto Oca Planejados"
              fill
              style={{ objectFit: 'contain' }}
              quality={90}
            />
          </div>
        </div>
      )}
    </>
  );
}
