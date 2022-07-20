var prompt = require ('prompt-sync')();


var cible = Math.floor(Math.random() * 1000) + 1;
var nombre, compteur;
for (compteur=1; compteur<=10; compteur+=1) {
    chiffre =prompt ("veuillez saisir un nombre");
    if (nombre === cible) {alert("Bravo");
        break;
    }
    if (nombre > cible) {
        alert("trop grand");
    }
    if (nombre < cible) {
        alert("trop petit");
    }
} 
alert("c'est fini. le chiffre cherche est : " + cible);