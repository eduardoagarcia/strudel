/*
 ██████╗██████╗ ██╗   ██╗██╗   ██╗███████╗██╗  ██╗
██╔════╝██╔══██╗██║   ██║██║   ██║██╔════╝██║  ██║
██║     ██████╔╝██║   ██║██║   ██║███████╗███████║
██║     ██╔══██╗██║   ██║██║   ██║╚════██║██╔══██║
╚██████╗██║  ██║╚██████╔╝╚██████╔╝███████║██║  ██║
 ╚═════╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝

@by cruush
@url https://instagram.com/cruush
*/

// samples
samples('github:tidalcycles/dirt-samples')
samples({ vocals: 'https://cdn.freesound.org/previews/555/555917_11532701-lq.mp3' })

// util
function bpmToCps(bpm) {
  return bpm / 4;
}

// init
setcpm(bpmToCps(165))
let __scale = "f#:minor"

// drums
let __drum_patterns = [
  //--> 0
  "0 1 2 3 <4 <5 4>> <<6 0> 7> <1 2> <0 3>",
  //--> 1
  "[0 1 2 3 4 <5 0 2> <6 0 2 0> 7]",
  //--> 2
  "0 1 2 3 4 5 6 7",
  //--> 3
  "- - - - - - - -"
]
let active_drum_pattern = 0
$: s("breaks165")
  .fit()
  .slice(8, __drum_patterns[active_drum_pattern])
  .velocity(choose(0.9, 0.95, 0.75, 1.5, 1, 1.2, 2))
  .room("0.25:5")
  .mask("<0 1 1 0>/8")
  .gain(1.00)
  ._punchcard({height: 25, width: 1600})

// 808 kick
$: sound("BD BD BD BD")
  .bank("RolandTR808")
  .velocity(choose(0.9, 0.95, 0.75, 1.5, 1, 1.2, 2))
  .mask("<0 0 1 1 0 1 1 1>/8")
  .gain(1.5)
  ._punchcard({height: 25, width: 1600})

// melody
let __melody_patterns = [
  //--> 0
  "6 4 2 0, [3 7], <0 2>/2",
]
let active_melody_pattern = __melody_patterns[0]
$: n(active_melody_pattern)
  .scale(__scale)
  .s("supersaw")
  .adsr("0.05:0.15:0.1:1")
  .velocity(choose(0.9, 0.95, 0.75, 1.5, 1, 1.2, 2))
  .lpf(slider(1500, 0, 5000))
  .lpq(slider(10, 0, 50))
  .delay("0.5:2:0.75")
  .room("0.75:10")
  .mask("<1 1 1 0>/8")
  .gain(0.85)
  ._punchcard({height: 25, width: 1600})

// bass
$: n("[-10 -12 -11 -14]/8")
  .scale(__scale)
  .s("saw")
  .lpf(sine.range(100,800).slow(2))
  .lpq(sine.range(1,20).slow(1))
  // .lpf(slider(400, 0, 2500))
  // .lpq(slider(10, 0, 50))
  .mask("<1 1 1 1>/8")
  .gain(1.25)
  ._punchcard({height: 25, width: 1600})

// vocals
// voicing: 0 4 6 7 10 11 14 15
// ambient: 1 3 5
$: s("vocals")
  .slice(16, "[0 7 11 15]/4, [4 10 14]/6")
  .delay("0.25:1:0.5")
  .room("2:20")
  .mask("<1 1 0 1>/8")
  .gain(1.15)
  ._punchcard({height: 25, width: 1600})

// eof
