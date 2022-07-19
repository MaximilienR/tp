var prompt = require ('prompt-sync')();
//cat poids
const poid = prompt("veuillir votre poids ");
let poindKG =parseInt(poid);

console.log("votre poid est de" + " " + poid + "kg");
if(poindKG <43 ){
    console.log("désolé votre taille n'est pas référencé")
    die 
}   


//cat tail 

const taille = prompt("veuillez saisir votre taille en cm") 
let taillCM = parseInt(taille);

console.log("votre taille est de" +" "+ taille +" " +"cm");

if(taillCM <145 ){
    console.log("désolé votre taille n'est pas référencé")
    die 
}   

if(taillCM > 146  && taillCM <170 ){
    console.log("vous faites une taille 1")
}

if(poindKG > 65 && w    ){
    console.log("vous faites une taille 1")
}
