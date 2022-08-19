//ex8

 type Somme = `" " + " "`;
type Unique = ` `;

 


function ReturnVal(Resultat: (number|Somme))
{
    if(typeof(Resultat) === "number" as Unique)
        console.log('ceci un nombre.')
    else if(typeof(Resultat) === 'undefined')
        console.log('ceci est un tableau')
}
