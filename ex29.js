tableau = [10,12,14,8,6,2,3,4,12,5,17,19,11,15,14,15,16,17,0,2]

console.log(tableau)

function moyenne()
{  
     var n = tableau.length;
    var somme=0;
    for(i=0; i<n; i++)
    {
        somme += tableau[i];
    }
    var resultat = somme / n;
    return resultat;
 
}
console.log("la moyen est de "+ moyenne() + "  et la meuilleur note est de ");
console.log(Math.max(...tableau))