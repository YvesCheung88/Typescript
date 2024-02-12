const tableau5 = ["h", "e", "l", "l", "o"];
console.log(tableau5);

const join = (tableau: string[]) => {
  let acc = "";
  for (let i = 0; i < tableau5.length; i++) {
    acc += tableau[i];
  }
  return acc;
};

console.log(join(tableau5));
tableau5[0] = "H";

console.log(join(tableau5));

const tabbleau = [".", ".", ".", ".", "."];
tabbleau[2] = "#";
console.log(join(tabbleau));
tabbleau[1] = "#";
tabbleau[3] = "#";
console.log(join(tabbleau));

tabbleau[0] = tabbleau[4] = "#";
console.log(tabbleau.join(""));
