//ex 5 

enum Planet {
    Mercure = 0.2408467,
    Venus = 0.6159726,
    Mars= 1.8808158,
    Jupiter=11.862615,
    Saturne=29.447498,
    Uranus=84.016846,
    Neptune=164.79132,
    Terre=31557600|
}
var second =31557600;
var age =31.69;


enum AgeSecon{
    MercrureS=Planet.Mercure*4,
    VenusS=Planet.Venus*1.4,
    Mars=Planet.Mars*0.4,
    Jupiter=Planet.Jupiter %2
}
console.log(Planet.Terre*second*age)
console.log(AgeSecon.MercrureS)
console.log(AgeSecon.Mars)
console.log(AgeSecon.Jupiter)

if (Planet.Neptune<Planet.Terre) {
    console.log(`vous êtes agé de ${Planet.Terre}`)
}

function Convertisseur() {
    let demande = prompt('veuillez saisir votre age ')
    console.log(demande)
}
