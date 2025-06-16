/* eslint-disable import/no-anonymous-default-export */
import doodles from './doodles';

export default [
  {
    id: 'sky',
    title: 'Celestial Drift',
    description:
      'A serene expanse of stars, each twinkling with a unique rhythm. This generative starfield uses random placement and opacity shifts to create a feeling of drifting through an endless night.',
    doodle: doodles.starrySky,
  },
  {
    id: 'geo',
    title: 'Kinetic Grid',
    description:
      'A dynamic mosaic of color and form. This pattern explores rhythmic scaling and a vibrant, curated palette to generate a grid that feels both orderly and alive with energy.',
    doodle: doodles.geometricGrid,
  },
  {
    id: 'rain',
    title: 'Digital Downpour',
    description:
      'Experience a calming digital rainstorm. Hundreds of generated lines cascade down the screen at varying speeds and lengths, creating a moody and immersive atmosphere.',
    doodle: doodles.fallingRain,
  },
  {
    id: 'clover',
    title: 'Bioluminescent Blooms',
    description:
      'An abstract meadow of glowing flora. This pattern uses a five-leaf clover shape and cycles through the color spectrum to simulate a field of radiant, bioluminescent plants.',
    doodle: doodles.glowingClovers,
  },
  {
    id: 'bauhaus',
    title: 'Bauhaus Composition',
    description:
      'A tribute to the Bauhaus design movement. This piece uses simple circles and a bold, primary-inspired color palette to create a new, random composition with every refresh.',
    doodle: doodles.bauhausCircles,
  },
];
