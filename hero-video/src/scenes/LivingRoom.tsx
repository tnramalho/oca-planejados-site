import { AbsoluteFill, CanvasImage, interpolate, staticFile, useCurrentFrame } from 'remotion';

export const LivingRoom = () => {
  const frame = useCurrentFrame();
  return <AbsoluteFill style={{ overflow: 'hidden' }}><CanvasImage src={staticFile('images/oca-showroom-2775.webp')} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 50%', scale: interpolate(frame, [0, 179], [1.08, 1.02], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }} /></AbsoluteFill>;
};
