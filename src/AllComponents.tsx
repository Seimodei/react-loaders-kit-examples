import React from 'react'


import AlternatingOrbits, { AlternatingOrbitsDetails } from './components/AlternatingOrbits';
import Atom, { AtomDetails } from './components/Atom';
import Bars, { BarsDetails } from './components/Bars';
import Bars2, { BarsDetails2 } from './components/BarsLoader2';
import Battery, { BatteryDetails } from './components/Battery';
import Blob, { BlobDetails } from './components/Blob';
import BlurrySquare, { BlurrySquareDetails } from './components/BlurrySquare';
import BouncyBalls, { BouncyBallsDetails } from './components/BouncyBalls';
import BrokenCircles, { BrokenCirclesDetails } from './components/BrokenCircles';
import CircleFade, { CircleFadeDetails } from './components/CircleFade';
import CirclePop, { CirclePopDetails } from './components/CirclePop';
import Clock, { ClockDetails } from './components/Clock';
import Dots, { DotsDetails } from './components/Dots';
import DoubleSquare, { DoubleSquareDetails } from './components/DoubleSquare';
import DrawWave, { DrawWaveDetails } from './components/DrawWave';
import DyingLight, { DyingLightDetails } from './components/DyingLight';
import EightBit, { EightBitDetails } from './components/EightBit';
import ElasticCircle, { ElasticCircleDetails } from './components/ElasticCircle';
import FillCircle, { FillCircleDetails } from './components/FillCircle';
import FillSquare, { FillSquareDetails } from './components/FillSquare';
import Flip, { FlipDetails } from './components/Flip';
import FlippingCube, { FlippingCubeDetails } from './components/FlippingCube';
import GooeyCircle, { GooeyCircleDetails } from './components/GooeyCircle';
import Gooey1, { Gooey1Details } from './components/Gooey1';
import Gooey2, { Gooey2Details } from './components/Gooey2';
import Helix, { HelixDetails } from './components/Helix';
import Hydrogen, { HydrogenDetails } from './components/Hydrogen';
import Hypnosis, { HypnosisDetails } from './components/Hypnosis';
import JellyBounce, { JellyBounceDetails } from './components/JellyBounce';
import KissyBalls, { KissyBallsDetails } from './components/KissyBalls';
import Line, { LineDetails } from './components/Line';
import Linneard, { LinneardDetails } from './components/Linneard';
import Liquid, { LiquidDetails } from './components/Liquid';
import MovingSquare, { MovingSquareDetails } from './components/MovingSquare';
import Notepad, { NotepadDetails } from './components/Notepad';
import PingPong, { PingPongDetails } from './components/PingPong';
import Pip, { PipDetails } from './components/Pip';
import PulseBubble, { PulseBubbleDetails } from './components/PulseBubble';
import RotatingBoxes, { RotatingBoxesDetails } from './components/RotatingBoxes';
import RotatingCircle, { RotatingCircleDetails } from './components/RotatingCircle';
import Slices, { SlicesDetails } from './components/Slices';
import SlidingCube, { SlidingCubeDetails } from './components/SlidingCube';
import Sphere, { SphereDetails } from './components/Sphere';
import SpinningCircle, { SpinningCircleDetails } from './components/SpinningCircle';
import SpinningOrbit, { SpinningOrbitDetails } from './components/SpinningOrbit';
import SwingingCube, { SwingingCubeDetails } from './components/SwingingCube';
import SwitchingCube, { SwitchingCubeDetails } from './components/SwitchingCube';
import Texture, { TextureDetails } from './components/Texture';
import Volume, { VolumeDetails } from './components/Volume';
import Vortex, { VortexDetails } from './components/Vortex';
import Wave, { WaveDetails } from './components/Wave';

   


const AllComponents = [
  {
    component: <AlternatingOrbits />,
    name: <AlternatingOrbitsDetails />,
    code: '<AlternatingOrbitsLoader />'
  },
  {
    component: <Atom />,
    name: <AtomDetails />, 
    code: '<AtomLoader />'
  },
  {
    component: <Bars />,
    name: <BarsDetails />,
    code: '<BarsLoader />'
  },
  {
    component: <Bars2 />,
    name: <BarsDetails2 />,
    code: '<BarsLoader2 />'
  },
  {
    component: <Battery />,
    name: <BatteryDetails />,
    code: '<BatteryLoader />'
  },
  {
    component: <Blob />,
    name: <BlobDetails />,
    code: '<BlobLoader />'
  },
  {
    component: <BlurrySquare />,
    name: <BlurrySquareDetails />,
    code: '<BlurrySquareLoader />'
  },
  {
    component: <BouncyBalls />,
    name: <BouncyBallsDetails />,
    code: '<BouncyBallsLoader />'
  },
  {
    component: <BrokenCircles />,
    name: <BrokenCirclesDetails />,
    code: '<BrokenCirclesLoader />'
  },
  {
    component: <CircleFade />,
    name: <CircleFadeDetails />,
    code: '<CircleFadeLoader />'
  },
  {
    component: <CirclePop />,
    name: <CirclePopDetails />,
    code: '<CirclePopLoader />'
  },
  {
    component: <Clock />,
    name: <ClockDetails />,
    code: '<ClockLoader />'
  },
  {
    component: <Dots />,
    name: <DotsDetails />,
    code: '<DotsLoader />'
  },
  {
    component: <DoubleSquare />,
    name: <DoubleSquareDetails />,
    code: '<DoubleSquareLoader />'
  },
  {
    component: <DrawWave />,
    name: <DrawWaveDetails />,
    code: '<DrawWaveLoader />'
  },
  {
    component: <DyingLight />,
    name: <DyingLightDetails />,
    code: '<DyingLightLoader />'
  },
  {
    component: <EightBit />,
    name: <EightBitDetails />,
    code: '<EightBitLoader />'
  },
  {
    component: <ElasticCircle />,
    name: <ElasticCircleDetails />,
    code: '<ElasticCircleLoader />'
  },
  {
    component: <FillCircle />,
    name: <FillCircleDetails />,
    code: '<FillCircleLoader />'
  },
  {
    component: <FillSquare />,
    name: <FillSquareDetails />,
    code: '<FillSquareLoader />'
  },
  {
    component: <Flip />,
    name: <FlipDetails />,
    code: '<FlipLoader />'
  },
  {
    component: <FlippingCube />,
    name: <FlippingCubeDetails />,
    code: '<FlippingCubeLoader />'
  },
  {
    component: <GooeyCircle />,
    name: <GooeyCircleDetails />,
    code: '<GooeyCircleLoader />'
  },
  {
    component: <Gooey1 />,
    name: <Gooey1Details />,
    code: '<GooeyLoader1 />'
  },
  {
    component: <Gooey2 />,
    name: <Gooey2Details />,
    code: '<GooeyLoader2 />'
  },
  {
    component: <Helix />,
    name: <HelixDetails />,
    code: '<HelixLoader />'
  },
  {
    component: <Hydrogen />,
    name: <HydrogenDetails />,
    code: '<HydrogenLoader />'
  },
  {
    component: <Hypnosis />,
    name: <HypnosisDetails />,
    code: '<HypnosisLoader />'
  },
  {
    component: <JellyBounce />,
    name: <JellyBounceDetails />,
    code: '<JellyBounceLoader />'
  },
  {
    component: <KissyBalls />,
    name: <KissyBallsDetails />,
    code: '<KissyBallsLoader />'
  },
  {
    component: <Line />,
    name: <LineDetails />,
    code: '<LineLoader />'
  },
  {
    component: <Linneard />,
    name: <LinneardDetails />,
    code: '<LinneardLoader />'
  },
  {
    component: <Liquid />,
    name: <LiquidDetails />,
    code: '<LiquidLoader />'
  },
  {
    component: <MovingSquare />,
    name: <MovingSquareDetails />,
    code: '<MovingSquareLoader />'
  },
  {
    component: <Notepad />,
    name: <NotepadDetails />,
    code: '<NotepadLoader />'
  },
  {
    component: <PingPong />,
    name: <PingPongDetails />,
    code: '<PingPongLoader />'
  },
  {
    component: <Pip />,
    name: <PipDetails />,
    code: '<PipLoader />'
  },
  {
    component: <PulseBubble />,
    name: <PulseBubbleDetails />,
    code: '<PulseBubbleLoader />'
  },
  {
    component: <RotatingBoxes />,
    name: <RotatingBoxesDetails />,
    code: '<RotatingBoxesLoader />'
  },
  {
    component: <RotatingCircle />,
    name: <RotatingCircleDetails />,
    code: '<RotatingCircleLoader />'
  },
  {
    component: <Slices />,
    name: <SlicesDetails />,
    code: '<SlicesLoader />'
  },
  {
    component: <SlidingCube />,
    name: <SlidingCubeDetails />,
    code: '<SlidingCubeLoader />'
  },
  {
    component: <Sphere />,
    name: <SphereDetails />,
    code: '<SphereLoader />'
  },
  {
    component: <SpinningCircle />,
    name: <SpinningCircleDetails />,
    code: '<SpinningCircleLoader />'
  },
  {
    component: <SpinningOrbit />,
    name: <SpinningOrbitDetails />,
    code: '<SpinningOrbitLoader />'
  },
  {
    component: <SwingingCube />,
    name: <SwingingCubeDetails />,
    code: '<SwingingCubeLoader />'
  },
  {
    component: <SwitchingCube />,
    name: <SwitchingCubeDetails />,
    code: '<SwitchingCubeLoader />'
  },
  {
    component: <Texture />,
    name: <TextureDetails />,
    code: '<TextureLoader />'
  },
  {
    component: <Volume />,
    name: <VolumeDetails />,
    code: '<VolumeLoader />'
  },
  {
    component: <Vortex />,
    name: <VortexDetails />,
    code: '<VortexLoader />'
  },
  {
    component: <Wave />,
    name: <WaveDetails />,
    code: '<WaveLoader />'
  },
]


export default AllComponents;