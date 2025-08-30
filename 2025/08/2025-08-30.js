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

// samples
samples('github:eduardoagarcia/strudel/main/samples/breaks')
samples('github:eduardoagarcia/strudel/main/samples/pads')

// util
function bpmToCpm(bpm = 120) {
  return bpm / 4;
}

// init
setcpm(bpmToCpm(169))
let __scale = "f:minor"

// drums
$: s("cruush_breaks").slow(8)
  .n("0")
  .fit()
  .slice(32, irand(32).seg(8).rib("<456@4 1000@4>",2))
  .velocity(rand.range(0.25, 1.5).seg(8))
  .delay(0.25)
  .gain(0.65)
  .mask("< ~@4 1@8 ~ 1@3 >")
  ._punchcard()

// pad
$: stack(
    s("cruush_pads")
      .n("1")
      // 0.00
      // 0.20
      // 0.505 (ambient)
      // 0.710
      // 0.747 (pluck)
      .scrub("<0.00, ~ ~ ~ 0.747 ~ ~ ~ ~ 0.710>").slow(4)
      .attack(0.15)
      .decay(1)
      .sustain(0.75)
      .release(3),
  )
  .phaser("0.15")
  .phaserdepth("0.25")
  .room("0.5")
  .roomsize("5")
  .gain("0.75")
  ._scope()

// lead
$: s("supersaw")
  .n("< 0 1 -1 -2 -5 >")
  .scale(__scale)
  .struct(" x ").slow(4)
  .spread(1)
  .detune(0.5)
  .adsr(1, 1, 1, 2)
  .lpenv(5)
  .lpf(1000)
  .lpq(5)
  .phaser(0.25)
  .room(1)
  .gain(1.0)
  ._scope()

// plucks
$: s("saw|supersaw|saw|saw|sine|square")
  .n(irand(16).sub(4).seg(8).rib(500,16)).fast(8)
  .scale(__scale)
  .lpenv(rand.range("3", "<8 5 7>".slow(4)).seg(8).rib(20,16))
  .velocity(rand.range(0.75, 1.25).seg(16))
  .lpf(25)
  .lpq(5)
  .room(0.95)
  .roomsize(10)
  .delay(0.5)
  .delaytime(0.5)
  .gain(1.25)
  .mask("< 1@8 ~@2 1@3 ~ 1@2 ~ >")
  ._pianoroll()
  
