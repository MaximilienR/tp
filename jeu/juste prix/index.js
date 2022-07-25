/*realiser un programme qui génère un prix aléatoire entre 1 et 1000 et qui demande à l'utilisateur de devinez le prix. indiquer si le plrix est en dessous ou au dessus du prix généré */
var prompt = require ('prompt-sync')();
 
  
//console.log("le nombre que vous avez choisis est "+choice)

//je genere un nombre entre 1 et 1000, j'utilise également le floor afin d'avoir un nombre entier 
var min=1; 
var max=1000;  
const random =Math.floor(Math.random() * (max - min)) ; 
const radom =parseInt(random)
console.log(random);
var prompt ;
parseInt(prompt)
//je demande à l'utilisateur de rentrer un nombre 
var choice=Number (prompt("veuillir une chiffre entre 1 et 1000 "));
 console.log(choice)

 /*test pour comparer nombre

 if(choice!=random) {
    (console.log('ceci est différent '))
 }else(console.log('les chiffres sont idendique'))
 */

 //si nombre juste afficher bravo
if(choice===random){
    console.log("bravo")
}

//tant que le nombre est plus grand que la reponse je demande de viser plus petit
 while (choice!=random) {
    if(choice<random){
        console.log('veuillez choisir un nombre plus grand')
        choice=Number (prompt("veuillir une chiffre entre 1 et 1000 "));

         break
    }else if (choice>random){
        prompt('veuillez choisir un nombre plus petit')
 
         

    }
 }