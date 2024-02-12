const essence = [5, 69, 23, 15, 18];

for (let i = 0; i < essence.length; i++) {
  console.log(`Index:${i} Valeur:${essence[i]}  `);
}

/*
déclaration d'une variable nommé essence initialisé avec un tableau de nombre contenant les valeurs 5,69 ...
debut boucle avec i = 0 au pas de 1 tant que i est inférieur au nombre d'élément du tableau
    boucle i = 0 ; i est toujours inférieur au nombre d'éléments (5)
        affichage Index:0 Valeur:${essence[0]} 
        affichage Index:0 Valeur:5
        i++ 
    boucle i = 1 ; i est toujours inférieur au nombre d'éléments (5)
        affichage Index:1 Valeur:${essence[1]} 
        affichage Index:1 Valeur:69
        i++ 
    boucle i = 2 ; i est toujours inférieur au nombre d'éléments (5)
        affichage Index:2 Valeur:${essence[2]} 
        affichage Index:2 Valeur:23
        i++ 
    boucle i = 3 ; i est toujours inférieur au nombre d'éléments (5)
        affichage Index:3 Valeur:${essence[3]} 
        affichage Index:3 Valeur:15
        i++ 
    boucle i = 4 ; i est toujours inférieur au nombre d'éléments (5)
        affichage Index:4 Valeur:${essence[4]} 
        affichage Index:4 Valeur:18
        i++ ;
    boucle i = 5 ; on arrête la boucle car i n'est plus inférieur au nombre d'élément
fin de la boucle
*/

for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 2; j++) {
    console.log(`${i} : ${j}`);
  }
}

/* 
debut boucle avec i = 0 au pas de 1 tant que i est inférieur ou égal à 3
    boucle i = 0 ; i est toujours inférieur est inférieur ou égal à 3
        debut boucle avec j = 0 au pas de 1 tant que j est inférieur ou égal à 2
            boucle j = 0 ; j est toujours inférieur est inférieur ou égal à 2
                console.log(`${i} : ${j}`);
                console.log( 0 : 0 );
                j++ 
            boucle j = 1 ; j est toujours inférieur est inférieur ou égal à 2
                console.log(`${i} : ${j}`);
                console.log( 0 : 1 );
                j++ 
            boucle j = 2 ; j est toujours inférieur est inférieur ou égal à 2
                console.log(`${i} : ${j}`);
                console.log( 0 : 2 );
                j++ 
            boucle j = 3 ; j n'est plus inférieur ou égal à 2
        fin de la boucle
        i++
    boucle i = 1 ; i est toujours inférieur est inférieur ou égal à 3
        debut boucle avec j = 0 au pas de 1 tant que j est inférieur ou égal à 2
            boucle j = 0 ; j est toujours inférieur est inférieur ou égal à 2
                console.log(`${i} : ${j}`);
                console.log( 1 : 0 );
                j++ 
            boucle j = 1 ; j est toujours inférieur est inférieur ou égal à 2
                console.log(`${i} : ${j}`);
                console.log( 1 : 1 );
                j++ 
            boucle j = 2 ; j est toujours inférieur est inférieur ou égal à 2
                console.log(`${i} : ${j}`);
                console.log( 1 : 2 );
                j++ 
            boucle j = 3 ; j n'est plus inférieur ou égal à 2
        fin de la boucle
        i++
    boucle i = 2 ; i est toujours inférieur est inférieur ou égal à 3
        debut boucle avec j = 0 au pas de 1 tant que j est inferieur ou égal à 2 
        boucle j = 0 ; j est toujours inférieur est inférieur ou égal à 2
                console.log(`${i} : ${j}`);
                console.log( 2 : 0 );
                j++ 
            boucle j = 1 ; j est toujours inférieur est inférieur ou égal à 2
                console.log(`${i} : ${j}`);
                console.log( 2 : 1 );
                j++ 
            boucle j = 2 ; j est toujours inférieur est inférieur ou égal à 2
                console.log(`${i} : ${j}`);
                console.log( 2 : 2 );
                j++ 
            boucle j = 3 ; j n'est plus inférieur ou égal à 2
        fin de la boucle
        i++
    boucle i = 3 ; i est toujours inférieur est inférieur ou égal à 3
        debut boucle avec j = 0 au pas de 1 tant que j est inferieur ou égal à 2 
        boucle j = 0 ; j est toujours inférieur est inférieur ou égal à 2
                console.log(`${i} : ${j}`);
                console.log( 3 : 0 );
                j++ 
            boucle j = 1 ; j est toujours inférieur est inférieur ou égal à 2
                console.log(`${i} : ${j}`);
                console.log( 3 : 1 );
                j++ 
            boucle j = 2 ; j est toujours inférieur est inférieur ou égal à 2
                console.log(`${i} : ${j}`);
                console.log( 3 : 2 );
                j++ 
            boucle j = 3 ; j n'est plus inférieur ou égal à 2
        fin de la boucle
        i++
fin de la boucle

*/

for (let i = 0; i <= 3; i++) {
  for (let j = i + 1; j <= 3; j++) {
    console.log(`${i} : ${j}`);
  }
}
/* 
debut boucle avec i = 0 au pas de 1 tant que i est inférieur ou égal à 3
    boucle i = 0 ; i est toujours inférieur est inférieur ou égal à 3
        debut boucle avec j = i + 1 au pas de 1 tant que j est inférieur ou égal à 3
            boucle j = 0 + 1 ; j est toujours inférieur est inférieur ou égal à 3
                console.log(`${i} : ${j}`);
                console.log( 0 : 1 );
                j++ 
            boucle j = 1 + 1; j est toujours inférieur est inférieur ou égal à 3
                console.log(`${i} : ${j}`);
                console.log( 0 : 2 );
                j++ 
            boucle j = 2 + 1 ; j est toujours inférieur est inférieur ou égal à 3
                console.log(`${i} : ${j}`);
                console.log( 0 : 3 );
                j++ 
            boucle j = 3 + 1; j n'est plus inférieur ou égal à 3
        fin de la boucle
        i++
    boucle i = 1 ; i est toujours inférieur est inférieur ou égal à 3
        debut boucle avec j = i + 1 => j = 2 au pas de 1 tant que j est inférieur ou égal à 3
            boucle j = 2 ; j est toujours inférieur est inférieur ou égal à 3
                console.log(`${i} : ${j}`);
                console.log( 1 : 2 );
                j++ 
            boucle j = 1 + 1; j est toujours inférieur est inférieur ou égal à 3
                console.log(`${i} : ${j}`);
                console.log( 1 : 3 );
                j++ 
            boucle j = 2 + 1; j n'est plus inférieur ou égal à 3
        fin de la boucle
        i++
    boucle i = 2 ; i est toujours inférieur est inférieur ou égal à 3
        debut boucle avec j = 0 + 1 au pas de 1 tant que j est inférieur ou égal à 3
            boucle j = 0 + 1; j est toujours inférieur est inférieur ou égal à 3
                console.log(`${i} : ${j}`);
                console.log( 2 : 1 );
                j++ 
            boucle j = 1 + 1; j est toujours inférieur est inférieur ou égal à 3
                console.log(`${i} : ${j}`);
                console.log( 2 : 2 );
                j++ 
            boucle j = 2 + 1; j est toujours inférieur est inférieur ou égal à 3
                console.log(`${i} : ${j}`);
                console.log( 2 : 3 );
                j++ 
            boucle j = 3 + 1; j n'est plus inférieur ou égal à 3
        fin de la boucle
        i++
    boucle i = 3 ; i est toujours inférieur est inférieur ou égal à 3
        debut boucle avec j = 0 + 1 au pas de 1 tant que j est inférieur ou égal à 3
            boucle j = 0 + 1; j est toujours inférieur est inférieur ou égal à 3
                console.log(`${i} : ${j}`);
                console.log( 3 : 1 );
                j++ 
            boucle j = 1 + 1; j est toujours inférieur est inférieur ou égal à 3
                console.log(`${i} : ${j}`);
                console.log( 3 : 2 );
                j++ 
            boucle j = 2 + 1; j est toujours inférieur est inférieur ou égal à 3
                console.log(`${i} : ${j}`);
                console.log( 3 : 3 );
                j++ 
            boucle j = 3 + 1; j n'est plus inférieur ou égal à 3
        fin de la boucle
        i++
*/

for (let i = 0; i <= 5; i++) {
  for (let j = i + 1; j <= 3; j++, i++) {
    console.log(`${i} : ${j}`);
  }
}

/* debut boucle avec i = 0 au pas de 1 tant que i est inférieur ou égal à 5
    boucle i = 0 ; i est toujours inférieur est inférieur ou égal à 3
        debut boucle avec j = i + 1 => j = 1 au pas de 1 tant que j est inférieur ou égal à 3
            boucle j = 1 ; j est toujours inférieur est inférieur ou égal à 3
                console.log(`${i} : ${j}`);
                console.log( 0 : 1 );
                j++, i++
    boucle i = 1
            boucle j = 2 ; j est toujours inférieur est inférieur ou égal à 3
                console.log(`${i} : ${j}`);
                console.log( 1 : 2 );
                j++, i++
    boucle i = 2
            boucle j = 3 ; j est toujours inférieur est inférieur ou égal à 3
                console.log(`${i} : ${j}`);
                console.log( 2 : 3 );
                j++, i++
    boucle i = 3
            boucle j = 4; j n'est plus inférieur ou égal à 3
        fin de la boucle
        i++ 
    boucle i = 4 ; i est toujours inférieur est inférieur ou égal à 5
        debut boucle avec j = i + 1 => j = 5 au pas de 1 tant que j est inférieur ou égal à 3
            pas de boucle    
        fin de la boucle
        i++ 
    boucle i = 5; i est toujours inférieur est inférieur ou égal à 5
        debut boucle avec j = i + 1 => j = 6 au pas de 1 tant que j est inférieur ou égal à 3
            pas de boucle    
        fin de la boucle
        i++ 
    boucle i = 6, i est supérieur à 5 donc fin de la boucle i
fin de la boucle
*/
