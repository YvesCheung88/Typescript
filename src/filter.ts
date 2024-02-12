const tableau = [3, 6, 9, 12, 15];

for (let i = 0; i < tableau.length; i++) {
  const element = tableau[i];

  console.log(`l'élement de  ${i} est ${element}`);
}
const isEven = (nombre: number) => nombre % 2 === 0;

const Paire = (nombre: number) => {
  return nombre % 2 === 0;
};
const afficherPair = (nombre: number) => {
  if (isEven(nombre)) console.log(`${nombre} le nombre est pair `);
};

/*
La condition est d'utilisé la fonction isEven pour vérifier si le nombre est pair.
 La fonction isEven retourne true si le nombre est pair edéclaration de la variable nommée afficherPair qui est initialisée avec la valeur de type fonction anonyme(nombre: number) => boolean
t false s'il est impair.
*/
tableau.map(afficherPair);
console.log(tableau.map);

/*
Ici 
*/
const filter = (tableau: number[], callBack: (nombre: number) => boolean) => {
  const newArray = [];
  for (let i = 0; i < tableau.length; i++)
    if (callBack(tableau[i])) newArray.push(tableau[i]);
  return newArray;
};
console.log(filter(tableau, isEven));
console.log(tableau.filter(isEven));

console.log(tableau.filter((nombre) => nombre >= 8));
