const createArray = (taille: number, filler: string) => {
  let tableau7: string[] = [];
  for (let i = 0; i < taille; i++) {
    tableau7[i] = filler;
  }
  return tableau7;
};
// le resultat attendu : ["#","#","#","#","#"]
console.log(createArray(5, "#"));
// le resultat attendu : ["#","#","#","#","#","#","#"]
console.log(createArray(7, "#"));
console.log(createArray(5, "."));

const wulu = ["h", "e", "l", "m", "o"];
console.log(wulu[wulu.length - 2]);
