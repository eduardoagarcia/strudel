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

// melody
$: n("< 0 1 < [3,7,0] [3,6,0] > 2 0 -1 4 [3,-7,0] 4 >")
  .s("supersaw")
  .scale(__scale)
  .struct("1 1 1?")
  .velocity(rand.range(0.5, 1.2))
  .fast(3)
  .spread(sine.range(0,2).slow(6))
  .detune(0.25)
  .lpf(25)
  .lpenv("5".sometimesBy(0.25, x=>x.add(rand.range(1,2))))
  .lpattack(0.0)
  .lpdecay("0.10".sometimesBy(0.20, x=>x.add(rand.range(0.15,0.5))))
  .lpsustain(0.25)
  .lprelease(3.0)
  .room(0.75)
  .roomsize(8)
  .delay(0.5)
  .delayfeedback(0.75)
  .delaysync(0.66)
  .postgain(1.25)
  ._pianoroll()

$: n("< 1 -1 0 -4 >".sub(8))
  .slow(2)
  .s("supersaw")
  .scale(__scale)
  .spread(1)
  .detune(0.25)
  .ftype("24db")
  .lpf(sine.range(250,350).slow(9))
  .lpenv(2)
  .lpattack(0.0)
  .lpdecay(3.0)
  .lpsustain(0.5)
  .lprelease(3)
  .postgain(1.0)
  ._pianoroll()
