const RNA = ["C", "G", "A", "U"];
const DNA = ["G", "C", "T", "A"];

function rnaTranscription(dna) {
  let rna = "";
  for (let char of dna) {
    if (!DNA.includes(char)) return "incorrect dna input, please try again!";
    rna += RNA[DNA.indexOf(char)];
  }
  return rna;
}

console.log(rnaTranscription("GCTAAA"));
