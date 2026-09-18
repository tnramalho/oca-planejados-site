'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

// Ordered: best photos first — from Drive folder 2 (residential) + OCA website
const SLIDES = [
  { src: '/images/oca-drive-2-4O9A2765.jpg', label: 'Closet' },
  { src: '/images/oca-hero-bg.webp',           label: 'Cozinha' },
  { src: '/images/oca-drive-2-4O9A2767.jpg',   label: 'Walk-in Closet' },
  { src: '/images/oca-drive-2-4O9A2771.jpg',   label: 'Home Office' },
  { src: '/images/oca-gallery3.webp',           label: 'Closet' },
  { src: '/images/oca-drive-2-4O9A2775.jpg',   label: 'Suíte' },
  { src: '/images/oca-gallery1.webp',           label: 'Cozinha' },
  { src: '/images/oca-drive-2-4O9A2780.jpg',   label: 'Escritório' },
  { src: '/images/oca-gallery5.webp',           label: 'Sala' },
  { src: '/images/oca-drive-2-4O9A2773.jpg',   label: 'Closet Premium' },
];

const INTERVAL = 6000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (isTransitioning || idx === current) return;
      setIsTransitioning(true);
      setPrev(current);
      setCurrent(idx);
      setTimeout(() => {
        setPrev(null);
        setIsTransitioning(false);
      }, 1800);
    },
    [current, isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  useEffect(() => {
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Slideshow */}
      <div className="hero-slideshow">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`hero-slide ${i % 2 === 0 ? 'even' : ''} ${
              i === current ? 'active' : i === prev ? 'prev' : ''
            }`}
          >
            <Image
              src={slide.src}
              alt={`Oca Planejados — ${slide.label}`}
              fill
              priority={i === 0}
              sizes="100vw"
              style={{ objectFit: 'cover' }}
              quality={85}
            />
          </div>
        ))}

        {/* Flow overlay gradient */}
        <div className="flow-overlay" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        {/* Top badge */}
        <div
          className="mb-8 px-5 py-2 border border-white/20 text-white/60 text-xs tracking-[0.3em] uppercase"
          style={{ animation: 'fadeIn 1s ease 0.3s both' }}
        >
          João Pessoa · Paraíba · Brasil
        </div>

        {/* Main headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[0.95] tracking-tight mb-6 max-w-5xl"
          style={{ animation: 'slideUp 1s ease 0.5s both' }}
        >
          Ambientes que
          <br />
          <span className="font-semibold italic">contam a sua história</span>
        </h1>

        {/* Sub */}
        <p
          className="text-white/65 text-base sm:text-lg font-light max-w-xl leading-relaxed mb-10"
          style={{ animation: 'slideUp 1s ease 0.8s both' }}
        >
          Do projeto 3D à montagem final — criamos móveis planejados
          únicos para quem vive com intenção.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 items-center"
          style={{ animation: 'slideUp 1s ease 1s both' }}
        >
          <a
            href="https://wa.me/5583987922774?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20ao%20showroom."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Visitar o showroom
          </a>
          <a href="#portfolio" className="btn-primary">
            Ver projetos
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ animation: 'fadeIn 1s ease 1.5s both' }}
        >
          <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2 items-center">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`slide-dot ${i === current ? 'active' : ''}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-10 left-8 z-20 text-white/30 text-xs tracking-widest font-light">
        {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
      </div>
    </section>
  );
}
