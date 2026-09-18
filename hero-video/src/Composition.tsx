import { AbsoluteFill } from 'remotion';
import { TransitionSeries, linearTiming } from '@remotion/transitions';
import { fade } from '@remotion/transitions/fade';
import { Kitchen } from './scenes/Kitchen';
import { LivingRoom } from './scenes/LivingRoom';
import { Bedroom } from './scenes/Bedroom';
import { MediaWall } from './scenes/MediaWall';

export const HeroVideo = () => (
  <AbsoluteFill style={{ backgroundColor: '#111' }}>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={180}><Kitchen /></TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 30 })} />
      <TransitionSeries.Sequence durationInFrames={180}><LivingRoom /></TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 30 })} />
      <TransitionSeries.Sequence durationInFrames={180}><Bedroom /></TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 30 })} />
      <TransitionSeries.Sequence durationInFrames={180}><MediaWall /></TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 30 })} />
      <TransitionSeries.Sequence durationInFrames={31}><Kitchen offset={-30} /></TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);
