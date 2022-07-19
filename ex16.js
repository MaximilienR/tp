/*mes notes 

1) demander l'age ok 
2) demander l'ancienter ok 
3) demander salaire ok
*/

//mes varaible 
var prompt = require ('prompt-sync')();

const age = prompt("veuillir votre age   ");
const ancienter = prompt("veuillir votre ancienter   ");
const salaire = prompt("veuillir votre salaire  ");

if(age <18){
    console.log("cela n'est pas possible")
}
if(ancienter > 10 ){
    console.log("votre indémnité est de "+ " " + salaire*ancienter +"€")
}
while(age>46 )and (age<49 )

if(age>50){
    console.log("votre indémite est "+" " + salaire*ancienter + 5 * salaire)
}