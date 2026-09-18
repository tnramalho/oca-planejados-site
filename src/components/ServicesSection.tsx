import Image from 'next/image';

const SERVICES = [
  {
    title: 'Cozinha Planejada',
    description:
      'Espaços funcionais com design sofisticado. Armários, bancadas, iluminação embutida e acabamentos premium que transformam sua cozinha no coração da casa.',
    image: '/images/oca-gallery1.webp',
    keywords: ['cozinha planejada jp', 'cozinha sob medida joão pessoa'],
  },
  {
    title: 'Closet & Walk-in',
    description:
      'Organização e elegância em perfeito equilíbrio. Closets com iluminação LED, cabideiros duplos, gavetas e espelhos que otimizam cada centímetro.',
    image: '/images/oca-gallery3.webp',
    keywords: ['closet planejado jp', 'walk-in closet joão pessoa'],
  },
  {
    title: 'Dormitórios',
    description:
      'Quarto, suíte ou infantil — criamos ambientes que favorecem o descanso e refletem a personalidade de quem dorme ali, do painel da cama ao guarda-roupa.',
    image: '/images/oca-gallery2.webp',
    keywords: ['quarto planejado jp', 'dormitório planejado joão pessoa'],
  },
  {
    title: 'Home Office',
    description:
      'Produtividade com conforto. Bancadas com tomadas integradas, estantes com LED, nichos e painéis que transformam qualquer cômodo em um escritório de alto desempenho.',
    image: '/images/oca-gallery6.webp',
    keywords: ['home office planejado jp', 'escritório planejado joão pessoa'],
  },
  {
    title: 'Sala de Estar',
    description:
      'Painéis de TV, racks, estantes e elementos decorativos que dão personalidade e fluidez aos ambientes sociais da sua residência.',
    image: '/images/oca-gallery5.webp',
    keywords: ['sala planejada jp', 'painel tv joão pessoa'],
  },
  {
    title: 'Escritório Corporativo',
    description:
      'Soluções para empresas, consultórios e escritórios profissionais. Recepções, salas de reunião e espaços de trabalho com identidade e funcionalidade.',
    image: '/images/oca-drive-1-4O9A3807.jpg',
    keywords: ['móveis corporativos jp', 'escritório planejado pb'],
  },
];

export default function ServicesSection() {
  return (
    <section id="ambientes" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16 reveal">
          <span className="text-white/30 text-xs tracking-[0.3em] uppercase mb-4 block">
            O que fazemos
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-6">
            Soluções para todos
            <br />
            <em className="font-semibold not-italic">os seus ambientes</em>
          </h2>
          <p className="text-white/50 text-base font-light leading-relaxed">
            Cada cômodo tem uma história para contar. Nós projetamos, fabricamos e instalamos
            móveis planejados que se adaptam perfeitamente ao seu espaço e ao seu estilo de vida.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {SERVICES.map((service, i) => (
            <article
              key={service.title}
              className={`reveal reveal-delay-${(i % 3) + 1} bg-[#0d0d0d] group`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-white text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed mb-6">
                  {service.description}
                </p>
                <a
                  href={`https://wa.me/5583987922774?text=Olá!%20Tenho%20interesse%20em%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white text-xs tracking-widest uppercase transition-colors duration-300 flex items-center gap-2"
                >
                  Solicitar orçamento
                  <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-16" />
                </a>
              </div>

              {/* Hidden SEO keywords */}
              <div className="hidden" aria-hidden="true">
                {service.keywords.join(', ')}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
