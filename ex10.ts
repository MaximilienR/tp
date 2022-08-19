//Un nombre d'Armstrong est un nombre qui est la somme de ses propres chiffres, chacun élevé à la puissance du nombre de chiffres. 

let ini :number=0;
console.log(ini)
let somme :number;
console.log(somme)

const choice = prompt('veuillez saisir un nombre')
let sav:any ;
sav = choice
while (sav>0) {
    let tt:number = sav %10
    somme+= tt+tt+tt
}


if (somme===ini) {
    console.log('ceci est un nombre armstrong')
}else{
    console.log('ceci est pas un nombre armstrog')
}