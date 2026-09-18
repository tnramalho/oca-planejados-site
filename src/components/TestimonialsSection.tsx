'use client';
import { useEffect, useRef, useState } from 'react';

const TESTIMONIALS = [
  {
    name: 'Renata Sousa',
    role: 'Designer de Interiores, JP',
    text: 'Indico a Oca para todos os meus clientes. O nível de acabamento e o cuidado na instalação são incomparáveis em João Pessoa. Já fechamos mais de 10 projetos juntos.',
    stars: 5,
  },
  {
    name: 'Marcos Vieira',
    role: 'Engenheiro Civil, Manaíra',
    text: 'Fizemos a cozinha, o closet e o home office em um só projeto. Resultado impecável, prazo cumprido e o projeto 3D ajudou muito na hora de decidir os detalhes.',
    stars: 5,
  },
  {
    name: 'Luciana Fonseca',
    role: 'Médica, Altiplano',
    text: 'Minha suíte ficou exatamente como eu sonhei. A equipe é muito atenciosa, explicam cada detalhe e não te abandonam depois da entrega. Recomendo demais.',
    stars: 5,
  },
  {
    name: 'Roberto Almeida',
    role: 'Empresário, Cabo Branco',
    text: 'Reformei meu escritório inteiro com a Oca. Ficou moderno, funcional e valoriza muito o espaço profissional. Várias pessoas já me pediram o contato.',
    stars: 5,
  },
  {
    name: 'Ana Carolina',
    role: 'Arquiteta, Miramar',
    text: 'Como arquiteta, sou muito exigente com fornecedores. A Oca entende projetos técnicos, executa com precisão e tem variedade de materiais que facilitam muito o trabalho.',
    stars: 5,
  },
];

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="#C9A96E">
      <path d="M7 1l1.74 3.53L12.5 5.1l-2.75 2.68.65 3.78L7 9.62 3.6 11.56l.65-3.78L1.5 5.1l3.76-.57L7 1z" />
    </svg>
  );
}

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (n: number) => {
    setIdx((n + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    timer.current = setInterval(() => go(idx + 1), 5000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [idx]);

  const t = TESTIMONIALS[idx];

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-6 text-center reveal">
        <span className="text-white/30 text-xs tracking-[0.3em] uppercase mb-10 block">
          O que dizem nossos clientes
        </span>

        <div key={idx} style={{ animation: 'fadeIn 0.6s ease both' }}>
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8">
            {Array.from({ length: t.stars }).map((_, i) => <StarIcon key={i} />)}
          </div>

          {/* Quote */}
          <blockquote className="text-white/80 text-xl md:text-2xl font-light leading-relaxed mb-10 italic">
            &ldquo;{t.text}&rdquo;
          </blockquote>

          {/* Author */}
          <div>
            <div className="text-white text-sm font-medium">{t.name}</div>
            <div className="text-white/40 text-xs mt-1">{t.role}</div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-10">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`slide-dot ${i === idx ? 'active' : ''}`}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
