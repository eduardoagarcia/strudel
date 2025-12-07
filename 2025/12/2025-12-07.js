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
setcpm(137/4)
let __scale = "g#:minor"
const __bd_duckorbit = "1"

// melody
$: n("< 0 0 < 2 3 6 7 12 > 0 < [3,-7,0] [-3,6,0] 7 12 > >")
  .s("supersaw")
  .scale(__scale)
  .struct("1 1? 1? 1? 1")
  .velocity(rand.range(0.75, 1.2))
  .spread(sine.range(0,2).slow(6))
  .fast(3)
  .detune(0.25)
  .lpf(25)
  .lpenv("5".sometimesBy(0.25, x=>x.add(rand.range(1,2))))
  .lpattack(0.0)
  .lpdecay("0.10".sometimesBy(0.20, x=>x.add(rand.range(0.15,0.5))))
  .lpsustain(0.25)
  .lprelease(3.0)
  .room(0.75)
  .roomsize(8)
  .delay(0.25)
  .delayfeedback(0.65)
  .delaysync(0.5)
  .postgain(1.25)
  .orbit(__bd_duckorbit)
  ._pianoroll()

// bass
$: n("< -3 -2 -4 -6 >".sub(8))
  .slow(3)
  .s("supersaw")
  .scale(__scale)
  .spread(1)
  .detune(0.25)
  .ftype("24db")
  .lpf(sine.range(250,350).slow(9))
  .lpenv(3)
  .lpattack(0.0)
  .lpdecay(2)
  .lpsustain(0.10)
  .lprelease(3)
  .postgain(1.25)
  ._pianoroll()

// drums
const __bd = s("bd:5")
  .bank("tr808")
  .struct("1 ~ ~ ~ ~ ~ ~ ~ ~ 1 ~ ~ 1 ~ < ~ 1 > < ~ ~ ~ 1 >")
  .gain(1.5)
  .orbit(0)
  .duckorbit(__bd_duckorbit)
  .duckdepth(0.75)

const __hh = s("hh")
  .bank("tr808")
  .struct(rand.round().seg(16).rib(1,2))
  .velocity(rand.range(0.7, 2))
  .pan(rand.range(0.1, 0.9))
  .almostNever(ply(2))
  .gain(1.00)

const __oh = s("oh:3")
  .bank("tr808")
  .struct("~ ~ ~ < 1 ~ > ~ ~ ~ ~ ~ < ~ ~ 1 > ~ ~ ~ ~ ~ ~")
  .pan(rand.range(0.1, 0.9))
  .gain(1)

const __rm = s("rim")
  .bank("tr808")
  .struct("~ ~ ~ ~ 1 ~ < ~ 1 > ~ 1 1 ~ ~ ~ < 1 ~ > 1 ~")
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
