var prompt = require ('prompt-sync')();

var mail = "random@gmail.com" ;
var password ="azerty";

const mail2 = prompt("veuillir votre mail  ");
const password2 =prompt("veuillez saisir un mot de passe")

if (mail != mail2 ) {
 console.log("mauvaise adresse")   
}else{
    console.log("bienvenu")
}