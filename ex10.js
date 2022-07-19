
var prompt = require ('prompt-sync')();

var mail = "random@gmail.com" ;
var password ="azerty";

const mail2 = prompt("veuillir votre mail  ");
const password2 =prompt("veuillez saisir un mot de passe")

if (mail2 ===mail) {
 console.log("welcom")  
 if(password2===password){
    console.log("mot de passe ok")
 }else{
    console.log("mail incoorecct")
 } 

}else if(
    mail2!=mail){
        console.log("mail incorrect")
    }
 