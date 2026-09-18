import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="sobre" className="editorial-about">
      <div className="editorial-intro">
        <span className="eyebrow">A essência Oca</span>
        <h2>Um espaço bem pensado.<br /><em>Uma vida bem vivida.</em></h2>
        <div className="editorial-intro-copy">
          <p>Há mais de três décadas, a Oca transforma a maneira de habitar. Somos uma empresa familiar de móveis planejados em João Pessoa, com um olhar atento para o que torna cada projeto pessoal.</p>
          <p>Da primeira conversa à montagem, proporção, funcionalidade e acabamento fazem parte da mesma intenção: criar ambientes que tenham a sua identidade.</p>
          <a href="#showroom" className="editorial-link">Conheça nosso showroom <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="editorial-detail">
        <div className="editorial-detail-photo"><Image src="/images/oca-showroom-2742.webp" alt="Painel amadeirado, cabeceira estofada e iluminação do showroom Oca" fill sizes="(max-width: 767px) 100vw, 45vw" style={{ objectFit: 'cover' }} /></div>
        <div className="editorial-detail-copy">
          <span className="eyebrow">O valor está nos detalhes</span>
          <h3>Texturas que acolhem.<br /><em>Detalhes que permanecem.</em></h3>
          <p>A madeira, a luz, o encontro dos materiais. Cada escolha participa da experiência de estar em casa. No showroom, você conhece os acabamentos e encontra referências para o seu projeto.</p>
          <a href="#contato" className="editorial-link">Converse sobre seu projeto <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
