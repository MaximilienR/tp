var prompt = require ('prompt-sync')();
const choice=prompt("veuillir une chiffre entre 10 et 20 ")


if (choice<=9) {
    console.log(
        'veuillez choisir un chiffre plus grand'
 
    )}else if(choice >=20 ){console.log("veuillez choisir un nombre plus petit")}
    else(console.log("vous avez choisis le numero" + choice))

     