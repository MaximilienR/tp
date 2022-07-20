var prompt = require ('prompt-sync')();

var cible = Math.floor(Math.random(1-100) ) ;
var nombre, compteur;
for (compteur=1; compteur<=3; compteur+=1) {
    var chiffre =prompt("veuillez saisir un nombre");
    if (nombre === cible) {console.log("c'est gagné");
        break;
    }
    if (nombre > cible) {
        alert("trop grand");
    }
    if (nombre < cible) {
        alert("trop petit");
    }
} 
console.log(" le reponse était " + cible);

 