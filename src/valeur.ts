const nombre = 10;

/* déclaration de la variable nommée nombre initialisée avec la valeur 10 de type number
 */

const message = "Hello";

/* déclaration de la variable message  initialisée avec la valeur "Hello" de type string
 */

const coordinate = { x: 10, y: 1 };

/* déclaration de la variable coordinate  initialisée avec la valeur { x: 10, y: 1 } de type object
 */

const tableaux = [];

/* déclaration de la variable tableaux  initialisée avec la valeur [5] de type tableau
 */

const isEvene = (nombre: number) => nombre % 2 === 0;

/* déclaration de la variable nommée isEven qui est initialisée avec la valeur de type fonction anonyme(nombre: number) => boolean
parametre d'entrée 
    nombre de type number
début fonction
    calculer nombre modulo de 2 
    comparer l'égalité entre le résultat précédent et 0 
    renvoyer le résultat de la comparaison
fin fonction 
 */

const test = isEvene(5);

/* déclaration de la variable test initialisée avec le résultat de l'appel de la fonction isEvene (5); false de type boolean
parametre d'entrée 
    nombre => 5
début fonction
    calculer nombre modulo de 2 => 5 modulo de 2 => 1 
    comparer l'égalité entre le résultat précédent et 0 = > comparaison entre 1 et 0 => false
    renvoie du résultat false
fin fonction 
 */
