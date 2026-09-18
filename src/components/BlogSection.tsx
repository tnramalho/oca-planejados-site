const ARTICLES = [
  {
    slug: 'cozinha-planejada-ou-sob-medida',
    title: 'Cozinha Planejada ou Sob Medida: Qual escolher em 2025?',
    excerpt:
      'Entenda as diferenças, vantagens e quando cada opção é a melhor escolha para o seu espaço em João Pessoa.',
    category: 'Guias',
    readTime: '5 min',
    date: '2025-06-10',
  },
  {
    slug: 'closet-planejado-joao-pessoa',
    title: '7 Ideias de Closet Planejado para Apartamentos em João Pessoa',
    excerpt:
      'Como aproveitar ao máximo o espaço de closets em imóveis menores, sem abrir mão da organização e do estilo.',
    category: 'Inspiração',
    readTime: '4 min',
    date: '2025-05-28',
  },
  {
    slug: 'home-office-produtivo',
    title: 'Como criar um Home Office Produtivo com Móveis Planejados',
    excerpt:
      'Dicas práticas de ergonomia, organização e design para transformar qualquer cômodo em um escritório de alta performance.',
    category: 'Dicas',
    readTime: '6 min',
    date: '2025-05-14',
  },
  {
    slug: 'tendencias-moveis-planejados-2025',
    title: 'Tendências em Móveis Planejados para 2025',
    excerpt:
      'Tons terrosos, madeiras naturais, iluminação embutida e integração entre ambientes dominam os projetos do ano.',
    category: 'Tendências',
    readTime: '4 min',
    date: '2025-04-30',
  },
  {
    slug: 'quanto-custa-moveis-planejados-jp',
    title: 'Quanto custa móveis planejados em João Pessoa? Guia completo',
    excerpt:
      'Tabela de referência de preços, fatores que influenciam o orçamento e como fazer um investimento inteligente.',
    category: 'Finanças',
    readTime: '7 min',
    date: '2025-04-15',
  },
  {
    slug: 'materiais-moveis-planejados',
    title: 'MDF, MDP ou Madeira Maciça? Guia dos materiais para móveis planejados',
    excerpt:
      'Comparativo completo de durabilidade, acabamento, custo e aplicação ideal de cada material em ambientes residenciais.',
    category: 'Educação',
    readTime: '5 min',
    date: '2025-03-20',
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Guias: 'text-blue-400',
  Inspiração: 'text-purple-400',
  Dicas: 'text-green-400',
  Tendências: 'text-amber-400',
  Finanças: 'text-emerald-400',
  Educação: 'text-rose-400',
};

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 reveal">
          <div>
            <span className="text-white/30 text-xs tracking-[0.3em] uppercase mb-4 block">
              Conteúdo
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
              Aprenda sobre
              <br />
              <em className="font-semibold not-italic">ambientes planejados</em>
            </h2>
          </div>
          <p className="text-white/40 text-sm font-light max-w-xs leading-relaxed">
            Guias, dicas e inspiração para quem quer um lar mais bonito e funcional.
          </p>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((article, i) => (
            <article
              key={article.slug}
              className={`blog-card p-7 reveal reveal-delay-${(i % 3) + 1} cursor-pointer`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className={`text-xs font-medium ${CATEGORY_COLORS[article.category] ?? 'text-white/40'}`}>
                  {article.category}
                </span>
                <span className="text-white/20 text-xs">·</span>
                <span className="text-white/30 text-xs">{article.readTime} de leitura</span>
              </div>

              <h3 className="text-white text-lg font-medium leading-tight mb-3 group-hover:text-white/80">
                {article.title}
              </h3>
              <p className="text-white/40 text-sm font-light leading-relaxed mb-6">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <time className="text-white/25 text-xs" dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
                <span className="text-white/40 text-xs tracking-widest uppercase hover:text-white transition-colors">
                  Ler →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
