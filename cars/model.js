import Cars from "./Cars.js";
//je creer deux model de voiture à partir du construteur Cars  
let Voiture1 = new Cars("BMW", "Serie1",80,);
let Voiture2 = new Cars("Mercedes", " GLB",100,);

/*console.log('la voiture 1 roule a '+ Voiture1.vitesse );
console.log('la voiture 2 roule a ' + Voiture2.vitesse)*/

 //je sais déjà le nombre de fois que la voiture va acceler j'utilise donc le for 
for (var nb = 0; nb < 4; nb++) {
 Voiture1.accelerer();
}
//même principe que au deçu mais sur la voiture n2 ATTENTION celle ci utilise également la fonction de tourner 
for (let ac = 0; ac < 2; ac++) {
    Voiture2.accelerer();
    for (let tourne = 0; tourne <3; tourne++) {
        Voiture2.tourne();        
    }
}
//j'affiche mes resultat à l'aide de console.log
console.log("la voiture 1 a accélérer 3 fois et obtient une vitesse de "+ Voiture1.vitesse + "km")
console.log("la voiture 2 a accélérer 2 fois, tourné 2 fois  et obtient une vitesse de "+ Voiture2.vitesse + "km")


 

 