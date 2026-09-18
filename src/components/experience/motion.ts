export const layers = [
  { name: 'cabinet', start: 0.04, end: 0.35, x: -18, y: 7, rotation: -3, scale: 0.96 },
  { name: 'tower', start: 0.2, end: 0.52, x: 20, y: -5, rotation: 3, scale: 0.96 },
  { name: 'island', start: 0.4, end: 0.72, x: 0, y: 24, rotation: -2, scale: 1.12 },
  { name: 'dining', start: 0.58, end: 0.86, x: 0, y: 25, rotation: 1, scale: 1.08 },
] as const;

export function progressBetween(progress: number, start: number, end: number) {
  const value = Math.max(0, Math.min(1, (progress - start) / (end - start)));
  return value * value * (3 - 2 * value);
}

export function layerFrame(progress: number, layer: typeof layers[number]) {
  const arrived = progressBetween(progress, layer.start, layer.end);
  const remaining = 1 - arrived;
  return {
    opacity: progressBetween(progress, layer.start, layer.start + 0.09),
    transform: `translate3d(${layer.x * remaining}%, ${layer.y * remaining}%, 0) rotate(${layer.rotation * remaining}deg) scale(${1 + (layer.scale - 1) * remaining})`,
  };
}
