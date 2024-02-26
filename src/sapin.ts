console.log("  #  ");
console.log(" ### ");
console.log("#####");

const tableauDiese = ["#", "#", "#", "#", "#"];

// sapin 5 donne un tableau de 3 éléments de longueur 5
// sapin 6 donne un tableau de 3 éléments de longueur 6
// sapin 7 donne un tableau de 4 éléments de longueur 7
// sapin 8 donne un tableau de 4 éléments de longueur 8

console.log(tableauDiese);

const fillSpaces = (tableau: string[], length: number) => {
  for (let i = 0; i < tableau.length; i++) {
    if (i < length || i >= tableau.length - length) {
      tableau[i] = " ";
    }
  }
  return tableau;
};
// le resultat attendu : [" "," ","#"," "," "]
console.log(fillSpaces([...tableauDiese], 2));
// le resultat attendu : [" ","#","#","#"," "]
console.log(fillSpaces([...tableauDiese], 1));
// le resultat attendu : ["#","#","#","#","#"]
console.log(fillSpaces([...tableauDiese], 0));

const copy1 = tableauDiese;
const copy2 = [...tableauDiese];
copy1[0] = " ";
console.log(copy1);
console.log(tableauDiese);
console.log(copy2);

const createLine = (taille: number) => {
  let diese = "";
  for (let i = 0; i < taille; i++) {
    diese += "#";
  }
  return diese;
};
// le resultat attendu : "#####"
console.log(createLine(5));
// le resultat attendu : "#######"
console.log(createLine(7));
// le resultat attendu : "########"
console.log(createLine(8));

const calculateSize = (taille: number) => {
  return (taille + (taille % 2)) / 2;
};

// le resultat attendu : 3
console.log(calculateSize(5));
// le resultat attendu : 4
console.log(calculateSize(7));
// le resultat attendu : 4
console.log(calculateSize(8));

const sapin = (taille: number) => {
  const size = calculateSize(taille);
  const arraySapin = [];
  for (let i = 0; i < size; i++) {
    arraySapin[i] = createLine(taille);
  }
  return arraySapin;
};
// fill space attend un tableau mais on veut un string
// split / join conversion
// le resultat attendu : ["  #  "," ### ","#####"]
console.log(sapin(5));
// le resultat attendu :["   #   ","  ###  "," ##### ","#######"]
console.log(sapin(7));
// le resultat attendu :["  ##  "," #### ","######"]
console.log(sapin(6));
// le resultat attendu :["   ##   ","  ####  "," ###### ","########"]
console.log(sapin(8));
