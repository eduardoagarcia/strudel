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
samples('github:eduardoagarcia/strudel/main/samples/vocals')

setcpm(85/4)
const __scale = "a:minor"

// 0.20
// 0.36
// 0.41
// 0.68
// 0.73
$: s("cruush_vocals")
  .n("0")
  .scrub("< [0.20|0.36|0.41|0.68|0.73]@6 [0.20|0.36|0.41|0.68|0.73]@2 ~@8 >".fast(8))
  .struct("1*16")
  .cut(1)
  .gain(0.35)
  .phaser(0.75)
  .phasersweep(500)
  .room(0.75)
  .orbit(0)
  .postgain(1.5)
  ._pianoroll()

$: s("cruush_breaks").slow(2)
  .n("< 1@3 2@2 >")
  .fit()
  .cut(0)
  .slice(4, "< 3 2 1 0 3 2 1 0 3 1 >".fast(2))
  .clip(1)
  .gain(0.25)
  .room(0.35)
  .roomsize(4)
  .orbit(1)
  .postgain(1.35)
  .mask("< 1@4 ~@2 1@2 ~@1 1@2 ~@1 >")
  ._pianoroll()

$: n("[0 1 4 -1]*4".sometimesBy(.35, x=>x.add(choose(7))))
  .s("saw")
  .scale(__scale)
  .velocity(rand.range(0.5, 1.5))
  .pan(rand.range(0.1, 0.9))
  .ftype(choose("24db", "24db", "24db", "12db"))
  .lpf(sine.range(250, 750).slow(5.7))
  .lpenv(rand.range(0.8, 2.0))
  .lpdecay(2.0)
  .adsr("0.0:1.0:0.25:0.5")
  .gain(0.5)
  .room(0.75)
  .roomsize(10)
  .delay(0.5)
  .delaysync(0.25)
  .postgain(1.0)
  .orbit(0)
  ._pianoroll()

$: n("[-7 -5 -3 -5]/8")
  .s("supersaw")
  .scale(__scale)
  .ftype("24db")
  .lpf(250)
  .lpenv(3)
  .lpdecay(3)
  .lpsustain(0.25)
  .postgain(1.1)
  .orbit(0)
  ._pianoroll()

$: n("[-7 -12]/2")
  .s("saw")
  .scale(__scale)
  .velocity(rand.range(0.5, 1.3))
  .adsr("0.0:1.0:0.25:0.5")
  .lpf(100)
  .lpenv(3)
  .lpdecay(4)
  .lpsustain(0.25)
  .delay(0.75)
  .postgain(1.0)
  .orbit(0)
  ._pianoroll()
