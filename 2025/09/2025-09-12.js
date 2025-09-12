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

setcpm(132/4)
const __scale = "d#:minor"

$: n("0 0 0 0 0 0 0 0".sub(8)
    .sometimesBy(
      "< 0.25 0.5 1 1 0 1 0.5 0.25 0 >",
      x=>x.add(
        choose(1, 8, 16).fast(8)
      )
    )
  )
  .s(choose("saw","square","saw","supersaw"))
  .scale(__scale)
  .struct("< 1 1 ~ 1 ~ 1 1? >".fast(8))
  .spread(1)
  .detune(0.25)
  .ftype(choose("24db", "12db"))
  .lpf(rand.range(8, 12).fast(8))
  .lpq(rand.range(0, 6).fast(8))
  .lpenv(rand.range(4, 6).fast(8))
  .lpattack(0.01)
  .lpdecay(0.5)
  .lpsustain(0.25)
  .lprelease(1)
  .distort(choose(
    "0:1.0",
    "0:1.0",
    "0:1.0",
    "1:0.50",
    "2:0.25",
    "4:0.10",
  ))
  .delay(sine.range(0.5, 0.75).slow(6))
  .delaysync(0.25)
  .delayfeedback(0.75)
  .room(0.75)
  .roomsize(10)
  .roomdim(1000)
  .gain(0.65)
  ._pianoroll()
