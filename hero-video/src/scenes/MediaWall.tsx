import { AbsoluteFill, CanvasImage, interpolate, staticFile, useCurrentFrame } from 'remotion';

export const MediaWall = () => {
  const frame = useCurrentFrame();
  return <AbsoluteFill style={{ overflow: 'hidden' }}><CanvasImage src={staticFile('images/oca-showroom-2763.webp')} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 55%', scale: interpolate(frame, [0, 179], [1.02, 1.08], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }} /></AbsoluteFill>;
};
