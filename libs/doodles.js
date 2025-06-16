/* eslint-disable import/no-anonymous-default-export */

export default {
  glowingClovers: `
    /* The main canvas for the background */
    :doodle {
      @grid: 1 / 100vw 100vh;
      background: #0a0c27;
    }
    /* The shapes drawn on top */
    @grid: 7 / 100vmax;
    @shape: clover 5;
    background: hsla(-@i(*4), 70%, 68%, @r(.8));
    transform:
      scale(@r(.2, 1.5))
      translate(@m2.@r(±50%));
  `,

  starrySky: `
    /* The main canvas for the background */
    :doodle {
      @grid: 1 / 100vw 100vh;
      background: @radial-gradient(
        ellipse at 50% 100%,
        #0d1a2f,
        #090a0f 60%
      );
    }
    /* The shapes drawn on top */
    @grid: 1500 / 100vw 100vh;
    @size: 1px;
    @place-cell: @r(100%) @r(100%);
    transform: scale(@r(.5, 1.5));
    background: hsla(0, 0%, 100%, @r(.1, .8));
    animation: twinkle @r(1s, 5s) infinite alternate;
    @keyframes twinkle {
      from { opacity: @r(0.1); }
      to { opacity: @r(0.8); }
    }
  `,

  geometricGrid: `
    /* The main canvas for the background */
    :doodle {
      @grid: 1 / 100vw 100vh;
      background: #1a1a2d;
    }
    /* The shapes drawn on top */
    @grid: 20x20 / 80vmin; /* A centered grid for the shapes */
    background: @pick(#69D2E7, #A7DBD8, #E0E4CC, #F38630, #FA6900);
    transform: scale(@r(.2, .9));
    opacity: @r(.5, 1);
  `,

  fallingRain: `
    /* The main canvas for the background */
    :doodle {
      @grid: 1 / 100vw 100vh;
      background: #2c3e50;
    }
    /* The shapes drawn on top */
    @grid: 800 / 100vw 100vh;
    @size: 1px @r(10, 60)px;
    background: #ecf0f1;
    animation: fall @r(1, 4)s linear infinite;
    @keyframes fall {
      from { transform: translateY(-20vh); }
      to { transform: translateY(120vh); }
    }
  `,

  bauhausCircles: `
    /* The main canvas for the background */
    :doodle {
      @grid: 1 / 100vw 100vh;
      background: #f0e7d8;
    }
    /* The shapes drawn on top */
    @grid: 25 / 90vmin; /* A centered grid for the shapes */
    border-radius: 50%;
    background: @pick(#f94144, #f3722c, #f9c74f, #90be6d, #43aa8b, #577590);
    @size: @r(5px, 100%);
    transform: translate(@r(-50%, 50%), @r(-50%, 50%));
    opacity: @r(.7, 1);
  `,
};
