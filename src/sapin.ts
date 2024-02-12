console.log("  #  ");
console.log(" ### ");
console.log("#####");
const sapin = (taille: number) => {
  let acc = "";
  for (let i = 0; i < taille; i++) {
    acc += taille;
  }
  return acc;
};
console.log(sapin(5));

const tableauDiese = ["#", "#", "#", "#", "#"];
console.log(tableauDiese);

const fillSpaces = (tableau: string[], length: number) => {
  let spaces = " ";
  for (let i = 0; i < tableauDiese.length; i++) {
    for (let j = tableauDiese - i)

   
  }
  return tableau;
};

// le resultat attendu : ["#","#","#","#","#"]
console.log(fillSpaces([...tableauDiese], 0));
// le resultat attendu : [" ","#","#","#"," "]
console.log(fillSpaces([...tableauDiese], 1));
// le resultat attendu : [" "," ","#"," "," "]
console.log(fillSpaces([...tableauDiese], 2));

const copy1 = tableauDiese;
const copy2 = [...tableauDiese];
copy1[0] = " ";
console.log(copy1);
console.log(tableauDiese);
console.log(copy2);
