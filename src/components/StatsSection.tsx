'use client';
import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 33, suffix: '+', label: 'Anos de Tradição', description: 'Gerações de experiência em marcenaria de alto padrão' },
  { value: 8000, suffix: '+', label: 'Clientes Satisfeitos', description: 'Famílias e empresas que confiam na Oca há décadas' },
  { value: 120, suffix: '+', label: 'Cidades Atendidas', description: 'Presença em todo o nordeste e além' },
  { value: 100, suffix: '%', label: 'Sob Medida', description: 'Cada projeto é único, criado para o seu espaço' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section id="numeros" className="py-0">
      {/* Dark strip */}
      <div className="bg-[#0A0A0A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`reveal reveal-delay-${i + 1} px-8 py-10 text-center ${
                  i < STATS.length - 1
                    ? 'border-b md:border-b-0 md:border-r border-white/8'
                    : ''
                } ${i % 2 === 0 && i < STATS.length - 1 ? 'border-r md:border-r-0' : ''}`}
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3 tracking-tight">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/50 text-xs tracking-[0.2em] uppercase mb-2">
                  {stat.label}
                </div>
                <div className="text-white/30 text-xs font-light hidden md:block">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
