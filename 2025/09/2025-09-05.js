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

setcpm(76/4)
const __scale = "f#:minor"
const __bd_duckorbit = "1"

// chords
$: n("[0,3,7] [0,3,6] [12,3,19] [12,3,7]".sub(8)).slow(4)
  .scale(__scale)
  .s("supersaw")
  .detune(0.25)
  .spread(1)
  .lpf(200)
  .lpenv(rand.range(2.0, 2.5))
  .lpdecay(2.0)
  .lpsustain(0.25)
  .lprelease(2.0)
  .delay(0.6)
  .delaysync(0.125)
  .delayfeedback(0.50)
  .room(0.75)
  .gain(0.5)
  .orbit(__bd_duckorbit)

// lead
const __lead_current = 0
const __lead_sequences = [
  {
    n: rand.range(8, 16).seg(16).rib(520,1),
    struct: "1 ~ 1 1 ~ ~ 1 ~ 1 < ~ 1 > ~ 1 1 < 1 ~ 1 > < ~ 1 > 1"
  },
]

$: n(__lead_sequences[__lead_current].n)
  .scale(__scale)
  .s("saw")
  .struct(__lead_sequences[__lead_current].struct)
  .velocity(rand.range(0.55, 1.2))
  .lpf(10)
  .lpq(0)
  .lpenv(rand.range(4.0, 5.5))
  .lpdecay(rand.range(0.15, 0.75))
  .lprelease(0.5)
  .release("0|2")
  .delay(0.75)
  .room(1.0)
  .gain(0.7)
  .orbit(__bd_duckorbit)
  ._pianoroll()

// bass
$: n("< 0 -1 1 -3 -2 >".sub(8))
  .slow(2)
  .scale(__scale)
  .s("supersaw")
  .detune(0.25)
  .spread(1)
  .ftype("24db")
  .lpf(150)
  .lpq(0)
  .lpenv(2.5)
  .lpdecay(3)
  .lpsustain(0.25)
  .gain(1.0)
  ._scope()

// drums
const __bd = s("bd:0")
  .bank("tr808")
  .struct("1 ~ ~ ~ ~ ~ ~ ~ ~ ~ 1 ~ ~ 1 < 1 ~ 1*2 ~ > ~")
  .gain(1.0)
  .orbit(0)
  .duckorbit(__bd_duckorbit)
  .duckdepth(0.5)

const __hh = s("hh")
  .bank("tr808")
  .struct(rand.round().seg(16).rib(301,2))
  .velocity(rand.range(0.7, 2))
  .pan(rand.range(0.1, 0.9))
  .almostNever(ply(2))
  .gain(0.5)

const __oh = s("oh:3")
  .bank("tr808")
  .struct("~ ~ ~ ~ ~ ~ ~ ~ ~ 1 ~ ~ ~ ~ ~ ~")
  .pan(rand.range(0.1, 0.9))
  .gain(0.35)

const __rm = s("rim")
  .bank("tr808")
  .struct("~ ~ ~ ~ ~ ~ 1 ~ ~ ~ ~ ~ ~ < 1 ~ 1*2 > ~ ~")
  .velocity(rand.range(0.5, 1.5))
  .pan(rand.range(0.1, 0.9))
  .almostNever(ply(2))
  .gain(0.3)

$: stack(
  __bd,
  __hh,
  __oh,
  __rm,
)._punchcard()
