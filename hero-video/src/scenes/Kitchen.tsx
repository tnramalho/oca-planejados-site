import { AbsoluteFill, CanvasImage, interpolate, staticFile, useCurrentFrame } from 'remotion';

export const Kitchen = ({ offset = 0 }: { offset?: number }) => {
  const frame = useCurrentFrame() + offset;
  return <AbsoluteFill style={{ overflow: 'hidden' }}><CanvasImage src={staticFile('images/oca-showroom-2805.webp')} style={{ width: '100%', height: '100%', objectFit: 'cover', scale: interpolate(frame, [0, 179], [1.03, 1.1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }} /></AbsoluteFill>;
};
