var prompt = require ('prompt-sync')();
const choice=prompt("veuillir une chiffre ")


if (choice<=9) {
    console.log(
        'veuillez choisir un chiffre plus grand'
    )}else if(choice>20){
        console.log(
            'veuillez choisir un chiifre plus petit'
        )
    }else{
        console.log("vous avez choisis le numéro " + choice)
    }
   
    