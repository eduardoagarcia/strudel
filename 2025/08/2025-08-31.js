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

// util
function bpmToCpm(bpm) {
  return bpm / 4;
}

// init
setcpm(bpmToCpm(120))
let __scale = "g:minor"

// drums
const __bd_duckorbit = "1"

const __bd = s("bd:0")
  .bank("tr808")
  //     { ● ○ ○ ○ ● ○ ○ ○ ● ○ ○ ○ ● ○ ○ ○ }
  .struct("1 ~ ~ ~ ~ ~ < 1 ~ 1 > ~ ~ ~ 1 ~ ~ ~ < ~ 1> < ~ ~ ~ 1>")
  .velocity(rand.range(0.7, 2).seg(16))
  .gain(1.0)
  .orbit("0")
  .duckorbit(__bd_duckorbit)
  .duckdepth("0.25")

const __hh = s("hh")
  .bank("tr808")
  .struct(rand.round().seg(16).rib(15,2))
  .velocity(rand.range(0.7, 2).seg(16))
  .pan(rand.range(0.1, 0.9))
  .sometimesBy(0.05, ply("2"))
  .gain(0.3)

const __oh = s("oh")
  .n(choose("0", "1", "2", "3", "4"))
  .bank("tr808")
  .struct("~ ~ ~ ~ ~ ~ ~ ~ ~ < ~ 1 ~ > ~ 1 ~ ~ ~ ~")
  .velocity(rand.range(0.7, 1.25).seg(16))
  .pan(rand.range(0.2, 0.8))
  .gain(0.2)

const __rm = s("rim")
  .bank("tr808")
  .struct("~ ~ 1 ~ ~ ~ ~ ~ ~ ~ ~ ~ 1 <1 ~ > ~ <1 ~ ~ 1>")
  .velocity(rand.range(0.5, 1.5).seg(16))
  .pan(rand.range(0.1, 0.9))
  .sometimesBy(0.05, ply("2"))
  .gain(0.4)
  .delay(0.15)
  .delayfeedback(0.5)

$: stack(
  __bd,
  __hh,
  __oh,
  __rm,
)._punchcard()


// plucks
$: s("saw")
  .n(irand(16).sub(4).seg(8).rib(250,16)).fast(16)
  .scale(__scale)
  .velocity(rand.range(0.75, 1.5).seg(16))
  .pan(rand.range(0.1, 0.9))
  .lpf(20)
  .lpq(0)
  .lpenv(rand.range("< 2 3 >".slow(2), "<8 5 7>".slow(4)).seg(8))
  .gain(0.4)
  .delay(0.75)
  .delaytime(0.49)
  .room(0.75)
  .orbit(__bd_duckorbit)
  ._pianoroll()


// bass
$: s("supersaw")
  .n("< 0 2 >".sub(16))
  .scale(__scale)
  .struct("1@5 1@3").slow(2)
  .spread(1)
  .detune(0.25)
  .lpf(200)
  .lpenv(rand.range("1", "<2 3>".slow(3)).seg(16))
  .lpdecay(1.0)
  .gain(1.0)
  ._pianoroll()

