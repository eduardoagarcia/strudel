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
setcpm(bpmToCpm(85))
let __scale = "b:minor"

// Main piano
$: n(`
    [0 0 1 4 < 3 2 > -2 -3 < 8*2 10*2 12*2>],
    [-8 < -9 -7 > -11 -5]/2,
    [13? 16?]/3
  `) 
  .sound("piano")
  .scale(__scale)
  .velocity(rand.range(0.25, 1.1))
  .pan(rand.range(0.05, 0.95))
  .delay(0.25)
  .delaytime(0.49)
  .room(0.25)
  .gain(0.65)
  ._pianoroll()

// Random piano
$: n(irand(16).add(8).seg("< 16 8 32 >").degradeBy("< 0.75 0.65 0.45 >")).slow(2)
  .sound("piano")
  .scale(__scale)
  .velocity(rand.range(0.4, 1.1))
  .pan(rand.range(0.05, 0.95))
  .delay(0.25)
  .delaytime(0.25)
  .room(0.75)
  .gain(0.75)
  ._pianoroll()

