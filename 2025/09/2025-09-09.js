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

setcpm(170/4)
const __scale = "f:minor"
const __duckorbit = "1"

// samples
samples('github:eduardoagarcia/strudel/main/samples/breaks')
samples('github:eduardoagarcia/strudel/main/samples/pads')

// drums
$: s("cruush_breaks").slow(8)
  .n("0")
  .fit()
  .slice(8, "< 0 2 0 3 4 0 < 2 3 > 7 >")
  .cut(1)
  .gain(0.5)
  .room("< 0.65 0.5 0.6 0.5 0.75 0.65 0.5 0.85 >")
  .roomdim(5000)
  .roomfade(5)
  .orbit(0)
  .duckorbit(__duckorbit)
  .duckdepth(0.25)
  .mask("< 1 1 1 1 ~ ~ 1 ~ >".slow(4))
  ._punchcard()

// pad
$: s("cruush_pads")
  .n("1")
  .scrub("< 0.070@3 0.4@2 0.070@3 0.78@2 >")
  .cut(2)
  .attack(0.05)
  .ftype("24db")
  .lpf(250)
  .lpenv(5)
  .lpattack(1.5)
  .lpdecay(1.0)
  .lpsustain(0.25)
  .phaser(0.75)
  .phasersweep(500)
  .room(0.85)
  .roomsize(8)
  .roomfade(15)
  .gain(0.75)
  .orbit(__duckorbit)
  ._punchcard()

// piano
const __seg = 8
const __slow = (__seg / 8)
$: n(irand(8).add(16).seg(__seg).rib("< 2@4 100@8 3@4 56@2 >",1).slow(__slow))
  .s("piano")
  .scale(__scale)
  .velocity(rand.range(0.50, 1.5))
  .room(0.75)
  .gain(0.75)
  .orbit(__duckorbit)
  .mask("< 1@8 ~@2 1 ~ 1@4 ~ >".slow(2))
  ._pianoroll()
