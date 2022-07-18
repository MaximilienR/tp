var prompt = require ('prompt-sync')();
const AB = prompt("veuillir une longeur ");
const BC=prompt("veuillir une longeur ")
const CA=prompt("veuillir une longeur ")

let longueur1 =parseInt(AB)
let longueur2 =parseInt(BC)
let longueur3 =parseInt(CA)

if (longueur1 ===longueur2 && longueur2 === longueur3) {
    console.log("ceci est un triangle équilitarel")
    
}else if (longueur1 ===longueur2 &&longueur2 != longueur3){
    console.log("ceci est un triangle isoscle")
}else if(longueur1 != longueur2 && longueur2 != longueur3){
    console.log("ceci est un triangle quelconque")
}