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

setcpm(96/4)
const __scale = "d#:minor"
const __bd_duckorbit = "1"

// lead
const __lead_current = 0
const __lead_sequences = [
  {
    n: rand.range(-8, 8).seg(16).rib(50,1),
    struct: "1 ~ ~ 1 1 ~ 1 1 < ~ ~ ~ 1 > 1 ~ ~ 1 < ~ 1 > ~ 1"
  },
  {
    n: rand.range(-8, 8).seg(16).rib(100,1),
    struct: "1 1 ~ 1 ~ ~ ~ ~ ~ ~ ~ ~ 1 ~ ~ ~"
  }
]

$: n(__lead_sequences[__lead_current].n)
  .scale(__scale)
  .s("saw")
  // .fm(rand.range(0, 4).round())
  .struct(__lead_sequences[__lead_current].struct)
  .velocity(rand.range(0.75, 1.2))
  .ftype("24db")
  .lpf(15)
  .lpq(0)
  .lpenv(rand.range(5.5, 6.5))
  .lpdecay(rand.range(0.15, 0.75))
  .lprelease(0.5)
  .release("0|0|2")
  .delay(0.5)
  .delaysync(0.125)
  .delayfeedback(0.85)
  .room(0.75)
  .gain(0.75)
  .orbit(__bd_duckorbit)
  ._pianoroll()

// bass
$: n("< 1 0 < -3 -2 > < -4 -1 > >".sub(8))
  .scale(__scale)
  .s("supersaw")
  .slow(2)
  .detune(0.25)
  .spread(1)
  .ftype("24db")
  .lpf(250)
  .lpq(5)
  .lpenv(2.5)
  .lpdecay(3)
  .lpsustain(0.25)
  .gain(1.00)
  ._scope()

// drums
const __bd = s("bd:0")
  .bank("tr808")
  .struct("1 ~ ~ ~ ~ ~ ~ ~ ~ ~ 1 ~ ~ 1 < 1 ~ > ~")
  .gain(1.0)
  .orbit(0)
  .duckorbit(__bd_duckorbit)
  .duckdepth(0.5)

const __hh = s("hh")
  .bank("tr808")
  .struct(rand.round().seg(16).rib(201,2))
  .velocity(rand.range(0.7, 2))
  .pan(rand.range(0.1, 0.9))
  .almostNever(ply(2))
  .gain(0.75)

const __oh = s("oh:3")
  .bank("tr808")
  .struct("~ ~ ~ ~ ~ ~ ~ ~ ~ 1 ~ ~ ~ ~ ~ ~")
  .pan(rand.range(0.1, 0.9))
  .gain(0.5)

const __rm = s("rim")
  .bank("tr808")
  .struct("~ ~ ~ ~ ~ ~ 1 ~ ~ ~ ~ ~ ~ 1 ~ ~")
  .velocity(rand.range(0.5, 1.5))
  .pan(rand.range(0.1, 0.9))
  .almostNever(ply(2))
  .gain(0.5)

$: stack(
  __bd,
  __hh,
  __oh,
  __rm,
)._punchcard()
