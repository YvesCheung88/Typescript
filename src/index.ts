const tableau1 = [1, 4, 7];

for (let i = 0; i < tableau1.length; i++) {
  if (tableau1[i] % 2 == 0) {
    console.log("Voici le nombre pair : " + tableau1[i]);
  } else {
    console.log("Voici le nombre impaire : " + tableau1[i]);
  }
}
const afficherTableau = (tableau: number[]) => {
  for (let i = 0; i < tableau.length; i++) {
    console.log(`la valeur a la position  ${i} est ${tableau[i]} `);
  }
};

afficherTableau(tableau1);

const powerTwo = (nombre: number) => {
  return nombre * nombre;
};
console.log(powerTwo(7));

const map = (tableau: number[], callBack: (nombre: number) => number) => {
  const newGrid: number[] = [];
  for (let i = 0; i < tableau.length; i++) {
    const newValue = callBack(tableau[i]);
    newGrid.push(newValue);
  }
  return newGrid;
};

console.log(map(tableau1, powerTwo));
const gridTempo = map(tableau1, powerTwo);
console.log(`nouveau tableau :  ${gridTempo}`);

const multiplyByFive = (nombre: number) => 5 * nombre;

console.log(map(tableau1, (nombre) => 5 * nombre));
console.log(tableau1.map((nombre) => 5 * nombre));
console.log(tableau1.map(multiplyByFive));

console.log(tableau1.map(multiplyByFive).map(multiplyByFive));

const multiply = (facteur: number) => {
  return (nombre: number) => {
    return facteur * nombre;
  };
};
const multiplyByTen = multiply(10);

// const multiplyByTen = (nombre: number) => {
//   return 10 * nombre;
// };
console.log(tableau1.map(multiplyByTen));

const multiplyByFactor = (facteur: number, nombre: number) => {
  return facteur * nombre;
};
console.log(tableau1.map((nombre) => multiplyByFactor(10, nombre)));
