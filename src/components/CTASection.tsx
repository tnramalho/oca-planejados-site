import Image from 'next/image';

export default function CTASection() {
  return (
    <section id="contato" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/oca-4O9A2849.webp"
          alt="Cozinha planejada com ilha e armários amadeirados — Oca Planejados"
          fill
          style={{ objectFit: 'cover' }}
          quality={80}
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center reveal">
        <span className="text-white/30 text-xs tracking-[0.3em] uppercase mb-6 block">
          Pronto para começar?
        </span>
        <h2 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
          Transforme seu espaço
          <br />
          <em className="font-semibold not-italic">em algo inesquecível</em>
        </h2>
        <p className="text-white/60 text-lg font-light max-w-2xl mx-auto leading-relaxed mb-12">
          Envie a planta, as medidas ou as fotos do seu ambiente.
          Converse com nossa equipe e solicite uma proposta para seu projeto.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/5583987922774?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20móveis%20planejados."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base px-10 py-4"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Solicitar orçamento grátis
          </a>
          <a href="#showroom" className="btn-primary text-base px-8 py-4">
            Ver showroom
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 text-white/30 text-xs tracking-wider uppercase">
          <span>✓ Projeto 3D Grátis</span>
          <span>✓ 33 Anos de Experiência</span>
          <span>✓ Instalação Incluída</span>
          <span>✓ Garantia no Produto</span>
        </div>
      </div>
    </section>
  );
}
