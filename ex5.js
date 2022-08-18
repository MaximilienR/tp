//ex 5 
var Planet;
(function (Planet) {
    Planet[Planet["Mercure"] = 0.2408467] = "Mercure";
    Planet[Planet["Venus"] = 0.6159726] = "Venus";
    Planet[Planet["Mars"] = 1.8808158] = "Mars";
    Planet[Planet["Jupiter"] = 11.862615] = "Jupiter";
    Planet[Planet["Saturne"] = 29.447498] = "Saturne";
    Planet[Planet["Uranus"] = 84.016846] = "Uranus";
    Planet[Planet["Neptune"] = 164.79132] = "Neptune";
    Planet[Planet["Terre"] = 31557600] = "Terre";
})(Planet || (Planet = {}));
var second = 31557600;
var age = 31.69;
var AgeSecon;
(function (AgeSecon) {
    AgeSecon[AgeSecon["MercrureS"] = 0.9633868] = "MercrureS";
    AgeSecon[AgeSecon["VenusS"] = 0.8623616399999999] = "VenusS";
    AgeSecon[AgeSecon["Mars"] = 0.75232632] = "Mars";
    AgeSecon[AgeSecon["Jupiter"] = 1.862615] = "Jupiter";
})(AgeSecon || (AgeSecon = {}));
console.log(Planet.Terre * second * age);
console.log(AgeSecon.MercrureS);
console.log(AgeSecon.Mars);
console.log(AgeSecon.Jupiter);
if (Planet.Neptune < Planet.Terre) {
    console.log("vous \u00EAtes ag\u00E9 de ".concat(Planet.Terre));
}
function Convertisseur() {
    var demande = prompt('veuillez saisir votre age ');
    console.log(demande);
}
