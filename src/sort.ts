/* 
prendre le 1er élément nommer a 
comparer avec le 2eme élément nommer b
la comparaison se fait de la maniere suivante : a-b 
les résultats possibles sont : 
- positifs => a est supérieur à b 
- négatifs => a est infieur à b 
- nul => a et b sont égaux
j'obtient le résultat que je compare avec l'élément suivant, ansi de suite 

*/

const tableau4 = [5, 9, 69, 2, 13, 8];

const sorte = (tableau: number[]) => {
  let n = tableau.length;
  let temp;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (tableau[j] > tableau[j + 1]) {
        temp = tableau[j + 1];
        tableau[j + 1] = tableau[j];
        tableau[j] = temp;
      }
    }
  }
  return tableau;
};

const tableauTrie = sorte(tableau4);
/*
déclaration de la variable tableauTrie initialisée avec le résultat de l'appel de la fonction sorte(tableau4) => number[]
  initalisée avec [2,5,8,9,13,69]
parametre d'entrée 
    tableau => [5, 9, 69, 2, 13, 8]
début fonction
   let n = tableau.length => n = 6
   let temp => temp = undefined 
debut boucle avec i = 0 au pas de 1 tant que i est strictement inférieur à n -1 => 6-1 = 5
    boucle i = 0 ; i est toujours inférieur à n (6)
      debut boucle avec j = 0 au pas de 1 tant que j est strictement inférieur à n -i -1 = 5
        boucle j = 0 ; j est toujours strictement inférieur à 5
          if (tableau[j] > tableau[j + 1]) 
          if (tableau[0] > tableau[0 + 1]) 
          if (5 > 9) => false (on ne fait rien)
          j++

        boucle j = 1 ; j est toujours strictement inférieur à 5
          if (tableau[j] > tableau[j + 1]) 
          if (tableau[1] > tableau[1 + 1]) 
          if (9 > 69) => false (on ne fait rien)
          j++   

        boucle j = 2 ; j est toujours strictement inférieur à 5
          if (tableau[j] > tableau[j + 1]) 
          if (tableau[2] > tableau[2 + 1]) 
          if (69 > 2) => true 
            temp = tableau[j + 1]; => temp = 2 (valeur de l'élément du tableau [3])
            tableau[j + 1] = tableau[j] 
            tableau[3] = tableau[2] ( je vais prendre la valeur de l'indice 2 pour le mettre à l'emplacement ) la variable de l'indice 3 cad 2 est remplacé par 69 )
            tableau[3] = 69
    tableau => [5,9,69,69,13,8]
            tableau[j] = temp;
            tableau[2] = 2;
    tableau => [5,9,2,69,13,8]
          j++

        boucle j = 3 ; j est toujours strictement inférieur à 5
          if (tableau[j] > tableau[j + 1]) 
          if (tableau[3] > tableau[3 + 1])
          if (69 > 13) => true 
            temp = tableau[j + 1]; => temp = 13 (valeur de l'élément du tableau [4])
            tableau[j + 1] = tableau[j] 
            tableau[4] = tableau[3] 
            tableau[4] = 69
    tableau => [5,9,2,69,69,8]
            tableau[j] = temp;
            tableau[3] = 13;
    tableau => [5,9,2,13,69,8]
          j++

         boucle j = 4 ; j est toujours strictement inférieur à 5
          if (tableau[j] > tableau[j + 1]) 
          if (tableau[4] > tableau[4 + 1])
          if (69 > 8) => true 
            temp = tableau[j + 1]; => temp = 8 (valeur de l'élément du tableau [5])
            tableau[j + 1] = tableau[j] 
            tableau[5] = tableau[4] 
            tableau[5] = 69
    tableau => [5,9,2,13,69,69]
            tableau[j] = temp;
            tableau[4] = 8;
    tableau => [5,9,2,13,8,69]
            j++

          boucle j = 5 ; j n'est plus strictement inférieur à 5
        fin de la boucle j
        i++

    boucle i = 1 ; i est toujours inférieur à n (6)
      debut boucle avec j = 0 au pas de 1 tant que j est strictement inférieur à n -i -1 = 4
        boucle j = 0 ; j est toujours strictement inférieur à 4
          if (tableau[j] > tableau[j + 1]) 
          if (tableau[0] > tableau[0 + 1]) 
          if (5 > 9) => false (on ne fait rien)
          j++
        boucle j = 1 ; j est toujours strictement inférieur à 4
          if (tableau[j] > tableau[j + 1]) 
          if (tableau[1] > tableau[1 + 1]) 
          if (9 > 2) => true
           temp = tableau[j + 1]; => temp = 2 (valeur de l'élément du tableau [2])
            tableau[j + 1] = tableau[j] 
            tableau[2] = tableau[1] 
            tableau[2] = 9
    tableau => [5,9,9,13,8,69]
            tableau[j] = temp;
            tableau[1] = 2;
    tableau => [5,2,9,13,8,69]
          j++
        boucle j = 2 ; j est toujours strictement inférieur à 4 
          if (tableau[j] > tableau[j + 1])
          if (tableau[2] > tableau[3])
          if (9 > 13) => (false on ne fait rien)
          j++
        boucle j = 3 ; est toujours strictement inférieur à 4
          if(tableau[j] > tableau[j+1])
          if(tableau[3] > tableau[4]) 
          if (13 > 8 ) => true
            temp = tableau[j+1]; => temp = 8 (valeur de l'élément du tableau [4])]
            tableau[j+1] = tableau[j]
            tableau[4] = tableau[3]
            tableau[4] = 13
      tableau => tableau [5,2,9,13,13,69]
            tableau[j] = temp;
            tableau[3] = 8;
      tableau => [5,2,9,8,13,69]
          j++
        boucle j = 4; n'est plus strictement inférieur à 4
        fin de la boucle j
        i++
    boucle i = 2 ; i est toujours inférieur à n (6)
      debut boucle avec j = 0 au pas de 1 tant que j est strictement inférieur à n - 2 -1 = 3 
        boucle j = 0; j est toujours strictement inférieur à 3
          if (tableau[j] > tableau [j+1])
          if (tableau[0] > tableau [1])
          if ( 5 > 2 ) => true
            temp = tableau [j+1]; => temp = 2 (valeur de l'élément du tableau [1])
              tableau[j+1] = tableau [j]
              tableau[1] = tableau [0]
              tableau [1] = 5
      tableau => [5,5,9,8,13,69]
              tableau [j] = temp
              tableau [0] = 2
      tableau => [2,5,9,8,13,69]
              j++

        boucle j = 1; j est toujours strictement inférieur à 3
          if (tableau[j] > tableau [j+1])
          if (tableau[1] > tableau [2])
          if (5 > 9) => false (on ne fait rien)
          j++
      
        boucle j = 2; j est toujours strictement inférieur à 3
          if (tableau[j] > tableau [j+1])
          if (tableau[2] > tableau [3])
          if ( 9 > 8 ) => true
            temp tableau [j+1]; => temp = 8 (valeur de l'élément du tableau [3])
              tableau[j+1] = tableau [j]
              tableau [3] = taleau [2]
              tableau [3] = 9
        tableau => [2,5,9,9,13,69]
              tableau[j] = temp;
              tableau[2] = 8
        tableau => [2,5,8,9,13,69]
              j++
        boucle j = 3; j n'est plus strictement inférieur à 3
      fin de la boucle j
      i++
    boucle i = 3 ; i est toujours inférieur à n (6)
      debut boucle avec j = 0 au pas de 1 tant que j est strictement inférieur à n -3 -1 = 2
        boucle avec j = 0; j est strictement inférieur à 2
          if (tableau[j] > tableau [j+1])
          if (tableau[0] > tableau [1])
          if (2 > 5) false (on ne fait rien)
          j++
        boucle avec j = 1; j est strictement inférieur à 2
          if (tableau[j] > tableau [j+1])
          if (tableau[1] > tableau [2])
          if (5 > 8) false (on ne fait rien)
          j++
        boucle avec j = 2; j n'est plus strictement inférieur à 2
        fin de la boucle j
        i++
    boucle i = 4 ; i est toujours inférieur à n (6)
      debut boucle avec j = 0 au pas de 1 tant que j est strictement inférieur à n -4 -1 = 1
        boucle avec j = 0; j est strictement inférieur à 1
          if (tableau[j] > tableau [j+1])
          if (tableau[0] > tableau [1])
          if (2 > 5) false (on ne fait rien)
          j++
        boucle avec j = 1; j n'est plus strictement inférieur à 1
        fin de la boucle j
        i++
    boucle i = 5 ; i est toujours inférieur à n (6)
      debut boucle avec j = 0 au pas de 1 tant que j est strictement inférieur à n -5 -1 = 0
        boucle avec j = 0; j n'est plus strictement inférieur à 0
        fin de la boucle j
        i++
    boucle i = 6; i n'est plus infrieur à n (6)
        fin de la boucle i
        renvoie de la valeur du tableau [2,5,8,9,13,69]
fin de la boucle
fin fonction 
*/
// Afficher le tableau trié
console.log("Tableau trié:", tableauTrie);

/*
[5, 9, 69, 2, 13, 8];
comparaison élément 0 > 1 ? : non => pas de permutation 
comparaison élément 1 > 2 ? : non => pas de permutation 
comparaison élément 2 > 3 ? : oui => permutation
[5,9,2,69,13,8];
comparaison élément 3 > 4 ? : oui => pas de permutation 
[5,9,2,13,69,8];
comparaison élément 4 > 5 ? : oui => pas de permutation 
[5,9,2,13,8,69];

comparaison élément 0 > 1 ? : non => pas de permutation 
comparaison élément 1 > 2 ? : oui =>permutation 
[5,2,9,13,8,69];
comparaison élément 2 > 3 ? : non => pas de permutation 
comparaison élément 3 > 4 ? : oui => pas de permutation 
[5,2,9,8,13,69];
comparaison élément 4 > 5 ? : non => pas de permutation 

comparaison élément 0 > 1 ? : oui => pas de permutation 
[2,5,9,8,13,69];
comparaison élément 1 > 2 ? : non => pas de permutation 
comparaison élément 2 > 3 ? : oui => pas de permutation 
[2,5,8,9,13,69];
comparaison élément 3 > 4 ? : non => pas de permutation 
comparaison élément 4 > 5 ? : non => pas de permutation 


*/
