'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type GalleryImage = { src: string; alt: string };

export default function ImageLightbox({ images, initialIndex, onClose }: {
  images: GalleryImage[];
  initialIndex: number;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(initialIndex);
  const image = images[index];
  const navigate = (direction: number) => setIndex(current => (current + direction + images.length) % images.length);

  useEffect(() => {
    const element = dialog.current!;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog
      ref={dialog}
      aria-label="Galeria de projetos"
      className="image-lightbox"
      onCancel={event => { event.preventDefault(); onClose(); }}
      onClick={event => { if (event.target === event.currentTarget) onClose(); }}
      onKeyDown={event => {
        if (event.key === 'ArrowLeft') { event.preventDefault(); navigate(-1); }
        if (event.key === 'ArrowRight') { event.preventDefault(); navigate(1); }
      }}
    >
      <div className="relative w-full max-w-6xl rounded-lg bg-[#101010] p-4 md:p-6">
        <div className="flex items-center justify-between mb-4 text-white">
          <span aria-live="polite" className="text-sm">{index + 1} / {images.length}</span>
          <button type="button" autoFocus onClick={onClose} aria-label="Fechar galeria" className="h-11 px-3 text-sm hover:bg-white/10 rounded">Fechar ×</button>
        </div>
        <div className="relative h-[55dvh] md:h-[65dvh]">
          <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1200px) 90vw, 1100px" style={{ objectFit: 'contain' }} />
        </div>
        <div className="flex items-center justify-between gap-3 mt-4">
          <button type="button" onClick={() => navigate(-1)} aria-label="Imagem anterior" className="shrink-0 h-11 w-11 text-white text-2xl rounded hover:bg-white/10">←</button>
          <p aria-live="polite" className="text-white/80 text-xs md:text-sm text-center">{image.alt}</p>
          <button type="button" onClick={() => navigate(1)} aria-label="Próxima imagem" className="shrink-0 h-11 w-11 text-white text-2xl rounded hover:bg-white/10">→</button>
        </div>
      </div>
    </dialog>
  );
}
