'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const navLinks = [
  { label: 'Ambientes', href: '/#ambientes' },
  { label: 'Portfólio', href: '/#portfolio' },
  { label: 'Showroom', href: '/#showroom' },
  { label: 'Dúvidas', href: '/#duvidas' },
  { label: 'Contato', href: '/#contato' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-scrolled py-3' : 'py-6'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="/#hero" className="flex-shrink-0">
          <Image
            src="/images/oca-logo.webp"
            alt="Oca Planejados"
            width={160}
            height={29}
            priority
            className="w-32 md:w-40 h-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white text-xs font-normal tracking-[0.2em] uppercase transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/5583987922774?text=Olá!%20Gostaria%20de%20conhecer%20os%20ambientes%20planejados%20da%20Oca."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex btn-primary text-xs"
        >
          Iniciar projeto
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-3 min-w-11 min-h-11 justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="menu-mobile"
        hidden={!menuOpen}
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-[calc(100dvh-80px)] overflow-y-auto opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(10,10,10,0.98)' }}
      >
        <div className="px-6 py-6 flex flex-col gap-1 border-t border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 min-h-11 text-white/80 text-xs font-normal tracking-[0.2em] uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5583987922774"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm justify-center mt-2"
          >
            <WhatsAppIcon /> Iniciar projeto
          </a>
        </div>
      </div>
    </header>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
