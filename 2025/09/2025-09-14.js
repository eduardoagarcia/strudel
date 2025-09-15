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
setcpm(170/4)
let __scale = "a:minor"

// melody
$: s("square")
  .n("< 0 < 0 6 > 0 -1 < -7 4 6 > >".sub(8)).fast(2)
  .scale(__scale)
  .ftype("12db")
  .lpf("15".sometimesBy(0.10, x=>x.add(rand.range(10,35))))
  .lpq(10)
  .lpenv("5".sometimesBy(0.25, x=>x.add(rand.range(1,3))))
  .lpdecay("0.25".sometimesBy(0.15, x=>x.add(rand.range(-0.15,0.25))))
  .lpsustain(0.15)
  .lprelease(0.25)
  .room(0.75)
  .roomsize(8)
  .delay(0.85)
  .delayfeedback(0.5)
  .delaysync(0.66)

// 606 drums
const __bd = s("bd")
  .bank("tr606")
  //     { ● ○ ○ ○ ● ○ ○ ○ ● ○ ○ ○ ● ○ ○ ○ }
  .struct("1 ~ ~ ~ ~ ~ ~ ~ 1 ~ ~ ~ ~ ~ < ~ 1 > ~")
  .gain(1.15)

const __sd = s("sd")
  .bank("tr606")
  //     { ● ○ ○ ○ ● ○ ○ ○ ● ○ ○ ○ ● ○ ○ ○ }
  .struct("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
  .gain(0.5)
  .room(0.15) 

const __lt = s("lt")
  .bank("tr606")
  //     { ● ○ ○ ○ ● ○ ○ ○ ● ○ ○ ○ ● ○ ○ ○ }
  .struct("~ ~ ~ ~ < ~ 1 ~ > ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
  .velocity(rand.range(0.7, 1.5))
  .gain(0.65)
  .room(0.25)

const __ht = s("ht")
  .bank("tr606")
  //     { ● ○ ○ ○ ● ○ ○ ○ ● ○ ○ ○ ● ○ ○ ○ }
  .struct("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ < 1 ~ ~ > ~ ~ ~")
  .velocity(rand.range(0.7, 1.5))
  .gain(0.65)
  .room(0.25)

const __hh = s("hh")
  .bank("tr606")
  .struct(rand.round().seg(16).rib(107,1))
  .slow(2)
  .velocity(rand.range(0.7, 1.2))
  .pan(rand.range(0.1, 0.9))
  .gain(0.30)
  .room(0.25)

const __cr = s("cr")
  .bank("tr606")
  .struct(rand.round().seg(16).rib(50,1))
  .slow(2)
  .velocity(rand.range(0.5, 1.2))
  .gain(0.30)
  .room(0.25)

$: stack(
  __bd,
  __sd.hush(),
  __lt,
  __ht,
  __hh,
  __cr,
)._punchcard()
