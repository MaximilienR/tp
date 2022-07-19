var prompt = require ('prompt-sync')();

const fiscal = prompt("veuillir indiquer le montant net de vos impot   ");
const children = prompt("veuillir le nombre d'enfant   ");
const adult = prompt("veuillir le nombre d'adulte   ");

const aldult2 = adult*1

 

if (children <=2) {
    result="0.5"
}console.log("le montant de l'impot sur le revenu  pour un foyer composer de "+adult +" "+"adultes et de "+children+" " +"enfant, avec un revenu fiscal de "+fiscal + "s'élève à")
 