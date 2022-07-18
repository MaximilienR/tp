var prompt = require ('prompt-sync')();

let  dia = 22 ;
Pi=Math.PI;

chiffre=prompt ("veuillez saisir un nombre");
diametre=prompt("veuillez saisir un diametre");
air=prompt("veuillir saisir un air")
 
function calculateCircumference(radius) {
    return  diametre*PI;
  }
  
  console.log("la valeur de pie est de "+ Pi*diametre);
  console.log("l'air du cercle est de "+Pi*air*air)