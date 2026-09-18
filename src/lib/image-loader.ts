'use client';

import type { ImageLoaderProps } from 'next/image';

export default function imageLoader({ src, width }: ImageLoaderProps) {
  return src.startsWith('/images/') && src.endsWith('.webp')
    ? src.replace('/images/', '/images/responsive/').replace('.webp', `-${width}.webp`)
    : src;
}
