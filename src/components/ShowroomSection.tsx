import { business, mapEmbedUrl, mapsUrl } from '@/lib/site';

export default function ShowroomSection() {
  return (
    <section id="showroom" className="py-0 bg-[#F5F5F0]">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[560px]">
        {/* Left: content */}
        <div className="flex flex-col justify-center px-10 md:px-16 py-20 reveal">
          <span className="text-black/30 text-xs tracking-[0.3em] uppercase mb-6 block">
            Showroom
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-[#0A0A0A] leading-tight mb-8">
            Conheça nosso showroom
            <br />
            <em className="font-semibold not-italic">em João Pessoa</em>
          </h2>
          <p className="text-[#4A4A4A] text-base font-light leading-relaxed mb-8 max-w-md">
            Valorizamos a proximidade e a transparência em cada detalhe. Visite nosso showroom
            para conhecer os materiais, as ferragens e tomar um café enquanto conversamos
            sobre o seu projeto — sem compromisso.
          </p>

          <div className="space-y-5 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#0A0A0A]/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1C4.79 1 3 2.79 3 5c0 3.25 4 8 4 8s4-4.75 4-8c0-2.21-1.79-4-4-4z" fill="#0A0A0A" fillOpacity=".5" />
                </svg>
              </div>
              <div>
                <div className="text-[#0A0A0A] text-sm font-medium mb-0.5">Endereço</div>
                <div className="text-[#7A7A7A] text-sm font-light">
                  {business.streetAddress}
                  <br />
                  {business.neighborhood}, {business.city} — {business.state}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#0A0A0A]/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M12 9.33c-.73 0-1.43-.12-2.08-.33a.6.6 0 00-.62.14l-1.28 1.28A9.06 9.06 0 013.58 5.98l1.28-1.29a.6.6 0 00.14-.62A6.26 6.26 0 014.67 2a.6.6 0 00-.6-.6H2A.6.6 0 001.4 2 10.6 10.6 0 0012 12.6.6.6 0 0012.6 12v-2.07a.6.6 0 00-.6-.6z" fill="#0A0A0A" fillOpacity=".5" />
                </svg>
              </div>
              <div>
                <div className="text-[#0A0A0A] text-sm font-medium mb-0.5">WhatsApp</div>
                <a
                  href="https://wa.me/5583987922774"
                  className="text-[#7A7A7A] hover:text-[#0A0A0A] text-sm font-light transition-colors"
                >
                  (83) 98792-2774
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#0A0A0A]/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="5.5" stroke="#0A0A0A" strokeOpacity=".5" strokeWidth="1.2" />
                  <path d="M7 4v3l2 1.5" stroke="#0A0A0A" strokeOpacity=".5" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="text-[#0A0A0A] text-sm font-medium mb-0.5">Horário</div>
                <div className="text-[#7A7A7A] text-sm font-light">
                  Consulte os horários pelo WhatsApp e agende sua visita.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#0A0A0A]/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="2" y="4" width="10" height="7" rx="1" stroke="#0A0A0A" strokeOpacity=".5" strokeWidth="1.2" />
                  <path d="M2 6.5h10M5 4V2.5M9 4V2.5" stroke="#0A0A0A" strokeOpacity=".5" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="text-[#0A0A0A] text-sm font-medium mb-0.5">Estacionamento</div>
                <div className="text-[#7A7A7A] text-sm font-light">
                  Exclusivo para clientes no local
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/5583987922774?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20ao%20showroom%20da%20Oca%20Planejados."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp self-start"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Agendar visita
          </a>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-5 text-sm underline text-[#0A0A0A] self-start">Como chegar ao showroom</a>
        </div>

        {/* Right: map */}
        <div className="relative min-h-[400px] reveal reveal-delay-2">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir localização da Oca Planejados no Google Maps"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 rounded-lg bg-white px-5 py-4 text-[#0A0A0A] shadow-xl w-max max-w-[90%]"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" fill="#B38A4B" />
              <circle cx="12" cy="10" r="3" fill="white" />
            </svg>
            <span><strong className="block text-sm">Oca Planejados</strong><span className="text-xs">Abrir no Google Maps ↗</span></span>
          </a>
          <iframe
            title="Localização Oca Planejados"
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, position: 'absolute', inset: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
