import Cars from "./Cars.js";
 
 let Voiture1 = new Cars("BMW", "Serie1",80,);
let Voiture2 = new Cars("Mercedes", " GLB",100,);

/*console.log('la voiture 1 roule a '+ Voiture1.vitesse );
console.log('la voiture 2 roule a ' + Voiture2.vitesse)*/

 
for (var nb = 0; nb < 4; nb++) {
 Voiture1.accelerer();
}

for (let ac = 0; ac < 2; ac++) {
    Voiture2.accelerer();
    for (let tourne = 0; tourne <3; tourne++) {
        Voiture2.tourne();        
    }
}
console.log("la voiture 1 a accélérer 3 fois et obtient une vitesse de "+ Voiture1.vitesse + "km")
console.log("la voiture 2 a accélérer 2 fois, tourné 2 fois  et obtient une vitesse de "+ Voiture2.vitesse + "km")


 

 