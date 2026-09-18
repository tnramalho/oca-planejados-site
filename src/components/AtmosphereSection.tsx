'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const scenes = [
  { image: '2775', category: '01 / Conviver', title: 'O encontro entre\nbeleza e propósito.', description: 'Ambientes integrados. Materiais em harmonia. Espaço para viver os seus melhores momentos.' },
  { image: '2751', category: '02 / Habitar', title: 'Seu refúgio.\nSua forma de viver.', description: 'Proporções, texturas e acabamentos que transformam o quarto em um lugar inteiramente seu.' },
  { image: '2805', category: '03 / Criar', title: 'Precisão nos detalhes.\nLiberdade na rotina.', description: 'Cozinhas planejadas para receber, experimentar e fazer do cotidiano algo especial.' },
];

export default function AtmosphereSection() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const panels = Array.from(section.current!.querySelectorAll<HTMLElement>('.atmosphere-panel'));
    let frame = 0;
    const paint = () => {
      frame = 0;
      panels.forEach(panel => {
        const progress = media.matches ? 0 : Math.max(0, Math.min(1, -panel.getBoundingClientRect().top / window.innerHeight));
        panel.style.setProperty('--scene-progress', String(progress));
      });
    };
    const update = () => { if (!frame) frame = requestAnimationFrame(paint); };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    media.addEventListener('change', update);
    paint();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      media.removeEventListener('change', update);
    };
  }, []);

  return (
    <section ref={section} aria-label="Ambientes do showroom" className="atmosphere">
      {scenes.map(scene => (
        <article key={scene.image} className="atmosphere-panel">
          <div className="atmosphere-sticky">
            <div className="atmosphere-photo">
              <Image src={`/images/oca-showroom-${scene.image}.webp`} alt={`${scene.category.split(' / ')[1]} — ambiente do showroom Oca Planejados`} fill sizes="100vw" style={{ objectFit: 'cover' }} />
            </div>
            <div className="atmosphere-shade" />
            <div className="atmosphere-copy">
              <span className="eyebrow">{scene.category}</span>
              <h2>{scene.title.split('\n').map(line => <span key={line} className="block">{line}</span>)}</h2>
              <p>{scene.description}</p>
              <a href="#portfolio" className="editorial-link">Explorar os ambientes <span aria-hidden="true">↗</span></a>
            </div>
            <span className="atmosphere-caption">Showroom Oca / João Pessoa</span>
          </div>
        </article>
      ))}
    </section>
  );
}
