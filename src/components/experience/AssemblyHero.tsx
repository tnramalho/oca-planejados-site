'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { layers, layerFrame, progressBetween } from './motion';
import styles from './AssemblyHero.module.css';

export default function AssemblyHero() {
  const root = useRef<HTMLElement>(null);
  const viewport = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = root.current!;
    const stage = viewport.current!;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const furniture = layers.map(layer => element.querySelector<HTMLElement>(`[data-layer="${layer.name}"]`)!);
    const finalPhoto = element.querySelector<HTMLElement>('[data-final]')!;
    const progressBar = element.querySelector<HTMLElement>('[data-progress]')!;
    const caption = element.querySelector<HTMLElement>('[data-caption]')!;
    let active = true;
    let frame = 0;
    let current = 0;
    let target = 0;
    let previousTime = 0;
    let disposed = false;

    const paint = (value: number) => {
      furniture.forEach((item, index) => {
        const state = layerFrame(value, layers[index]);
        item.style.transform = state.transform;
        item.style.opacity = String(state.opacity);
      });
      finalPhoto.style.opacity = String(progressBetween(value, 0.84, 0.98));
      progressBar.style.transform = `scaleX(${value})`;
      const labels = ['Tudo começa com espaço.', 'Cada escolha encontra seu lugar.', 'Forma e função, em harmonia.', 'Um ambiente para viver.', 'Seu espaço. Inteiramente seu.'];
      caption.textContent = labels[Math.min(4, Math.floor(value * 5))];
    };
    const measure = () => {
      const distance = element.offsetHeight - stage.offsetHeight;
      target = distance > 0 ? Math.max(0, Math.min(1, -element.getBoundingClientRect().top / distance)) : 1;
    };
    const animate = (time: number) => {
      frame = 0;
      const elapsed = previousTime ? Math.min(64, time - previousTime) : 16;
      previousTime = time;
      current += (target - current) * (1 - Math.exp(-elapsed / 75));
      if (Math.abs(target - current) < 0.0002) current = target;
      paint(current);
      if (active && current !== target) frame = requestAnimationFrame(animate);
      else previousTime = 0;
    };
    const update = () => {
      if (reduced.matches || element.dataset.ready !== 'true') return;
      measure();
      if (active && !frame) frame = requestAnimationFrame(animate);
    };
    const preferenceChanged = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;
      if (reduced.matches) paint(1);
      else { measure(); current = target; paint(current); }
    };
    const observer = new IntersectionObserver(([entry]) => {
      active = entry.isIntersecting;
      if (active) update();
      else { cancelAnimationFrame(frame); frame = 0; previousTime = 0; }
    });
    observer.observe(element);
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    window.addEventListener('pageshow', update);
    reduced.addEventListener('change', preferenceChanged);
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(stage);

    const images = Array.from(element.querySelectorAll<HTMLImageElement>('img'));
    Promise.all(images.map(image => image.decode())).then(() => {
      if (disposed) return;
      element.dataset.ready = 'true';
      preferenceChanged();
    }).catch(() => {
      // A missing layer must leave the complete photograph visible instead of a broken scene.
      if (!disposed) element.dataset.ready = 'fallback';
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      window.removeEventListener('pageshow', update);
      reduced.removeEventListener('change', preferenceChanged);
      delete element.dataset.ready;
    };
  }, []);

  return <section id="hero" ref={root} className={styles.hero} aria-label="Do ambiente vazio ao projeto completo">
    <div ref={viewport} className={styles.viewport}>
      <div className={styles.scene} aria-hidden="true">
        <div className={styles.canvas}>
          {/* Native images preserve alpha and use the dedicated experimental assets. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.empty} src="/experience/empty-1536.webp" srcSet="/experience/empty-768.webp 768w, /experience/empty-1536.webp 1536w" sizes="(max-width: 767px) 100vw, 150vh" alt="" width="1535" height="1025" fetchPriority="high" />
          {layers.map(layer => <div key={layer.name} data-layer={layer.name} className={`${styles.layer} ${styles[layer.name]}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/experience/${layer.name}-1536.webp`} srcSet={`/experience/${layer.name}-768.webp 768w, /experience/${layer.name}-1536.webp 1536w`} sizes={layer.name === 'tower' || layer.name === 'island' ? '(max-width: 767px) 50vw, 60vw' : '(max-width: 767px) 100vw, 100vw'} alt="" loading="eager" decoding="async" />
          </div>)}
          <div data-final className={styles.finalPhoto}>
            <Image src="/images/oca-showroom-2805.webp" alt="" fill priority sizes="(max-width: 767px) 100vw, 150vh" className={styles.original} />
          </div>
        </div>
      </div>
      <div className={styles.shade} />
      <div className={styles.content}>
        <span className="eyebrow">Oca Planejados · João Pessoa</span>
        <h1>Imagine o espaço.<br /><em>Veja a vida chegar.</em></h1>
        <p>Móveis planejados e sob medida.<br />Do primeiro traço ao seu jeito de viver.</p>
        <a href="https://wa.me/5583987922774?text=Olá!%20Quero%20conversar%20sobre%20meu%20projeto." target="_blank" rel="noopener noreferrer" className="btn-primary">Criar meu ambiente ↗</a>
      </div>
      <div className={styles.controls}>
        <div><span className={styles.instruction}>Role para compor o ambiente <span aria-hidden="true">↓</span></span><p data-caption>Seu espaço. Inteiramente seu.</p></div>
        <a href="#experiencia-completa" className={styles.skip}>Ver resultado <span aria-hidden="true">↘</span></a>
      </div>
      <div className={styles.progress} aria-hidden="true"><div data-progress /></div>
    </div>
    <div id="experiencia-completa" className={styles.end} aria-hidden="true" />
  </section>;
}
