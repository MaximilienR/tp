//Un nombre d'Armstrong est un nombre qui est la somme de ses propres chiffres, chacun élevé à la puissance du nombre de chiffres. 
var ini = 0;
console.log(ini);
var somme;
console.log(somme);
var choice = prompt('veuillez saisir un nombre');
var sav;
sav = choice;
while (sav > 0) {
    var tt = sav % 10;
    somme += tt + tt + tt;
}
if (somme === ini) {
    console.log('ceci est un nombre armstrong');
}
else {
    console.log('ceci est pas un nombre armstrog');
}
