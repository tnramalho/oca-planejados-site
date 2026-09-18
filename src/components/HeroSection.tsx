'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const video = useRef<HTMLVideoElement>(null);
  const [motionEnabled, setMotionEnabled] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktop = window.matchMedia('(min-width: 1024px)');
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const update = () => {
      setCanPlay(!preference.matches);
      setMotionEnabled(!preference.matches && desktop.matches && !connection?.saveData && !['slow-2g', '2g', '3g'].includes(connection?.effectiveType ?? ''));
    };
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  const togglePlayback = () => {
    if (!motionEnabled) {
      setMotionEnabled(true);
      return;
    }
    if (video.current?.paused) {
      void video.current.play().catch(() => setPlaying(false));
    } else {
      video.current?.pause();
    }
  };

  return (
    <section id="hero" className="luxury-hero relative isolate w-full overflow-hidden">
      <div className="hero-slideshow" aria-hidden="true">
        <Image src="/images/oca-showroom-2805.webp" alt="" fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
        {motionEnabled && (
          <video
            ref={video}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay muted loop playsInline preload="metadata"

            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={() => setMotionEnabled(false)}
          >
            <source media="(max-width: 1023px)" src="/videos/oca-showroom-hero-mobile.mp4" type="video/mp4" />
            <source src="/videos/oca-showroom-hero.mp4" type="video/mp4" />
          </video>
        )}
        <div className="flow-overlay" />
      </div>

      {/* Hero content */}
      <div className="hero-editorial-content relative z-10">
        {/* Top badge */}
        <div
          className="eyebrow mb-8"
        >
          João Pessoa · Paraíba · Brasil
        </div>

        {/* Main headline */}
        <h1
          className="hero-editorial-title"
        >
          Móveis planejados e sob medida
          <br />
          <span className="font-normal italic">em João Pessoa</span>
        </h1>

        {/* Sub */}
        <p
          className="hero-editorial-description"
        >
          Do projeto 3D à montagem final. Criamos ambientes inteligentes e sofisticados,
          pensados para o seu estilo de vida e o espaço do seu imóvel.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
        >
          <a
            href="https://wa.me/5583987922774?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20ao%20showroom."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Visitar o showroom
          </a>
          <a href="#portfolio" className="editorial-link">
            Ver projetos
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-xs tracking-widest uppercase">Conheça os projetos</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>

      {canPlay && (
        <button type="button" onClick={togglePlayback} className="absolute bottom-8 right-24 md:right-10 z-20 rounded-full border border-white/40 bg-black/40 px-4 py-3 text-xs text-white" aria-label={playing ? 'Pausar vídeo de fundo' : 'Reproduzir vídeo de fundo'}>
          {playing ? 'Pausar vídeo' : 'Reproduzir vídeo'}
        </button>
      )}
    </section>
  );
}
