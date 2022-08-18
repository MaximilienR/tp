function buildAddress(adresse) {
    return adresse;
}
var res = buildAddress('1234 Anywhere St');
console.log(res);
//let res2=buildAddress2('24 rue des passants')
function buildAddress2(adresse) {
    var test = prompt('veuillez saisir une adresse seconde adresse');
    console.log(test);
    return adresse;
}
//rest 
var divEx6 = document.getElementById("ex6");
var Address = function (arg) {
    var h1 = document.createElement("h1");
    h1.innerHTML = "Adresse :".concat(arg);
};
//divEx6?.();
Address("addresse1");
Address("addresse2");
