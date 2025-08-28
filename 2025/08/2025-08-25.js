/*
@title Piano Demo
@by    Eduardo Garcia
*/

function bpmToCpm(bpm) {
  return bpm / 4;
}

// Init
setcpm(bpmToCpm(170))

// Main piano
$: note("[c3 e3 g3 <b3 b4>], <a2 <c2 c5> d2 e2>/2, <d4 a4>/4")
  .sound("piano")
  .velocity(rand.range(0.6, 2))
  .room(0.5)
  .roomsize(5)
  .roomdim(100)
  .pianoroll()

// Random repeating piano
const notes = ["a", "a5", "a4", "b", "b5", "b6", "g", "g6"]
$: note(irand(7).pick(notes).rib(irand(1000),8))
  .sound("piano")
  .velocity(rand.range(0.6, 2))
  .fast("<6 3>/4")
  .ply("1|2")
  .degradeBy(0.8)
  .room(0.75)
  .roomsize(10)
  .gain(0.65)
  .mask("<0 1@8>/2")
