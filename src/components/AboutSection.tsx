export default function AboutSection() {
  return (
    <section id="sobre" className="py-28 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="reveal">
            <span className="text-black/30 text-xs tracking-[0.3em] uppercase mb-6 block">
              Nossa história
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-[#0A0A0A] leading-tight mb-8">
              33 anos criando
              <br />
              <em className="font-semibold not-italic">ambientes únicos</em>
            </h2>
            <div className="space-y-5 text-[#4A4A4A] text-base font-light leading-relaxed">
              <p>
                A Oca Planejados nasceu em João Pessoa com uma única missão: transformar espaços
                em experiências. Em três décadas, crescemos de uma pequena marcenaria no coração
                da Paraíba para uma referência em móveis planejados em todo o nordeste.
              </p>
              <p>
                Cada projeto começa com uma conversa. Entendemos o seu estilo de vida, o modo
                como você usa os espaços e o que faz você se sentir em casa. Então traduzimos
                tudo isso em um projeto 3D detalhado — antes de cortar uma única peça de madeira.
              </p>
              <p>
                Da cozinha ao closet, do quarto ao escritório: entregamos ambientes que funcionam
                perfeitamente e ficam bonitos para sempre. Não por acaso, mais de 8.000 famílias
                já confiaram na Oca para transformar seus lares.
              </p>
            </div>
            <a
              href="#showroom"
              className="inline-flex items-center gap-3 mt-10 text-[#0A0A0A] text-sm font-medium tracking-widest uppercase border-b border-[#0A0A0A]/30 pb-1 hover:border-[#0A0A0A] transition-all duration-300"
            >
              Conhecer o showroom
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Differentials */}
          <div className="reveal reveal-delay-2">
            <div className="grid grid-cols-1 gap-px bg-black/10">
              {[
                {
                  icon: '⬡',
                  title: 'Projeto 3D Gratuito',
                  desc: 'Visualize seu ambiente antes de qualquer investimento. Apresentamos o projeto em 3D fotorrealista para sua aprovação.',
                },
                {
                  icon: '◈',
                  title: 'Materiais de Alta Durabilidade',
                  desc: 'Utilizamos MDF e MDP de primeira linha com ferragens alemãs e italianas. Móveis que duram décadas.',
                },
                {
                  icon: '◎',
                  title: 'Fabricação Própria',
                  desc: 'Nossa fábrica em João Pessoa garante controle total de qualidade e prazos — sem intermediários.',
                },
                {
                  icon: '◇',
                  title: 'Garantia & Pós-Venda',
                  desc: 'Acompanhamento completo da instalação e suporte após a entrega. Você não fica sozinho depois da montagem.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-[#F5F5F0] p-8 hover:bg-white transition-colors duration-300">
                  <div className="text-2xl text-[#0A0A0A]/20 mb-4">{item.icon}</div>
                  <h3 className="text-[#0A0A0A] text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-[#7A7A7A] text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
