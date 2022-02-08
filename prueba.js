function DNAStrand(dna) {
    //your code here
    let chain = []
    chain = dna.split("")
    console.log(chain)
    var complements = []
    for (let i = 0; i < 5; i++) {
      if (chain[i] == "C") {complements.push("A")
      } else if (chain[i] == "A") {complements.push("C")
      } else if (chain[i] == "T") {complements.push("G")
      } else if (chain[i] == "G") {complements.push("C")
      }
    }
    console.log(complements)
    return complements.join('')
  
  }
  DNAStrand("ATGC")