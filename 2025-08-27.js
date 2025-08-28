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

/*
 * ╭───────────────────────────────────────────────────────────────╮
 * │ >>> samples                                                   │
 * ╰───────────────────────────────────────────────────────────────╯
 */
samples('github:switchangel/pad') // [0-4]

/*
 * ╭───────────────────────────────────────────────────────────────╮
 * │ >>> util                                                      │
 * ╰───────────────────────────────────────────────────────────────╯
 */
function bpmToCpm(bpm = 120) {
  return bpm / 4;
}

/*
 * ╭───────────────────────────────────────────────────────────────╮
 * │ >>> init │ c c# d d# e f f# g g# a a# b                       │
 * ╰───────────────────────────────────────────────────────────────╯
 */
setcpm(bpmToCpm(120))
let __scale = "f:minor"

/*
 * ╭───────────────────────────────────────────────────────────────╮
 * │ >>> drums                                                     │
 * ╰───────────────────────────────────────────────────────────────╯
 */
const __patterns = [
  {
    // { ● ○ ○ ○ ● ○ ○ ○ ● ○ ○ ○ ● ○ ○ ○ }
    bd: {
      trig: "1 ~ ~ ~ ~ ~ ~ ~ ~ ~ 1 ~ ~ ~ <~ 1> <~ ~ ~ 1>",
      vel: rand.range(0.7, 2).seg(16),
    },
    hh: "~ ~ 1 1 ~ ~ ~ ~ 1 ~ 1 ~ 1 ~ 1 ~",
    oh: "~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 1 ~ ~ ~ ~",
    rm: "~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 1 <1 ~> ~ <1 ~ ~ 1>",
    // { ● ○ ○ ○ ● ○ ○ ○ ● ○ ○ ○ ● ○ ○ ○ }
  },
  {
    // { ● ○ ○ ○ ● ○ ○ ○ ● ○ ○ ○ ● ○ ○ ○ }
    bd: {
      trig: "1 ~ 1 ~ 1 ~ 1 1 1 ~ 1 ~ ~ ~ <~ 1> <~ 1 ~ 1>",
      vel: rand.range(1.5, 3).seg(16),
    },
    hh: "~ ~ 1 1 ~ ~ ~ ~ 1 ~ 1 ~ 1 ~ 1 ~",
    oh: "~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 1 ~ ~ ~ ~",
    rm: "~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 1 <1 ~> ~ <1 ~ ~ 1>",
    // { ● ○ ○ ○ ● ○ ○ ○ ● ○ ○ ○ ● ○ ○ ○ }
  },
]
const __bd_duckorbit = "1"
const __current = 0

const __bd = s("bd:3")
  .bank("tr808")
  .struct(arrange(
    [4, __patterns[0].bd.trig],
    [1, __patterns[1].bd.trig],
    [1, rand.round().seg(16).rib(15,2)],
  ))
  .velocity(arrange(
    [4, __patterns[0].bd.vel],
    [1, __patterns[1].bd.vel],
    [1, __patterns[1].bd.vel],
  ))
  .gain("1")
  .orbit("0")
  .duckorbit(__bd_duckorbit)
  .duckdepth("0.35")

const __hh = s("hh")
  .bank("tr808")
  .struct(rand.round().seg(16).rib(15,2))
  // .struct(__patterns[__current].hh)
  .velocity(rand.range(0.7, 2).seg(16))
  .pan(rand.range(0.1, 0.9))
  .almostNever(ply("2"))
  .gain("0.5")
  .room("2")
  .roomsize("10")

const __oh = s("oh:0|1|2|3|4")
  .bank("tr808")
  .struct(__patterns[__current].oh)
  .pan(rand.range(0.2, 0.8))
  .gain("0.30")
  .room("3")
  .roomsize("10")

const __rm = s("rim")
  .bank("tr808")
  // .struct(rand.round().seg(16).rib(40,2))
  .struct(__patterns[__current].rm)
  // .degradeBy(0.75)
  .velocity(rand.range(0.5, 1.5).seg(16))
  .pan(rand.range(0.1, 0.9))
  .almostNever(ply("2"))
  .gain("0.4")
  .delay(0.5)
  .delaytime(1.25)
  .delayfeedback(0.5)

$: stack(
  __bd,
  __hh,
  __oh,
  __rm,
)._punchcard()

/*
 * ╭───────────────────────────────────────────────────────────────╮
 * │ >>> ambient pad                                               │
 * ╰───────────────────────────────────────────────────────────────╯
 */
$: s("swpad")
  .n("0")
  .speed("< -1.2 >")
  .scrub("<0.5@2 0.5@2 0.3@2 0.1@2>/2")
  .phaser("0.15")
  .phaserdepth("0.25")
  .room("0.5")
  .roomsize("10")
  .roomlp("500")
  .gain("0.7")
  .orbit(__bd_duckorbit)

/*
 * ╭───────────────────────────────────────────────────────────────╮
 * │ >>> bass                                                      │
 * ╰───────────────────────────────────────────────────────────────╯
 */
$: s("supersaw")
  //.n("< 0 -1 3 -3 >/2".sub(8))
  .n("< 0@2 -1 -3 >/2".sub(8))
  .scale(__scale)
  .struct("[x@5 x@3]")
  .spread(1)
  .detune(".1")
  .lpenv(4)
  .lpa(5)
  .lpf(150)
  .lpq(5)
  .phaser(0.25)
  .gain(1.0)
  ._scope()

// all(x => x.lpf(slider(100,0,100).pow(2)))
