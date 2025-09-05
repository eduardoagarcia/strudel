/*
 ██████╗██████╗ ██╗   ██╗██╗   ██╗███████╗██╗  ██╗
██╔════╝██╔══██╗██║   ██║██║   ██║██╔════╝██║  ██║
██║     ██████╔╝██║   ██║██║   ██║███████╗███████║
██║     ██╔══██╗██║   ██║██║   ██║╚════██║██╔══██║
╚██████╗██║  ██║╚██████╔╝╚██████╔╝███████║██║  ██║
 ╚═════╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝

@by cruush
@url https://instagram.com/cruush
@url https://strudel.cc
*/

// init
setcpm(135/4)
let __scale = "g#:minor"

// melody
const __melody = s("supersaw")
  .n(perlin.range(-8, 16).seg(16).rib(200,16)).fast(8)
  .scale(__scale)
  .spread(1)
  .detune(0.25)
  .velocity(rand.range(0.5, 1.5).seg(16))
  .decay(rand.range(0.15, 1.0))
  .release(1.0)
  .lpenv(sine.range(4,6).slow(8))
  .lpdecay(1)
  .lpattack(0.01)
  .lpf(25)
  .lpq(0)
  .delay(0.5)
  .delayfeedback(0.5)
  .delaysync(0.25)
  .room(0.5)
  .roomsize(8)
  .gain(0.65)

// bass
const __bass = s("supersaw")
  .n("< 0 1 2 >".sub(16))
  .scale(__scale)
  .struct("1@4").slow(4)
  .spread(1)
  .detune(0.25)
  .release(1)
  .ftype("24db")
  .lpf(sine.range(200,500).slow(10))
  .lpenv(rand.range(1.5, "<2 3>".slow(3)).seg(16))
  .lpdecay(1.5)
  .gain(1.0)

// Play
$: __melody._scope()._pianoroll()
$: __bass._scope()._pianoroll()
